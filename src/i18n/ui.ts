/**
 * Interface strings (navigation, buttons, accessibility labels).
 * Property content lives in src/content.
 */
import type { Localized } from './config';

/**
 * Page sections. `primary: false` items stay in the mobile menu and the footer
 * but are left out of the desktop navigation bar to keep it short.
 */
export const nav: { id: string; href: string; label: Localized; primary?: boolean }[] = [
  { id: 'home', href: '#top', label: { en: 'Home', el: 'Αρχική' } },
  { id: 'villa', href: '#villa', label: { en: 'The Villa', el: 'Η Βίλα' } },
  { id: 'amenities', href: '#amenities', label: { en: 'Amenities', el: 'Παροχές' }, primary: false },
  { id: 'pool', href: '#pool-outdoors', label: { en: 'Pool & Outdoors', el: 'Πισίνα & Κήπος' } },
  { id: 'location', href: '#location', label: { en: 'Location', el: 'Τοποθεσία' } },
  { id: 'explore', href: '#explore', label: { en: 'Explore the Area', el: 'Εξερευνήστε την περιοχή' }, primary: false },
  { id: 'gallery', href: '#gallery', label: { en: 'Gallery', el: 'Φωτογραφίες' } },
  { id: 'reviews', href: '#reviews', label: { en: 'Reviews', el: 'Κριτικές' } },
  { id: 'faq', href: '#faq', label: { en: 'FAQ', el: 'Ερωτήσεις' } },
  { id: 'contact', href: '#contact', label: { en: 'Contact', el: 'Επικοινωνία' } },
];

export const ui = {
  skipToContent: { en: 'Skip to main content', el: 'Μετάβαση στο κύριο περιεχόμενο' },
  /** Main call to action: leads to the availability calendar (not an instant booking). */
  checkAvailability: { en: 'Check Availability', el: 'Διαθεσιμότητα' },
  whatsapp: { en: 'Message us on WhatsApp', el: 'Στείλτε μήνυμα στο WhatsApp' },
  quickActions: { en: 'Quick actions', el: 'Γρήγορες ενέργειες' },
  /** Read after the visible "5.0 Airbnb · 8.8 Booking.com", so the spoken name starts with what is on screen. */
  ratingsLink: { en: 'Guest ratings, out of {airbnbMax} on Airbnb and out of {bookingMax} on Booking.com. See the reviews.', el: 'Βαθμολογίες επισκεπτών, με άριστα το {airbnbMax} στο Airbnb και το {bookingMax} στο Booking.com. Δείτε τις κριτικές.' },
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
  guestPool: { en: 'Guest-only pool', el: 'Πισίνα για επισκέπτες' },
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
  noChildrenInPool: { en: 'No children in the pool (exceptions on request)', el: 'Τα παιδιά δεν επιτρέπονται στην πισίνα (εξαίρεση κατόπιν αιτήματος)' },
  noPets: { en: 'No pets', el: 'Δεν επιτρέπονται κατοικίδια' },
  noSmoking: { en: 'No smoking inside the villa', el: 'Απαγορεύεται το κάπνισμα στους εσωτερικούς χώρους' },
  noParties: { en: 'No parties or events', el: 'Δεν επιτρέπονται πάρτι ή εκδηλώσεις' },
  // Footer
  footerTagline: {
    en: 'A stylish two-bedroom holiday villa in Agios Georgios, Southern Corfu.',
    el: 'Κομψή βίλα δύο υπνοδωματίων στον Άγιο Γεώργιο, Νότια Κέρκυρα.',
  },
  explore: { en: 'Explore', el: 'Περιηγηθείτε' },
  footerBooking: { en: 'Booking', el: 'Κράτηση' },
  footerOrVia: { en: 'Or book via', el: 'Ή κλείστε μέσω' },
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
  legalDraft: {
    en: 'Draft — this text is being finalised and some details are still to be completed.',
    el: 'Προσχέδιο — το κείμενο οριστικοποιείται και ορισμένα στοιχεία δεν έχουν ακόμα συμπληρωθεί.',
  },
  notFoundTitle: { en: 'Page not found', el: 'Η σελίδα δεν βρέθηκε' },
  notFoundText: {
    en: 'The page you are looking for does not exist or has moved.',
    el: 'Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.',
  },
} satisfies Record<string, Localized>;
