/**
 * FAQ — shown on the homepage and published as FAQPage structured data.
 * Keep answers factual and consistent with src/content/property.ts.
 */
import type { Localized } from '@/i18n/config';

export interface FaqItem {
  id: string;
  question: Localized;
  answer: Localized;
}

export const faqs: FaqItem[] = [
  {
    id: 'guests',
    question: { en: 'How many guests can stay at the villa?', el: 'Πόσα άτομα μπορεί να φιλοξενήσει η βίλα;' },
    answer: { en: 'The villa can accommodate up to 6 guests.', el: 'Η βίλα μπορεί να φιλοξενήσει έως 6 άτομα.' },
  },
  {
    id: 'bedrooms',
    question: { en: 'How many bedrooms does the villa have?', el: 'Πόσα υπνοδωμάτια έχει η βίλα;' },
    answer: {
      en: 'The villa has two bedrooms: one with a double bed and one with two single beds. The living room also features a sofa bed.',
      el: 'Η βίλα διαθέτει δύο υπνοδωμάτια: ένα με διπλό κρεβάτι και ένα με δύο μονά κρεβάτια. Στο σαλόνι υπάρχει επίσης καναπές-κρεβάτι.',
    },
  },
  {
    id: 'beach',
    question: { en: 'How far is the beach?', el: 'Πόσο απέχει η παραλία;' },
    answer: {
      en: 'The beach is approximately 500 metres from the villa.',
      el: 'Η παραλία απέχει περίπου 500 μέτρα από τη βίλα.',
    },
  },
  {
    id: 'pool',
    question: { en: 'Is the swimming pool private?', el: 'Είναι ιδιωτική η πισίνα;' },
    answer: {
      en: 'The swimming pool is part of the property and is exclusively available to guests staying at the villa and the apartments on the property. It is not open to the general public.',
      el: 'Η πισίνα ανήκει στο ακίνητο και είναι διαθέσιμη αποκλειστικά στους επισκέπτες της βίλας και των διαμερισμάτων του ίδιου ακινήτου. Δεν είναι ανοιχτή στο κοινό.',
    },
  },
  {
    id: 'views',
    question: { en: 'Is there a sea view?', el: 'Υπάρχει θέα στη θάλασσα;' },
    answer: {
      en: 'The villa does not have a direct sea view. However, the sea is visible from the property due to its close proximity to the coast. The main views are towards the garden and pool.',
      el: 'Η βίλα δεν έχει άμεση θέα στη θάλασσα. Ωστόσο, η θάλασσα είναι ορατή από το ακίνητο λόγω της μικρής απόστασης από την ακτή. Η κύρια θέα είναι προς τον κήπο και την πισίνα.',
    },
  },
  {
    id: 'ac',
    question: { en: 'Is there air conditioning?', el: 'Υπάρχει κλιματισμός;' },
    answer: { en: 'Yes. The villa is air-conditioned.', el: 'Ναι. Η βίλα διαθέτει κλιματισμό.' },
  },
  {
    id: 'wifi',
    question: { en: 'Is there Wi-Fi?', el: 'Υπάρχει Wi-Fi;' },
    answer: { en: 'Yes. Free Wi-Fi is available.', el: 'Ναι. Παρέχεται δωρεάν Wi-Fi.' },
  },
  {
    id: 'washing-machine',
    question: { en: 'Is there a washing machine?', el: 'Υπάρχει πλυντήριο ρούχων;' },
    answer: {
      en: 'Yes. A washing machine is available in the villa.',
      el: 'Ναι. Η βίλα διαθέτει πλυντήριο ρούχων.',
    },
  },
  {
    id: 'parking',
    question: { en: 'Is parking available?', el: 'Υπάρχει χώρος στάθμευσης;' },
    answer: {
      en: 'Yes. Free private parking is available on the property.',
      el: 'Ναι. Υπάρχει δωρεάν ιδιωτικός χώρος στάθμευσης εντός του ακινήτου.',
    },
  },
  {
    id: 'pets',
    question: { en: 'Are pets allowed?', el: 'Επιτρέπονται τα κατοικίδια;' },
    answer: { en: 'Pets are not allowed.', el: 'Τα κατοικίδια δεν επιτρέπονται.' },
  },
  {
    id: 'smoking',
    question: { en: 'Is smoking allowed?', el: 'Επιτρέπεται το κάπνισμα;' },
    answer: {
      en: 'Smoking is not permitted inside the villa.',
      el: 'Το κάπνισμα δεν επιτρέπεται στους εσωτερικούς χώρους της βίλας.',
    },
  },
  {
    id: 'children',
    question: { en: 'Are children welcome?', el: 'Είναι ευπρόσδεκτα τα παιδιά;' },
    answer: {
      en: 'Yes, children are welcome. Please note that cots and high chairs are not available.',
      el: 'Ναι, τα παιδιά είναι ευπρόσδεκτα. Σημειώνεται ότι δεν διατίθενται βρεφικά κρεβάτια και παιδικά καρεκλάκια.',
    },
  },
  {
    id: 'children-pool',
    question: { en: 'Can children use the pool?', el: 'Μπορούν τα παιδιά να χρησιμοποιήσουν την πισίνα;' },
    answer: {
      en: 'No. Children are not allowed in the pool.',
      el: 'Όχι. Τα παιδιά δεν επιτρέπονται στην πισίνα.',
    },
  },
  {
    id: 'check-in',
    question: { en: 'What time is check-in?', el: 'Τι ώρα είναι η άφιξη (check-in);' },
    answer: { en: 'Check-in is from 15:00.', el: 'Η άφιξη (check-in) είναι από τις 15:00.' },
  },
  {
    id: 'check-out',
    question: { en: 'What time is check-out?', el: 'Τι ώρα είναι η αναχώρηση (check-out);' },
    answer: { en: 'Check-out is before 10:00.', el: 'Η αναχώρηση (check-out) είναι έως τις 10:00.' },
  },
  {
    id: 'minimum-stay',
    question: { en: 'Is there a minimum stay?', el: 'Υπάρχει ελάχιστη διαμονή;' },
    answer: { en: 'Yes. The minimum stay is 3 nights.', el: 'Ναι. Η ελάχιστη διαμονή είναι 3 νύχτες.' },
  },
  {
    id: 'season',
    question: { en: 'When is the villa open?', el: 'Ποιους μήνες λειτουργεί η βίλα;' },
    answer: {
      en: 'The villa is open from May to October. For a stay in other months, contact us and we will let you know whether it can be arranged.',
      el: 'Η βίλα λειτουργεί από τον Μάιο έως τον Οκτώβριο. Για διαμονή τους υπόλοιπους μήνες, επικοινωνήστε μαζί μας και θα σας ενημερώσουμε αν μπορεί να κανονιστεί.',
    },
  },
];
