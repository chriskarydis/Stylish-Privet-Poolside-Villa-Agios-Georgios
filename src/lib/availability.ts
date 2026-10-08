/**
 * Availability & booking helpers shared by the Cloudflare function
 * (functions/api/availability.ts) and the calendar in the browser.
 * Dates are plain ISO calendar dates ('YYYY-MM-DD'); a booked range
 * [start, end) blocks the nights from `start` up to, but not including, `end`
 * — exactly like iCal all-day events, where DTEND is the check-out day.
 */

export type IsoDate = string;
export type Range = [start: IsoDate, end: IsoDate];

/**
 * How far the booked dates can be trusted:
 *  - 'ok'           every configured calendar was read: dates not listed are available
 *  - 'partial'      at least one calendar failed: `blocked` holds what IS known, but
 *                   other dates must NOT be presented as available
 *  - 'unavailable'  no calendar could be read: nothing is known
 *  - 'unconfigured' no calendar links are set up on the server
 * Anything other than 'ok' must never be shown as "available".
 */
export type AvailabilityStatus = 'ok' | 'partial' | 'unavailable' | 'unconfigured';

export interface AvailabilityResponse {
  status: AvailabilityStatus;
  updated: string | null;
  blocked: Range[];
}

export interface Guests {
  adults: number;
  /** One entry per child, age in years (0–17). */
  childAges: number[];
}

// ---------- Dates ----------

export const toIso = (d: Date): IsoDate =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export const fromIso = (s: IsoDate): Date => {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
};

export const addDays = (s: IsoDate, n: number): IsoDate => {
  const d = fromIso(s);
  d.setDate(d.getDate() + n);
  return toIso(d);
};

export const nightsBetween = (a: IsoDate, b: IsoDate): number =>
  Math.round((fromIso(b).getTime() - fromIso(a).getTime()) / 86_400_000);

// ---------- iCal ----------

/**
 * Extract booked ranges from an iCal (.ics) feed. Only dates are used; no guest data is read.
 * Throws if the text is not an iCal calendar (e.g. an HTML error or login page):
 * such a response must count as a failure, never as "no bookings".
 */
export function parseIcs(ics: string): Range[] {
  if (!/^﻿?\s*BEGIN:VCALENDAR/i.test(ics) || !/END:VCALENDAR/i.test(ics)) {
    throw new Error('Not an iCal calendar');
  }
  const text = ics.replace(/\r?\n[ \t]/g, ''); // unfold continuation lines
  const ranges: Range[] = [];
  for (const chunk of text.split('BEGIN:VEVENT').slice(1)) {
    const body = chunk.split('END:VEVENT')[0];
    const start = /^DTSTART[^:\r\n]*:(\d{4})(\d{2})(\d{2})/m.exec(body);
    const end = /^DTEND[^:\r\n]*:(\d{4})(\d{2})(\d{2})/m.exec(body);
    if (!start) continue;
    const s = `${start[1]}-${start[2]}-${start[3]}`;
    const e = end ? `${end[1]}-${end[2]}-${end[3]}` : addDays(s, 1);
    if (e > s) ranges.push([s, e]);
  }
  return ranges;
}

/** Sort and merge overlapping or touching ranges. */
export function mergeRanges(ranges: Range[]): Range[] {
  const sorted = [...ranges].sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
  const out: Range[] = [];
  for (const r of sorted) {
    const last = out[out.length - 1];
    if (last && r[0] <= last[1]) {
      if (r[1] > last[1]) last[1] = r[1];
    } else {
      out.push([r[0], r[1]]);
    }
  }
  return out;
}

/** Set of blocked nights (a night is identified by its date). */
export function blockedNights(ranges: Range[]): Set<IsoDate> {
  const set = new Set<IsoDate>();
  for (const [s, e] of ranges) for (let d = s; d < e; d = addDays(d, 1)) set.add(d);
  return set;
}

// ---------- Booking platform links ----------

/** Airbnb listing link with dates and guests prefilled (children 2–12+, infants under 2). */
export function airbnbLink(base: string, checkIn: IsoDate | null, checkOut: IsoDate | null, g: Guests): string {
  const u = new URL(base);
  if (checkIn && checkOut) {
    u.searchParams.set('check_in', checkIn);
    u.searchParams.set('check_out', checkOut);
  }
  const infants = g.childAges.filter((a) => a < 2).length;
  const children = g.childAges.length - infants;
  u.searchParams.set('adults', String(g.adults));
  if (children) u.searchParams.set('children', String(children));
  if (infants) u.searchParams.set('infants', String(infants));
  return u.href;
}

/** Booking.com property link with dates, guests and children's ages prefilled. */
export function bookingComLink(base: string, checkIn: IsoDate | null, checkOut: IsoDate | null, g: Guests): string {
  const u = new URL(base);
  if (checkIn && checkOut) {
    u.searchParams.set('checkin', checkIn);
    u.searchParams.set('checkout', checkOut);
  }
  u.searchParams.set('group_adults', String(g.adults));
  u.searchParams.set('req_adults', String(g.adults));
  u.searchParams.set('group_children', String(g.childAges.length));
  u.searchParams.set('req_children', String(g.childAges.length));
  for (const age of g.childAges) u.searchParams.append('age', String(age));
  u.searchParams.set('no_rooms', '1');
  return u.href;
}

// ---------- Rates ----------

export interface PriceSeason {
  /** First and last night of the season (inclusive): 'MM-DD' (every year) or 'YYYY-MM-DD'. */
  from: string;
  to: string;
  perNight: number;
  minNights?: number;
}

const seasonFor = (night: IsoDate, seasons: PriceSeason[]) =>
  seasons.find((s) => {
    const key = s.from.length === 5 ? night.slice(5) : night; // 'MM-DD' periods repeat every year
    return key >= s.from && key <= s.to;
  });

/**
 * Indicative price of a stay: each night at its season's rate, plus the
 * cleaning fee. Returns null when any night has no rate (price on request).
 */
export function estimatePrice(
  checkIn: IsoDate,
  checkOut: IsoDate,
  seasons: PriceSeason[],
  cleaningFee: number | null,
): { accommodation: number; cleaning: number; total: number } | null {
  if (!seasons.length) return null;
  let accommodation = 0;
  for (let d = checkIn; d < checkOut; d = addDays(d, 1)) {
    const s = seasonFor(d, seasons);
    if (!s) return null;
    accommodation += s.perNight;
  }
  const cleaning = cleaningFee ?? 0;
  return { accommodation, cleaning, total: accommodation + cleaning };
}

/** Minimum stay for a given check-in: the season's own minimum, else the general one, else 1. */
export function minNightsFor(checkIn: IsoDate, seasons: PriceSeason[], general: number | null): number {
  return Math.max(1, seasonFor(checkIn, seasons)?.minNights ?? general ?? 1);
}
