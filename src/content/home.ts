/**
 * HOMEPAGE COPY — section titles and texts, in every language.
 * Paragraph arrays render as separate <p> elements.
 */
import type { Localized } from '@/i18n/config';

type P = Localized<string[]>;

export const home = {
  hero: {
    eyebrow: { en: 'Agios Georgios · Southern Corfu', el: 'Άγιος Γεώργιος · Νότια Κέρκυρα' },
    title: {
      en: 'Your Corfu Escape, Just 500 Metres from the Beach',
      el: 'Η απόδρασή σας στην Κέρκυρα, μόλις 500 μέτρα από την παραλία',
    },
    subtitle: {
      en: 'A stylish two-bedroom villa in Agios Georgios, Southern Corfu, combining modern comfort, outdoor living and pool access for an unforgettable island getaway.',
      el: 'Μια κομψή βίλα δύο υπνοδωματίων στον Άγιο Γεώργιο της Νότιας Κέρκυρας, που συνδυάζει σύγχρονη άνεση, ζωή σε εξωτερικούς χώρους και πρόσβαση σε πισίνα για αξέχαστες διακοπές στο νησί.',
    },
    primaryCta: { en: 'Check Availability', el: 'Ελέγξτε διαθεσιμότητα' },
    secondaryCta: { en: 'Explore the Villa', el: 'Γνωρίστε τη βίλα' },
  },

  highlights: {
    title: { en: 'At a glance', el: 'Με μια ματιά' },
  },

  about: {
    eyebrow: { en: 'The Villa', el: 'Η Βίλα' },
    title: { en: 'A Comfortable Home in Southern Corfu', el: 'Ένα άνετο σπίτι στη Νότια Κέρκυρα' },
    body: {
      en: [
        'Welcome to Stylish Private Poolside Villa, a comfortable and thoughtfully designed holiday home in Agios Georgios, Southern Corfu.',
        "A short walk from the beach, the villa offers an ideal base for enjoying the relaxed atmosphere and natural beauty of Corfu’s south.",
        'With two bedrooms, two bathrooms and a comfortable living area with a sofa bed, the villa can accommodate up to six guests. A fully equipped kitchen, washing machine, air conditioning, Wi-Fi and private parking provide everything you need for a comfortable stay.',
        'Outside, guests can enjoy the garden surroundings, outdoor dining and access to the swimming pool shared exclusively by guests staying at the villa and the neighbouring apartments. Thanks to its proximity to the coast, the sea can be seen from the property.',
      ],
      el: [
        'Καλώς ήρθατε στη Stylish Private Poolside Villa, ένα άνετο και προσεγμένο εξοχικό σπίτι στον Άγιο Γεώργιο της Νότιας Κέρκυρας.',
        'Σε μικρή απόσταση με τα πόδια από την παραλία, η βίλα είναι ιδανική βάση για να απολαύσετε τη χαλαρή ατμόσφαιρα και τη φυσική ομορφιά του νότου της Κέρκυρας.',
        'Με δύο υπνοδωμάτια, δύο μπάνια και ένα άνετο σαλόνι με καναπέ-κρεβάτι, η βίλα φιλοξενεί έως έξι άτομα. Η πλήρως εξοπλισμένη κουζίνα, το πλυντήριο ρούχων, ο κλιματισμός, το Wi-Fi και ο ιδιωτικός χώρος στάθμευσης προσφέρουν ό,τι χρειάζεστε για μια άνετη διαμονή.',
        'Έξω, οι επισκέπτες απολαμβάνουν τον κήπο, τα γεύματα στον εξωτερικό χώρο και την πισίνα, την οποία μοιράζονται αποκλειστικά οι επισκέπτες της βίλας και των γειτονικών διαμερισμάτων του ακινήτου. Χάρη στη μικρή απόσταση από την ακτή, η θάλασσα είναι ορατή από το ακίνητο.',
      ],
    } satisfies P,
    sizeNote: { en: 'approx. {size} m² of living space', el: 'περίπου {size} τ.μ. εσωτερικός χώρος' },
  },

  accommodation: {
    eyebrow: { en: 'Accommodation', el: 'Διαμονή' },
    title: { en: 'Sleeping Arrangements', el: 'Διάταξη ύπνου' },
    body: {
      en: 'Two comfortable bedrooms provide flexible sleeping arrangements for couples, families and small groups. The living room also features a sofa bed, allowing the villa to accommodate up to six guests.',
      el: 'Δύο άνετα υπνοδωμάτια προσφέρουν ευέλικτες επιλογές ύπνου για ζευγάρια, οικογένειες και μικρές παρέες. Στο σαλόνι υπάρχει επίσης καναπές-κρεβάτι, ώστε η βίλα να φιλοξενεί έως έξι άτομα.',
    },
  },

  bathrooms: {
    title: { en: 'Two Bathrooms', el: 'Δύο μπάνια' },
    body: {
      en: 'With two bathrooms available, the villa offers additional convenience and privacy, particularly for families and groups travelling together.',
      el: 'Με δύο μπάνια, η βίλα προσφέρει επιπλέον άνεση και ιδιωτικότητα, ιδιαίτερα για οικογένειες και παρέες που ταξιδεύουν μαζί.',
    },
  },

  kitchen: {
    title: { en: 'Fully Equipped Kitchen', el: 'Πλήρως εξοπλισμένη κουζίνα' },
    body: {
      en: 'Prepare breakfast before heading to the beach, enjoy a relaxed dinner at home or simply make yourself a coffee whenever you like. The fully equipped kitchen provides the essentials for a comfortable self-catering holiday.',
      el: 'Ετοιμάστε πρωινό πριν ξεκινήσετε για την παραλία, απολαύστε ένα χαλαρό δείπνο στο σπίτι ή απλώς φτιάξτε έναν καφέ όποτε θέλετε. Η πλήρως εξοπλισμένη κουζίνα διαθέτει όλα τα απαραίτητα για να μαγειρεύετε άνετα στις διακοπές σας.',
    },
  },

  pool: {
    eyebrow: { en: 'Pool & Outdoors', el: 'Πισίνα & εξωτερικοί χώροι' },
    title: { en: 'Relax by the Pool', el: 'Χαλαρώστε δίπλα στην πισίνα' },
    badge: { en: 'Guest-Only Pool', el: 'Πισίνα μόνο για επισκέπτες' },
    body: {
      en: [
        'Enjoy relaxing moments by the swimming pool during your stay in Agios Georgios.',
        'The pool is part of the property and is available exclusively to guests staying at the villa and the apartments within the property. It is not open to the general public. Guests of the villa also have access to the pool bar.',
        'Whether you prefer a refreshing swim or simply relaxing by the pool, it is the perfect place to enjoy the warm Corfu sunshine.',
      ],
      el: [
        'Απολαύστε στιγμές χαλάρωσης δίπλα στην πισίνα κατά τη διαμονή σας στον Άγιο Γεώργιο.',
        'Η πισίνα ανήκει στο ακίνητο και είναι διαθέσιμη αποκλειστικά στους επισκέπτες της βίλας και των διαμερισμάτων του ίδιου ακινήτου. Δεν είναι ανοιχτή στο κοινό. Οι επισκέπτες της βίλας έχουν πρόσβαση και στο μπαρ της πισίνας.',
        'Είτε προτιμάτε μια δροσιστική βουτιά είτε απλώς να χαλαρώσετε δίπλα στο νερό, είναι το ιδανικό σημείο για να απολαύσετε τον ζεστό ήλιο της Κέρκυρας.',
      ],
    } satisfies P,
    note: {
      en: 'Shared exclusively by guests of the villa and the apartments on the property.',
      el: 'Κοινόχρηστη αποκλειστικά για τους επισκέπτες της βίλας και των διαμερισμάτων του ακινήτου.',
    },
  },

  outdoor: {
    title: { en: 'Outdoor Living', el: 'Εξωτερικοί χώροι' },
    body: {
      en: [
        'Make the most of the Corfu sunshine with comfortable outdoor spaces designed for slow mornings, relaxed afternoons and evenings under the Mediterranean sky.',
        'Enjoy the garden surroundings, outdoor dining and pool area, while the nearby sea adds to the atmosphere of this peaceful coastal setting.',
      ],
      el: [
        'Απολαύστε στο έπακρο τον ήλιο της Κέρκυρας σε άνετους εξωτερικούς χώρους, φτιαγμένους για ήρεμα πρωινά, χαλαρά απογεύματα και βραδιές κάτω από τον μεσογειακό ουρανό.',
        'Χαρείτε τον κήπο, τα γεύματα στον εξωτερικό χώρο και τον χώρο της πισίνας, ενώ η κοντινή θάλασσα συμπληρώνει την ατμόσφαιρα αυτού του ήσυχου παραθαλάσσιου τοπίου.',
      ],
    } satisfies P,
  },

  views: {
    title: { en: 'Garden, Pool & Coastal Views', el: 'Θέα σε κήπο, πισίνα & ακτή' },
    body: {
      en: [
        'The villa overlooks the surrounding garden and pool area. Thanks to its close proximity to the coast, the sea is also visible from the property.',
        'Please note that the villa does not have a direct sea view.',
      ],
      el: [
        'Η βίλα έχει θέα στον κήπο και στον χώρο της πισίνας. Χάρη στη μικρή απόσταση από την ακτή, η θάλασσα είναι επίσης ορατή από το ακίνητο.',
        'Σημειώνεται ότι η βίλα δεν έχει άμεση θέα στη θάλασσα.',
      ],
    } satisfies P,
  },

  amenities: {
    eyebrow: { en: 'Amenities', el: 'Παροχές' },
    title: { en: 'Everything for a Comfortable Stay', el: 'Όλα για μια άνετη διαμονή' },
    servicesTitle: { en: 'Additional services', el: 'Επιπλέον υπηρεσίες' },
    servicesNote: {
      en: 'Arranged with your host on request and charged separately. Ask us about these or other services before your stay.',
      el: 'Κανονίζονται κατόπιν επικοινωνίας με τον οικοδεσπότη και χρεώνονται ξεχωριστά. Ρωτήστε μας για αυτές ή για άλλες υπηρεσίες πριν από τη διαμονή σας.',
    },
    rulesTitle: { en: 'House rules', el: 'Κανόνες διαμονής' },
  },

  location: {
    eyebrow: { en: 'Location', el: 'Τοποθεσία' },
    title: { en: 'Discover Agios Georgios, Corfu', el: 'Ανακαλύψτε τον Άγιο Γεώργιο Κέρκυρας' },
    body: {
      en: [
        'Set in Agios Georgios in Southern Corfu, the villa is ideally positioned for guests looking to combine a relaxing beach holiday with the opportunity to explore the island.',
        'The sandy beach is a short walk away, while restaurants, bars and local shops can be found within easy reach.',
        "From here, you can enjoy the beautiful coastline of Southern Corfu, discover Lake Korission and explore some of the island’s most scenic beaches and cultural attractions.",
      ],
      el: [
        'Στον Άγιο Γεώργιο της Νότιας Κέρκυρας, η βίλα βρίσκεται στο ιδανικό σημείο για όσους θέλουν να συνδυάσουν χαλαρές διακοπές δίπλα στη θάλασσα με την εξερεύνηση του νησιού.',
        'Η αμμουδιά απέχει λίγα λεπτά με τα πόδια, ενώ εστιατόρια, μπαρ και τοπικά καταστήματα βρίσκονται σε κοντινή απόσταση.',
        'Από εδώ μπορείτε να απολαύσετε την όμορφη ακτογραμμή της Νότιας Κέρκυρας, να ανακαλύψετε τη λίμνη Κορισσίων και να εξερευνήσετε μερικές από τις πιο γραφικές παραλίες και τα πολιτιστικά αξιοθέατα του νησιού.',
      ],
    } satisfies P,
    highlight: { en: 'from the beach', el: 'από την παραλία' },
    idealFor: { en: 'Ideal for', el: 'Ιδανικό για' },
    idealList: {
      en: ['Beach holidays', 'Relaxation', 'Exploring Southern Corfu', 'Nature', 'Cycling', 'Hiking', 'Water activities', 'Local food', 'Day trips'],
      el: ['Διακοπές στη θάλασσα', 'Χαλάρωση', 'Εξερεύνηση της Νότιας Κέρκυρας', 'Φύση', 'Ποδήλατο', 'Πεζοπορία', 'Θαλάσσιες δραστηριότητες', 'Τοπική κουζίνα', 'Ημερήσιες εκδρομές'],
    } satisfies P,
    mapLink: { en: 'View Agios Georgios on the map', el: 'Δείτε τον Άγιο Γεώργιο στον χάρτη' },
    mapNote: {
      en: 'Map shows the village area, not the exact location of the villa.',
      el: 'Ο χάρτης δείχνει την περιοχή του χωριού, όχι την ακριβή θέση της βίλας.',
    },
    /** Map with the villa's pin (shown once coordinates are set). */
    map: {
      title: { en: 'Find us', el: 'Πού βρισκόμαστε' },
      label: { en: 'Map showing the location of the villa', el: 'Χάρτης με τη θέση της βίλας' },
      directions: { en: 'Get directions', el: 'Οδηγίες διαδρομής' },
      openMaps: { en: 'Open in Google Maps', el: 'Άνοιγμα στους Χάρτες Google' },
      tapHint: { en: 'Tap the map to move it', el: 'Πατήστε στον χάρτη για να τον μετακινήσετε' },
      noscript: { en: 'See the villa’s location in Google Maps using the buttons below.', el: 'Δείτε την τοποθεσία της βίλας στους Χάρτες Google με τα παρακάτω κουμπιά.' },
    },
    /** Illustrated walk from the villa to the beach. */
    route: {
      title: { en: 'From the villa to the beach', el: 'Από τη βίλα στην παραλία' },
      villa: { en: 'The villa', el: 'Η βίλα' },
      beach: { en: 'Agios Georgios Beach', el: 'Παραλία Αγίου Γεωργίου' },
      walkGeneric: { en: 'A short walk', el: 'Λίγα λεπτά με τα πόδια' },
      walkTime: { en: 'About {n} min on foot', el: 'Περίπου {n} λεπτά με τα πόδια' },
    },
  },

  explore: {
    eyebrow: { en: 'Explore Southern Corfu', el: 'Εξερευνήστε τη Νότια Κέρκυρα' },
    title: { en: 'Beaches, Nature & Culture Nearby', el: 'Παραλίες, φύση & πολιτισμός' },
    placesTitle: { en: 'Places to visit', el: 'Μέρη για επίσκεψη' },
    body: {
      en: 'From long sandy beaches to lagoons and historic sights, the villa is a relaxed base for discovering the south of the island and beyond.',
      el: 'Από μεγάλες αμμουδιές μέχρι λιμνοθάλασσες και ιστορικά αξιοθέατα, η βίλα είναι μια χαλαρή αφετηρία για να γνωρίσετε τον νότο του νησιού και όχι μόνο.',
    },
  },

  experiences: {
    /** Sub-heading inside the Explore section. */
    title: { en: 'Things to do', el: 'Τι να κάνετε' },
  },

  gallery: {
    eyebrow: { en: 'Gallery', el: 'Φωτογραφίες' },
    title: { en: 'A Look Around', el: 'Μια ματιά στη βίλα' },
  },

  reviews: {
    eyebrow: { en: 'Guest Reviews', el: 'Κριτικές επισκεπτών' },
    title: { en: 'Rated by Our Guests', el: 'Η γνώμη των επισκεπτών μας' },
    body: {
      en: "Our guests consistently highlight the villa’s cleanliness, comfort, location and welcoming atmosphere.",
      el: 'Οι επισκέπτες μας αναφέρουν σταθερά την καθαριότητα, την άνεση, την τοποθεσία και τη φιλόξενη ατμόσφαιρα της βίλας.',
    },
    quotesTitle: { en: 'In our guests’ words', el: 'Με τα λόγια των επισκεπτών μας' },
    guestOf: { en: '{platform} guest', el: 'Επισκέπτης {platform}' },
    prevReview: { en: 'Previous review', el: 'Προηγούμενη κριτική' },
    nextReview: { en: 'Next review', el: 'Επόμενη κριτική' },
    reviewCount: { en: 'Review {i} of {n}', el: 'Κριτική {i} από {n}' },
    disclaimer: {
      en: 'Aggregate ratings and guest reviews as published on Airbnb and Booking.com; reviews are quoted in their original wording. Current scores and all reviews are available on each platform.',
      el: 'Συνολικές βαθμολογίες και κριτικές επισκεπτών όπως δημοσιεύονται στο Airbnb και στο Booking.com· οι κριτικές παρατίθενται αυτούσιες, στη γλώσσα που γράφτηκαν. Οι τρέχουσες βαθμολογίες και όλες οι κριτικές είναι διαθέσιμες σε κάθε πλατφόρμα.',
    },
  },

  rates: {
    eyebrow: { en: 'Rates', el: 'Τιμές' },
    title: { en: 'Direct Booking Rates', el: 'Τιμές απευθείας κράτησης' },
    season: { en: 'Season', el: 'Περίοδος' },
    month: { en: 'Month', el: 'Μήνας' },
    dates: { en: 'Dates', el: 'Ημερομηνίες' },
    perNight: { en: 'Per night', el: 'Ανά νύχτα' },
    minStay: { en: 'Minimum stay', el: 'Ελάχιστη διαμονή' },
    nights: { en: '{n} nights', el: '{n} νύχτες' },
    night: { en: '1 night', el: '1 νύχτα' },
    cleaning: { en: 'Cleaning fee: {price} per stay.', el: 'Τέλος καθαριότητας: {price} ανά διαμονή.' },
    minStayNote: { en: 'Minimum stay: {n} nights.', el: 'Ελάχιστη διαμονή: {n} νύχτες.' },
    direct: {
      en: 'These rates apply to bookings made directly with us. Prices on Airbnb and Booking.com are set separately and may differ. Choose your dates in the calendar for an indicative total.',
      el: 'Οι τιμές αυτές ισχύουν για κρατήσεις απευθείας μαζί μας. Οι τιμές στο Airbnb και στο Booking.com ορίζονται ξεχωριστά και μπορεί να διαφέρουν. Επιλέξτε ημερομηνίες στο ημερολόγιο για ενδεικτικό σύνολο.',
    },
    cta: { en: 'Check dates', el: 'Δείτε ημερομηνίες' },
  },

  faq: {
    eyebrow: { en: 'FAQ', el: 'Συχνές ερωτήσεις' },
    title: { en: 'Good to Know', el: 'Χρήσιμες πληροφορίες' },
  },

  booking: {
    title: { en: 'Ready for Your Corfu Escape?', el: 'Έτοιμοι για την απόδρασή σας στην Κέρκυρα;' },
    body: {
      en: [
        'Make Stylish Private Poolside Villa your base for a relaxing stay in Southern Corfu.',
        'Close to the beach, with comfortable accommodation for up to six guests and everything you need for a carefree island holiday.',
      ],
      el: [
        'Κάντε τη Stylish Private Poolside Villa τη βάση σας για μια χαλαρή διαμονή στη Νότια Κέρκυρα.',
        'Κοντά στην παραλία, με άνετη φιλοξενία για έως έξι άτομα και ό,τι χρειάζεστε για ξέγνοιαστες διακοπές στο νησί.',
      ],
    } satisfies P,
    cta: { en: 'Check Availability', el: 'Ελέγξτε διαθεσιμότητα' },
    secondary: { en: 'Contact Us', el: 'Επικοινωνία' },
    platformsNote: {
      en: 'Prices are shown on the booking platforms.',
      el: 'Οι τιμές εμφανίζονται στις πλατφόρμες κρατήσεων.',
    },
    /** Shown instead of platformsNote once rates are configured. */
    ratesNote: { en: 'Direct booking from {price} per night.', el: 'Απευθείας κράτηση από {price} τη νύχτα.' },
    ratesLink: { en: 'See the rates', el: 'Δείτε τις τιμές' },
    /** Availability calendar & booking widget. */
    widget: {
      title: { en: 'Choose your dates', el: 'Επιλέξτε ημερομηνίες' },
      checkIn: { en: 'Check-in', el: 'Άφιξη' },
      checkOut: { en: 'Check-out', el: 'Αναχώρηση' },
      selectDate: { en: 'Select date', el: 'Επιλέξτε' },
      prevMonth: { en: 'Previous month', el: 'Προηγούμενος μήνας' },
      nextMonth: { en: 'Next month', el: 'Επόμενος μήνας' },
      clear: { en: 'Clear dates', el: 'Εκκαθάριση' },
      guests: { en: 'Guests', el: 'Επισκέπτες' },
      adults: { en: 'Adults', el: 'Ενήλικες' },
      children: { en: 'Children', el: 'Παιδιά' },
      childAge: { en: 'Age of child {n}', el: 'Ηλικία παιδιού {n}' },
      years: { en: '{n} years', el: '{n} ετών' },
      year1: { en: '1 year', el: '1 έτους' },
      under1: { en: 'Under 1', el: 'Κάτω του 1' },
      maxGuests: { en: 'Up to {n} guests in total.', el: 'Έως {n} άτομα συνολικά.' },
      nights: { en: '{n} nights', el: '{n} νύχτες' },
      night: { en: '1 night', el: '1 νύχτα' },
      legendAvailable: { en: 'Available', el: 'Διαθέσιμο' },
      legendBooked: { en: 'Booked', el: 'Κλεισμένο' },
      legendSelected: { en: 'Your stay', el: 'Η διαμονή σας' },
      dayAvailable: { en: 'available', el: 'διαθέσιμη' },
      dayBooked: { en: 'booked', el: 'κλεισμένη' },
      dayCheckoutOnly: { en: 'check-out only', el: 'μόνο αναχώρηση' },
      pickCheckIn: { en: 'Select your check-in date.', el: 'Επιλέξτε ημερομηνία άφιξης.' },
      pickCheckOut: { en: 'Now select your check-out date.', el: 'Τώρα επιλέξτε ημερομηνία αναχώρησης.' },
      loading: { en: 'Loading availability…', el: 'Φόρτωση διαθεσιμότητας…' },
      synced: {
        en: 'Booked dates are synced from Airbnb and Booking.com. Availability is confirmed when you book.',
        el: 'Οι κλεισμένες ημερομηνίες συγχρονίζονται από Airbnb και Booking.com. Η διαθεσιμότητα επιβεβαιώνεται κατά την κράτηση.',
      },
      notSynced: {
        en: 'Choose your dates and guests and send us a booking request, or check availability on Airbnb or Booking.com.',
        el: 'Επιλέξτε ημερομηνίες και άτομα και στείλτε μας αίτημα κράτησης, ή δείτε τη διαθεσιμότητα στο Airbnb ή στο Booking.com.',
      },
      continueOn: { en: 'Continue on {platform}', el: 'Συνέχεια στο {platform}' },
      bookDirect: { en: 'Book directly with us', el: 'Κλείστε απευθείας μαζί μας' },
      orPlatforms: { en: 'Or book via Airbnb or Booking.com', el: 'Ή κλείστε μέσω Airbnb ή Booking.com' },
      request: { en: 'Send a booking request', el: 'Αίτημα κράτησης' },
      whatsapp: { en: 'Ask on WhatsApp', el: 'Ρωτήστε στο WhatsApp' },
      whatsappMessage: {
        en: 'Hello, I would like to book Stylish Private Poolside Villa from {in} to {out} ({nights}) for {guests}. Is it available?',
        el: 'Γεια σας, θα ήθελα να κλείσω τη Stylish Private Poolside Villa από {in} έως {out} ({nights}) για {guests}. Είναι διαθέσιμη;',
      },
      guestsSummaryAdults: { en: '{n} adults', el: '{n} ενήλικες' },
      guestsSummaryAdult: { en: '1 adult', el: '1 ενήλικα' },
      guestsSummaryChildren: { en: '{n} children', el: '{n} παιδιά' },
      guestsSummaryChild: { en: '1 child', el: '1 παιδί' },
      minStay: { en: 'Minimum stay: {n} nights.', el: 'Ελάχιστη διαμονή: {n} νύχτες.' },
      estimate: { en: 'Indicative total: {price}', el: 'Ενδεικτικό σύνολο: {price}' },
      inclCleaning: { en: 'incl. cleaning fee {price}', el: 'με τέλος καθαριότητας {price}' },
      estimateNote: { en: 'The final price is confirmed with your booking.', el: 'Η τελική τιμή επιβεβαιώνεται με την κράτηση.' },
      priceOnRequest: { en: 'Price on request for these dates.', el: 'Τιμή κατόπιν αιτήματος για αυτές τις ημερομηνίες.' },
      termsLink: { en: 'Booking terms', el: 'Όροι κράτησης' },
      unknown: {
        en: 'Availability cannot be confirmed right now. Please check it on Airbnb or Booking.com, or contact us.',
        el: 'Η διαθεσιμότητα δεν μπορεί να επιβεβαιωθεί αυτή τη στιγμή. Δείτε τη στο Airbnb ή στο Booking.com, ή επικοινωνήστε μαζί μας.',
      },
      stepDates: { en: 'Dates', el: 'Ημερομηνίες' },
      stepBook: { en: 'How to book', el: 'Τρόπος κράτησης' },
      needDates: { en: 'Select check-in and check-out dates first.', el: 'Επιλέξτε πρώτα ημερομηνίες άφιξης και αναχώρησης.' },
    },
  },

  contact: {
    title: { en: 'Contact', el: 'Επικοινωνία' },
    viaPlatforms: {
      en: 'Have a question before booking? Contact us directly by phone, WhatsApp or email.',
      el: 'Έχετε κάποια ερώτηση πριν από την κράτηση; Επικοινωνήστε απευθείας μαζί μας τηλεφωνικά, μέσω WhatsApp ή με email.',
    },
    whatsappMessage: {
      en: 'Hello, I am interested in Stylish Private Poolside Villa in Agios Georgios.',
      el: 'Γεια σας, ενδιαφέρομαι για τη Stylish Private Poolside Villa στον Άγιο Γεώργιο.',
    },
    eyebrow: { en: 'Contact', el: 'Επικοινωνία' },
    heading: { en: 'Get in Touch', el: 'Επικοινωνήστε μαζί μας' },
    intro: {
      en: 'Questions about the villa, the area or your stay? Send us a message and we will get back to you.',
      el: 'Έχετε ερωτήσεις για τη βίλα, την περιοχή ή τη διαμονή σας; Στείλτε μας μήνυμα και θα σας απαντήσουμε.',
    },
    directTitle: { en: 'Contact us directly', el: 'Απευθείας επικοινωνία' },
  },

  /** Shared form texts (contact form and booking request). */
  forms: {
    name: { en: 'Full name', el: 'Ονοματεπώνυμο' },
    email: { en: 'Email', el: 'Email' },
    phone: { en: 'Phone (optional)', el: 'Τηλέφωνο (προαιρετικό)' },
    message: { en: 'Message', el: 'Μήνυμα' },
    messageOptional: { en: 'Message (optional)', el: 'Μήνυμα (προαιρετικό)' },
    send: { en: 'Send message', el: 'Αποστολή μηνύματος' },
    sendRequest: { en: 'Send request', el: 'Αποστολή αιτήματος' },
    sending: { en: 'Sending…', el: 'Αποστολή…' },
    required: { en: 'Required', el: 'Υποχρεωτικό' },
    invalidEmail: { en: 'Please enter a valid email address.', el: 'Συμπληρώστε ένα έγκυρο email.' },
    fillRequired: { en: 'Please fill in the required fields.', el: 'Συμπληρώστε τα υποχρεωτικά πεδία.' },
    success: {
      en: 'Thank you! Your message has been sent. We will reply as soon as possible.',
      el: 'Ευχαριστούμε! Το μήνυμά σας στάλθηκε. Θα σας απαντήσουμε το συντομότερο.',
    },
    requestSuccess: {
      en: 'Thank you! Your request has been sent. This is not yet a confirmed booking — we will contact you about availability and details.',
      el: 'Ευχαριστούμε! Το αίτημά σας στάλθηκε. Δεν αποτελεί ακόμα επιβεβαιωμένη κράτηση — θα επικοινωνήσουμε μαζί σας για τη διαθεσιμότητα και τις λεπτομέρειες.',
    },
    error: {
      en: 'Sorry, the message could not be sent. Please try again or contact us by phone, WhatsApp or email.',
      el: 'Δυστυχώς το μήνυμα δεν στάλθηκε. Δοκιμάστε ξανά ή επικοινωνήστε μαζί μας τηλεφωνικά, μέσω WhatsApp ή με email.',
    },
    mailFallback: {
      en: 'Your email app will open with the message ready to send.',
      el: 'Θα ανοίξει η εφαρμογή email σας με το μήνυμα έτοιμο για αποστολή.',
    },
    privacy: {
      en: 'We use your details only to reply to your message. See our {link}.',
      el: 'Χρησιμοποιούμε τα στοιχεία σας μόνο για να απαντήσουμε στο μήνυμά σας. Δείτε την {link}.',
    },
    privacyLink: { en: 'Privacy Policy', el: 'Πολιτική Απορρήτου' },
    requestNote: {
      en: 'A request is not a confirmed booking. We will reply to confirm availability and details.',
      el: 'Το αίτημα δεν αποτελεί επιβεβαιωμένη κράτηση. Θα σας απαντήσουμε για να επιβεβαιώσουμε διαθεσιμότητα και λεπτομέρειες.',
    },
    /**
     * Texts of the emails the OWNER receives (Formspree). Always Greek, whatever
     * language the visitor used — change here if the owner prefers another language.
     */
    owner: {
      locale: 'el-GR',
      subjectGeneral: 'Νέο μήνυμα από το site · {name}',
      subjectBooking: 'Νέο αίτημα κράτησης: {in} – {out} · {guests} · {name}',
      guestsOne: '1 άτομο',
      guestsMany: '{n} άτομα',
      checkIn: 'Άφιξη',
      checkOut: 'Αναχώρηση',
      nights: 'Νύχτες',
      adults: 'Ενήλικες',
      children: 'Παιδιά',
      childrenAges: '{n} (ηλικίες: {ages})',
      under1: 'κάτω του 1',
      totalGuests: 'Σύνολο ατόμων',
      name: 'Όνομα',
      phone: 'Τηλέφωνο',
      message: 'Μήνυμα',
      estimate: 'Ενδεικτική τιμή που είδε ο επισκέπτης',
      language: 'Γλώσσα επισκέπτη',
      languages: { en: 'Αγγλικά', el: 'Ελληνικά' } as Record<string, string>,
    },
    stay: { en: 'Stay', el: 'Διαμονή' },
  },
};
