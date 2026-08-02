// Plain data module (no "use client") so it can be imported both by the Faq
// component (for rendering) and by Server Components (for JSON-LD) - a named
// data export from a "use client" file doesn't survive that boundary as a
// real array, it arrives as an unusable client reference instead.
export const defaultFaqs = [
  {
    question: "Boli li laserska epilacija?",
    answer:
      "Tretman je osmišljen da bude što ugodniji uz sustav hlađenja kože tijekom rada lasera. Osjećaj je individualan i ovisi o zoni i osjetljivosti kože, ali većina klijenata ga opisuje kao podnošljivo peckanje, a ne bol.",
  },
  {
    question: "Koliko tretmana je potrebno za trajnije rezultate?",
    answer:
      "Za vidljivo rjeđi rast dlačica najčešće je potrebno 7 do 8 tretmana u razmaku od 4 do 6 tjedana, ovisno o zoni i ciklusu rasta dlaka. Broj i dinamiku dolazaka prilagođavamo individualno nakon prve konzultacije.",
  },
  {
    question: "Mogu li raditi lasersku epilaciju ljeti ili nakon sunčanja?",
    answer:
      "Da, uz oprez. Preporučujemo izbjegavati direktno sunčanje i solarij nekoliko dana prije i poslije tretmana te koristiti zaštitu s visokim faktorom kako bi koža ostala sigurna, a rezultat što bolji.",
  },
  {
    question: "Što točno uključuje Hydrafacial tretman i kome je namijenjen?",
    answer:
      "Hydrafacial kombinira čišćenje, piling i duboku hidrataciju kože u jednom tretmanu bez razdoblja oporavka, pa je pogodan za gotovo svaki tip kože. Idealan je kad želite brz, uredan 'refresh' lica prije nekog događaja ili kao redovitu njegu.",
  },
  {
    question: "Kome su namijenjeni tretmani oblikovanja tijela i je li postupak neugodan?",
    answer:
      "Oblikovanje tijela, jačanje mišića i podizanje stražnjice koriste elektromagnetske impulse koji potiču jaču kontrakciju mišića, a namijenjeni su klijentima koji žele neinvazivnu podršku oblikovanju tijela uz redovitu aktivnost. Tretman se najčešće opisuje kao intenzivna vježba, a ne kao bolan zahvat.",
  },
];
