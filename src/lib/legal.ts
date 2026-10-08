/**
 * Fills the {placeholders} of the legal texts (src/content/legal.ts) from
 * src/content/property.ts. Missing values become "[to be completed]" markers.
 */
import { property } from '@content/property';
import type { LegalBlock } from '@content/legal';
import type { Locale, Localized } from '@/i18n/config';
import { t } from '@/i18n/utils';

export type Segment = string | { missing: string };

const missingLabels: Record<string, Localized> = {
  name: { en: 'legal name of the operator', el: 'ονοματεπώνυμο ή επωνυμία λειτουργού' },
  address: { en: 'address', el: 'διεύθυνση' },
  vat: { en: 'tax ID (ΑΦΜ)', el: 'ΑΦΜ' },
  gemi: { en: 'business registry (ΓΕΜΗ) number', el: 'αριθμός ΓΕΜΗ' },
  seat: { en: 'registered seat', el: 'διεύθυνση έδρας' },
  gemiBranch: { en: 'branch registry (ΓΕΜΗ) number', el: 'αριθμός ΓΕΜΗ υποκαταστήματος' },
  rep: { en: 'company owner', el: 'ιδιοκτήτης εταιρείας' },
  repPhone: { en: 'company phone', el: 'τηλέφωνο εταιρείας' },
  registry: { en: 'ΑΜΑ or ΜΗΤΕ number', el: 'αριθμός ΑΜΑ ή ΜΗΤΕ' },
  email: { en: 'email', el: 'email' },
  phone: { en: 'phone', el: 'τηλέφωνο' },
  minimumStay: { en: 'minimum stay', el: 'ελάχιστη διαμονή' },
  deposit: { en: 'deposit amount and when it is paid', el: 'ποσό προκαταβολής και πότε καταβάλλεται' },
  balance: { en: 'when the balance is paid', el: 'πότε εξοφλείται το υπόλοιπο' },
  paymentMethods: { en: 'payment methods', el: 'τρόποι πληρωμής' },
  cancellation: { en: 'cancellation policy', el: 'πολιτική ακύρωσης' },
  damageDeposit: { en: 'damage deposit', el: 'εγγύηση ζημιών' },
  touristTax: { en: 'tourist tax / fees', el: 'φόρος διαμονής / τέλη' },
};
const toComplete: Localized = { en: 'to be completed', el: 'προς συμπλήρωση' };

/** The registry line: ΑΜΑ (short-term rental) or ΜΗΤΕ (tourist accommodation). */
export function registryNumber(): string | null {
  const { amaNumber, mhteNumber } = property.operator;
  if (amaNumber) return `ΑΜΑ ${amaNumber}`;
  if (mhteNumber) return `ΜΗΤΕ ${mhteNumber}`;
  return null;
}

function values(lang: Locale, siteUrl: string): Record<string, string | null> {
  const { operator, contact, bookingTerms: bt, rules, facts } = property;
  const loc = (v: Localized | null) => (v ? t(v, lang) : null);
  return {
    minimumStay: loc(bt.minimumStay),
    deposit: loc(bt.deposit),
    balance: loc(bt.balance),
    paymentMethods: loc(bt.paymentMethods),
    cancellation: bt.cancellation ? t(bt.cancellation, lang).join(' ') : null,
    damageDeposit: loc(bt.damageDeposit),
    touristTax: loc(bt.touristTax),
    checkIn: rules.checkIn,
    checkOut: rules.checkOut,
    maxGuests: String(facts.maxGuests),
    name: operator.legalName,
    address: operator.address ? t(operator.address, lang) : null,
    vat: operator.vatNumber,
    gemi: operator.gemiNumber,
    seat: operator.seatAddress ? t(operator.seatAddress, lang) : null,
    gemiBranch: operator.branchGemiNumber,
    rep: operator.representative ? t(operator.representative, lang) : null,
    repPhone: operator.representativePhone,
    registry: registryNumber(),
    email: contact.email,
    phone: contact.phone,
    site: siteUrl.replace(/\/$/, ''),
  };
}

/** Split a text into plain strings and missing-value markers. */
export function resolveText(text: string, lang: Locale, siteUrl: string): Segment[] {
  const v = values(lang, siteUrl);
  const out: Segment[] = [];
  let last = 0;
  for (const m of text.matchAll(/\{(\w+)\}/g)) {
    out.push(text.slice(last, m.index));
    const key = m[1];
    const value = v[key];
    out.push(value ?? { missing: `[${t(toComplete, lang)}: ${t(missingLabels[key] ?? { en: key, el: key }, lang)}]` });
    last = m.index! + m[0].length;
  }
  out.push(text.slice(last));
  return out.filter((s) => s !== '');
}

/** true when any placeholder used by these blocks has no value yet. */
export function hasMissing(blocks: LegalBlock[], lang: Locale, siteUrl: string): boolean {
  const texts = blocks.flatMap((b) => ('h' in b ? [b.h] : 'p' in b ? [b.p] : b.ul));
  return texts.some((x) => resolveText(x, lang, siteUrl).some((s) => typeof s !== 'string'));
}

/** Legal pages that may be linked from menus (drafts flagged `hideUntilComplete` are left out). */
export function isLinkable(page: { body: Localized<LegalBlock[]> | null; hideUntilComplete?: boolean }, lang: Locale): boolean {
  if (!page.hideUntilComplete) return true;
  return !!page.body && !hasMissing(t(page.body, lang), lang, '');
}
