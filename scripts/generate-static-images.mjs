/**
 * Regenerates the static fallback images in /public:
 *   og-image.jpg (1200×630 social card, used until a hero photo exists),
 *   favicon-32.png, apple-touch-icon.png.
 * Run with: node scripts/generate-static-images.mjs
 */
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const pub = new URL('../public/', import.meta.url);
const favicon = await readFile(new URL('favicon.svg', pub));

await sharp(favicon, { density: 300 }).resize(32, 32).png().toFile(fileURLToPath(new URL('favicon-32.png', pub)));
await sharp(favicon, { density: 600 }).resize(180, 180).flatten({ background: '#1d4b52' }).png().toFile(fileURLToPath(new URL('apple-touch-icon.png', pub)));

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#23474f"/><stop offset="0.6" stop-color="#8a8a78"/><stop offset="1" stop-color="#e2b48c"/>
    </linearGradient>
    <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3f7479"/><stop offset="1" stop-color="#143a40"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="400" fill="url(#sky)"/>
  <circle cx="900" cy="380" r="34" fill="#f8dcb6" opacity="0.9"/>
  <path d="M0 375 C 140 335, 250 345, 360 365 S 580 395, 680 390 L 680 400 L 0 400 Z" fill="#4c6660" opacity="0.75"/>
  <rect y="396" width="1200" height="234" fill="url(#sea)"/>
  <rect width="1200" height="630" fill="#0a1a1d" opacity="0.35"/>
  <text x="80" y="250" font-family="Georgia, 'Times New Roman', serif" font-size="68" fill="#f7f2ea">Stylish Private</text>
  <text x="80" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="68" fill="#f7f2ea">Poolside Villa</text>
  <text x="82" y="400" font-family="Arial, Helvetica, sans-serif" font-size="24" letter-spacing="5" fill="#f1dcc3">AGIOS GEORGIOS · SOUTHERN CORFU</text>
  <text x="82" y="540" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#f7f2ea">Up to 6 guests  ·  2 bedrooms  ·  2 bathrooms  ·  500 m from the beach</text>
</svg>`;
await sharp(Buffer.from(og)).jpeg({ quality: 86, mozjpeg: true }).toFile(fileURLToPath(new URL('og-image.jpg', pub)));

console.log('Static images generated in /public');
