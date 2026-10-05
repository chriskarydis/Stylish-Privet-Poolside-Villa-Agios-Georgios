import { defaultLocale, locales, type Locale, type Localized } from './config';

/** Pick the value for the current language. */
export function t<T>(value: Localized<T>, lang: Locale): T {
  return value[lang] ?? value[defaultLocale];
}

/** Build a site path for a language, e.g. ('/privacy-policy', 'el') -> '/el/privacy-policy'. */
export function localizePath(path: string, lang: Locale): string {
  const rooted = path.startsWith('/') ? path : `/${path}`;
  // Pages are served with a trailing slash (/privacy-policy/); linking without it costs a redirect.
  const clean = rooted.endsWith('/') || /\.[a-z0-9]+$/i.test(rooted) ? rooted : `${rooted}/`;
  if (lang === defaultLocale) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/** Strip the language prefix from a pathname, returning the language-neutral path. */
export function neutralPath(pathname: string): string {
  for (const l of locales) {
    if (l === defaultLocale) continue;
    if (pathname === `/${l}` || pathname === `/${l}/`) return '/';
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname || '/';
}

export function getLangFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return (locales as readonly string[]).includes(first) ? (first as Locale) : defaultLocale;
}

/** Replace {placeholders} in a string. */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? `{${k}}`));
}
