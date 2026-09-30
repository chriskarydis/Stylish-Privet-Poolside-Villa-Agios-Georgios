/**
 * Language configuration.
 *
 * To add a language: add it here and in `astro.config.mjs` (i18n.locales and
 * the sitemap locales), add the translations to every `Localized` value in
 * /content and src/i18n/ui.ts (TypeScript will point out every missing one),
 * and create `src/pages/<code>/` routes mirroring `src/pages/el/`.
 */
export const locales = ['en', 'el'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeMeta: Record<Locale, { label: string; htmlLang: string; ogLocale: string; flag: 'gb' | 'gr' }> = {
  en: { label: 'English', htmlLang: 'en', ogLocale: 'en_GB', flag: 'gb' },
  el: { label: 'Ελληνικά', htmlLang: 'el', ogLocale: 'el_GR', flag: 'gr' },
};

/** A value that exists in every supported language. */
export type Localized<T = string> = Record<Locale, T>;
