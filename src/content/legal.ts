/**
 * LEGAL PAGES — Privacy Policy, Cookie Policy, Terms of Use (EN + EL).
 *
 * DRAFTS: written for how this website actually works (Cloudflare hosting,
 * Formspree forms, iCal availability, self-hosted fonts, no tracking cookies).
 * Have them reviewed by a lawyer before publishing, and update them whenever
 * the site starts collecting data in a new way (e.g. analytics, online payments).
 *
 * Placeholders, filled from src/content/property.ts:
 *   {name} {address} {vat} {registry} → property.operator
 *   {email} {phone}                   → property.contact
 *   {site}                            → the website address
 *   {minimumStay} {deposit} {balance} {paymentMethods} {cancellation}
 *   {damageDeposit} {touristTax}      → property.bookingTerms
 *   {checkIn} {checkOut} {maxGuests}  → property.rules / property.facts
 * Missing values are shown as "[to be completed]" and the page is noindex.
 * When everything is final: set `lastUpdated`, and remove the slug from
 * NOINDEX in astro.config.mjs so the page enters the sitemap.
 */
import type { Localized } from '@/i18n/config';
import { property } from './property';

/** The embedded map is only on the site once the villa's coordinates are set. */
const hasMap = property.location.coordinates !== null;
/** Visit statistics are mentioned only when they are actually switched on. */
const hasAnalytics = property.analytics.cloudflareWebAnalytics;

/** A block of a legal page: a heading, a paragraph or a bullet list. */
export type LegalBlock = { h: string } | { p: string } | { ul: string[] };

export interface LegalPage {
  slug: string;
  title: Localized;
  body: Localized<LegalBlock[]> | null;
  /** ISO date of the final version, e.g. '2026-11-01'. null = draft. */
  lastUpdated: string | null;
  /** Keep the page out of menus and links until every placeholder has a value. */
  hideUntilComplete?: boolean;
}

// ---------------------------------------------------------------------------
// Privacy Policy
// ---------------------------------------------------------------------------
const privacyEn: LegalBlock[] = [
  { p: 'This Privacy Policy explains how we process personal data when you visit {site} or contact us about a stay at Stylish Private Poolside Villa, in accordance with the General Data Protection Regulation (EU) 2016/679 ("GDPR") and Greek law 4624/2019.' },
  { h: '1. Who we are (data controller)' },
  { ul: ['{name}', 'Registered seat: {seat}', 'Branch address: {address}', 'Tax ID (ΑΦΜ): {vat}', 'Business registry (ΓΕΜΗ) no.: {gemi}', 'Branch registry (ΓΕΜΗ) no.: {gemiBranch}', 'Company owner: {rep}, tel. {repPhone}, email {repEmail}', 'Contact email: {email}', 'Contact phone: {phone}'] },
  { h: '2. What data we collect' },
  { p: 'We only collect the data you choose to give us, plus the minimum technical data needed to deliver the website:' },
  {
    ul: [
      'Contact form: your name, email address, phone number (optional) and message.',
      'Booking request: the above, plus your chosen dates, the number of adults and children and the children’s ages.',
      'Direct contact: if you call us, email us or message us on WhatsApp, we receive the details you share in that communication.',
      'Technical data: when you visit the website, our hosting provider processes your IP address, browser type and the pages requested, in order to deliver the site and protect it against abuse.',
      ...(hasAnalytics ? ['Visit statistics: we use Cloudflare Web Analytics to see, in aggregate, how many people visit the website, which pages they view and which website referred them. It works without cookies and does not identify or follow individual visitors.'] : []),
    ],
  },
  { p: 'The availability calendar does not collect any data about you. It only shows which dates are already booked, based on calendar feeds from Airbnb and Booking.com that contain dates only.' },
  { h: '3. Why we use your data and on what legal basis' },
  {
    ul: [
      'To answer your questions and booking requests — steps taken at your request before entering into a contract (Art. 6(1)(b) GDPR) or our legitimate interest in responding to enquiries (Art. 6(1)(f) GDPR).',
      'To arrange and carry out your stay if you book directly with us — performance of a contract (Art. 6(1)(b) GDPR).',
      'To comply with legal obligations, for example tax and accounting rules that apply to bookings (Art. 6(1)(c) GDPR).',
      'To operate the website securely — our legitimate interest in a reliable and secure website (Art. 6(1)(f) GDPR).',
      ...(hasAnalytics ? ['To understand how the website is used and improve it, using aggregate statistics only — our legitimate interest (Art. 6(1)(f) GDPR).'] : []),
    ],
  },
  { p: 'We do not use your data for marketing or advertising, we do not sell it, and we do not use automated decision-making or profiling.' },
  { h: '4. Who receives your data' },
  { p: 'We use the following service providers, who process data on our behalf and only as needed for their service:' },
  {
    ul: [
      hasAnalytics ? 'Cloudflare, Inc. — website hosting, security and aggregate visit statistics.' : 'Cloudflare, Inc. — website hosting and security.',
      'Formspree, Inc. — delivery of the contact and booking request forms to our email.',
      'Google (Gmail), our email provider — receipt and storage of the emails you send us.',
      ...(hasMap ? ['OpenStreetMap Foundation — the map images in the location map are loaded from its servers, which receive your IP address. No cookies are set.'] : []),
    ],
  },
  { p: 'If you choose to contact us on WhatsApp, or follow a link to Airbnb, Booking.com or Google Maps, those services process your data under their own privacy policies.' },
  { h: '5. Transfers outside the European Union' },
  { p: 'Some of the providers above are based in the United States. Where data is transferred outside the European Economic Area, this is done on the basis of the EU–US Data Privacy Framework or the European Commission’s Standard Contractual Clauses.' },
  { h: '6. How long we keep your data' },
  {
    ul: [
      'Enquiries and booking requests that do not lead to a stay: 12 months after our last communication.',
      'Bookings: 5 years from the end of the year in which the stay took place, as required by Greek tax legislation.',
      'Copies of the messages sent through our forms, held by Formspree: 30 days.',
      ...(hasAnalytics ? ['Aggregate visit statistics, held by Cloudflare: 6 months.'] : []),
      'We do not store technical data such as IP addresses ourselves.',
    ],
  },
  { h: '7. Your rights' },
  { p: 'You have the right to access your personal data, to have it corrected or erased, to restrict or object to its processing and to data portability. To exercise these rights, contact us at {email}. We will reply within one week.' },
  { p: 'You also have the right to lodge a complaint with the Hellenic Data Protection Authority (www.dpa.gr).' },
  { h: '8. Children' },
  { p: 'Our forms are intended for adults making a booking. When you tell us the ages of children travelling with you, we use this only to arrange your stay.' },
  { h: '9. Security' },
  { p: 'The website is served exclusively over an encrypted (HTTPS) connection, and we take appropriate measures to protect the data you send us.' },
  { h: '10. Changes to this policy' },
  { p: 'We may update this policy when our services or the law change. The date of the latest version is shown at the top of this page.' },
];

