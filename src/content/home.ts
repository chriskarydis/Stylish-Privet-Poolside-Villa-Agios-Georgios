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
    primaryCta: { en: 'Book Your Stay', el: 'Κάντε κράτηση' },
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
        "Located just 500 metres from the beach, the villa offers an ideal base for enjoying the relaxed atmosphere and natural beauty of Corfu's south.",
        'With two bedrooms, two bathrooms and a comfortable living area with a sofa bed, the villa can accommodate up to six guests. A fully equipped kitchen, washing machine, air conditioning, Wi-Fi and private parking provide everything you need for a comfortable stay.',
        'Outside, guests can enjoy the garden surroundings, outdoor dining and access to the swimming pool shared exclusively by guests staying at the villa and the neighbouring apartments. The property does not have a direct sea view, although the sea can be seen from the property due to its proximity to the coast.',
      ],
      el: [
        'Καλώς ήρθατε στη Stylish Private Poolside Villa, ένα άνετο και προσεγμένο εξοχικό σπίτι στον Άγιο Γεώργιο της Νότιας Κέρκυρας.',
        'Μόλις 500 μέτρα από την παραλία, η βίλα είναι ιδανική βάση για να απολαύσετε τη χαλαρή ατμόσφαιρα και τη φυσική ομορφιά του νότου της Κέρκυρας.',
        'Με δύο υπνοδωμάτια, δύο μπάνια και ένα άνετο σαλόνι με καναπέ-κρεβάτι, η βίλα φιλοξενεί έως έξι άτομα. Η πλήρως εξοπλισμένη κουζίνα, το πλυντήριο ρούχων, ο κλιματισμός, το Wi-Fi και ο ιδιωτικός χώρος στάθμευσης προσφέρουν ό,τι χρειάζεστε για μια άνετη διαμονή.',
        'Έξω, οι επισκέπτες απολαμβάνουν τον κήπο, το υπαίθριο φαγητό και την πισίνα, την οποία μοιράζονται αποκλειστικά οι επισκέπτες της βίλας και των γειτονικών διαμερισμάτων του ακινήτου. Η βίλα δεν έχει άμεση θέα στη θάλασσα, ωστόσο η θάλασσα είναι ορατή από το ακίνητο λόγω της μικρής απόστασης από την ακτή.',
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
      el: 'Ετοιμάστε πρωινό πριν ξεκινήσετε για την παραλία, απολαύστε ένα χαλαρό δείπνο στο σπίτι ή απλώς φτιάξτε έναν καφέ όποτε θέλετε. Η πλήρως εξοπλισμένη κουζίνα διαθέτει όλα τα απαραίτητα για άνετες διακοπές με αυτοεξυπηρέτηση.',
    },
  },

  pool: {
    eyebrow: { en: 'Pool & Outdoors', el: 'Πισίνα & Εξωτερικοί χώροι' },
    title: { en: 'Relax by the Pool', el: 'Χαλαρώστε δίπλα στην πισίνα' },
    badge: { en: 'Guest-Only Pool', el: 'Πισίνα μόνο για επισκέπτες' },
    body: {
      en: [
        'Enjoy relaxing moments by the swimming pool during your stay in Agios Georgios.',
        'The pool is part of the property and is available exclusively to guests staying at the villa and the apartments within the property. It is not open to the general public.',
        'Whether you prefer a refreshing swim or simply relaxing by the pool, it is the perfect place to enjoy the warm Corfu sunshine.',
      ],
      el: [
        'Απολαύστε στιγμές χαλάρωσης δίπλα στην πισίνα κατά τη διαμονή σας στον Άγιο Γεώργιο.',
        'Η πισίνα ανήκει στο ακίνητο και είναι διαθέσιμη αποκλειστικά στους επισκέπτες της βίλας και των διαμερισμάτων του ίδιου ακινήτου. Δεν είναι ανοιχτή στο κοινό.',
        'Είτε προτιμάτε μια δροσιστική βουτιά είτε απλώς να χαλαρώσετε δίπλα στο νερό, είναι το ιδανικό σημείο για να απολαύσετε τον ζεστό ήλιο της Κέρκυρας.',
      ],
    } satisfies P,
    note: {
      en: 'Shared exclusively by guests of the villa and the apartments on the property.',
      el: 'Κοινόχρηστη αποκλειστικά για τους επισκέπτες της βίλας και των διαμερισμάτων του ακινήτου.',
    },
  },

  outdoor: {
    title: { en: 'Outdoor Living', el: 'Ζωή στην ύπαιθρο' },
    body: {
      en: [
        'Make the most of the Corfu sunshine with comfortable outdoor spaces designed for slow mornings, relaxed afternoons and evenings under the Mediterranean sky.',
        'Enjoy the garden surroundings, outdoor dining and pool area, while the nearby sea adds to the atmosphere of this peaceful coastal setting.',
      ],
      el: [
        'Απολαύστε στο έπακρο τον ήλιο της Κέρκυρας σε άνετους εξωτερικούς χώρους, φτιαγμένους για ήρεμα πρωινά, χαλαρά απογεύματα και βραδιές κάτω από τον μεσογειακό ουρανό.',
        'Χαρείτε τον κήπο, το υπαίθριο φαγητό και τον χώρο της πισίνας, ενώ η κοντινή θάλασσα συμπληρώνει την ατμόσφαιρα αυτού του ήσυχου παραθαλάσσιου τοπίου.',
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
      en: 'May be available on request. Availability is not guaranteed and additional charges may apply — please ask before your stay.',
      el: 'Ενδέχεται να είναι διαθέσιμες κατόπιν αιτήματος. Η διαθεσιμότητα δεν είναι εγγυημένη και ενδέχεται να υπάρχει επιπλέον χρέωση — ρωτήστε μας πριν από τη διαμονή σας.',
    },
    rulesTitle: { en: 'House rules', el: 'Κανόνες διαμονής' },
  },

  location: {
    eyebrow: { en: 'Location', el: 'Τοποθεσία' },
    title: { en: 'Discover Agios Georgios, Corfu', el: 'Ανακαλύψτε τον Άγιο Γεώργιο Κέρκυρας' },
    body: {
      en: [
        'Set in Agios Georgios in Southern Corfu, the villa is ideally positioned for guests looking to combine a relaxing beach holiday with the opportunity to explore the island.',
        'The sandy beach is approximately 500 metres away, while restaurants, bars and local shops can be found within easy reach.',
        "From here, you can enjoy the beautiful coastline of Southern Corfu, discover Lake Korission and explore some of the island's most scenic beaches and cultural attractions.",
      ],
      el: [
        'Στον Άγιο Γεώργιο της Νότιας Κέρκυρας, η βίλα βρίσκεται στο ιδανικό σημείο για όσους θέλουν να συνδυάσουν χαλαρές διακοπές δίπλα στη θάλασσα με την εξερεύνηση του νησιού.',
        'Η αμμουδιά απέχει περίπου 500 μέτρα, ενώ εστιατόρια, μπαρ και τοπικά καταστήματα βρίσκονται σε κοντινή απόσταση.',
        'Από εδώ μπορείτε να απολαύσετε την όμορφη ακτογραμμή της Νότιας Κέρκυρας, να ανακαλύψετε τη λίμνη Κορισσίων και να εξερευνήσετε μερικές από τις πιο γραφικές παραλίες και πολιτιστικά αξιοθέατα του νησιού.',
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
  },

  explore: {
    eyebrow: { en: 'Explore Southern Corfu', el: 'Εξερευνήστε τη Νότια Κέρκυρα' },
    title: { en: 'Beaches, Nature & Culture Nearby', el: 'Παραλίες, φύση & πολιτισμός' },
    body: {
      en: 'From long sandy beaches to lagoons and historic sights, the villa is a relaxed base for discovering the south of the island and beyond.',
      el: 'Από μεγάλες αμμουδιές μέχρι λιμνοθάλασσες και ιστορικά αξιοθέατα, η βίλα είναι μια χαλαρή αφετηρία για να γνωρίσετε τον νότο του νησιού και όχι μόνο.',
    },
  },

  experiences: {
    eyebrow: { en: 'Experiences', el: 'Εμπειρίες' },
    title: { en: 'Days in Southern Corfu', el: 'Μέρες στη Νότια Κέρκυρα' },
  },

  gallery: {
    eyebrow: { en: 'Gallery', el: 'Φωτογραφίες' },
    title: { en: 'A Look Around', el: 'Μια ματιά στη βίλα' },
  },

  reviews: {
    eyebrow: { en: 'Guest Reviews', el: 'Κριτικές επισκεπτών' },
    title: { en: 'Rated by Our Guests', el: 'Η γνώμη των επισκεπτών μας' },
    body: {
      en: "Our guests consistently highlight the villa's cleanliness, comfort, location and welcoming atmosphere.",
      el: 'Οι επισκέπτες μας αναφέρουν σταθερά την καθαριότητα, την άνεση, την τοποθεσία και τη φιλόξενη ατμόσφαιρα της βίλας.',
    },
    disclaimer: {
      en: 'Aggregate ratings as shown on Airbnb and Booking.com. Current scores and full reviews are available on each platform.',
      el: 'Συνολικές βαθμολογίες όπως εμφανίζονται στο Airbnb και στο Booking.com. Οι τρέχουσες βαθμολογίες και όλες οι κριτικές είναι διαθέσιμες σε κάθε πλατφόρμα.',
    },
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
        'Just 500 metres from the beach, with comfortable accommodation for up to six guests and everything you need for a carefree island holiday.',
      ],
      el: [
        'Κάντε τη Stylish Private Poolside Villa τη βάση σας για μια χαλαρή διαμονή στη Νότια Κέρκυρα.',
        'Μόλις 500 μέτρα από την παραλία, με άνετη φιλοξενία για έως έξι άτομα και ό,τι χρειάζεστε για ξέγνοιαστες διακοπές στο νησί.',
      ],
    } satisfies P,
    cta: { en: 'Check Availability', el: 'Ελέγξτε διαθεσιμότητα' },
    secondary: { en: 'Contact Us', el: 'Επικοινωνία' },
    platformsNote: {
      en: 'Availability and prices are shown on the booking platforms.',
      el: 'Η διαθεσιμότητα και οι τιμές εμφανίζονται στις πλατφόρμες κρατήσεων.',
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
  },
};
