// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');

/**
 * Public URL of the website (no trailing slash).
 * Set PUBLIC_SITE_URL in `.env` (or in your hosting provider's environment
 * settings) once the domain is known. Used for canonical URLs, hreflang,
 * Open Graph, sitemap.xml and robots.txt.
 */
const SITE_URL = env.PUBLIC_SITE_URL || 'https://www.example.com';

// Pages that are placeholders and must not be indexed yet (see src/content/legal.ts).
const NOINDEX = ['/privacy-policy', '/cookie-policy', '/terms-and-conditions', '/booking-terms'];

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  // The page CSS is small (~16 KB): inline it so the first paint needs no extra requests.
  build: { inlineStylesheets: 'always' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'el'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-GB', el: 'el-GR' },
      },
      filter: (page) => !NOINDEX.some((p) => new URL(page).pathname.replace(/\/$/, '').endsWith(p)),
    }),
  ],
});
