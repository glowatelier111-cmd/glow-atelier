"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { defaultFaqs } from "@/data/homeFaq";
import styles from "./Faq.module.css";

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
