/**
 * EXPLORE SOUTHERN CORFU — destination cards.
 * Distances are deliberately omitted until verified. To show one, set
 * `distance` (e.g. { en: 'approx. 5 km', el: 'περίπου 5 χλμ.' }).
 */
import type { Localized } from '@/i18n/config';
import type { IconName } from '@/components/ui/icons';
import type { ImageKey } from './gallery';

export interface Destination {
  id: string;
  name: Localized;
  kind: Localized;
  description: Localized;
  icon: IconName;
  image: ImageKey;
  distance: Localized | null;
}

export const destinations: Destination[] = [
  {
    id: 'issos-beach',
    name: { en: 'Issos Beach', el: 'Παραλία Ισσός' },
    kind: { en: 'Beach', el: 'Παραλία' },
    description: {
      en: 'A long, natural sandy beach backed by dunes, stretching along the coast beside Lake Korission.',
      el: 'Μεγάλη, φυσική αμμουδιά με αμμοθίνες, που απλώνεται κατά μήκος της ακτής δίπλα στη λιμνοθάλασσα Κορισσίων.',
    },
    icon: 'waves',
    image: 'issos',
    distance: null,
  },
  {
    id: 'lake-korission',
    name: { en: 'Lake Korission', el: 'Λίμνη Κορισσίων' },
    kind: { en: 'Nature', el: 'Φύση' },
    description: {
      en: 'A coastal lagoon separated from the sea by sand dunes — a peaceful protected landscape for walks and birdwatching.',
      el: 'Παράκτια λιμνοθάλασσα που χωρίζεται από τη θάλασσα με αμμοθίνες — ένα ήσυχο προστατευόμενο τοπίο για περιπάτους και παρατήρηση πουλιών.',
    },
    icon: 'bird',
    image: 'lakeKorission',
    distance: null,
  },
  {
    id: 'marathias-beach',
    name: { en: 'Marathias Beach', el: 'Παραλία Μαραθιά' },
    kind: { en: 'Beach', el: 'Παραλία' },
    description: {
      en: 'A relaxed sandy beach on the southern coast of Corfu, ideal for a slow beach day.',
      el: 'Ήσυχη αμμουδιά στη νότια ακτή της Κέρκυρας, ιδανική για μια ήρεμη μέρα στη θάλασσα.',
    },
    icon: 'sun',
    image: 'marathias',
    distance: null,
  },
  {
    id: 'corfu-town',
    name: { en: 'Corfu Town', el: 'Πόλη της Κέρκυρας' },
    kind: { en: 'Culture', el: 'Πολιτισμός' },
    description: {
      en: 'The UNESCO-listed Old Town, with Venetian fortresses, elegant squares and narrow lanes — and nearby Pontikonisi, the famous "Mouse Island".',
      el: 'Η Παλιά Πόλη, Μνημείο Παγκόσμιας Κληρονομιάς της UNESCO, με ενετικά φρούρια, κομψές πλατείες και γραφικά καντούνια — και κοντά το διάσημο Ποντικονήσι.',
    },
    icon: 'landmark',
    image: 'corfuTown',
    distance: null,
  },
  {
    id: 'achilleion',
    name: { en: 'Achilleion', el: 'Αχίλλειο' },
    kind: { en: 'Culture', el: 'Πολιτισμός' },
    description: {
      en: 'The palace built for Empress Elisabeth of Austria ("Sissi"), with landscaped gardens and classical statues.',
      el: 'Το ανάκτορο που χτίστηκε για την αυτοκράτειρα Ελισάβετ της Αυστρίας («Σίσι»), με διαμορφωμένους κήπους και κλασικά αγάλματα.',
    },
    icon: 'flower',
    image: 'achilleion',
    distance: null,
  },
];
