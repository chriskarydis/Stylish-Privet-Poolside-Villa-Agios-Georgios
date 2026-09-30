/**
 * Schema.org structured data. Built strictly from confirmed content:
 * no ratings, prices, street address or coordinates unless they are set in
 * src/content/property.ts.
 */
import { property } from '@content/property';
import { faqs } from '@content/faq';
import { amenityCategories } from '@content/amenities';
import type { Locale } from '@/i18n/config';
import { t } from '@/i18n/utils';

export function accommodationSchema(lang: Locale, pageUrl: string, imageUrls: string[]) {
  const { location: loc, facts, rules } = property;

  const address: Record<string, string> = {
    '@type': 'PostalAddress',
    addressLocality: t(loc.locality, lang),
    addressRegion: t(loc.island, lang),
    addressCountry: loc.countryCode,
  };
  if (loc.streetAddress) address.streetAddress = t(loc.streetAddress, lang);
  if (loc.postalCode) address.postalCode = loc.postalCode;

  const amenityFeature = amenityCategories.flatMap((c) =>
    c.items.map((i) => ({ '@type': 'LocationFeatureSpecification', name: t(i.label, lang), value: true })),
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    '@id': `${pageUrl}#villa`,
    name: property.name,
    description: t(property.seo.description, lang),
    url: pageUrl,
    ...(imageUrls.length ? { image: imageUrls } : {}),
    address,
    ...(loc.coordinates
      ? { geo: { '@type': 'GeoCoordinates', latitude: loc.coordinates.lat, longitude: loc.coordinates.lng } }
      : {}),
    containedInPlace: {
      '@type': 'Place',
      name: `${t(loc.locality, lang)}, ${t(loc.region, lang)}, ${t(loc.country, lang)}`,
    },
    checkinTime: rules.checkIn,
    checkoutTime: rules.checkOut,
    petsAllowed: rules.pets,
    knowsLanguage: ['en', 'el'],
    sameAs: [property.booking.airbnb[lang], property.booking.bookingCom[lang]],
    containsPlace: {
      '@type': 'House',
      name: property.name,
      additionalType: 'EntirePlace',
      numberOfBedrooms: facts.bedrooms,
      numberOfBathroomsTotal: facts.bathrooms,
      numberOfRooms: facts.bedrooms,
      floorSize: { '@type': 'QuantitativeValue', value: facts.sizeSqm, unitCode: 'MTK' },
      occupancy: { '@type': 'QuantitativeValue', maxValue: facts.maxGuests },
      bed: [
        { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'Double' },
        { '@type': 'BedDetails', numberOfBeds: 2, typeOfBed: 'Single' },
        { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: 'Sofa bed' },
      ],
      amenityFeature,
    },
  };
}

export function faqSchema(lang: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: t(f.question, lang),
      acceptedAnswer: { '@type': 'Answer', text: t(f.answer, lang) },
    })),
  };
}

export function websiteSchema(lang: Locale, siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: property.name,
    url: siteUrl,
    inLanguage: lang === 'el' ? 'el-GR' : 'en-GB',
  };
}
