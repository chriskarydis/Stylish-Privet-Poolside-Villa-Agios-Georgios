/**
 * GET /api/availability — Cloudflare Pages Function.
 *
 * Reads the Airbnb and Booking.com iCal feeds and returns only the booked
 * date ranges (no guest names or other booking details). The feed URLs are
 * secret environment variables set in the Cloudflare dashboard:
 *   ICAL_AIRBNB, ICAL_BOOKING  (and optionally ICAL_EXTRA, comma-separated)
 *
 * Safety rule: a failure is never reported as "available". The response
 * carries a `status` (see AvailabilityStatus) and the calendar only calls
 * dates available when every configured feed was read successfully:
 *   - bad URL, network error, timeout, HTTP error or a response that is not
 *     an iCal calendar  → that feed counts as failed
 *   - some feeds failed → 'partial' (known bookings are still returned)
 *   - all feeds failed  → 'unavailable'
 * Only complete results are cached (30 minutes); failures are retried on the
 * next request after one minute.
 */
import { mergeRanges, parseIcs, toIso, type AvailabilityResponse, type Range } from '../../src/lib/availability';

interface Env {
  ICAL_AIRBNB?: string;
  ICAL_BOOKING?: string;
  ICAL_EXTRA?: string;
}

interface Context {
  request: Request;
  env: Env;
  waitUntil(promise: Promise<unknown>): void;
}

const CACHE_SECONDS = 1800;
const RETRY_SECONDS = 60;
const FETCH_TIMEOUT_MS = 8000;

const json = (body: AvailabilityResponse, maxAge: number) =>
  new Response(JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': `public, max-age=${Math.min(maxAge, 300)}, s-maxage=${maxAge}`,
    },
  });

async function readFeed(url: string): Promise<Range[]> {
  const target = new URL(url); // throws on an invalid environment variable
  if (target.protocol !== 'https:' && target.protocol !== 'http:') throw new Error('Unsupported URL');
  const res = await fetch(target.href, {
    headers: { 'User-Agent': 'villa-availability/1.0' },
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return parseIcs(await res.text()); // throws if the body is not a calendar
}

export const onRequestGet = async ({ request, env, waitUntil }: Context): Promise<Response> => {
  const feeds = [env.ICAL_AIRBNB, env.ICAL_BOOKING, ...(env.ICAL_EXTRA?.split(',') ?? [])]
    .map((u) => u?.trim())
    .filter((u): u is string => !!u);

  if (!feeds.length) return json({ status: 'unconfigured', updated: null, blocked: [] }, 300);

  const cache = (caches as unknown as { default: Cache }).default;
  const cacheKey = new Request(new URL('/api/availability', request.url).href);
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const results = await Promise.allSettled(feeds.map(readFeed));
  const ok = results.filter((r): r is PromiseFulfilledResult<Range[]> => r.status === 'fulfilled');
  const failed = results.length - ok.length;
  if (failed) console.warn(`availability: ${failed} of ${results.length} calendar feed(s) could not be read`);

  if (!ok.length) return json({ status: 'unavailable', updated: null, blocked: [] }, RETRY_SECONDS);

  const today = toIso(new Date());
  const blocked = mergeRanges(ok.flatMap((r) => r.value)).filter(([, end]) => end > today);
  const updated = new Date().toISOString();

  if (failed) return json({ status: 'partial', updated, blocked }, RETRY_SECONDS);

  const response = json({ status: 'ok', updated, blocked }, CACHE_SECONDS);
  waitUntil(cache.put(cacheKey, response.clone()));
  return response;
};