const privacyEl: LegalBlock[] = [
  { p: 'Η παρούσα Πολιτική Απορρήτου εξηγεί πώς επεξεργαζόμαστε δεδομένα προσωπικού χαρακτήρα όταν επισκέπτεστε το {site} ή επικοινωνείτε μαζί μας για διαμονή στη Stylish Private Poolside Villa, σύμφωνα με τον Γενικό Κανονισμό για την Προστασία Δεδομένων (ΕΕ) 2016/679 («ΓΚΠΔ») και τον ν. 4624/2019.' },
  { h: '1. Ποιοι είμαστε (υπεύθυνος επεξεργασίας)' },
  { ul: ['{name}', 'Διεύθυνση έδρας: {seat}', 'Διεύθυνση υποκαταστήματος: {address}', 'ΑΦΜ: {vat}', 'Αριθμός ΓΕΜΗ: {gemi}', 'Αριθμός ΓΕΜΗ υποκαταστήματος: {gemiBranch}', 'Ιδιοκτήτης εταιρείας: {rep}, τηλ. {repPhone}, email {repEmail}', 'Email επικοινωνίας: {email}', 'Τηλέφωνο επικοινωνίας: {phone}'] },
  { h: '2. Ποια δεδομένα συλλέγουμε' },
  { p: 'Συλλέγουμε μόνο όσα δεδομένα επιλέγετε να μας δώσετε, καθώς και τα ελάχιστα τεχνικά δεδομένα που απαιτούνται για τη λειτουργία της ιστοσελίδας:' },
  {
    ul: [
      'Φόρμα επικοινωνίας: ονοματεπώνυμο, διεύθυνση email, τηλέφωνο (προαιρετικά) και το μήνυμά σας.',
      'Αίτημα κράτησης: τα παραπάνω, καθώς και τις ημερομηνίες που επιλέξατε, τον αριθμό ενηλίκων και παιδιών και τις ηλικίες των παιδιών.',
      'Απευθείας επικοινωνία: αν μας τηλεφωνήσετε, μας στείλετε email ή μήνυμα στο WhatsApp, λαμβάνουμε τα στοιχεία που μοιράζεστε σε αυτή την επικοινωνία.',
      'Τεχνικά δεδομένα: όταν επισκέπτεστε την ιστοσελίδα, ο πάροχος φιλοξενίας επεξεργάζεται τη διεύθυνση IP σας, τον τύπο του προγράμματος περιήγησης και τις σελίδες που ζητήθηκαν, ώστε να εμφανίζεται η ιστοσελίδα και να προστατεύεται από κακόβουλη χρήση.',
      ...(hasAnalytics ? ['Στατιστικά επισκεψιμότητας: χρησιμοποιούμε το Cloudflare Web Analytics για να βλέπουμε, συγκεντρωτικά, πόσοι επισκέπτονται την ιστοσελίδα, ποιες σελίδες βλέπουν και από ποια ιστοσελίδα ήρθαν. Λειτουργεί χωρίς cookies και δεν ταυτοποιεί ούτε παρακολουθεί μεμονωμένους επισκέπτες.'] : []),
    ],
  },
  { p: 'Το ημερολόγιο διαθεσιμότητας δεν συλλέγει κανένα δεδομένο για εσάς. Εμφανίζει μόνο ποιες ημερομηνίες είναι ήδη κλεισμένες, με βάση ημερολόγια από το Airbnb και το Booking.com που περιέχουν μόνο ημερομηνίες.' },
  { h: '3. Γιατί χρησιμοποιούμε τα δεδομένα σας και με ποια νομική βάση' },
  {
    ul: [
      'Για να απαντήσουμε στις ερωτήσεις και στα αιτήματα κράτησης — ενέργειες κατόπιν αιτήματός σας πριν από τη σύναψη σύμβασης (άρθρο 6 παρ. 1 στ. β΄ ΓΚΠΔ) ή έννομο συμφέρον μας να απαντάμε σε ερωτήματα (άρθρο 6 παρ. 1 στ. στ΄ ΓΚΠΔ).',
      'Για την οργάνωση και πραγματοποίηση της διαμονής σας, αν κάνετε κράτηση απευθείας σε εμάς — εκτέλεση σύμβασης (άρθρο 6 παρ. 1 στ. β΄ ΓΚΠΔ).',
      'Για τη συμμόρφωση με νομικές υποχρεώσεις, όπως η φορολογική και λογιστική νομοθεσία που ισχύει για τις κρατήσεις (άρθρο 6 παρ. 1 στ. γ΄ ΓΚΠΔ).',
      'Για την ασφαλή λειτουργία της ιστοσελίδας — έννομο συμφέρον μας για μια αξιόπιστη και ασφαλή ιστοσελίδα (άρθρο 6 παρ. 1 στ. στ΄ ΓΚΠΔ).',
      ...(hasAnalytics ? ['Για να κατανοούμε πώς χρησιμοποιείται η ιστοσελίδα και να τη βελτιώνουμε, μόνο με συγκεντρωτικά στατιστικά — έννομο συμφέρον μας (άρθρο 6 παρ. 1 στ. στ΄ ΓΚΠΔ).'] : []),
    ],
  },
  { p: 'Δεν χρησιμοποιούμε τα δεδομένα σας για διαφήμιση ή προώθηση, δεν τα πουλάμε και δεν λαμβάνουμε αυτοματοποιημένες αποφάσεις ούτε κάνουμε κατάρτιση προφίλ.' },
  { h: '4. Ποιοι λαμβάνουν τα δεδομένα σας' },
  { p: 'Συνεργαζόμαστε με τους παρακάτω παρόχους, οι οποίοι επεξεργάζονται δεδομένα για λογαριασμό μας και μόνο στο μέτρο που απαιτείται για την υπηρεσία τους:' },
  {
    ul: [
      hasAnalytics ? 'Cloudflare, Inc. — φιλοξενία, ασφάλεια και συγκεντρωτικά στατιστικά επισκεψιμότητας της ιστοσελίδας.' : 'Cloudflare, Inc. — φιλοξενία και ασφάλεια της ιστοσελίδας.',
      'Formspree, Inc. — αποστολή των φορμών επικοινωνίας και κράτησης στο email μας.',
      'Google (Gmail), ο πάροχος email μας — παραλαβή και αποθήκευση των μηνυμάτων που μας στέλνετε.',
      ...(hasMap ? ['OpenStreetMap Foundation — οι εικόνες του χάρτη τοποθεσίας φορτώνονται από τους διακομιστές του, οι οποίοι λαμβάνουν τη διεύθυνση IP σας. Δεν ορίζονται cookies.'] : []),
    ],
  },
  { p: 'Αν επιλέξετε να επικοινωνήσετε μαζί μας μέσω WhatsApp ή ακολουθήσετε σύνδεσμο προς το Airbnb, το Booking.com ή τους Χάρτες Google, οι υπηρεσίες αυτές επεξεργάζονται τα δεδομένα σας σύμφωνα με τις δικές τους πολιτικές απορρήτου.' },
  { h: '5. Διαβιβάσεις εκτός Ευρωπαϊκής Ένωσης' },
  { p: 'Ορισμένοι από τους παραπάνω παρόχους έχουν έδρα στις Ηνωμένες Πολιτείες. Όπου τα δεδομένα διαβιβάζονται εκτός του Ευρωπαϊκού Οικονομικού Χώρου, αυτό γίνεται βάσει του Πλαισίου Προστασίας Δεδομένων ΕΕ–ΗΠΑ ή των Τυποποιημένων Συμβατικών Ρητρών της Ευρωπαϊκής Επιτροπής.' },
  { h: '6. Πόσο καιρό διατηρούμε τα δεδομένα σας' },
  {
    ul: [
      'Ερωτήματα και αιτήματα κράτησης που δεν καταλήγουν σε διαμονή: 12 μήνες μετά την τελευταία μας επικοινωνία.',
      'Κρατήσεις: 5 χρόνια από το τέλος του έτους στο οποίο πραγματοποιήθηκε η διαμονή, όπως απαιτεί η ελληνική φορολογική νομοθεσία.',
      'Αντίγραφα των μηνυμάτων που στέλνονται από τις φόρμες μας, τα οποία τηρεί η Formspree: 30 ημέρες.',
      ...(hasAnalytics ? ['Συγκεντρωτικά στατιστικά επισκεψιμότητας, τα οποία τηρεί η Cloudflare: 6 μήνες.'] : []),
      'Δεν αποθηκεύουμε οι ίδιοι τεχνικά δεδομένα, όπως διευθύνσεις IP.',
    ],
  },
  { h: '7. Τα δικαιώματά σας' },
  { p: 'Έχετε δικαίωμα πρόσβασης στα δεδομένα σας, διόρθωσης ή διαγραφής τους, περιορισμού της επεξεργασίας, εναντίωσης στην επεξεργασία και φορητότητας. Για να ασκήσετε τα δικαιώματά σας, επικοινωνήστε μαζί μας στο {email}. Θα σας απαντήσουμε εντός μίας εβδομάδας.' },
  { p: 'Έχετε επίσης δικαίωμα να υποβάλετε καταγγελία στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (www.dpa.gr).' },
  { h: '8. Παιδιά' },
  { p: 'Οι φόρμες μας απευθύνονται σε ενήλικες που κάνουν κράτηση. Όταν μας ενημερώνετε για τις ηλικίες των παιδιών που ταξιδεύουν μαζί σας, τις χρησιμοποιούμε μόνο για την οργάνωση της διαμονής σας.' },
  { h: '9. Ασφάλεια' },
  { p: 'Η ιστοσελίδα λειτουργεί αποκλειστικά μέσω κρυπτογραφημένης σύνδεσης (HTTPS) και λαμβάνουμε κατάλληλα μέτρα για την προστασία των δεδομένων που μας στέλνετε.' },
  { h: '10. Αλλαγές στην πολιτική' },
  { p: 'Ενδέχεται να ενημερώνουμε την παρούσα πολιτική όταν αλλάζουν οι υπηρεσίες μας ή η νομοθεσία. Η ημερομηνία της τελευταίας έκδοσης εμφανίζεται στην αρχή της σελίδας.' },
];

