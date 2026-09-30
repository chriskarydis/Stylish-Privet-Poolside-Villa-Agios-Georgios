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
import type { Localized } from '@/i18n/config';

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

const slot = (file: string, tone: Tone, label: Localized, alt: Localized): ImageSlot => ({ file, tone, label, alt });

export const images = {
  // ----- The villa -----
  hero: {
    ...slot('hero/hero.jpg', 'dusk',
      { en: 'The villa at dusk', el: 'Η βίλα το σούρουπο' },
      { en: 'The two-storey villa at dusk with its outdoor lights on, Agios Georgios, Southern Corfu', el: 'Η διώροφη βίλα το σούρουπο με αναμμένα τα εξωτερικά φώτα, Άγιος Γεώργιος, Νότια Κέρκυρα' }),
    position: '40% 50%', // keeps the entrance and balcony in frame on phones
  },
  exterior: slot('villa/exterior.jpg', 'sand',
    { en: 'Villa exterior', el: 'Εξωτερική όψη' },
    { en: 'Exterior of the two-storey villa with its balcony, covered entrance and parking area', el: 'Εξωτερική όψη της διώροφης βίλας με το μπαλκόνι, τη στεγασμένη είσοδο και τον χώρο στάθμευσης' }),

  // ----- Interiors -----
  livingRoom: slot('interiors/living-room.jpg', 'stone',
    { en: 'Living room', el: 'Σαλόνι' },
    { en: 'Open-plan living room with corner sofa, dining table and kitchen', el: 'Ενιαίο σαλόνι με γωνιακό καναπέ, τραπεζαρία και κουζίνα' }),
  bedroom1: slot('bedrooms/bedroom-1.jpg', 'sand',
    { en: 'Bedroom 1', el: 'Υπνοδωμάτιο 1' },
    { en: 'Bedroom 1 with a double bed, wooden ceiling and balcony door', el: 'Υπνοδωμάτιο 1 με διπλό κρεβάτι, ξύλινη οροφή και πόρτα προς το μπαλκόνι' }),
  bedroom2: slot('bedrooms/bedroom-2.jpg', 'stone',
    { en: 'Bedroom 2', el: 'Υπνοδωμάτιο 2' },
    { en: 'Bedroom 2 with two single beds and a built-in wardrobe', el: 'Υπνοδωμάτιο 2 με δύο μονά κρεβάτια και εντοιχισμένη ντουλάπα' }),
  bathroom: slot('bathrooms/bathroom.jpg', 'stone',
    { en: 'Bathroom', el: 'Μπάνιο' },
    { en: 'Bathroom with marble-effect tiles, stone basin and glass shower', el: 'Μπάνιο με πλακάκια τύπου μαρμάρου, πέτρινο νιπτήρα και γυάλινη ντουζιέρα' }),
  kitchen: slot('kitchen/kitchen.jpg', 'sand',
    { en: 'Kitchen', el: 'Κουζίνα' },
    { en: 'Modern kitchen with refrigerator, oven, cooktop and wooden worktop', el: 'Σύγχρονη κουζίνα με ψυγείο, φούρνο, εστίες και ξύλινο πάγκο' }),

  // ----- Pool & outdoors -----
  pool: slot('outdoors/pool.jpg', 'sea',
    { en: 'Guest-only pool', el: 'Πισίνα για επισκέπτες' },
    { en: 'The swimming pool, shared exclusively by guests of the villa and the apartments on the property', el: 'Η πισίνα, αποκλειστικά για τους επισκέπτες της βίλας και των διαμερισμάτων του ακινήτου' }),
  garden: slot('outdoors/garden.jpg', 'olive',
    { en: 'Garden by the pool', el: 'Κήπος δίπλα στην πισίνα' },
    { en: 'Flowering oleanders beside the pool area', el: 'Ανθισμένες πικροδάφνες δίπλα στον χώρο της πισίνας' }),
  outdoorDining: slot('outdoors/outdoor-dining.jpg', 'olive',
    { en: 'Outdoor dining', el: 'Υπαίθρια τραπεζαρία' },
    { en: 'Shaded terrace with a dining table outside the villa', el: 'Σκιερή βεράντα με τραπέζι φαγητού έξω από τη βίλα' }),
  balcony: slot('outdoors/balcony.jpg', 'dusk',
    { en: 'Balcony', el: 'Μπαλκόνι' },
    { en: 'Balcony with table and chairs overlooking the greenery', el: 'Μπαλκόνι με τραπέζι και καρέκλες με θέα στο πράσινο' }),

  // ----- Area -----
  beach: slot('location/beach.jpg', 'sea',
    { en: 'Sandy beach', el: 'Αμμουδιά' },
    { en: 'Waves on a long sandy beach in Southern Corfu', el: 'Κύματα σε μεγάλη αμμουδιά της Νότιας Κέρκυρας' }),
  agiosGeorgios: slot('location/agios-georgios.jpg', 'dusk',
    { en: 'Sunset by the sea', el: 'Ηλιοβασίλεμα στη θάλασσα' },
    { en: 'Sunset over the sea with boats at anchor, Southern Corfu', el: 'Ηλιοβασίλεμα στη θάλασσα με αγκυροβολημένες βάρκες, Νότια Κέρκυρα' }),
  southernCorfu: slot('location/southern-corfu.jpg', 'dusk',
    { en: 'Southern Corfu', el: 'Νότια Κέρκυρα' },
    { en: 'Evening sky over the coast of Southern Corfu', el: 'Βραδινός ουρανός πάνω από την ακτή της Νότιας Κέρκυρας' }),
  lakeKorission: slot('location/lake-korission.jpg', 'olive',
    { en: 'Lake Korission', el: 'Λίμνη Κορισσίων' },
    { en: 'Flamingos in the shallow waters of Lake Korission', el: 'Φλαμίνγκο στα ρηχά νερά της λίμνης Κορισσίων' }),
  issos: slot('location/issos-beach.jpg', 'sand',
    { en: 'Issos Beach', el: 'Παραλία Ισσός' },
    { en: 'Issos Beach and its sand dunes', el: 'Η παραλία Ισσός και οι αμμοθίνες της' }),
  // Photos still to be supplied:
  marathias: slot('location/marathias-beach.jpg', 'sea',
    { en: 'Marathias Beach', el: 'Παραλία Μαραθιά' },
    { en: 'Marathias Beach, Southern Corfu', el: 'Η παραλία Μαραθιά, Νότια Κέρκυρα' }),
  corfuTown: slot('location/corfu-town.jpg', 'dusk',
    { en: 'Corfu Town', el: 'Πόλη της Κέρκυρας' },
    { en: 'The Old Town of Corfu', el: 'Η Παλιά Πόλη της Κέρκυρας' }),
  achilleion: slot('location/achilleion.jpg', 'stone',
    { en: 'Achilleion', el: 'Αχίλλειο' },
    { en: 'The Achilleion palace, Corfu', el: 'Το ανάκτορο Αχίλλειο, Κέρκυρα' }),
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

/** Gallery order. To add a photo, add an entry (a slot key or an inline `slot(...)`). */
export const galleryItems: GalleryItem[] = [
  { category: 'villa', image: 'hero' },
  { category: 'villa', image: 'exterior' },
  { category: 'pool-outdoors', image: 'pool' },
  { category: 'interiors', image: 'livingRoom' },
  { category: 'interiors', image: slot('interiors/living-dining.jpg', 'stone',
    { en: 'Living & dining area', el: 'Σαλόνι & τραπεζαρία' },
    { en: 'Dining table and sofa in the bright open-plan living area', el: 'Τραπεζαρία και καναπές στον φωτεινό ενιαίο χώρο του σαλονιού' }) },
  { category: 'bedrooms', image: 'bedroom1' },
  { category: 'bedrooms', image: 'bedroom2' },
  { category: 'kitchen', image: 'kitchen' },
  { category: 'bathrooms', image: 'bathroom' },
  { category: 'bathrooms', image: slot('bathrooms/bathroom-2.jpg', 'stone',
    { en: 'Second bathroom', el: 'Δεύτερο μπάνιο' },
    { en: 'Second bathroom with walk-in shower and stone basin', el: 'Δεύτερο μπάνιο με ντουζιέρα και πέτρινο νιπτήρα' }) },
  { category: 'pool-outdoors', image: 'outdoorDining' },
  { category: 'pool-outdoors', image: slot('outdoors/pool-sun-loungers.jpg', 'sea',
    { en: 'Sun loungers by the pool', el: 'Ξαπλώστρες στην πισίνα' },
    { en: 'Sun loungers and parasols around the pool, with the apartments of the property behind', el: 'Ξαπλώστρες και ομπρέλες γύρω από την πισίνα, με τα διαμερίσματα του ακινήτου στο βάθος' }) },
  { category: 'interiors', image: slot('interiors/dining-staircase.jpg', 'stone',
    { en: 'Dining area & staircase', el: 'Τραπεζαρία & σκάλα' },
    { en: 'Wooden dining table with the spiral staircase to the upper floor', el: 'Ξύλινο τραπέζι φαγητού με την εσωτερική σκάλα προς τον όροφο' }) },
  { category: 'bedrooms', image: slot('bedrooms/bedroom-1-wide.jpg', 'sand',
    { en: 'Bedroom 1', el: 'Υπνοδωμάτιο 1' },
    { en: 'Double bedroom with air conditioning and dressing table', el: 'Υπνοδωμάτιο με διπλό κρεβάτι, κλιματισμό και μπουντουάρ' }) },
  { category: 'bedrooms', image: slot('bedrooms/bedroom-2-tv.jpg', 'stone',
    { en: 'Bedroom 2', el: 'Υπνοδωμάτιο 2' },
    { en: 'Bedroom with two single beds and a wall-mounted TV', el: 'Υπνοδωμάτιο με δύο μονά κρεβάτια και τηλεόραση στον τοίχο' }) },
  { category: 'kitchen', image: slot('kitchen/kitchen-dining.jpg', 'sand',
    { en: 'Kitchen & dining', el: 'Κουζίνα & τραπεζαρία' },
    { en: 'Kitchen and dining table next to the doors to the terrace', el: 'Κουζίνα και τραπεζαρία δίπλα στις πόρτες προς τη βεράντα' }) },
  { category: 'pool-outdoors', image: 'balcony' },
  { category: 'pool-outdoors', image: 'garden' },
  { category: 'interiors', image: slot('interiors/living-kitchen.jpg', 'stone',
    { en: 'Living room', el: 'Σαλόνι' },
    { en: 'Corner sofa and coffee table with the kitchen behind', el: 'Γωνιακός καναπές και τραπεζάκι με την κουζίνα στο βάθος' }) },
  { category: 'interiors', image: slot('interiors/upstairs-landing.jpg', 'stone',
    { en: 'Upper floor', el: 'Όροφος' },
    { en: 'Upper-floor room with TV, air conditioning and doors to the balcony', el: 'Χώρος του ορόφου με τηλεόραση, κλιματισμό και πόρτες προς το μπαλκόνι' }) },
  { category: 'bedrooms', image: slot('bedrooms/bedroom-1-detail.jpg', 'sand',
    { en: 'Breakfast in bed', el: 'Πρωινό στο κρεβάτι' },
    { en: 'Breakfast tray with fruit on the double bed', el: 'Δίσκος πρωινού με φρούτα στο διπλό κρεβάτι' }) },
  { category: 'pool-outdoors', image: slot('outdoors/terrace.jpg', 'olive',
    { en: 'Terrace', el: 'Βεράντα' },
    { en: 'Outdoor table set with sparkling wine on the terrace', el: 'Τραπέζι με αφρώδες κρασί στη βεράντα' }) },
  { category: 'pool-outdoors', image: slot('outdoors/pool-and-apartments.jpg', 'sea',
    { en: 'Pool & apartments', el: 'Πισίνα & διαμερίσματα' },
    { en: 'View over the shared pool and the apartments on the property', el: 'Θέα στην κοινόχρηστη πισίνα και στα διαμερίσματα του ακινήτου' }) },
  { category: 'kitchen', image: slot('kitchen/kitchen-detail.jpg', 'sand',
    { en: 'Kitchen detail', el: 'Λεπτομέρεια κουζίνας' },
    { en: 'Fruit bowl on the kitchen worktop', el: 'Φρουτιέρα στον πάγκο της κουζίνας' }) },
  { category: 'location', image: 'beach' },
  { category: 'location', image: 'lakeKorission' },
  { category: 'location', image: 'agiosGeorgios' },
  { category: 'location', image: slot('location/beach-footprints.jpg', 'sand',
    { en: 'Footprints in the sand', el: 'Πατημασιές στην άμμο' },
    { en: 'Footprints along the shoreline of a sandy beach', el: 'Πατημασιές στην ακροθαλασσιά μιας αμμουδιάς' }) },
  { category: 'location', image: 'issos' },
  { category: 'location', image: slot('location/lake-korission-heron.jpg', 'olive',
    { en: 'Lake Korission', el: 'Λίμνη Κορισσίων' },
    { en: 'A heron among the coastal vegetation of the lagoon', el: 'Ερωδιός ανάμεσα στη βλάστηση της λιμνοθάλασσας' }) },
  { category: 'location', image: slot('location/beach-dunes.jpg', 'sand',
    { en: 'Sandy beach', el: 'Αμμουδιά' },
    { en: 'Wide sandy beach backed by green vegetation', el: 'Φαρδιά αμμουδιά με πράσινη βλάστηση' }) },
  { category: 'location', image: 'southernCorfu' },
  { category: 'location', image: slot('location/sea-sun.jpg', 'sea',
    { en: 'Clear water', el: 'Καθαρά νερά' },
    { en: 'Calm, clear sea on a sunny day', el: 'Ήρεμη, καθαρή θάλασσα σε μια ηλιόλουστη μέρα' }) },
  { category: 'location', image: slot('location/beach-driftwood.jpg', 'sand',
    { en: 'Driftwood on the beach', el: 'Ξύλο στην αμμουδιά' },
    { en: 'Driftwood on a quiet sandy beach', el: 'Ξύλο ξεβρασμένο σε μια ήσυχη αμμουδιά' }) },
];
