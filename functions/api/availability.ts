/**
 * GET /api/availability — Cloudflare Pages Function.
 *
 * Reads the Airbnb and Booking.com iCal feeds and returns only the booked
 * date ranges (no guest names or other booking details). The feed URLs are
 * secret environment variables set in the Cloudflare dashboard:
 *   ICAL_AIRBNB, ICAL_BOOKING  (and optionally ICAL_EXTRA, comma-separated)
 * Responses are cached at the edge for 30 minutes.
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

const json = (body: AvailabilityResponse, maxAge: number) =>
  new Response(JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': `public, max-age=${Math.min(maxAge, 300)}, s-maxage=${maxAge}`,
    },
  });

export const onRequestGet = async ({ request, env, waitUntil }: Context): Promise<Response> => {
  const feeds = [env.ICAL_AIRBNB, env.ICAL_BOOKING, ...(env.ICAL_EXTRA?.split(',') ?? [])]
    .map((u) => u?.trim())
    .filter((u): u is string => !!u);

  if (!feeds.length) return json({ configured: false, updated: null, blocked: [] }, 300);

  const cache = (caches as unknown as { default: Cache }).default;
  const cacheKey = new Request(new URL('/api/availability', request.url).href);
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  const results = await Promise.allSettled(
    feeds.map(async (url) => {
      const res = await fetch(url, { headers: { 'User-Agent': 'villa-availability/1.0' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return parseIcs(await res.text());
    }),
  );

  const ok = results.filter((r): r is PromiseFulfilledResult<Range[]> => r.status === 'fulfilled');
  if (!ok.length) return json({ configured: true, partial: true, updated: null, blocked: [] }, 60);

  const today = toIso(new Date());
  const blocked = mergeRanges(ok.flatMap((r) => r.value)).filter(([, end]) => end > today);
  const response = json(
    { configured: true, partial: ok.length < feeds.length, updated: new Date().toISOString(), blocked },
    ok.length < feeds.length ? 300 : CACHE_SECONDS,
  );
  waitUntil(cache.put(cacheKey, response.clone()));
  return response;
};
