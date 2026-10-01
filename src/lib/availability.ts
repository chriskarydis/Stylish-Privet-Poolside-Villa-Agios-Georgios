/**
 * Availability & booking helpers shared by the Cloudflare function
 * (functions/api/availability.ts) and the calendar in the browser.
 * Dates are plain ISO calendar dates ('YYYY-MM-DD'); a booked range
 * [start, end) blocks the nights from `start` up to, but not including, `end`
 * — exactly like iCal all-day events, where DTEND is the check-out day.
 */

export type IsoDate = string;
export type Range = [start: IsoDate, end: IsoDate];

export interface AvailabilityResponse {
  /** false when no iCal links are configured on the server. */
  configured: boolean;
  /** true when at least one calendar could not be fetched. */
  partial?: boolean;
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

/** Extract booked ranges from an iCal (.ics) feed. Only dates are used; no guest data is read. */
export function parseIcs(ics: string): Range[] {
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
