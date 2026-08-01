"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Faq.module.css";

const defaultFaqs = [
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
    question: "Kome su namijenjeni Tesla tretmani i je li postupak neugodan?",
    answer:
      "Tesla tretmani koriste elektromagnetske impulse koji potiču jaču kontrakciju mišića, a namijenjeni su klijentima koji žele neinvazivnu podršku oblikovanju tijela uz redovitu aktivnost. Tretman se najčešće opisuje kao intenzivna vježba, a ne kao bolan zahvat.",
  },
];

export default function Faq({
  items = defaultFaqs,
  eyebrow = "Česta pitanja",
  title = "Odgovori prije nego što rezervirate termin",
  description = "Najčešća pitanja koja nam klijenti postavljaju prije prvog dolaska u salon.",
  id = "faq",
}) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <motion.div
          className={styles.list}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {items.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary className={styles.question}>
                {item.question}
                <span className={styles.icon} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
