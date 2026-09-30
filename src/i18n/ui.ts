/**
 * Interface strings (navigation, buttons, accessibility labels).
 * Property content lives in /content.
 */
import type { Localized } from './config';

export const nav: { id: string; href: string; label: Localized }[] = [
  { id: 'home', href: '#top', label: { en: 'Home', el: 'Αρχική' } },
  { id: 'villa', href: '#villa', label: { en: 'The Villa', el: 'Η Βίλα' } },
  { id: 'amenities', href: '#amenities', label: { en: 'Amenities', el: 'Παροχές' } },
  { id: 'pool', href: '#pool-outdoors', label: { en: 'Pool & Outdoors', el: 'Πισίνα & Κήπος' } },
  { id: 'location', href: '#location', label: { en: 'Location', el: 'Τοποθεσία' } },
  { id: 'experiences', href: '#experiences', label: { en: 'Experiences', el: 'Εμπειρίες' } },
  { id: 'gallery', href: '#gallery', label: { en: 'Gallery', el: 'Φωτογραφίες' } },
  { id: 'reviews', href: '#reviews', label: { en: 'Reviews', el: 'Κριτικές' } },
  { id: 'faq', href: '#faq', label: { en: 'FAQ', el: 'Ερωτήσεις' } },
  { id: 'contact', href: '#contact', label: { en: 'Contact', el: 'Επικοινωνία' } },
];

export const ui = {
  skipToContent: { en: 'Skip to main content', el: 'Μετάβαση στο κύριο περιεχόμενο' },
  bookNow: { en: 'Book Now', el: 'Κράτηση' },
  openMenu: { en: 'Open menu', el: 'Άνοιγμα μενού' },
  closeMenu: { en: 'Close menu', el: 'Κλείσιμο μενού' },
  mainNav: { en: 'Main navigation', el: 'Κύρια πλοήγηση' },
  language: { en: 'Language', el: 'Γλώσσα' },
  switchTo: { en: 'Switch to {language}', el: 'Αλλαγή σε {language}' },
  homeLink: { en: '{name} — home', el: '{name} — αρχική' },
  guests: { en: 'Up to {n} guests', el: 'Έως {n} άτομα' },
  bedrooms: { en: '{n} bedrooms', el: '{n} υπνοδωμάτια' },
  bathrooms: { en: '{n} bathrooms', el: '{n} μπάνια' },
  beach: { en: '{n} m from the beach', el: '{n} μ. από την παραλία' },
  size: { en: 'approx. {n} m²', el: 'περίπου {n} τ.μ.' },
  heroFacts: { en: 'Villa key facts', el: 'Βασικά στοιχεία της βίλας' },
  photoComingSoon: { en: 'Photo coming soon', el: 'Η φωτογραφία έρχεται σύντομα' },
  opensInNewTab: { en: '(opens in a new tab)', el: '(ανοίγει σε νέα καρτέλα)' },
  checkOn: { en: 'Check availability on {platform}', el: 'Διαθεσιμότητα στο {platform}' },
  readReviewsOn: { en: 'Read reviews on {platform}', el: 'Κριτικές στο {platform}' },
  outOf: { en: 'out of {n}', el: 'από {n}' },
  ratingLabel: { en: '{score} out of {max} on {platform}', el: '{score} από {max} στο {platform}' },
  // Gallery / lightbox
  galleryFilter: { en: 'Filter photos by category', el: 'Φιλτράρισμα φωτογραφιών ανά κατηγορία' },
  all: { en: 'All', el: 'Όλες' },
  openPhoto: { en: 'Open photo: {label}', el: 'Άνοιγμα φωτογραφίας: {label}' },
  lightbox: { en: 'Photo viewer', el: 'Προβολή φωτογραφιών' },
  close: { en: 'Close', el: 'Κλείσιμο' },
  previous: { en: 'Previous photo', el: 'Προηγούμενη φωτογραφία' },
  next: { en: 'Next photo', el: 'Επόμενη φωτογραφία' },
  counter: { en: '{i} of {n}', el: '{i} από {n}' },
  // Rules
  checkIn: { en: 'Check-in from {time}', el: 'Άφιξη από τις {time}' },
  checkOut: { en: 'Check-out before {time}', el: 'Αναχώρηση έως τις {time}' },
  childrenWelcome: { en: 'Children welcome', el: 'Τα παιδιά είναι ευπρόσδεκτα' },
  noPets: { en: 'No pets', el: 'Όχι κατοικίδια' },
  noSmoking: { en: 'No smoking inside the villa', el: 'Απαγορεύεται το κάπνισμα στους εσωτερικούς χώρους' },
  noParties: { en: 'No parties or events', el: 'Όχι πάρτι ή εκδηλώσεις' },
  // Footer
  footerTagline: {
    en: 'A stylish two-bedroom holiday villa, 500 m from the beach in Agios Georgios, Southern Corfu.',
    el: 'Κομψή βίλα δύο υπνοδωματίων, 500 μ. από την παραλία στον Άγιο Γεώργιο, Νότια Κέρκυρα.',
  },
  explore: { en: 'Explore', el: 'Περιηγηθείτε' },
  bookOn: { en: 'Book on', el: 'Κράτηση μέσω' },
  legal: { en: 'Legal', el: 'Νομικά' },
  rights: { en: 'All rights reserved.', el: 'Με την επιφύλαξη παντός δικαιώματος.' },
  email: { en: 'Email', el: 'Email' },
  phone: { en: 'Phone', el: 'Τηλέφωνο' },
  // Legal pages / 404
  backHome: { en: 'Back to the homepage', el: 'Επιστροφή στην αρχική σελίδα' },
  legalPending: {
    en: 'This page is being prepared. The final text will be published here soon.',
    el: 'Η σελίδα αυτή βρίσκεται υπό προετοιμασία. Το τελικό κείμενο θα δημοσιευτεί σύντομα.',
  },
  lastUpdated: { en: 'Last updated: {date}', el: 'Τελευταία ενημέρωση: {date}' },
  notFoundTitle: { en: 'Page not found', el: 'Η σελίδα δεν βρέθηκε' },
  notFoundText: {
    en: 'The page you are looking for does not exist or has moved.',
    el: 'Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.',
  },
} satisfies Record<string, Localized>;
