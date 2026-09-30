/**
 * PROPERTY FACTS — single source of truth.
 *
 * Everything shown on the website about the villa comes from src/content.
 * Only put CONFIRMED information here. Values set to `null` are hidden on the
 * website until they are filled in.
 */
import type { Localized } from '@/i18n/config';

export const property = {
  /** Official listing name (kept identical in all languages). */
  name: 'Stylish Private Poolside Villa',
  shortName: 'Poolside Villa',

  type: { en: 'Entire holiday villa', el: 'Ολόκληρη εξοχική βίλα' } satisfies Localized,

  location: {
    locality: { en: 'Agios Georgios', el: 'Άγιος Γεώργιος' } satisfies Localized,
    region: { en: 'Southern Corfu', el: 'Νότια Κέρκυρα' } satisfies Localized,
    island: { en: 'Corfu', el: 'Κέρκυρα' } satisfies Localized,
    country: { en: 'Greece', el: 'Ελλάδα' } satisfies Localized,
    countryCode: 'GR',
    /**
     * Exact street address — NOT confirmed. Leave null until supplied by the owner.
     * When set, it is shown in the footer and added to structured data.
     */
    streetAddress: null as Localized | null,
    postalCode: null as string | null,
    /**
     * GPS coordinates — NOT confirmed. Leave null until supplied by the owner.
     * When set, structured data includes `geo`.
     */
    coordinates: null as { lat: number; lng: number } | null,
    /** Area-level map search (village, not the property). Used for "View area on map". */
    areaMapUrl: 'https://www.google.com/maps/search/?api=1&query=Agios+Georgios+Argyrades+Corfu+Greece',
  },

  facts: {
    maxGuests: 6,
    bedrooms: 2,
    bathrooms: 2,
    sizeSqm: 90, // approximately
    beachDistanceM: 500, // approximately
  },

  sleeping: [
    {
      id: 'bedroom-1',
      room: { en: 'Bedroom 1', el: 'Υπνοδωμάτιο 1' },
      beds: { en: '1 double bed', el: '1 διπλό κρεβάτι' },
      icon: 'bed-double',
      image: 'bedroom1',
    },
    {
      id: 'bedroom-2',
      room: { en: 'Bedroom 2', el: 'Υπνοδωμάτιο 2' },
      beds: { en: '2 single beds', el: '2 μονά κρεβάτια' },
      icon: 'bed-single',
      image: 'bedroom2',
    },
    {
      id: 'living-room',
      room: { en: 'Living room', el: 'Σαλόνι' },
      beds: { en: '1 sofa bed', el: '1 καναπές-κρεβάτι' },
      icon: 'sofa',
      image: 'livingRoom',
    },
  ] as const,

  rules: {
    checkIn: '15:00',
    checkOut: '10:00',
    pets: false,
    smokingInside: false,
    parties: false,
    children: true,
    /** Cots / extra beds — not confirmed. Set to true only when the owner confirms. */
    cotsAvailable: null as boolean | null,
  },

  /**
   * Booking. The final booking flow is still to be decided — for now the site
   * links to the official listings. Change `mode` / add a URL here later.
   */
  booking: {
    mode: 'external' as 'external' | 'direct',
    airbnb: {
      en: 'https://www.airbnb.com/rooms/768554587544600429',
      el: 'https://www.airbnb.gr/rooms/768554587544600429',
    } satisfies Localized,
    bookingCom: {
      en: 'https://www.booking.com/hotel/gr/stylish-privet-poolside-villa.en-gb.html',
      el: 'https://www.booking.com/hotel/gr/stylish-privet-poolside-villa.el.html',
    } satisfies Localized,
    /** Future direct-booking / enquiry URL. When set, it becomes the primary CTA. */
    directUrl: null as string | null,
  },

  /** Contact details — NOT yet supplied. Each item is hidden while null. */
  contact: {
    email: 'chriskaridis76@gmail.com' as string | null,
    phone: '+30 690 654 2839' as string | null, // international format
    whatsapp: '306906542839' as string | null, // digits only, with country code
  },

  /**
   * Aggregate ratings as displayed on the booking platforms.
   * Update these values when the platform scores change.
   * They are intentionally NOT added to structured data.
   */
  ratings: {
    airbnb: { score: 5.0, outOf: 5 },
    bookingCom: {
      score: 8.8,
      outOf: 10,
      categories: [
        { label: { en: 'Cleanliness', el: 'Καθαριότητα' }, score: 10.0 },
        { label: { en: 'Comfort', el: 'Άνεση' }, score: 9.5 },
        { label: { en: 'Facilities', el: 'Παροχές' }, score: 9.0 },
        { label: { en: 'Location', el: 'Τοποθεσία' }, score: 9.0 },
        { label: { en: 'Value for money', el: 'Σχέση ποιότητας-τιμής' }, score: 9.5 },
      ],
    },
  },

  /**
   * Optional extras. Availability is not guaranteed and charges may apply —
   * the website always shows that disclaimer next to them.
   */
  additionalServices: [
    { id: 'airport-transfer', icon: 'plane', label: { en: 'Airport transfer', el: 'Μεταφορά από/προς το αεροδρόμιο' } },
    { id: 'car-rental', icon: 'car', label: { en: 'Car rental', el: 'Ενοικίαση αυτοκινήτου' } },
    { id: 'bicycle-rental', icon: 'bike', label: { en: 'Bicycle rental', el: 'Ενοικίαση ποδηλάτου' } },
  ] as const,

  seo: {
    title: {
      en: 'Stylish Private Poolside Villa | Agios Georgios, Corfu',
      el: 'Stylish Private Poolside Villa | Άγιος Γεώργιος, Κέρκυρα',
    } satisfies Localized,
    description: {
      en: 'Stay at a stylish 2-bedroom villa in Agios Georgios, Corfu, just 500m from the beach. Sleeps up to 6 guests with pool access, garden views, Wi-Fi and private parking.',
      el: 'Μείνετε σε μια κομψή βίλα 2 υπνοδωματίων στον Άγιο Γεώργιο Κέρκυρας, μόλις 500μ. από την παραλία. Φιλοξενεί έως 6 άτομα, με πρόσβαση σε πισίνα, θέα στον κήπο, Wi-Fi και ιδιωτικό πάρκινγκ.',
    } satisfies Localized,
    keywords: {
      en: [
        'villa in Agios Georgios Corfu',
        'Agios Georgios Corfu villa',
        'holiday villa Corfu',
        'villa near beach Corfu',
        'accommodation Agios Georgios Corfu',
        'Southern Corfu villa',
        'pool villa Corfu',
        'holiday accommodation Southern Corfu',
      ],
      el: [
        'βίλα Άγιος Γεώργιος Κέρκυρα',
        'βίλα Νότια Κέρκυρα',
        'διακοπές Κέρκυρα βίλα',
        'βίλα κοντά στη θάλασσα Κέρκυρα',
        'διαμονή Άγιος Γεώργιος Αργυράδων',
        'βίλα με πισίνα Κέρκυρα',
      ],
    } satisfies Localized<string[]>,
  },
};

export type Property = typeof property;
