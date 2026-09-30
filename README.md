# Stylish Private Poolside Villa — website

Bilingual (English / Greek) website for **Stylish Private Poolside Villa**, Agios Georgios, Southern Corfu.

Built with [Astro](https://astro.build) as a static site: it ships almost no JavaScript, images are optimised automatically (AVIF/WebP, responsive sizes), and it can be hosted on any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, shared hosting…).

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321  (Greek: /el/)
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

Requires Node.js 20+.

## Before going live

1. **Domain** — copy `.env.example` to `.env` and set `PUBLIC_SITE_URL` (or set it in your host's environment settings). It drives canonical URLs, hreflang, Open Graph, `sitemap-index.xml` and `robots.txt`.
2. **Photos** — see [`src/assets/images/README.md`](src/assets/images/README.md). Until a photo exists, a styled placeholder is shown.
3. **Contact details** — `content/property.ts` → `contact` (email / phone / WhatsApp are hidden while `null`).
4. **Legal texts** — `content/legal.ts`. Placeholder pages are `noindex` and excluded from the sitemap (`NOINDEX` in `astro.config.mjs`) until real content is added.

## Editing content

All text and facts live in `/content`, separated from the components:

| File | What it holds |
| --- | --- |
| `content/property.ts` | Facts (guests, rooms, size, beach distance), sleeping arrangement, house rules, booking links, contact, ratings, extra services, SEO title/description |
| `content/amenities.ts` | Amenity categories, kitchen icons, outdoor features, highlights band |
| `content/faq.ts` | FAQ (also published as FAQPage structured data) |
| `content/destinations.ts` | "Explore Southern Corfu" cards (distances only when verified) |
| `content/experiences.ts` | Experience cards |
| `content/gallery.ts` | Image slots, alt texts, gallery categories and order |
| `content/home.ts` | Section titles and copy |
| `content/legal.ts` | Privacy / Cookie / Terms placeholders |

Every text is a `{ en, el }` pair. Interface strings (navigation, buttons, aria labels) are in `src/i18n/ui.ts`.

### Content rules (from the owner brief)

- The pool is **guest-only** (shared by the villa and the apartments on the property) — never "private pool".
- The villa has **no direct sea view** — the sea is visible from the property; main views are garden and pool.
- No invented address, coordinates, prices, availability, distances, fees or reviews. Ratings are aggregate platform scores and are **not** in structured data.

## Booking

The final booking flow is still to be decided. For now "Book Now" / "Check Availability" lead to the official Airbnb and Booking.com listings (`content/property.ts` → `booking`). Setting `booking.directUrl` makes a direct booking/enquiry link the primary button.

## Structure

```
content/            editable content (EN + EL)
public/             favicon, fallback social image
scripts/            generate-static-images.mjs (favicons + OG fallback)
src/
  assets/images/    property photos (drop-in, auto-optimised)
  components/       Header, MobileMenu, Hero, PropertyHighlights, AboutVilla, Accommodation,
                    BedroomCard, Bathrooms, Kitchen, PoolSection, OutdoorSection, AmenitiesGrid,
                    LocationSection, ExploreSouthernCorfu, DestinationCard, Experiences, Gallery,
                    Reviews, FAQ, BookingCTA, Footer, LanguageSwitcher, ui/ (Icon, SmartImage, Flag)
  i18n/             locale config, UI strings, helpers
  layouts/          BaseLayout (SEO, hreflang, Open Graph, JSON-LD, fonts)
  lib/              image resolver, schema.org builders
  pages/            / , /el/ , legal pages, 404, robots.txt
  views/            HomePage, LegalPage
```

## Adding another language

Add the code to `src/i18n/config.ts` and `astro.config.mjs`, add the new key to every `{ en, el }` value (TypeScript lists each missing one), and copy `src/pages/el/` to `src/pages/<code>/`.
