// Single source of truth for the Head Spa page, the Home teaser, the Cjenik
// card and the reservation form options. Copy comes from the salon's own
// "O Head Spa + tretmani" document.
//
// Images under /images/head-spa/ are Unsplash License stock photos used as
// placeholders until the salon sends real photos - same file names, swap in place.

export const HEAD_SPA_HREF = "/head-spa";
export const LIGHTS_ADDON_PRICE = 15;

// Start date shown next to every Head Spa "Sidrena cijena".
export const HEAD_SPA_ANCHOR_SINCE = "01.11.2026.";

export const headSpa = {
  title: "Head Spa",
  href: HEAD_SPA_HREF,
  metaDescription:
    "Head Spa ritual u Glow Atelieru - analiza vlasišta trihološkom kamerom, dubinsko čišćenje, Alfaparf Milano njega i opuštajuća masaža glave, vrata i ramena.",
  images: {
    hero: "/images/head-spa/hero.webp",
    massage: "/images/head-spa/massage.webp",
    home: "/images/head-spa/home.webp",
    camera: "/images/head-spa/camera.webp",
    products: "/images/head-spa/products.webp",
    led: "/images/head-spa/led.webp",
  },

  hero: {
    eyebrow: "Head Spa",
    title: "Njega koja se osjeća. Ljepota koja se vidi.",
    tagline: "Mir koji nosite sa sobom.",
    lead: "Otkrijte ritual koji spaja profesionalnu njegu vlasišta i kose s trenucima potpunog opuštanja.",
  },

  intro: {
    title: "Više od njege kose. Trenutak potpune posvećenosti sebi.",
    paragraphs: [
      "Zamislite trenutak u kojem usporavate, zatvarate oči i prepuštate se toploj vodi, nježnim dodirima i umirujućoj masaži. Napetost svakodnevice polako popušta, a vi dobivate priliku zastati, odmoriti se i posvetiti sebi.",
      "Head Spa je poseban ritual koji povezuje njegu vlasišta i kose s dubokim osjećajem opuštenosti. Kombinacijom pažljivo odabranih preparata, čišćenja vlasišta, masaže, aromaterapije i topline stvaramo iskustvo u kojem se ljepota i ugoda susreću u svakom trenutku.",
    ],
  },

  benefits: [
    {
      title: "Čisto i njegovano vlasište",
      text: "Temeljito čišćenje pomaže ukloniti višak sebuma, ostatke proizvoda za oblikovanje i nečistoće koje se nakupljaju na vlasištu. Pravilna njega pridonosi osjećaju svježine, čistoće i ugode.",
    },
    {
      title: "Kosa koja odiše ljepotom",
      text: "Odabrani preparati njeguju kosu, pomažu poboljšati njezinu mekoću, zaglađenost i sjaj te olakšavaju raščešljavanje.",
    },
    {
      title: "Opuštanje koje osjećate",
      text: "Nježna masaža vlasišta, vrata i ramena pruža ugodan osjećaj rasterećenja i pomaže opustiti napete mišiće. To je vrijeme u kojem ne morate ništa – osim prepustiti se trenutku.",
    },
    {
      title: "Predah od svakodnevnog stresa",
      text: "Nekoliko trenutaka posvećenih sebi može postati dragocjen dio vaše rutine brige o sebi.",
    },
    {
      title: "Njega prilagođena vašim potrebama",
      text: "Svako vlasište ima svoje potrebe. Zato se njega prilagođava njegovu stanju i tipu kose, uz odabir odgovarajućih preparata i postupaka.",
    },
  ],

  philosophy: {
    title: "Ljepota počinje pažnjom.",
    text: "U Glow Atelieru vjerujemo da briga o sebi nije luksuz, već važan dio svakodnevice. Zato smo Head Spa osmislili kao trenutak u kojem njegujete vlasište i kosu, opuštate se i ponovno povezujete sa sobom.",
  },

  // lights: "included" | "addon" | null
  rituals: [
    {
      slug: "kids",
      name: "Kids",
      tagline: "Nježan ritual za djecu",
      duration: 30,
      price: 40,
      lights: null,
      description:
        "Nježan Head Spa ritual prilagođen djeci, osmišljen kao ugodno i opuštajuće iskustvo. Kratak i ugodan tretman bez previše koraka, prilagođen dobi djeteta i njegovoj toleranciji na masažu.",
      note: "Za djecu do 14 godina. Roditelj može biti prisutan, ali nije obavezno.",
      closing: "Nježno, ugodno i bez žurbe.",
      includes: [
        "Nježna priprema i pranje kose",
        "Lagana masaža vlasišta tijekom pranja",
        "Hranjiva njega kose",
        "Masaža glave, vrata i ramena",
        "Sušenje kose",
      ],
      steps: [
        { label: "Priprema i namakanje kose", minutes: 2 },
        { label: "Nježno pranje i masaža vlasišta", minutes: 6 },
        { label: "Hranjiva maska ili njega kose", minutes: 5 },
        { label: "Masaža glave, vrata i ramena", minutes: 10 },
        { label: "Ispiranje i završna njega", minutes: 2 },
        { label: "Sušenje kose", minutes: 5 },
      ],
    },
    {
      slug: "men",
      name: "Men",
      tagline: "Njega i opuštanje",
      duration: 45,
      price: 45,
      lights: "addon",
      description:
        "Head Spa ritual za muškarce s naglaskom na dubinsko čišćenje vlasišta, njegu kose i intenzivno opuštanje.",
      includes: [
        "Analiza vlasišta trihološkom kamerom",
        "Piling vlasišta prema potrebi",
        "Dubinsko pranje Alfaparf Professional proizvodima",
        "Masaža vlasišta tijekom pranja",
        "Personalizirana njega kose",
        "Masaža glave, vrata i ramena",
        "Završna njega i sušenje",
      ],
      steps: [
        { label: "Analiza vlasišta kamerom", minutes: 4 },
        { label: "Piling vlasišta prema potrebi", minutes: 3 },
        { label: "Dubinsko pranje i masaža vlasišta", minutes: 10 },
        { label: "Njega kose i vrijeme djelovanja", minutes: 5 },
        { label: "Masaža glave, vrata i ramena", minutes: 10 },
        { label: "Ispiranje i završna njega", minutes: 3 },
        { label: "Sušenje i oblikovanje", minutes: 10 },
      ],
    },
    {
      slug: "basic",
      name: "Basic",
      tagline: "Prvi potpuni Head Spa ritual",
      duration: 60,
      price: 65,
      lights: "addon",
      description:
        "Idealan prvi korak u svijet Head Spa rituala. Kratak, ali potpun tretman za čisto, njegovano i opušteno vlasište.",
      includes: [
        "Analiza vlasišta trihološkom kamerom",
        "Piling vlasišta",
        "Dubinsko pranje Alfaparf Professional proizvodima",
        "Masaža vlasišta tijekom pranja",
        "Njega kose",
        "Masaža glave, vrata i ramena",
        "Završna njega i sušenje",
      ],
      steps: [
        { label: "Analiza vlasišta kamerom", minutes: 5 },
        { label: "Piling vlasišta", minutes: 5 },
        { label: "Dubinsko pranje i masaža vlasišta", minutes: 10 },
        { label: "Hranjiva njega kose", minutes: 8 },
        { label: "Masaža glave, vrata i ramena", minutes: 15 },
        { label: "Ispiranje i završna njega", minutes: 4 },
        { label: "Sušenje kose", minutes: 13 },
      ],
    },
    {
      slug: "luxury",
      name: "Luxury",
      tagline: "Alfaparf Lights uključen",
      duration: 75,
      price: 85,
      lights: "included",
      description:
        "Potpuni Head Spa ritual koji spaja personaliziranu njegu, dubinsko čišćenje i produženu masažu za potpuno opuštanje.",
      includes: [
        "Analiza vlasišta trihološkom kamerom",
        "Aromaterapija",
        "Personalizirani piling vlasišta",
        "Dubinsko pranje",
        "Alfaparf Lights ritual",
        "Masaža vlasišta tijekom pranja",
        "Personalizirana njega kose",
        "Masaža glave, vrata i ramena",
        "Nježni ritual za lice",
        "Završna njega i sušenje",
      ],
      steps: [
        { label: "Analiza vlasišta", minutes: 5 },
        { label: "Aromaterapija", minutes: 2 },
        { label: "Personalizirani piling", minutes: 5 },
        { label: "Dubinsko pranje i masaža vlasišta", minutes: 12 },
        { label: "Alfaparf Lights njega kose", minutes: 10 },
        { label: "Masaža glave, vrata i ramena", minutes: 15 },
        { label: "Nježni ritual za lice", minutes: 6 },
        { label: "Ispiranje, završna njega i sušenje", minutes: 20 },
      ],
    },
    {
      slug: "premium",
      name: "Premium",
      tagline: "Najpotpuniji Glow Atelier ritual",
      duration: 90,
      price: 110,
      lights: "included",
      featured: true,
      description:
        "Najpotpuniji Glow Atelier ritual. Vrijeme posvećeno njezi vlasišta, kose, lica i dubokoj relaksaciji.",
      includes: [
        "Analiza vlasišta trihološkom kamerom",
        "Aromaterapija",
        "Personalizirani piling vlasišta",
        "Dubinsko čišćenje i pranje",
        "Alfaparf Lights ritual",
        "Intenzivna njega kose",
        "Produžena masaža glave, vrata i ramena",
        "Nježni ritual za lice",
        "Profesionalna gel maska za lice",
        "LED maska za lice",
        "Završna njega i sušenje",
      ],
      steps: [
        { label: "Analiza vlasišta trihološkom kamerom", minutes: 4 },
        { label: "Aromaterapija i priprema", minutes: 2 },
        { label: "Personalizirani piling vlasišta", minutes: 4 },
        { label: "Dubinsko pranje i masaža vlasišta", minutes: 10 },
        { label: "Alfaparf Lights ritual i intenzivna njega kose", minutes: 8 },
        { label: "Masaža glave, vrata i ramena", minutes: 15 },
        { label: "Čišćenje i priprema lica", minutes: 4 },
        { label: "LED maska za lice", minutes: 15 },
        { label: "Hladna gel maska za lice", minutes: 5 },
        { label: "Završna njega lica", minutes: 3 },
        { label: "Sušenje i feniranje kose", minutes: 20 },
      ],
    },
  ],

  camera: {
    eyebrow: "Trihološka kamera",
    title: "Pogled u zdravlje vašeg vlasišta.",
    paragraphs: [
      "Svako vlasište ima svoju priču. Pomoću trihološke kamere promatramo vlasište i korijen kose pod povećanjem, kako bismo uočili vidljive karakteristike poput nakupljenih nečistoća, masnoće, suhoće i izgleda površine kože.",
      "Na temelju vidljivog stanja vlasišta i vaših potreba prilagođavamo odabir pilinga i profesionalne njege kako bi Head Spa ritual bio što primjereniji vama.",
      "Jer prava njega počinje razumijevanjem – a svaki Head Spa ritual započinje pažnjom prema vašim potrebama.",
    ],
  },

  alfaparf: {
    eyebrow: "Alfaparf Milano Professional",
    title: "Profesionalna njega kose pretvorena u ritual za vaša osjetila.",
    // Condensed version shown on the page; the full copy is kept in
    // `sections` / `lightsLine` below.
    lead: "Alfaparf Milano Professional jedan je od vodećih talijanskih brendova u svijetu profesionalne njege kose, koji spaja talijansku estetiku, profesionalno iskustvo i suvremene pristupe njezi kose.",
    facts: [
      { value: "1980.", label: "tradicija brenda" },
      { value: "120+", label: "zemalja svijeta" },
      { value: "Lights", label: "CO by Semi di Lino" },
    ],
    quote: {
      label: "Zašto smo ga odabrali?",
      text: "Za nas luksuz nije samo u poznatom imenu na proizvodu. On je u stručnom pristupu, pažnji prema vašim potrebama i osjećaju da ste u sigurnim rukama.",
    },
    sections: [
      {
        title: "Svjetsko ime profesionalne ljepote.",
        paragraphs: [
          "Kada govorimo o profesionalnoj njezi kose, govorimo o stručnosti, iskustvu i povjerenju koje se gradi desetljećima.",
          "Alfaparf Milano Professional jedan je od vodećih talijanskih brendova u svijetu profesionalne njege kose, s tradicijom koja seže u 1980. godinu i međunarodnom prisutnošću u više od 120 zemalja. U svijetu u kojem se ljepota neprestano razvija, Alfaparf Milano spaja talijansku estetiku, profesionalno iskustvo i suvremene pristupe njezi kose.",
        ],
      },
      {
        title: "Zašto smo ga odabrali?",
        paragraphs: [
          "Zato što vjerujemo da poseban tretman počinje promišljenim odabirom proizvoda. Želimo da svaki detalj našeg tretmana ima svoju svrhu – od pažljivog čišćenja vlasišta do završnog dodira koji kosi vraća njegovan izgled.",
          "Za nas luksuz nije samo u poznatom imenu na proizvodu. On je u stručnom pristupu, pažnji prema vašim potrebama i osjećaju da ste u sigurnim rukama.",
        ],
      },
    ],
    lightsLine: {
      title: "LIGHTS CO by Semi di Lino",
      paragraphs: [
        "Posebno mjesto u našim Head Spa ritualima zauzima linija LIGHTS CO by Semi di Lino – profesionalna njega osmišljena za naglašavanje prirodne ljepote kose i pružanje posebnog osjetilnog iskustva.",
        "Njezine formule sadrže kompleks Stem Bio-Matrix, koji povezuje sastojke dobivene iz matičnih stanica stabljike divlje masline s uljem chia sjemenki. Proizvođač navodi da je kompleks namijenjen revitalizaciji vlasišta i kose, potpori ravnoteži hidrolipidne barijere te jačanju strukture vlasi i zaštiti od vanjskih utjecaja.",
      ],
    },
  },

  lightsExperience: {
    eyebrow: "Lights Experience",
    title: "Za kosu koja privlači pogled.",
    line: "Posebno mjesto u našim Head Spa ritualima zauzima linija LIGHTS CO by Semi di Lino – profesionalna njega osmišljena za naglašavanje prirodne ljepote kose i pružanje posebnog osjetilnog iskustva.",
    text: "Želite da vaša kosa bude mekša, glađa i sjajnija? Pažljivo odabrani proizvodi nadopunjuju njegu kose, pomažu joj pružiti mekoću, olakšavaju raščešljavanje i naglašavaju njezin prirodni sjaj.",
    closing: "Mali dodatak vašem ritualu. Velika razlika u osjećaju vaše kose.",
  },

  led: {
    slug: "led-maska",
    name: "LED maska za lice",
    duration: 20,
    price: 35,
    eyebrow: "LED terapija lica",
    title: "Svjetlost koja njeguje. Trenutak koji pripada vama.",
    paragraphs: [
      "Ponekad koži nije potrebno više, nego prava njega. U Glow Atelieru vam predstavljamo LED terapiju lica – moderan, neinvazivan tretman koji koristi svjetlosnu energiju određenih valnih duljina kao podršku njezi kože. Bez iglica, bez invazivnih postupaka i bez potrebe da tretman bude neugodan.",
      "Dok se vi opuštate, LED maska nježno obasjava lice svjetlošću odabranog spektra. Ovaj suvremeni pristup njezi kože može pomoći u poboljšanju njezina izgleda i nadopuniti vašu svakodnevnu rutinu njege.",
    ],
    lights: [
      {
        tone: "red",
        title: "Crveno svjetlo – podrška mladolikom izgledu",
        text: "Crveno LED svjetlo proučava se zbog mogućeg utjecaja na procese povezane s kolagenom i obnovom kože. Ovisno o uređaju i redovitosti tretmana, može doprinijeti ublažavanju sitnih linija, poboljšanju teksture i svježijem izgledu tena.",
      },
      {
        tone: "blue",
        title: "Plavo svjetlo – njega kože sklone nepravilnostima",
        text: "Plavo LED svjetlo djeluje na određene bakterijske mehanizme povezane s nastankom akni te može pomoći u smanjenju blagih do umjerenih upalnih nepravilnosti. Posebno je zanimljivo osobama koje žele nadopuniti svoju rutinu njege kože sklone aknama.",
      },
    ],
    results: [
      {
        title: "Prvi dojam",
        text: "Nakon tretmana koža može izgledati svježije, ali to nije zajamčen učinak LED svjetla.",
      },
      {
        title: "Dugoročniji rezultati",
        text: "Promjene, ako ih uređaj i protokol mogu ostvariti, obično zahtijevaju redovitu primjenu kroz više tjedana.",
      },
      {
        title: "LED nije čudotvoran tretman",
        text: "Ne zamjenjuje dermatološko liječenje akni ni druge medicinske postupke.",
      },
    ],
    closing:
      "Jer lijepa koža nije rezultat jednog čarobnog trenutka, već pažnje, pravilne njege i dosljednosti.",
  },

  packages: [
    { pay: 3, get: 4 },
    { pay: 4, get: 5 },
    { pay: 5, get: 6 },
    { pay: 6, get: 8 },
    { pay: 7, get: 10 },
    { pay: 8, get: 10 },
    { pay: 10, get: 12 },
  ],

  faqs: [
    {
      question: "Koji Head Spa ritual odabrati za prvi dolazak?",
      answer:
        "Basic ritual idealan je prvi korak u svijet Head Spa rituala - uključuje analizu vlasišta trihološkom kamerom, piling, dubinsko pranje, njegu kose te masažu glave, vrata i ramena. Ako želite aromaterapiju, Alfaparf Lights njegu i ritual za lice, odaberite Luxury ili Premium.",
    },
    {
      question: "Koliko traje Head Spa ritual?",
      answer:
        "Ovisno o odabranom ritualu, od 30 minuta (Kids) do 90 minuta (Premium). Basic traje 60, Men 45, a Luxury 75 minuta.",
    },
    {
      question: "Je li kosa osušena nakon tretmana?",
      answer: "Da - svaki ritual završava završnom njegom i sušenjem kose.",
    },
    {
      question: "Je li Head Spa prikladan za djecu?",
      answer:
        "Da, Kids ritual namijenjen je djeci do 14 godina. Riječ je o kratkom i nježnom tretmanu prilagođenom dobi djeteta i njegovoj toleranciji na masažu. Roditelj može biti prisutan, ali nije obavezno.",
    },
  ],
};