// ---------------------------------------------------------------------------
// Cookie Policy
// ---------------------------------------------------------------------------
const cookiesEn: LegalBlock[] = [
  { p: 'This Cookie Policy explains how {site} uses cookies and similar technologies.' },
  { h: '1. Our approach' },
  { p: hasAnalytics
      ? 'This website does not use cookies for analytics, advertising or tracking. Visit statistics are collected with Cloudflare Web Analytics, which works without cookies and does not identify individual visitors. For this reason no cookie consent banner is shown.'
      : 'This website does not use cookies for analytics, advertising or tracking, and does not include third-party tracking tools. For this reason no cookie consent banner is shown.' },
  { h: '2. What the website stores on your device' },
  {
    ul: [
      'Session storage (not a cookie): when you switch between English and Greek, your browser briefly remembers the part of the page you were viewing, so that you stay in the same place. This information never leaves your device and is deleted immediately afterwards.',
      'Security cookies: our hosting provider, Cloudflare, may set strictly necessary cookies to protect the website against malicious traffic. They do not identify you and are not used for tracking.',
    ],
  },
  { p: 'Strictly necessary cookies and storage do not require consent under Greek law 3471/2006 (art. 4 par. 5) and the ePrivacy Directive.' },
  { h: '3. Other websites' },
  { p: 'When you follow a link to Airbnb, Booking.com, WhatsApp or Google Maps, those websites may set their own cookies under their own cookie policies. We have no control over them.' },
  { h: '4. Managing cookies' },
  { p: 'You can view, block or delete cookies at any time in your browser settings. Blocking strictly necessary cookies may affect how the website works.' },
  { h: '5. Changes' },
  { p: 'If we ever add cookies that require your consent, such as analytics, we will first ask for your consent through a cookie settings banner and update this policy.' },
  { h: '6. Contact' },
  { p: 'For any questions, contact us at {email}.' },
];

