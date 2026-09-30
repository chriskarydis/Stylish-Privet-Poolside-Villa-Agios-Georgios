/**
 * LEGAL PAGES — placeholders. No legal text has been written on purpose.
 * Paste the final, professionally reviewed text into `body` (one string per
 * paragraph). While `body` is null the page shows a notice and is excluded
 * from search engines (noindex + removed from the sitemap in astro.config.mjs).
 * When you publish real content, also remove the slug from NOINDEX there.
 */
import type { Localized } from '@/i18n/config';

export interface LegalPage {
  slug: string;
  title: Localized;
  body: Localized<string[]> | null;
  lastUpdated: string | null;
}

export const legalPages: LegalPage[] = [
  {
    slug: 'privacy-policy',
    title: { en: 'Privacy Policy', el: 'Πολιτική Απορρήτου' },
    body: null,
    lastUpdated: null,
  },
  {
    slug: 'cookie-policy',
    title: { en: 'Cookie Policy', el: 'Πολιτική Cookies' },
    body: null,
    lastUpdated: null,
  },
  {
    slug: 'terms-and-conditions',
    title: { en: 'Terms & Conditions', el: 'Όροι & Προϋποθέσεις' },
    body: null,
    lastUpdated: null,
  },
];
