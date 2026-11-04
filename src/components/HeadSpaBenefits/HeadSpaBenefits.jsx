"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { headSpa } from "@/data/headSpa";
import styles from "./HeadSpaBenefits.module.css";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeadSpaBenefits() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Zašto Head Spa"
          title="Zašto je Head Spa poseban?"
          description="Ritual u kojem se njega vlasišta i kose susreće s trenutkom potpunog opuštanja."
        />

        <ol className={styles.grid}>
          {headSpa.benefits.map(({ title, text }, i) => (
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
