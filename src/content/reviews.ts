/**
 * GUEST REVIEWS — real reviews only, quoted exactly as the guest wrote them.
 *
 * Rules:
 *  - Copy the text from Airbnb / Booking.com word for word (an excerpt is fine;
 *    mark omitted text with "…"). Never rewrite, translate or "improve" a review.
 *  - Reviews are shown in their original language on every version of the site.
 *  - They are NOT added to structured data (search engines do not accept
 *    self-published third-party reviews).
 */
export interface GuestReview {
  author: string;
  platform: 'Airbnb' | 'Booking.com';
  /** Country shown on the platform, if any. */
  country?: { en: string; el: string };
  /** Month of the stay/review as shown on the platform, 'YYYY-MM'. */
  date?: string;
  /** Language the review was written in (used for correct pronunciation by screen readers). */
  lang: string;
  text: string;
}

export const guestReviews: GuestReview[] = [
  {
    author: 'Matthew',
    platform: 'Airbnb',
    date: '2026-08',
    lang: 'en',
    text: 'The Villa was better than the photos and was immaculately clean, the two great size bedrooms were fantastic and the kitchen/lounge area were perfect and had everything you would need for a stress free stay. … The communication from Anastasia was absolutely amazing and the whole family who own the Villa are some of the nicest people we have ever met … The added bonus was having the use of the pool right next door to the Villa …',
  },
  {
    author: 'Ilya',
    platform: 'Booking.com',
    country: { en: 'United Kingdom', el: 'Ηνωμένο Βασίλειο' },
    lang: 'en',
    text: 'House inside is perfect. Very modern, well thought through and simply super comfortable.',
  },
  {
    author: 'Tomas',
    platform: 'Airbnb',
    date: '2025-07',
    lang: 'en',
    text: 'Accomodation was fantastic and nice with very friendly and kind hosts and their crew. … Beach was also very close …',
  },
  {
    author: 'Philip',
    platform: 'Booking.com',
    country: { en: 'United Kingdom', el: 'Ηνωμένο Βασίλειο' },
    lang: 'en',
    text: 'The property was excellently located and run by a wonderful family who were always attentive to our every need.',
  },
];
