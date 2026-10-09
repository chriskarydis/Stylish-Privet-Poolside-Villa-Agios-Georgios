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

Requires Node.js 22 (the version in `.nvmrc`, used by CI and Cloudflare too).

## Before going live

1. **Domain** — copy `.env.example` to `.env` and set `PUBLIC_SITE_URL` (or set it in your host's environment settings). It drives canonical URLs, hreflang, Open Graph, `sitemap-index.xml` and `robots.txt`.
2. **Photos** — see [`src/assets/images/README.md`](src/assets/images/README.md). Until a photo exists, a styled placeholder is shown.
3. **Contact details** — `src/content/property.ts` → `contact` (email / phone / WhatsApp are hidden while `null`).
4. **Legal texts** — `src/content/legal.ts`. Placeholder pages are `noindex` and excluded from the sitemap (`NOINDEX` in `astro.config.mjs`) until real content is added.

## Editing content

All text and facts live in `src/content/`, separated from the components:

| File | What it holds |
| --- | --- |
| `src/content/property.ts` | Facts (guests, rooms, size, beach distance), sleeping arrangement, house rules, booking links, contact, ratings, extra services, SEO title/description |
| `src/content/amenities.ts` | Amenity categories, kitchen icons, outdoor features, highlights band |
| `src/content/faq.ts` | FAQ (also published as FAQPage structured data) |
| `src/content/destinations.ts` | "Explore Southern Corfu" cards (distances only when verified) |
| `src/content/experiences.ts` | Experience cards |
| `src/content/gallery.ts` | Image slots, alt texts, gallery categories and order |
| `src/content/home.ts` | Section titles and copy |
| `src/content/legal.ts` | Privacy / Cookie / Terms placeholders |

Every text is a `{ en, el }` pair. Interface strings (navigation, buttons, aria labels) are in `src/i18n/ui.ts`.

### Content rules (from the owner brief)

- The pool is **guest-only** (shared by the villa and the apartments on the property) — never "private pool".
- The villa has **no direct sea view** — the sea is visible from the property; main views are garden and pool.
- No invented address, coordinates, prices, availability, distances, fees or reviews. Ratings are aggregate platform scores and are **not** in structured data.

## Hosting (Cloudflare Pages)

The site lives in the owner's Cloudflare account (project `stylishvillacorfu`), together with the domain.

- Production (`main`): https://stylishvillacorfu.com
- Preview (`develop`): https://develop.stylishvillacorfu.pages.dev (not indexed)

Deployment is done by GitHub Actions, not by Cloudflare's Git integration: `.github/workflows/deploy.yml` builds the site and uploads it with wrangler on every push to `main` or `develop`.

| Where | Setting | Value |
| --- | --- | --- |
| GitHub → Actions secrets | `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` | token with Account → Cloudflare Pages → Edit |
| GitHub → Actions variables | `PUBLIC_SITE_URL` | `https://stylishvillacorfu.com` |
| Cloudflare project → Secrets | `ICAL_AIRBNB`, `ICAL_BOOKING` (optional `ICAL_EXTRA`) | the private iCal export links (never commit them); re-run the Deploy workflow after changing them |

`functions/api/availability.ts` runs on Cloudflare and serves `/api/availability` (booked dates only, cached 5 min).

Test it locally with real Cloudflare tooling:

```bash
npm run build
npx wrangler pages dev dist --binding ICAL_AIRBNB=<url> --binding ICAL_BOOKING=<url>
```

## Forms (Formspree)

Create two forms at formspree.io (general enquiries, booking requests) and put their IDs in `src/content/property.ts` → `forms`. Until then, the forms open the visitor's email app addressed to `contact.email`.

## Booking

The booking section has an availability calendar (booked dates synced from Airbnb and Booking.com via iCal). After choosing dates and guests, visitors can continue on Airbnb or Booking.com with everything prefilled, send a booking request (Formspree), or message on WhatsApp. Online payment / direct booking is a planned later phase; `booking.directUrl` in `src/content/property.ts` can already point to it.

## Structure

```
.github/workflows/      CI: type-check + build on every push / pull request
public/
  favicon/              favicon.svg, favicon-32.png, apple-touch-icon.png
  og-image.jpg          social preview fallback (until a hero photo exists)
scripts/                generate-static-images.mjs (favicons + OG fallback)
src/
  assets/images/        property photos (drop-in, auto-optimised to AVIF/WebP)
  content/              ★ everything the owner edits (EN + EL)
  components/
    layout/             Header, MobileMenu, Footer, LanguageSwitcher, Logo
    sections/           one file per homepage section: Hero, PropertyHighlights, AboutVilla,
                        Accommodation, Bathrooms, Kitchen, PoolSection, OutdoorSection,
                        AmenitiesGrid, LocationSection, ExploreSouthernCorfu, Experiences,
                        Gallery, Reviews, FAQ, BookingCTA
    cards/              BedroomCard, DestinationCard
    ui/                 Icon (+ icons.ts registry), SmartImage, Flag
  i18n/                 languages, interface strings, helpers
  layouts/              BaseLayout (SEO, hreflang, Open Graph, JSON-LD, fonts)
  lib/                  image resolver, schema.org builders
  pages/                routes: / , /el/ , legal pages, 404, robots.txt
  styles/               global.css (design tokens, typography, buttons)
  views/                full pages shared by both languages: HomePage, LegalPage
```

**Where do I find…?** A section of the homepage → `src/components/sections/<Name>.astro`. Its text → `src/content/home.ts` (or the matching content file). Colours and fonts → `src/styles/global.css`. Menu labels and buttons → `src/i18n/ui.ts`.

Imports use aliases — `@/…` for `src/…` and `@content/…` for `src/content/…` — so files can be moved without breaking relative paths.

## Git workflow

| Branch | Purpose |
| --- | --- |
| `main` | Production — what is (or will be) live. **Protected:** changes only via a Pull Request from `develop` with a passing build; no direct pushes, force pushes or deletion. |
| `develop` | Integration — the latest finished work, checked before release. |
| `feature/…`, `fix/…`, `content/…` | One branch per change, created from `develop`. |

```bash
# 1. Start a change
git checkout develop
git pull
git checkout -b feature/booking-form

# 2. Work, check, commit
npm run dev          # look at it
npm run build        # must pass
git add -A
git commit -m "Add booking enquiry form"
git push -u origin feature/booking-form

# 3. Merge into develop (or open a Pull Request feature/… → develop on GitHub)
git checkout develop
git merge --no-ff feature/booking-form
git push

# 4. Release: open a Pull Request develop → main and merge it once the build is green
gh pr create --base main --head develop --title "Release: booking enquiry form" --body "…"
gh pr merge --merge          # after the "build" check passes (or use the GitHub website)

# 5. Bring develop level with main again
git checkout develop
git pull origin main
git push
```

GitHub Actions builds every pushed branch (see the **Actions** tab); a red ✗ means the build broke and the branch should not be merged — GitHub will refuse to merge it into `main`. Branches merged through a Pull Request are deleted on GitHub automatically; delete your local copy with `git branch -d feature/booking-form`.

## Adding another language

Add the code to `src/i18n/config.ts` and `astro.config.mjs`, add the new key to every `{ en, el }` value (TypeScript lists each missing one), and copy `src/pages/el/` to `src/pages/<code>/`.