const cookiesEl: LegalBlock[] = [
  { p: 'Η παρούσα Πολιτική Cookies εξηγεί πώς το {site} χρησιμοποιεί cookies και παρόμοιες τεχνολογίες.' },
  { h: '1. Η προσέγγισή μας' },
  { p: hasAnalytics
      ? 'Η ιστοσελίδα δεν χρησιμοποιεί cookies για στατιστικά, διαφήμιση ή παρακολούθηση. Τα στατιστικά επισκεψιμότητας συλλέγονται με το Cloudflare Web Analytics, το οποίο λειτουργεί χωρίς cookies και δεν ταυτοποιεί μεμονωμένους επισκέπτες. Για τον λόγο αυτό δεν εμφανίζεται μήνυμα συγκατάθεσης για cookies.'
      : 'Η ιστοσελίδα δεν χρησιμοποιεί cookies για στατιστικά, διαφήμιση ή παρακολούθηση και δεν περιλαμβάνει εργαλεία παρακολούθησης τρίτων. Για τον λόγο αυτό δεν εμφανίζεται μήνυμα συγκατάθεσης για cookies.' },
  { h: '2. Τι αποθηκεύει η ιστοσελίδα στη συσκευή σας' },
  {
    ul: [
      'Αποθήκευση περιόδου λειτουργίας (όχι cookie): όταν αλλάζετε γλώσσα, το πρόγραμμα περιήγησης θυμάται προσωρινά το σημείο της σελίδας που βλέπατε, ώστε να παραμείνετε στο ίδιο σημείο. Η πληροφορία δεν φεύγει ποτέ από τη συσκευή σας και διαγράφεται αμέσως μετά.',
      'Cookies ασφαλείας: ο πάροχος φιλοξενίας μας, η Cloudflare, ενδέχεται να ορίσει απολύτως απαραίτητα cookies για την προστασία της ιστοσελίδας από κακόβουλη κίνηση. Δεν σας ταυτοποιούν και δεν χρησιμοποιούνται για παρακολούθηση.',
    ],
  },
  { p: 'Τα απολύτως απαραίτητα cookies και η αντίστοιχη αποθήκευση δεν απαιτούν συγκατάθεση σύμφωνα με τον ν. 3471/2006 (άρθρο 4 παρ. 5) και την Οδηγία ePrivacy.' },
  { h: '3. Άλλες ιστοσελίδες' },
  { p: 'Όταν ακολουθείτε σύνδεσμο προς το Airbnb, το Booking.com, το WhatsApp ή τους Χάρτες Google, οι ιστοσελίδες αυτές ενδέχεται να ορίσουν δικά τους cookies σύμφωνα με τις δικές τους πολιτικές. Δεν έχουμε έλεγχο σε αυτά.' },
  { h: '4. Διαχείριση cookies' },
  { p: 'Μπορείτε οποιαδήποτε στιγμή να δείτε, να μπλοκάρετε ή να διαγράψετε cookies από τις ρυθμίσεις του προγράμματος περιήγησής σας. Ο αποκλεισμός των απολύτως απαραίτητων cookies ενδέχεται να επηρεάσει τη λειτουργία της ιστοσελίδας.' },
  { h: '5. Αλλαγές' },
  { p: 'Αν στο μέλλον προσθέσουμε cookies που απαιτούν συγκατάθεση, όπως cookies στατιστικών, θα ζητήσουμε πρώτα τη συγκατάθεσή σας μέσω μηνύματος ρυθμίσεων cookies και θα ενημερώσουμε την παρούσα πολιτική.' },
  { h: '6. Επικοινωνία' },
  { p: 'Για οποιαδήποτε ερώτηση, επικοινωνήστε μαζί μας στο {email}.' },
];

