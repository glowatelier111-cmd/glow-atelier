"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Benefits.module.css";

const benefits = [
  {
    title: "Licencirano osoblje",
    text: "Tretmane provodi educirano osoblje uz stručna objašnjenja prije svakog dolaska.",
  },
  {
    title: "Besplatne konzultacije",
    text: "Prvi kontakt pretvaramo u jasan plan, a ne u pritisak za kupnju paketa.",
  },
  {
    title: "Individualan pristup",
    text: "Zona, tip kože i očekivanja klijenta određuju tempo i preporuku tretmana.",
  },
  {
    title: "Moderna oprema",
    text: "Laser, Hydrafacial i tretmani oblikovanja tijela objedinjeni su na jednoj lokaciji u Rijeci.",
  },
  {
    title: "Visoka higijena",
    text: "Prostor, radne površine i protokoli pripreme jasno komuniciraju sigurnost i urednost.",
  },
  {
    title: "Fokus na rezultat",
    text: "Komuniciramo što je realno očekivati nakon 1, 3 i 7+ tretmana, bez nerealnih obećanja.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Benefits() {
  return (
    <section className="section" id="prednosti">
      <div className="container">
        <SectionHeading
          eyebrow="Prednosti salona"
          title="Razlozi zbog kojih nam klijenti vjeruju"
          description="Kozmetički salon u Rijeci koji gradi povjerenje od prve konzultacije — stručnost, higijena i individualan pristup u svakom koraku."
        />

        <ol className={styles.grid}>
          {benefits.map(({ title, text }, i) => (
            <motion.li
              key={title}
              className={styles.card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={cardVariants}
            >
              <span className={styles.number} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
