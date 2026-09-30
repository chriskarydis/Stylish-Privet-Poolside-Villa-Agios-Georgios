/**
 * AMENITIES — confirmed amenities only. Add or remove items freely;
 * every list on the website is generated from this file.
 */
import type { Localized } from '@/i18n/config';
import type { IconName } from '@/components/ui/icons';

export interface Amenity {
  icon: IconName;
  label: Localized;
}

export interface AmenityCategory {
  id: string;
  icon: IconName;
  title: Localized;
  items: Amenity[];
}

const a = (icon: IconName, en: string, el: string): Amenity => ({ icon, label: { en, el } });

export const amenityCategories: AmenityCategory[] = [
  {
    id: 'comfort',
    icon: 'house',
    title: { en: 'Comfort', el: 'Άνεση' },
    items: [
      a('snowflake', 'Air conditioning', 'Κλιματισμός'),
      a('washing-machine', 'Washing machine', 'Πλυντήριο ρούχων'),
      a('hairdryer', 'Hairdryer', 'Σεσουάρ μαλλιών'),
      a('iron', 'Iron and ironing facilities', 'Σίδερο και εξοπλισμός σιδερώματος'),
      a('linen', 'Bed linen', 'Λευκά είδη κρεβατιού'),
      a('towel', 'Towels', 'Πετσέτες'),
    ],
  },
  {
    id: 'entertainment',
    icon: 'tv',
    title: { en: 'Entertainment', el: 'Ψυχαγωγία' },
    items: [a('tv', 'Flat-screen TV', 'Τηλεόραση επίπεδης οθόνης'), a('wifi', 'Free Wi-Fi', 'Δωρεάν Wi-Fi')],
  },
  {
    id: 'kitchen',
    icon: 'cooking-pot',
    title: { en: 'Kitchen', el: 'Κουζίνα' },
    items: [
      a('refrigerator', 'Refrigerator', 'Ψυγείο'),
      a('oven', 'Oven', 'Φούρνος'),
      a('stovetop', 'Stovetop', 'Εστίες μαγειρέματος'),
      a('toaster', 'Toaster', 'Φρυγανιέρα'),
      a('kettle', 'Kettle', 'Βραστήρας'),
      a('utensils', 'Kitchenware', 'Σκεύη κουζίνας'),
      a('coffee', 'Tea & coffee facilities', 'Εξοπλισμός για τσάι & καφέ'),
    ],
  },
  {
    id: 'outdoor',
    icon: 'sun',
    title: { en: 'Outdoor', el: 'Εξωτερικοί χώροι' },
    items: [
      a('pool', 'Swimming pool (guests only)', 'Πισίνα (μόνο για επισκέπτες)'),
      a('trees', 'Garden', 'Κήπος'),
      a('armchair', 'Outdoor furniture', 'Έπιπλα εξωτερικού χώρου'),
      a('utensils-crossed', 'Outdoor dining', 'Υπαίθρια τραπεζαρία'),
      a('lounger', 'Sun loungers', 'Ξαπλώστρες'),
      a('terrace', 'Terrace', 'Βεράντα'),
      a('balcony', 'Balcony', 'Μπαλκόνι'),
    ],
  },
  {
    id: 'parking',
    icon: 'parking',
    title: { en: 'Parking', el: 'Στάθμευση' },
    items: [a('parking', 'Free private parking', 'Δωρεάν ιδιωτικός χώρος στάθμευσης')],
  },
];

/** Kitchen section icons. */
export const kitchenFeatures: Amenity[] = [
  a('refrigerator', 'Refrigerator', 'Ψυγείο'),
  a('oven', 'Oven', 'Φούρνος'),
  a('stovetop', 'Stovetop', 'Εστίες μαγειρέματος'),
  a('toaster', 'Toaster', 'Φρυγανιέρα'),
  a('kettle', 'Kettle', 'Βραστήρας'),
  a('utensils', 'Kitchenware', 'Σκεύη κουζίνας'),
  a('coffee', 'Tea & coffee facilities', 'Εξοπλισμός για τσάι & καφέ'),
  a('utensils-crossed', 'Dining area', 'Τραπεζαρία'),
];

/** Outdoor Living section features. */
export const outdoorFeatures: Amenity[] = [
  a('trees', 'Garden', 'Κήπος'),
  a('utensils-crossed', 'Outdoor dining', 'Υπαίθρια τραπεζαρία'),
  a('terrace', 'Terrace', 'Βεράντα'),
  a('balcony', 'Balcony', 'Μπαλκόνι'),
  a('pool', 'Pool area', 'Χώρος πισίνας'),
  a('lounger', 'Sun loungers', 'Ξαπλώστρες'),
  a('leaf', 'Garden views', 'Θέα στον κήπο'),
  a('eye', 'Pool views', 'Θέα στην πισίνα'),
];

/** "Property highlights" band under the hero. */
export const highlights: Amenity[] = [
  a('pool', 'Guest-only swimming pool', 'Πισίνα μόνο για επισκέπτες'),
  a('leaf', 'Garden & pool views', 'Θέα σε κήπο & πισίνα'),
  a('snowflake', 'Air conditioning', 'Κλιματισμός'),
  a('wifi', 'Free Wi-Fi', 'Δωρεάν Wi-Fi'),
  a('washing-machine', 'Washing machine', 'Πλυντήριο ρούχων'),
  a('parking', 'Free private parking', 'Δωρεάν ιδιωτικό πάρκινγκ'),
];