// ---------------------------------------------------------------------------
// Terms of Use
// ---------------------------------------------------------------------------
const termsEn: LegalBlock[] = [
  { p: 'These Terms of Use apply to the use of {site}. By using the website you accept these terms.' },
  { h: '1. Operator' },
  { ul: ['{name}', 'Registered seat: {seat}', 'Branch address: {address}', 'Tax ID (ΑΦΜ): {vat}', 'Business registry (ΓΕΜΗ) no.: {gemi}', 'Branch registry (ΓΕΜΗ) no.: {gemiBranch}', 'Company owner: {rep}, tel. {repPhone}, email {repEmail}', 'Property registry number: {registry}', 'Contact email: {email}', 'Contact phone: {phone}'] },
  { h: '2. Purpose of the website' },
  { p: 'The website presents Stylish Private Poolside Villa in Agios Georgios, Southern Corfu, and allows you to check indicative availability, send us questions and booking requests, or continue to Airbnb or Booking.com to book.' },
  { h: '3. Bookings' },
  {
    ul: [
      'Bookings made on Airbnb or Booking.com are governed by the terms, prices and cancellation policies of those platforms.',
      'A booking request sent through this website, by email, by phone or on WhatsApp is not a confirmed booking. A booking is confirmed only when we confirm it to you in writing, together with the price, payment and cancellation terms that apply to it.',
      'The availability calendar is indicative. It is synchronised with Airbnb and Booking.com with a delay and does not guarantee availability.',
    ],
  },
  { h: '4. Information on the website' },
  { p: 'We take care that the information on the website is accurate and up to date. Photos are indicative. Furnishings and decoration may change. Ratings shown are aggregate scores published on Airbnb and Booking.com. Distances are approximate.' },
  { h: '5. House rules' },
  { p: 'During your stay the house rules apply, including check-in and check-out times, no pets, no smoking inside the villa and no parties or events. They are listed on the website and are part of every booking.' },
  { h: '6. Intellectual property' },
  { p: 'The texts, photos, design and logo of the website belong to the operator or are used under licence, and are protected by intellectual property law. Some photos of the area are used under the Pixabay Content License. You may not copy or reuse content from the website without our written permission.' },
  { h: '7. Links to other websites' },
  { p: 'The website contains links to third-party websites, such as Airbnb, Booking.com, WhatsApp and Google Maps. We are not responsible for their content or for how they process your data.' },
  { h: '8. Liability' },
  { p: 'We are not liable for temporary unavailability of the website or for damage resulting from its use, except where caused by our intent or gross negligence. Nothing in these terms limits your rights as a consumer under Greek and EU law.' },
  { h: '9. Personal data' },
  { p: 'How we process personal data is described in our Privacy Policy.' },
  { h: '10. Applicable law and disputes' },
  { p: 'These terms are governed by Greek law. Any dispute will be resolved by the competent courts of Corfu, without prejudice to the mandatory consumer protection provisions of your country of residence. In case of a discrepancy between language versions, the Greek version prevails.' },
  { h: '11. Changes' },
  { p: 'We may update these terms. The date of the latest version is shown at the top of this page.' },
];

