/** EXPERIENCES — things to enjoy while staying at the villa. */
import type { Localized } from '@/i18n/config';
import type { IconName } from '@/components/ui/icons';

export interface Experience {
  id: string;
  icon: IconName;
  title: Localized;
  text: Localized;
}

export const experiences: Experience[] = [
  {
    id: 'beach-days',
    icon: 'sun',
    title: { en: 'Beach Days', el: 'Μέρες στην παραλία' },
    text: {
      en: 'Spend your days swimming, relaxing and enjoying the sandy beaches of Southern Corfu.',
      el: 'Περάστε τις μέρες σας κολυμπώντας, χαλαρώνοντας και απολαμβάνοντας τις αμμουδιές της Νότιας Κέρκυρας.',
    },
  },
  {
    id: 'nature',
    icon: 'leaf',
    title: { en: 'Explore Nature', el: 'Εξερευνήστε τη φύση' },
    text: {
      en: 'Discover Lake Korission, coastal landscapes and the natural beauty surrounding Agios Georgios.',
      el: 'Ανακαλύψτε τη λίμνη Κορισσίων, τα παράκτια τοπία και τη φυσική ομορφιά γύρω από τον Άγιο Γεώργιο.',
    },
  },
  {
    id: 'cycling-hiking',
    icon: 'bike',
    title: { en: 'Cycling & Hiking', el: 'Ποδήλατο & πεζοπορία' },
    text: {
      en: 'Explore the surrounding area at your own pace by bike or on foot.',
      el: 'Εξερευνήστε την περιοχή με τον δικό σας ρυθμό, με ποδήλατο ή με τα πόδια.',
    },
  },
  {
    id: 'water',
    icon: 'sailboat',
    title: { en: 'Water Activities', el: 'Θαλάσσιες δραστηριότητες' },
    text: {
      en: 'Enjoy the sea with activities such as swimming, diving and other water-based experiences.',
      el: 'Απολαύστε τη θάλασσα με κολύμπι, καταδύσεις και άλλες θαλάσσιες δραστηριότητες.',
    },
  },
  {
    id: 'food',
    icon: 'utensils-crossed',
    title: { en: 'Local Food', el: 'Τοπική κουζίνα' },
    text: {
      en: 'Discover traditional Corfiot cuisine, fresh seafood and local restaurants in the surrounding area.',
      el: 'Γνωρίστε την παραδοσιακή κερκυραϊκή κουζίνα, φρέσκα θαλασσινά και τοπικές ταβέρνες της περιοχής.',
    },
  },
  {
    id: 'day-trips',
    icon: 'compass',
    title: { en: 'Day Trips', el: 'Ημερήσιες εκδρομές' },
    text: {
      en: 'Use the villa as your base for exploring Corfu Town, Achilleion and other destinations across the island.',
      el: 'Κάντε τη βίλα την αφετηρία σας για να εξερευνήσετε την πόλη της Κέρκυρας, το Αχίλλειο και άλλους προορισμούς του νησιού.',
    },
  },
];
