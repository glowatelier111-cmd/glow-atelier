// Single source of truth for treatment content, pricing and links -
// used by the Home page (Tretmani cards, Cjenik), the Header nav, and
// (later) the individual treatment detail pages, so prices and copy never
// drift out of sync between sections.

export const treatments = [
  {
    slug: "laserska-epilacija",
    title: "Laserska epilacija",
    kicker: "Najtraženije",
    shortDescription:
      "Za glatku kožu bez svakodnevnog brijanja, uz osjećaj ugodnijeg tretmana i plan kroz seriju dolazaka.",
    points: [
      "3 valne duljine i ugodno hlađenje kože",
      "Plan tretmana prilagođen zoni i tipu kože",
      "Besplatna konzultacija prije prve rezervacije",
    ],
    image: "/images/treatments/treatment1.webp",
    href: "/tretmani/laserska-epilacija",
    pricing: {
      startingPrice: 400,
      note: "Paket od 10 tretmana po zoni",
      packages: [
        { label: "Cijele ruke", price: 400 },
        { label: "Cijele noge", price: 500 },
        { label: "Bikini + prepone", price: 450 },
        { label: "Pazusi", price: 400 },
        { label: "Pazusi + bikini", price: 600 },
        { label: "Cijelo tijelo", price: 1000 },
      ],
    },
  },
  {
    slug: "hydrafacial",
    title: "Hydrafacial",
    kicker: "Njega lica",
    shortDescription:
      "Za klijente koji žele čišći, hidratiziraniji i svježiji izgled tena kroz tretman koji djeluje uredno i premium.",
    points: [
      "Za svježiji, ujednačeniji i njegovaniji izgled tena",
      "Moguć pojedinačni tretman ili paket 5 + 1 gratis",
      "Idealan kada želite brz i uredan beauty refresh",
    ],
    image: "/images/treatments/treatment2.webp",
    href: "/tretmani/hydrafacial",
    pricing: {
      startingPrice: 120,
      note: null,
      packages: [
        { label: "1 tretman", price: 120 },
        { label: "Paket 5 + 1 gratis", price: 600 },
      ],
    },
  },
  {
    slug: "tesla-tretmani",
    title: "Tesla tretmani",
    kicker: "Body sculpt",
    shortDescription:
      "Za klijente koji žele neinvazivnu podršku oblikovanju tijela i čvršćem osjećaju kroz strukturiran plan dolazaka.",
    points: [
      "Neinvazivan pristup za ciljane regije tijela",
      "Pojedinačni tretman ili paket prema vašem planu",
      "Jasan pregled opcija prije same rezervacije",
    ],
    image: "/images/treatments/treatment3.webp",
    href: "/tretmani/tesla-tretmani",
    pricing: {
      startingPrice: 40,
      note: null,
      packages: [
        { label: "1 tretman", price: 40 },
        { label: "Paket 10 + 2 gratis", price: 400 },
      ],
    },
  },
];
