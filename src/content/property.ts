/**
 * PROPERTY FACTS — single source of truth.
 *
 * Everything shown on the website about the villa comes from src/content.
 * Only put CONFIRMED information here. Values set to `null` are hidden on the
 * website until they are filled in.
 */
import type { Localized } from '@/i18n/config';

/**
 * One price period. `from` / `to` are the first and last night (inclusive):
 * 'MM-DD' for a period that repeats every year, or 'YYYY-MM-DD' for one specific year.
 */
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
   * RATES for direct bookings, per night, as supplied by the owner (October 2026).
   * They feed the "Rates" section and the indicative total in the calendar.
   * `from` / `to` are the first and last NIGHT of the period (inclusive); 'MM-DD'
   * repeats every year. Nights outside every period have no price: the calendar
   * then shows `closedNote` instead of a total.
   * A period can have its own minimum stay: { ..., minNights: 5 }.
   */
  rates: {
    currency: 'EUR',
    seasons: [
      { name: { en: 'April', el: 'Απρίλιος' }, from: '04-01', to: '04-30', perNight: 180 },
      { name: { en: 'May', el: 'Μάιος' }, from: '05-01', to: '05-31', perNight: 200 },
      { name: { en: 'June', el: 'Ιούνιος' }, from: '06-01', to: '06-30', perNight: 230 },
      { name: { en: 'July', el: 'Ιούλιος' }, from: '07-01', to: '07-31', perNight: 250 },
      { name: { en: 'August', el: 'Αύγουστος' }, from: '08-01', to: '08-31', perNight: 260 },
      { name: { en: 'September', el: 'Σεπτέμβριος' }, from: '09-01', to: '09-30', perNight: 230 },
      { name: { en: 'October', el: 'Οκτώβριος' }, from: '10-01', to: '10-31', perNight: 200 },
    ] as RateSeason[],
    /** One-off cleaning fee per stay, or null if included / none. Cleaning is included in the price. */
    cleaningFee: null as number | null,
    /** Free text shown under the rates, e.g. what the price includes. */
    note: {
      en: 'Prices are per night for the villa and include cleaning, the climate resilience fee and all applicable taxes.',
      el: 'Οι τιμές είναι ανά νύχτα για τη βίλα και περιλαμβάνουν την καθαριότητα, το τέλος ανθεκτικότητας στην κλιματική κρίση και όλους τους φόρους που ισχύουν.',
    } as Localized | null,
    /** Shown under the rates, and in the calendar when the chosen dates fall outside the periods above. */
    closedNote: {
      en: 'The villa is open from April to October. For a stay in other months, send us a request or contact us and we will let you know whether it can be arranged.',
      el: 'Η βίλα λειτουργεί από τον Απρίλιο έως τον Οκτώβριο. Για διαμονή τους υπόλοιπους μήνες, στείλτε μας αίτημα ή επικοινωνήστε μαζί μας και θα σας ενημερώσουμε αν μπορεί να κανονιστεί.',
    } as Localized | null,
  },

  /**
   * BOOKING TERMS for direct bookings, as supplied by the owner (October 2026).
   * Each text appears on the "Booking Terms" page; the page (and its links) are
   * hidden if any of them is null. `minNights` also limits the calendar selection.
   */
  bookingTerms: {
    /** Minimum stay enforced by the calendar (a season's own minNights overrides it). */
    minNights: 3 as number | null,
    minimumStay: { en: 'The minimum stay is 3 nights.', el: 'Η ελάχιστη διαμονή είναι 3 νύχτες.' } as Localized | null,
    deposit: {
      en: 'A deposit of 50% of the total booking amount is payable within one week of your booking request.',
      el: 'Προκαταβολή ίση με το 50% του συνολικού ποσού της κράτησης καταβάλλεται εντός μίας εβδομάδας από το αίτημα κράτησης.',
    } as Localized | null,
    balance: {
      en: 'The remaining 50% is payable between one week before arrival and the day of arrival.',
      el: 'Το υπόλοιπο 50% καταβάλλεται από μία εβδομάδα πριν από την άφιξη έως και την ημέρα της άφιξης.',
    } as Localized | null,
    paymentMethods: {
      en: 'Payment is made by bank transfer, or by another method agreed with the host when arranging the booking.',
      el: 'Η πληρωμή γίνεται με τραπεζική μεταφορά ή με άλλον τρόπο που συμφωνείται με τον οικοδεσπότη κατά την επικοινωνία για την κράτηση.',
    } as Localized | null,
    cancellation: {
      en: 'Cancellation up to 30 days before arrival: full refund. Cancellation from 29 to 14 days before arrival: 50% of the amount paid is refunded. Cancellation 13 days or fewer before arrival: no refund.',
      el: 'Ακύρωση έως και 30 ημέρες πριν από την άφιξη: πλήρης επιστροφή χρημάτων. Ακύρωση από 29 έως και 14 ημέρες πριν από την άφιξη: επιστρέφεται το 50% του ποσού που έχει καταβληθεί. Ακύρωση 13 ημέρες ή λιγότερο πριν από την άφιξη: δεν επιστρέφονται χρήματα.',
    } as Localized | null,
    damageDeposit: {
      en: 'No damage deposit is required, and guests are not charged for minor breakages (for example a light bulb, a plate or a glass). For more significant damage (for example a broken window, damage to the kitchen or fire damage), the guest pays the cost of the damage, which is determined in agreement with the host.',
      el: 'Δεν απαιτείται εγγύηση για ζημιές και οι επισκέπτες δεν επιβαρύνονται για μικροζημιές (για παράδειγμα μια λάμπα, ένα πιάτο ή ένα ποτήρι). Για σοβαρότερες ζημιές (για παράδειγμα σπασμένο τζάμι, βλάβη στην κουζίνα ή ζημιά από φωτιά), ο επισκέπτης καταβάλλει το κόστος της ζημιάς, το οποίο υπολογίζεται κατόπιν συνεννόησης με τον οικοδεσπότη.',
    } as Localized | null,
    touristTax: {
      en: 'The climate resilience fee and all other applicable taxes (such as VAT) are included in the price. Cleaning is also included in the price.',
      el: 'Το τέλος ανθεκτικότητας στην κλιματική κρίση και όλοι οι λοιποί φόροι που ισχύουν (όπως ο ΦΠΑ) περιλαμβάνονται στην τιμή. Στην τιμή περιλαμβάνεται και η καθαριότητα.',
    } as Localized | null,
  },

  /**
   * The host's contact details, as supplied by the owner (October 2026). Each item
   * is hidden while null. Every place on the site (contact section, footer,
   * WhatsApp buttons, forms' e-mail fallback, legal pages, structured data) reads
   * them from here.
   */
  contact: {
    email: 'anastasiakoul30@gmail.com' as string | null,
    phone: '+30 698 084 1834' as string | null, // international format
    whatsapp: '306980841834' as string | null, // digits only, with country code
    /** Name of the person answering on WhatsApp (shown on the WhatsApp contact card). */
    whatsappName: { en: 'Anastasia Koulouri', el: 'Αναστασία Κουλούρη' } as Localized | null,
  },

  /**
   * Operator / data controller — used in the legal pages and the footer.
   * Fill in when the owner supplies them. While any is null, the legal pages
   * show "[to be completed]" markers and stay hidden from search engines.
   */
  operator: {
    /**
     * Full legal name of the company running the rental — STILL NEEDED from the
     * owner (the registered company name that the ΑΦΜ below belongs to).
     */
    legalName: null as string | null,
    address: { en: 'Agios Georgios, Southern Corfu, Greece', el: 'Άγιος Γεώργιος, Νότια Κέρκυρα' } as Localized | null,
    /** ΑΦΜ (Greek tax ID) of the company. */
    vatNumber: '801510189' as string | null,
    /**
     * ΑΜΑ — short-term rental property registry number (mandatory on every
     * advertisement of the property). Use `mhteNumber` instead if the property
     * is licensed as tourist accommodation (ΜΗ.Τ.Ε., EOT).
     */
    amaNumber: '00001600954' as string | null,
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
   * Optional extras, arranged with the host on request and charged separately —
   * the website always shows that note next to them.
   */
  additionalServices: [
    { id: 'airport-transfer', icon: 'plane', label: { en: 'Airport or port transfer', el: 'Μεταφορά από/προς αεροδρόμιο ή λιμάνι' } },
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