const termsEl: LegalBlock[] = [
  { p: 'Οι παρόντες Όροι Χρήσης ισχύουν για τη χρήση του {site}. Χρησιμοποιώντας την ιστοσελίδα αποδέχεστε τους όρους αυτούς.' },
  { h: '1. Στοιχεία λειτουργού' },
  { ul: ['{name}', 'Διεύθυνση έδρας: {seat}', 'Διεύθυνση υποκαταστήματος: {address}', 'ΑΦΜ: {vat}', 'Αριθμός ΓΕΜΗ: {gemi}', 'Αριθμός ΓΕΜΗ υποκαταστήματος: {gemiBranch}', 'Ιδιοκτήτης εταιρείας: {rep}, τηλ. {repPhone}, email {repEmail}', 'Αριθμός μητρώου ακινήτου: {registry}', 'Email επικοινωνίας: {email}', 'Τηλέφωνο επικοινωνίας: {phone}'] },
  { h: '2. Σκοπός της ιστοσελίδας' },
  { p: 'Η ιστοσελίδα παρουσιάζει τη Stylish Private Poolside Villa στον Άγιο Γεώργιο της Νότιας Κέρκυρας και σας επιτρέπει να δείτε ενδεικτική διαθεσιμότητα, να μας στείλετε ερωτήσεις και αιτήματα κράτησης ή να συνεχίσετε στο Airbnb ή στο Booking.com για κράτηση.' },
  { h: '3. Κρατήσεις' },
  {
    ul: [
      'Οι κρατήσεις μέσω Airbnb ή Booking.com διέπονται από τους όρους, τις τιμές και τις πολιτικές ακύρωσης των πλατφορμών αυτών.',
      'Ένα αίτημα κράτησης που στέλνεται μέσω της ιστοσελίδας, με email, τηλεφωνικά ή μέσω WhatsApp δεν αποτελεί επιβεβαιωμένη κράτηση. Η κράτηση επιβεβαιώνεται μόνο όταν σας την επιβεβαιώσουμε γραπτώς, μαζί με την τιμή και τους όρους πληρωμής και ακύρωσης που ισχύουν για αυτήν.',
      'Το ημερολόγιο διαθεσιμότητας είναι ενδεικτικό. Συγχρονίζεται με το Airbnb και το Booking.com με καθυστέρηση και δεν εγγυάται τη διαθεσιμότητα.',
    ],
  },
  { h: '4. Πληροφορίες της ιστοσελίδας' },
  { p: 'Φροντίζουμε οι πληροφορίες της ιστοσελίδας να είναι ακριβείς και επίκαιρες. Οι φωτογραφίες είναι ενδεικτικές. Η επίπλωση και η διακόσμηση ενδέχεται να αλλάξουν. Οι βαθμολογίες είναι οι συνολικές βαθμολογίες που δημοσιεύονται στο Airbnb και στο Booking.com. Οι αποστάσεις είναι κατά προσέγγιση.' },
  { h: '5. Κανόνες διαμονής' },
  { p: 'Κατά τη διαμονή σας ισχύουν οι κανόνες διαμονής, όπως οι ώρες άφιξης και αναχώρησης, η απαγόρευση κατοικιδίων, η απαγόρευση καπνίσματος στους εσωτερικούς χώρους και η απαγόρευση πάρτι ή εκδηλώσεων. Αναφέρονται στην ιστοσελίδα και αποτελούν μέρος κάθε κράτησης.' },
  { h: '6. Πνευματική ιδιοκτησία' },
  { p: 'Τα κείμενα, οι φωτογραφίες, ο σχεδιασμός και το λογότυπο της ιστοσελίδας ανήκουν στον λειτουργό ή χρησιμοποιούνται κατόπιν άδειας και προστατεύονται από τη νομοθεσία περί πνευματικής ιδιοκτησίας. Ορισμένες φωτογραφίες της περιοχής χρησιμοποιούνται βάσει της άδειας Pixabay Content License. Δεν επιτρέπεται η αντιγραφή ή η επαναχρησιμοποίηση περιεχομένου χωρίς τη γραπτή μας άδεια.' },
  { h: '7. Σύνδεσμοι προς άλλες ιστοσελίδες' },
  { p: 'Η ιστοσελίδα περιέχει συνδέσμους προς ιστοσελίδες τρίτων, όπως το Airbnb, το Booking.com, το WhatsApp και οι Χάρτες Google. Δεν ευθυνόμαστε για το περιεχόμενό τους ούτε για τον τρόπο που επεξεργάζονται τα δεδομένα σας.' },
  { h: '8. Ευθύνη' },
  { p: 'Δεν ευθυνόμαστε για προσωρινή μη διαθεσιμότητα της ιστοσελίδας ή για ζημία από τη χρήση της, εκτός αν οφείλεται σε δόλο ή βαριά αμέλειά μας. Τίποτα στους παρόντες όρους δεν περιορίζει τα δικαιώματά σας ως καταναλωτή σύμφωνα με το ελληνικό και το ενωσιακό δίκαιο.' },
  { h: '9. Προσωπικά δεδομένα' },
  { p: 'Ο τρόπος επεξεργασίας των προσωπικών δεδομένων περιγράφεται στην Πολιτική Απορρήτου.' },
  { h: '10. Εφαρμοστέο δίκαιο και επίλυση διαφορών' },
  { p: 'Οι παρόντες όροι διέπονται από το ελληνικό δίκαιο. Για κάθε διαφορά αρμόδια είναι τα δικαστήρια της Κέρκυρας, με την επιφύλαξη των αναγκαστικού δικαίου διατάξεων προστασίας καταναλωτή της χώρας διαμονής σας. Σε περίπτωση απόκλισης μεταξύ των γλωσσικών εκδόσεων, υπερισχύει η ελληνική.' },
  { h: '11. Αλλαγές' },
  { p: 'Ενδέχεται να ενημερώνουμε τους παρόντες όρους. Η ημερομηνία της τελευταίας έκδοσης εμφανίζεται στην αρχή της σελίδας.' },
];

