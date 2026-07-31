"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Button from "@/components/Button/Button";
import { treatments } from "@/data/treatments";
import styles from "./Treatments.module.css";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Treatments() {
  return (
    <section className="section" id="tretmani">
      <div className="container">
        <SectionHeading
          eyebrow="Tretmani"
          title="Odaberite tretman prema cilju koji želite postići"
          description="Bilo da želite dugotrajnije glatku kožu, svježiji izgled tena ili dodatnu podršku oblikovanju tijela, u Glow Atelieru možete pronaći tretman prilagođen vašem tempu."
        />

        <div className={styles.grid}>
          {treatments.map((treatment, i) => (
            <motion.article
              key={treatment.slug}
              className={styles.card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
              variants={cardVariants}
            >
              <div className={styles.media}>
                <Image
                  src={treatment.image}
                  alt={`${treatment.title} u Glow Atelieru`}
                  fill
                  sizes="(max-width: 900px) 90vw, 380px"
                  className={styles.image}
                />
                <span className={styles.priceBadge}>od {treatment.pricing.startingPrice}€</span>
              </div>

              <div className={styles.body}>
                <span className={styles.kicker}>{treatment.kicker}</span>
                <h3>{treatment.title}</h3>
                <p>{treatment.shortDescription}</p>

                <ul className={styles.points}>
                  {treatment.points.map((point) => (
                    <li key={point}>
                      <Check size={15} strokeWidth={2.4} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className={styles.actions}>
                  <Button href={treatment.href} variant="primary" size="sm">
                    Saznaj više
                  </Button>
                  <Link href="/rezervacija" className={styles.textLink}>
                    Rezerviraj termin
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
