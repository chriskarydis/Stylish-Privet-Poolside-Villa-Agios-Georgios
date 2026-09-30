import type { ImageMetadata } from 'astro';
import { images, type ImageKey, type ImageSlot } from '@content/gallery';

/**
 * Every photo placed under src/assets/images/ is picked up automatically and
 * matched to its slot by path, ignoring the file extension and letter case.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

const stem = (path: string) => path.replace(/\.[^./]+$/, '').toLowerCase();

const byStem = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  byStem.set(stem(path.replace('/src/assets/images/', '')), mod.default);
}

export function resolveSlot(image: ImageKey | ImageSlot): ImageSlot {
  return typeof image === 'string' ? images[image] : image;
}

/** The optimisable image for a slot, or undefined while the photo is missing. */
export function findImage(image: ImageKey | ImageSlot): ImageMetadata | undefined {
  return byStem.get(stem(resolveSlot(image).file));
}