// ---------------------------------------------------------------------------
// Booking Terms (direct bookings) — texts come from property.bookingTerms
// ---------------------------------------------------------------------------
const bookingEn: LegalBlock[] = [
  { p: 'These Booking Terms apply to stays booked directly with us — through this website, by email, by phone or on WhatsApp. Bookings made on Airbnb or Booking.com are governed by the terms of those platforms.' },
  { h: '1. Booking and confirmation' },
  { p: 'A booking request is not a confirmed booking. Your booking is confirmed only when we confirm it to you in writing.' },
  { h: '2. Minimum stay' },
  { p: '{minimumStay}' },
  { h: '3. Deposit' },
  { p: '{deposit}' },
  { h: '4. Payment of the balance' },
  { p: '{balance}' },
  { h: '5. Payment methods' },
  { p: '{paymentMethods}' },
  { h: '6. Cancellation' },
  { ul: property.bookingTerms.cancellation?.en ?? ['{cancellation}'] },
  { h: '7. Damages' },
  { p: '{damageDeposit}' },
  { h: '8. Taxes and fees' },
  { p: '{touristTax}' },
  { h: '9. Arrival and departure' },
  { p: 'Check-in is from {checkIn} and check-out is before {checkOut}. The villa accommodates up to {maxGuests} guests.' },
  { h: '10. House rules' },
  { p: 'Pets are not allowed, smoking is not permitted inside the villa, and parties or events are not allowed. Children are welcome. Cots and high chairs are not available. Children are not allowed in the pool.' },
  { h: '11. Other terms' },
  { p: 'The Terms of Use and the Privacy Policy of this website also apply. In case of a discrepancy between language versions, the Greek version prevails.' },
];

