/**
 * IMAGES & GALLERY
 *
 * Every image on the website is a named "slot" below. To add a photo, save it
 * at `src/assets/images/<file>` using the file name given here (JPG, PNG, WebP
 * or AVIF — the extension may differ, e.g. `pool/pool.webp` also matches
 * `pool/pool.jpg`). Until a file exists, an elegant placeholder is shown.
 * Images are automatically resized and converted to AVIF/WebP at build time.
 *
 * Use real photos of the property for property slots. Area photos (beach,
 * Lake Korission, …) should be your own or properly licensed.
 * Update `alt` so it describes what the actual photo shows.
 */
import type { Localized } from '../src/i18n/config';

export type Tone = 'sand' | 'sea' | 'olive' | 'stone' | 'dusk';

export interface ImageSlot {
  /** Path inside src/assets/images/ (extension is flexible). */
  file: string;
  /** Short label (used for captions and placeholders). */
  label: Localized;
  /** Descriptive alternative text for screen readers and SEO. */
  alt: Localized;
  /** Placeholder colour while the photo is missing. */
  tone: Tone;
  /** Focal point for cropping, CSS object-position (default 'center'). */
  position?: string;
}

const PROPERTY = { en: 'Stylish Private Poolside Villa', el: 'Stylish Private Poolside Villa' };

export const images = {
  hero: {
    file: 'hero/hero.jpg',
    label: { en: 'The villa and pool', el: 'Η βίλα και η πισίνα' },
    alt: {
      en: `${PROPERTY.en} with its garden and swimming pool in Agios Georgios, Southern Corfu`,
      el: `Η ${PROPERTY.el} με τον κήπο και την πισίνα στον Άγιο Γεώργιο, Νότια Κέρκυρα`,
    },
    tone: 'sea',
  },
  exterior: {
    file: 'villa/exterior.jpg',
    label: { en: 'Villa exterior', el: 'Εξωτερική όψη' },
    alt: { en: 'Exterior of the villa in Agios Georgios, Corfu', el: 'Εξωτερική όψη της βίλας στον Άγιο Γεώργιο Κέρκυρας' },
    tone: 'sand',
  },
  livingRoom: {
    file: 'interiors/living-room.jpg',
    label: { en: 'Living room', el: 'Σαλόνι' },
    alt: { en: 'Living room of the villa with sofa bed', el: 'Το σαλόνι της βίλας με τον καναπέ-κρεβάτι' },
    tone: 'stone',
  },
  bedroom1: {
    file: 'bedrooms/bedroom-1.jpg',
    label: { en: 'Bedroom 1', el: 'Υπνοδωμάτιο 1' },
    alt: { en: 'Bedroom 1 with a double bed', el: 'Υπνοδωμάτιο 1 με διπλό κρεβάτι' },
    tone: 'sand',
  },
  bedroom2: {
    file: 'bedrooms/bedroom-2.jpg',
    label: { en: 'Bedroom 2', el: 'Υπνοδωμάτιο 2' },
    alt: { en: 'Bedroom 2 with two single beds', el: 'Υπνοδωμάτιο 2 με δύο μονά κρεβάτια' },
    tone: 'stone',
  },
  bathroom: {
    file: 'bathrooms/bathroom.jpg',
    label: { en: 'Bathroom', el: 'Μπάνιο' },
    alt: { en: 'One of the two bathrooms of the villa', el: 'Ένα από τα δύο μπάνια της βίλας' },
    tone: 'stone',
  },
  kitchen: {
    file: 'kitchen/kitchen.jpg',
    label: { en: 'Kitchen', el: 'Κουζίνα' },
    alt: { en: 'Fully equipped kitchen and dining area', el: 'Πλήρως εξοπλισμένη κουζίνα και τραπεζαρία' },
    tone: 'sand',
  },
  pool: {
    file: 'outdoors/pool.jpg',
    label: { en: 'Guest-only pool', el: 'Πισίνα για επισκέπτες' },
    alt: {
      en: 'Swimming pool shared exclusively by guests of the villa and the apartments on the property',
      el: 'Η πισίνα, αποκλειστικά για τους επισκέπτες της βίλας και των διαμερισμάτων του ακινήτου',
    },
    tone: 'sea',
  },
  garden: {
    file: 'outdoors/garden.jpg',
    label: { en: 'Garden', el: 'Κήπος' },
    alt: { en: 'Garden surrounding the villa', el: 'Ο κήπος γύρω από τη βίλα' },
    tone: 'olive',
  },
  outdoorDining: {
    file: 'outdoors/outdoor-dining.jpg',
    label: { en: 'Outdoor dining', el: 'Υπαίθρια τραπεζαρία' },
    alt: { en: 'Outdoor dining area of the villa', el: 'Ο υπαίθριος χώρος φαγητού της βίλας' },
    tone: 'olive',
  },
  balcony: {
    file: 'outdoors/balcony.jpg',
    label: { en: 'Balcony', el: 'Μπαλκόνι' },
    alt: { en: 'Balcony overlooking the garden and pool', el: 'Μπαλκόνι με θέα στον κήπο και την πισίνα' },
    tone: 'dusk',
  },
  beach: {
    file: 'location/beach.jpg',
    label: { en: 'Agios Georgios Beach', el: 'Παραλία Αγίου Γεωργίου' },
    alt: { en: 'The sandy beach of Agios Georgios, Southern Corfu', el: 'Η αμμουδιά του Αγίου Γεωργίου στη Νότια Κέρκυρα' },
    tone: 'sea',
  },
  agiosGeorgios: {
    file: 'location/agios-georgios.jpg',
    label: { en: 'Agios Georgios', el: 'Άγιος Γεώργιος' },
    alt: { en: 'The coastline at Agios Georgios, Corfu', el: 'Η ακτογραμμή στον Άγιο Γεώργιο Κέρκυρας' },
    tone: 'sea',
  },
  southernCorfu: {
    file: 'location/southern-corfu.jpg',
    label: { en: 'Southern Corfu', el: 'Νότια Κέρκυρα' },
    alt: { en: 'Landscape of Southern Corfu', el: 'Τοπίο της Νότιας Κέρκυρας' },
    tone: 'olive',
  },
  lakeKorission: {
    file: 'location/lake-korission.jpg',
    label: { en: 'Lake Korission', el: 'Λίμνη Κορισσίων' },
    alt: { en: 'Lake Korission lagoon and dunes, Southern Corfu', el: 'Η λιμνοθάλασσα Κορισσίων και οι αμμοθίνες, Νότια Κέρκυρα' },
    tone: 'olive',
  },
  issos: {
    file: 'location/issos-beach.jpg',
    label: { en: 'Issos Beach', el: 'Παραλία Ισσός' },
    alt: { en: 'Issos Beach and its sand dunes', el: 'Η παραλία Ισσός και οι αμμοθίνες της' },
    tone: 'sand',
  },
  marathias: {
    file: 'location/marathias-beach.jpg',
    label: { en: 'Marathias Beach', el: 'Παραλία Μαραθιά' },
    alt: { en: 'Marathias Beach, Southern Corfu', el: 'Η παραλία Μαραθιά, Νότια Κέρκυρα' },
    tone: 'sea',
  },
  corfuTown: {
    file: 'location/corfu-town.jpg',
    label: { en: 'Corfu Town', el: 'Πόλη της Κέρκυρας' },
    alt: { en: 'The Old Town of Corfu', el: 'Η Παλιά Πόλη της Κέρκυρας' },
    tone: 'dusk',
  },
  achilleion: {
    file: 'location/achilleion.jpg',
    label: { en: 'Achilleion', el: 'Αχίλλειο' },
    alt: { en: 'The Achilleion palace, Corfu', el: 'Το ανάκτορο Αχίλλειο, Κέρκυρα' },
    tone: 'stone',
  },
} satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof images;

