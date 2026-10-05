/**
 * PROPERTY FACTS — single source of truth.
 *
 * Everything shown on the website about the villa comes from src/content.
 * Only put CONFIRMED information here. Values set to `null` are hidden on the
 * website until they are filled in.
 */
import type { Localized } from '@/i18n/config';

/** One price period. `from` / `to` are the first and last night (inclusive), as 'YYYY-MM-DD'. */
export interface RateSeason {
  name: Localized;
  from: string;
  to: string;
  perNight: number;
  minNights?: number;
}

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
     * GPS coordinates of the villa (shown as the map pin; set to null to hide the map).
     * When set, structured data includes `geo`.
     */
    coordinates: { lat: 39.429333, lng: 19.94425 } as { lat: number; lng: number } | null, // 39°25'45.6"N 19°56'39.3"E — confirmed by the owner
    /** Area-level map search (village, not the property). Used for "View area on map". */
    areaMapUrl: 'https://www.google.com/maps/search/?api=1&query=Agios+Georgios+Argyrades+Corfu+Greece',
  },

  facts: {
    maxGuests: 6,
    bedrooms: 2,
    bathrooms: 2,
    sizeSqm: 90, // approximately
    beachDistanceM: 500, // approximately
    /**
     * Walking time to the beach in minutes, e.g. '5' or '5–7'. NOT confirmed —
     * while null the site says "a short walk" instead of a number.
     */
    beachWalkMinutes: null as string | null,
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

  /**
   * Forms (https://formspree.io). Paste each form's ID — the part after
   * `formspree.io/f/`. While an ID is null, the form opens the visitor's email
   * app with the message prefilled to `contact.email` instead.
   */
  forms: {
    generalFormId: 'maenkrjl' as string | null,
    bookingFormId: 'xljdvqnz' as string | null,
  },

  /**
   * Availability calendar. Booked dates come from the Airbnb / Booking.com
   * iCal links, which are stored as secret environment variables on
   * Cloudflare (ICAL_AIRBNB, ICAL_BOOKING) — never in this repository.
   * Without them the calendar still works for choosing dates and guests.
   */
  availability: {
    endpoint: '/api/availability',
    /** How many months ahead guests can select. */
    monthsAhead: 12,
  },

  /**
   * Visit statistics. Cloudflare Web Analytics is switched on in the Cloudflare
   * dashboard (Pages project → Metrics → Web Analytics); it is cookieless, so no
   * consent banner is needed. Set this to true once it is enabled there, so the
   * Privacy and Cookie policies mention it. (Google Analytics would need a cookie
   * consent banner and different policy texts.)
   */
  analytics: {
    cloudflareWebAnalytics: true,
  },

  /**
   * RATES — not supplied yet. While `seasons` is empty nothing about prices is
   * shown. Once filled in, a "Rates" section appears and the calendar shows an
   * indicative total for the selected dates.
   * Example season:
   *   { name: { en: 'High season', el: 'Υψηλή περίοδος' }, from: '2027-07-01', to: '2027-08-31', perNight: 180, minNights: 5 }
   * `from` / `to` are the first and last NIGHT of the season (inclusive).
   */
  rates: {
    currency: 'EUR',
    seasons: [] as RateSeason[],
    /** One-off cleaning fee per stay, or null if included / none. */
    cleaningFee: null as number | null,
    /** Free text shown under the rates, e.g. what the price includes. */
    note: null as Localized | null,
  },

  /**
   * BOOKING TERMS for direct bookings — not supplied yet. Each text appears on
   * the "Booking Terms" page; the page (and its links) stay hidden until all
   * of them are filled in. `minNights` also limits the calendar selection.
   */
  bookingTerms: {
    /** Minimum stay enforced by the calendar (a season's own minNights overrides it). */
    minNights: null as number | null,
    minimumStay: null as Localized | null, // e.g. 'Minimum stay is 3 nights (5 nights in July and August).'
    deposit: null as Localized | null, // e.g. 'A 30% deposit is required to confirm the booking.'
    balance: null as Localized | null, // e.g. 'The balance is paid 14 days before arrival.'
    paymentMethods: null as Localized | null, // e.g. 'Bank transfer or cash on arrival.'
    cancellation: null as Localized | null,
    damageDeposit: null as Localized | null, // e.g. 'No damage deposit is required.'
    touristTax: null as Localized | null, // e.g. 'The climate resilience fee is paid on arrival.'
  },

  /**
   * Contact details. Each item is hidden while null.
   *
   * TODO before launch: these are the developer's own details, used as temporary
   * placeholders. Replace all four with the owner's business contact details —
   * every place on the site (contact section, footer, WhatsApp buttons, forms'
   * e-mail fallback, structured data) reads them from here.
   */
  contact: {
    email: 'chriskaridis76@gmail.com' as string | null,
    phone: '+30 690 654 2839' as string | null, // international format
    whatsapp: '306906542839' as string | null, // digits only, with country code
    /** Name of the person answering on WhatsApp (shown on the WhatsApp contact card). */
    whatsappName: { en: 'Christos Spyridon Karydis', el: 'Χρήστος Σπυρίδων Καρύδης' } as Localized | null,
  },

  /**
   * Operator / data controller — used in the legal pages and the footer.
   * Fill in when the owner supplies them. While any is null, the legal pages
   * show "[to be completed]" markers and stay hidden from search engines.
   */
  operator: {
    /** Full legal name of the person or company running the rental. */
    legalName: null as string | null,
    address: null as Localized | null,
    /** ΑΦΜ (Greek tax ID). */
    vatNumber: null as string | null,
    /**
     * ΑΜΑ — short-term rental property registry number (mandatory on every
     * advertisement of the property). Use `mhteNumber` instead if the property
     * is licensed as tourist accommodation (ΜΗ.Τ.Ε., EOT).
     */
    amaNumber: null as string | null,
    mhteNumber: null as string | null,
  },

  /**
   * Aggregate ratings as displayed on the booking platforms.
   * Update these values when the platform scores change.
   * They are intentionally NOT added to structured data.
   */
  ratings: {
    airbnb: {
      score: 5.0,
      outOf: 5,
      /** Opens the listing's reviews directly. */
      reviewsUrl: {
        en: 'https://www.airbnb.com/rooms/768554587544600429/reviews',
        el: 'https://www.airbnb.gr/rooms/768554587544600429/reviews',
      } satisfies Localized,
    },
    bookingCom: {
      score: 8.8,
      outOf: 10,
      /** Opens the property page on its reviews tab. */
      reviewsUrl: {
        en: 'https://www.booking.com/hotel/gr/stylish-privet-poolside-villa.en-gb.html#tab-reviews',
        el: 'https://www.booking.com/hotel/gr/stylish-privet-poolside-villa.el.html#tab-reviews',
      } satisfies Localized,
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
      en: 'Stay at a stylish 2-bedroom villa in Agios Georgios, Corfu, just 500 m from the beach. Sleeps up to 6 guests with pool access, garden views, Wi-Fi and private parking.',
      el: 'Μείνετε σε μια κομψή βίλα 2 υπνοδωματίων στον Άγιο Γεώργιο Κέρκυρας, μόλις 500 μ. από την παραλία. Φιλοξενεί έως 6 άτομα, με πρόσβαση σε πισίνα, θέα στον κήπο, Wi-Fi και ιδιωτικό πάρκινγκ.',
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