const bookingEl: LegalBlock[] = [
  { p: 'Οι παρόντες Όροι Κράτησης ισχύουν για διαμονές που κλείνονται απευθείας σε εμάς — μέσω της ιστοσελίδας, με email, τηλεφωνικά ή μέσω WhatsApp. Οι κρατήσεις μέσω Airbnb ή Booking.com διέπονται από τους όρους των πλατφορμών αυτών.' },
  { h: '1. Κράτηση και επιβεβαίωση' },
  { p: 'Το αίτημα κράτησης δεν αποτελεί επιβεβαιωμένη κράτηση. Η κράτησή σας επιβεβαιώνεται μόνο όταν σας την επιβεβαιώσουμε γραπτώς.' },
  { h: '2. Ελάχιστη διαμονή' },
  { p: '{minimumStay}' },
  { h: '3. Προκαταβολή' },
  { p: '{deposit}' },
  { h: '4. Εξόφληση' },
  { p: '{balance}' },
  { h: '5. Τρόποι πληρωμής' },
  { p: '{paymentMethods}' },
  { h: '6. Ακύρωση' },
  { ul: property.bookingTerms.cancellation?.el ?? ['{cancellation}'] },
  { h: '7. Ζημιές' },
  { p: '{damageDeposit}' },
  { h: '8. Φόροι και τέλη' },
  { p: '{touristTax}' },
  { h: '9. Άφιξη και αναχώρηση' },
  { p: 'Η άφιξη (check-in) είναι από τις {checkIn} και η αναχώρηση (check-out) έως τις {checkOut}. Η βίλα φιλοξενεί έως {maxGuests} άτομα.' },
  { h: '10. Κανόνες διαμονής' },
  { p: 'Δεν επιτρέπονται τα κατοικίδια, το κάπνισμα στους εσωτερικούς χώρους και τα πάρτι ή οι εκδηλώσεις. Τα παιδιά είναι ευπρόσδεκτα. Δεν διατίθενται βρεφικά κρεβάτια και παιδικά καρεκλάκια. Τα παιδιά δεν επιτρέπονται στην πισίνα.' },
  { h: '11. Λοιποί όροι' },
  { p: 'Ισχύουν επίσης οι Όροι Χρήσης και η Πολιτική Απορρήτου της ιστοσελίδας. Σε περίπτωση απόκλισης μεταξύ των γλωσσικών εκδόσεων, υπερισχύει η ελληνική.' },
];

export const legalPages: LegalPage[] = [
  {
    slug: 'privacy-policy',
    title: { en: 'Privacy Policy', el: 'Πολιτική Απορρήτου' },
    body: { en: privacyEn, el: privacyEl },
    lastUpdated: '2026-10-08',
  },
  {
    slug: 'cookie-policy',
    title: { en: 'Cookie Policy', el: 'Πολιτική Cookies' },
    body: { en: cookiesEn, el: cookiesEl },
    lastUpdated: '2026-10-08',
  },
  {
    slug: 'terms-and-conditions',
    title: { en: 'Terms of Use', el: 'Όροι Χρήσης' },
    body: { en: termsEn, el: termsEl },
    lastUpdated: '2026-10-08',
  },
  {
    slug: 'booking-terms',
    title: { en: 'Booking Terms', el: 'Όροι Κράτησης' },
    body: { en: bookingEn, el: bookingEl },
    lastUpdated: '2026-10-08',
    hideUntilComplete: true,
  },
];
