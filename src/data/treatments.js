// Single source of truth for treatment content, pricing and links -
// used by the Home page (Tretmani cards, Cjenik), the Header nav, and
// the individual treatment detail pages, so prices and copy never drift
// out of sync between sections.

export const treatments = [
  {
    slug: "laserska-epilacija",
    title: "Laserska epilacija",
    kicker: "Najtraženije",
    shortDescription:
      "Za glatku kožu bez svakodnevnog brijanja, uz osjećaj ugodnijeg tretmana i plan kroz seriju dolazaka.",
    heroBenefit:
      "Trajno rjeđi rast dlačica bez svakodnevnog brijanja, uz individualan plan i ugodno hlađenje kože tijekom tretmana.",
    metaDescription:
      "Laserska epilacija u Rijeci - trajno rjeđi rast dlačica, besplatna konzultacija i individualan plan tretmana u Glow Atelieru.",
    points: [
      "3 valne duljine i ugodno hlađenje kože",
      "Plan tretmana prilagođen zoni i tipu kože",
      "Besplatna konzultacija prije prve rezervacije",
    ],
    image: "/images/treatments/treatment1.webp",
    secondImage: "/images/treatments/treatment1-detail.webp",
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
    steps: [
      {
        title: "Besplatna konzultacija",
        description:
          "Procjenjujemo tip kože, boju i gustoću dlačica te dogovaramo realan plan broja tretmana za vašu zonu.",
      },
      {
        title: "Priprema kože",
        description:
          "Prije tretmana kožu je potrebno obrijati, a preporučuje se izbjegavanje sunčanja i epilacije čupkanjem ili voskom.",
      },
      {
        title: "Sam tretman",
        description:
          "Laser cilja korijen dlačice uz kontinuirano hlađenje kože radi udobnijeg osjećaja tijekom rada uređaja.",
      },
      {
        title: "Njega nakon tretmana",
        description:
          "Kožu je potrebno njegovati i štititi od sunca, a sljedeći termin dogovaramo prema ciklusu rasta dlačica.",
      },
    ],
    suitability: {
      intro:
        "Laserska epilacija pogodna je za većinu tipova kože, a broj i razmak tretmana prilagođavamo individualno prema boji kože, gustoći dlačica i zoni koja se tretira.",
      points: [
        "Klijentima kojima je dosadilo svakodnevno brijanje ili čupkanje",
        "Onima koji žele dugoročno rjeđi i sporiji rast dlačica",
        "Osjetljivijoj koži, uz prilagođene postavke uređaja",
      ],
    },
    timeline: [
      {
        title: "Nakon 1-2 tretmana",
        description: "Najčešće se primjećuje sporiji rast i mekša tekstura dlačica na tretiranom području.",
      },
      {
        title: "Nakon 3-4 tretmana",
        description: "Mnogim klijentima dlačice postaju rjeđe, a održavanje između dolazaka znatno jednostavnije.",
      },
      {
        title: "Nakon 7-8 tretmana",
        description:
          "Serija dolazaka obično donosi dugotrajniji osjećaj glatkoće, ovisno o zoni i individualnom ciklusu rasta.",
      },
    ],
    faqs: [
      {
        question: "Koja je razlika između laserske i klasične epilacije?",
        answer:
          "Za razliku od brijanja ili voska koji uklanjaju dlačicu privremeno, laser cilja folikul dlačice te s vremenom usporava i smanjuje njezin rast, uz seriju tretmana.",
      },
      {
        question: "Mogu li se tretirati sve zone tijela?",
        answer:
          "Da, radimo sve uobičajene zone - ruke, noge, pazuhe, bikini liniju i lice, a plan prilagođavamo prema vašim ciljevima i osjetljivosti kože.",
      },
      {
        question: "Što ako imam tamniju ili preplanulu kožu?",
        answer:
          "Uređaj ima više valnih duljina koje se prilagođavaju tipu kože, no za sigurnost tretmana preporučujemo izbjegavati intenzivno sunčanje neposredno prije dolaska.",
      },
    ],
  },
  {
    slug: "hydrafacial",
    title: "Hydrafacial",
    kicker: "Njega lica",
    shortDescription:
      "Za klijente koji žele čišći, hidratiziraniji i svježiji izgled tena kroz tretman koji djeluje uredno i premium.",
    heroBenefit:
      "Čišći, hidratiziraniji i svježiji izgled tena nakon samo jednog tretmana, bez razdoblja oporavka.",
    metaDescription:
      "Hydrafacial Rijeka - čišći, hidratiziraniji i svježiji ten nakon jednog tretmana, bez razdoblja oporavka. Rezervirajte u Glow Atelieru.",
    points: [
      "Za svježiji, ujednačeniji i njegovaniji izgled tena",
      "Moguć pojedinačni tretman ili paket 5 + 1 gratis",
      "Idealan kada želite brz i uredan beauty refresh",
    ],
    image: "/images/treatments/treatment2.webp",
    secondImage: "/images/treatments/treatment2-detail.webp",
    href: "/tretmani/hydrafacial",
    pricing: {
      startingPrice: 120,
      note: null,
      packages: [
        { label: "1 tretman", price: 120 },
        { label: "Paket 5 + 1 gratis", price: 600 },
      ],
    },
    steps: [
      {
        title: "Čišćenje i piling",
        description:
          "Uklanjamo nečistoće i mrtve stanice kože kako bi aktivni sastojci kasnije bolje djelovali.",
      },
      {
        title: "Ekstrakcija",
        description: "Nježno, bezbolno uklanjanje sadržaja iz pora pomoću vakuumskog nastavka uređaja.",
      },
      {
        title: "Hidratacija i serumi",
        description: "Koža se puni serumima prilagođenim vašem tipu kože i trenutnim potrebama.",
      },
      {
        title: "Zaštita",
        description: "Tretman završava zaštitnim slojem koji zaključava hidrataciju i produžuje efekt svježine.",
      },
    ],
    suitability: {
      intro:
        "Hydrafacial je blag i prilagodljiv tretman pogodan za gotovo svaki tip kože, uključujući i osjetljiviju kožu, jer se sastojci biraju prema vašim trenutnim potrebama.",
      points: [
        "Klijentima koji žele brz 'refresh' prije nekog događaja",
        "Onima s neujednačenim tenom, sitnim borama ili proširenim porama",
        "Redovitoj njezi kože kao dio mjesečne rutine",
      ],
    },
    timeline: [
      {
        title: "Odmah nakon tretmana",
        description: "Koža izgleda svježije, hidratiziranije i vidno čišće, bez crvenila ili razdoblja oporavka.",
      },
      {
        title: "Nakon 2-3 tretmana",
        description: "Ten postaje ujednačeniji, a pore vidljivo čišće uz redovito ponavljanje tretmana.",
      },
      {
        title: "Uz redovite dolaske",
        description: "Koža dugoročno zadržava svježiji izgled, a sitne nepravilnosti postaju manje izražene.",
      },
    ],
    faqs: [
      {
        question: "Koliko traje Hydrafacial tretman?",
        answer:
          "Sam tretman traje otprilike 30 do 45 minuta, a rezultat je vidljiv odmah nakon završetka.",
      },
      {
        question: "Je li potreban oporavak nakon tretmana?",
        answer:
          "Ne, možete se odmah vratiti svakodnevnim aktivnostima - tretman ne ostavlja crvenilo niti zahtijeva posebnu njegu.",
      },
      {
        question: "Koliko često je preporučeno raditi Hydrafacial?",
        answer:
          "Za održavanje rezultata preporučuje se tretman jednom mjesečno, a paket 5 + 1 gratis pogodan je za redovitije korisnike.",
      },
    ],
  },
  {
    slug: "tesla-tretmani",
    title: "Tesla tretmani",
    kicker: "Body sculpt",
    shortDescription:
      "Za klijente koji žele neinvazivnu podršku oblikovanju tijela i čvršćem osjećaju kroz strukturiran plan dolazaka.",
    heroBenefit:
      "Neinvazivna podrška oblikovanju tijela uz jaču kontrakciju mišića, bez igli i vremena oporavka.",
    metaDescription:
      "Tesla tretmani u Rijeci - neinvazivno oblikovanje tijela i jačanje mišića bez igli i oporavka. Rezervirajte u Glow Atelieru.",
    points: [
      "Neinvazivan pristup za ciljane regije tijela",
      "Pojedinačni tretman ili paket prema vašem planu",
      "Jasan pregled opcija prije same rezervacije",
    ],
    image: "/images/treatments/treatment3.webp",
    secondImage: "/images/treatments/treatment3-detail.webp",
    href: "/tretmani/tesla-tretmani",
    pricing: {
      startingPrice: 40,
      note: null,
      packages: [
        { label: "1 tretman", price: 40 },
        { label: "Paket 10 + 2 gratis", price: 400 },
      ],
    },
    steps: [
      {
        title: "Konzultacija i odabir regije",
        description:
          "Zajedno biramo regiju tijela i broj tretmana prema vašem cilju - trbuh, stražnjica, bedra ili ruke.",
      },
      {
        title: "Postavljanje aplikatora",
        description: "Aplikator se postavlja na ciljano područje, a intenzitet se prilagođava vašoj osjetljivosti.",
      },
      {
        title: "Sam tretman",
        description:
          "Elektromagnetski impulsi potiču intenzivne kontrakcije mišića, slično intenzivnom treningu, dok vi samo ležite i opuštate se.",
      },
      {
        title: "Nakon tretmana",
        description: "Nema vremena oporavka - možete se odmah vratiti svakodnevnim obavezama.",
      },
    ],
    suitability: {
      intro:
        "Tesla tretmani namijenjeni su klijentima koji uz redovitu tjelesnu aktivnost žele dodatnu podršku u oblikovanju i jačanju ciljanih regija tijela.",
      points: [
        "Onima koji žele čvršći osjećaj u području trbuha, stražnjice ili bedara",
        "Klijentima bez vremena za dodatne intenzivne treninge",
        "Podršku nakon što je postignut cilj u pogledu tjelesne težine",
      ],
    },
    timeline: [
      {
        title: "Nakon 2-3 tretmana",
        description: "Mnogi klijenti primjećuju osjećaj čvršće muskulature na tretiranom području.",
      },
      {
        title: "Nakon 6-8 tretmana",
        description: "Regija djeluje zategnutije, a osjećaj čvrstoće postaje izraženiji uz redovitu aktivnost.",
      },
      {
        title: "Uz paket od 10 tretmana",
        description:
          "Rezultati su najizraženiji kada se tretman kombinira s uravnoteženom prehranom i redovitim kretanjem.",
      },
    ],
    faqs: [
      {
        question: "Je li Tesla tretman bolan?",
        answer:
          "Ne, osjećaj se opisuje kao intenzivna kontrakcija mišića, slična vježbanju, a intenzitet se prilagođava vašoj udobnosti.",
      },
      {
        question: "Koliko traje jedan tretman?",
        answer: "Jedan tretman traje otprilike 30 minuta po regiji, bez potrebe za pripremom ili oporavkom.",
      },
      {
        question: "Mogu li kombinirati više regija tijela?",
        answer:
          "Da, plan tretmana možemo prilagoditi za više regija, a redoslijed i dinamiku dogovaramo prema vašem cilju.",
      },
    ],
  },
];