// Reservation form <option> values - kept stable so links like
// /rezervacija?tretman=head-spa-basic preselect the right ritual.
export const headSpaServiceOptions = [
  ...headSpa.rituals.map((ritual) => ({
    value: `head-spa-${ritual.slug}`,
    label: `Head Spa ${ritual.name} (${ritual.duration} min, ${ritual.price} €)`,
    lightsAddon: ritual.lights === "addon",
  })),
  {
    value: headSpa.led.slug,
    label: `${headSpa.led.name} (${headSpa.led.duration} min, ${headSpa.led.price} €)`,
    lightsAddon: false,
  },
];

// Shaped like a treatments.js entry so Cjenik can render it with the same card.
export const headSpaPriceCard = {
  slug: "head-spa",
  title: headSpa.title,
  href: HEAD_SPA_HREF,
  pricing: {
    note: `Lights nadogradnja +${LIGHTS_ADDON_PRICE}€ (Men, Basic)`,
    anchorSince: HEAD_SPA_ANCHOR_SINCE,
    packages: [
      ...headSpa.rituals.map((ritual) => ({
        label: `${ritual.name} · ${ritual.duration} min`,
        price: ritual.price,
      })),
      { label: `LED maska · ${headSpa.led.duration} min`, price: headSpa.led.price },
    ],
  },
};
