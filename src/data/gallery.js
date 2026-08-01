// Gallery photos grouped by category (prostor / oprema / tretmani), each
// with its real intrinsic width/height so next/image can lay them out in a
// masonry grid without any cumulative layout shift.

export const galleryCategories = [
  {
    id: "prostor",
    label: "Prostor",
    items: [
      {
        src: "/images/gallery/reception.webp",
        width: 1359,
        height: 906,
        alt: "Recepcija Glow Atelier salona",
      },
      {
        src: "/images/gallery/waiting-room-empty.webp",
        width: 1359,
        height: 913,
        alt: "Čekaonica Glow Atelier salona",
      },
      {
        src: "/images/gallery/waiting-room-guest.webp",
        width: 1080,
        height: 1350,
        alt: "Klijentica u čekaonici Glow Atelier salona",
      },
      {
        src: "/images/gallery/treatment-room.webp",
        width: 1122,
        height: 1402,
        alt: "Soba za tretmane u Glow Atelieru",
      },
    ],
  },
  {
    id: "oprema",
    label: "Oprema",
    items: [
      {
        src: "/images/treatments/treatment3-detail.webp",
        width: 1080,
        height: 1350,
        alt: "HIEMT uređaj za Tesla tretmane",
      },
      {
        src: "/images/gallery/tesla-4.webp",
        width: 1122,
        height: 1402,
        alt: "Laserski uređaj u Glow Atelieru",
      },
    ],
  },
  {
    id: "tretmani",
    label: "Tretmani",
    items: [
      {
        src: "/images/hero/hero.webp",
        width: 1080,
        height: 1350,
        alt: "Laserska epilacija u Glow Atelieru",
      },
      {
        src: "/images/treatments/treatment1.webp",
        width: 700,
        height: 467,
        alt: "Laserska epilacija pazuha",
      },
      {
        src: "/images/treatments/treatment1-detail.webp",
        width: 1000,
        height: 667,
        alt: "Laserski tretman u tijeku",
      },
      {
        src: "/images/treatments/treatment2.webp",
        width: 659,
        height: 494,
        alt: "Laserski tretman lica",
      },
      {
        src: "/images/treatments/treatment2-detail.webp",
        width: 1080,
        height: 1132,
        alt: "Laserski tretman lica izbliza",
      },
      {
        src: "/images/gallery/laser-3.webp",
        width: 1122,
        height: 1402,
        alt: "Laserska epilacija ruke",
      },
      {
        src: "/images/gallery/tesla-2.webp",
        width: 1122,
        height: 1402,
        alt: "Tesla tretman bedara",
      },
      {
        src: "/images/gallery/tesla-3.webp",
        width: 1122,
        height: 1402,
        alt: "Tesla tretman u tijeku",
      },
    ],
  },
];
