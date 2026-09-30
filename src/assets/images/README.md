# Property photos

Drop photos into these folders using the file names below. They are picked up
automatically, resized and converted to AVIF/WebP at build time. The extension
can be `.jpg`, `.jpeg`, `.png`, `.webp` or `.avif`.

Recommended: landscape, at least **2400 px wide** (hero: 2560 px+), JPG quality ~85.

| Slot            | File                               | Used in                         |
| --------------- | ---------------------------------- | ------------------------------- |
| hero            | `hero/hero.jpg`                    | Hero, gallery, social preview   |
| exterior        | `villa/exterior.jpg`               | About, gallery                  |
| livingRoom      | `interiors/living-room.jpg`        | About, sleeping cards, gallery  |
| bedroom1        | `bedrooms/bedroom-1.jpg`           | Sleeping cards, gallery         |
| bedroom2        | `bedrooms/bedroom-2.jpg`           | Sleeping cards, gallery         |
| bathroom        | `bathrooms/bathroom.jpg`           | Bathrooms, gallery              |
| kitchen         | `kitchen/kitchen.jpg`              | Kitchen, gallery                |
| pool            | `outdoors/pool.jpg`                | Pool section, gallery           |
| garden          | `outdoors/garden.jpg`              | Outdoor living, gallery         |
| outdoorDining   | `outdoors/outdoor-dining.jpg`      | Outdoor living, gallery         |
| balcony         | `outdoors/balcony.jpg`             | Outdoor living, gallery         |
| beach           | `location/beach.jpg`               | Location, gallery               |
| agiosGeorgios   | `location/agios-georgios.jpg`      | Booking section background      |
| southernCorfu   | `location/southern-corfu.jpg`      | Gallery                         |
| lakeKorission   | `location/lake-korission.jpg`      | Explore card, gallery           |
| issos           | `location/issos-beach.jpg`         | Explore card                    |
| marathias       | `location/marathias-beach.jpg`     | Explore card                    |
| corfuTown       | `location/corfu-town.jpg`          | Explore card                    |
| achilleion      | `location/achilleion.jpg`          | Explore card                    |

Slots, alt texts and the gallery order are defined in `content/gallery.ts`.
After adding a photo, update its `alt` text there so it describes the real image.
To add more gallery photos, add entries to `galleryItems` in the same file.

Only use real photos of the property for property slots. Area photos must be
your own or properly licensed.