export const galleryCategories = [
  { id: 'villa', label: { en: 'Villa', el: 'Βίλα' } },
  { id: 'interiors', label: { en: 'Interiors', el: 'Εσωτερικοί χώροι' } },
  { id: 'bedrooms', label: { en: 'Bedrooms', el: 'Υπνοδωμάτια' } },
  { id: 'kitchen', label: { en: 'Kitchen', el: 'Κουζίνα' } },
  { id: 'bathrooms', label: { en: 'Bathrooms', el: 'Μπάνια' } },
  { id: 'pool-outdoors', label: { en: 'Pool & Outdoors', el: 'Πισίνα & Εξωτερικοί χώροι' } },
  { id: 'location', label: { en: 'Location', el: 'Τοποθεσία' } },
] as const satisfies ReadonlyArray<{ id: string; label: Localized }>;

export type GalleryCategory = (typeof galleryCategories)[number]['id'];

export interface GalleryItem {
  category: GalleryCategory;
  /** A slot key from `images`, or a new slot defined inline. */
  image: ImageKey | ImageSlot;
}

/**
 * Gallery order. To add more photos, add entries — e.g.
 * { category: 'pool-outdoors', image: { file: 'outdoors/pool-2.jpg', label: {...}, alt: {...}, tone: 'sea' } }
 */
export const galleryItems: GalleryItem[] = [
  { category: 'villa', image: 'hero' },
  { category: 'villa', image: 'exterior' },
  { category: 'pool-outdoors', image: 'pool' },
  { category: 'interiors', image: 'livingRoom' },
  { category: 'bedrooms', image: 'bedroom1' },
  { category: 'bedrooms', image: 'bedroom2' },
  { category: 'kitchen', image: 'kitchen' },
  { category: 'bathrooms', image: 'bathroom' },
  { category: 'pool-outdoors', image: 'garden' },
  { category: 'pool-outdoors', image: 'outdoorDining' },
  { category: 'pool-outdoors', image: 'balcony' },
  { category: 'location', image: 'beach' },
  { category: 'location', image: 'lakeKorission' },
  { category: 'location', image: 'southernCorfu' },
];
