"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { headSpa } from "@/data/headSpa";
import styles from "./HeadSpaPackages.module.css";

const tileVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
};

const freeLabel = (count) => (count === 1 ? "1 ritual gratis" : `${count} rituala gratis`);

export default function HeadSpaPackages() {
  return (
    <section className="section" id="paketi">
      <div className="container">
        <SectionHeading
          eyebrow="Paketi"
          title="Više rituala, više trenutaka za sebe"
          description="Redovita njega donosi najviše - uz pakete dobivate dodatne Head Spa rituale gratis."
        />

        <div className={styles.grid}>
          {headSpa.packages.map((pkg, i) => (
            <motion.div
              key={`${pkg.pay}-${pkg.get}`}
              className={styles.tile}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              variants={tileVariants}
            >
              <span className={styles.label}>Plati</span>
              <strong className={styles.pay}>{pkg.pay}</strong>
              <span className={styles.label}>dobij</span>
              <strong className={styles.get}>{pkg.get}</strong>
              <span className={styles.free}>{freeLabel(pkg.get - pkg.pay)}</span>
            </motion.div>
          ))}
        </div>

        <p className={styles.cta}>Za odabir paketa i rituala slobodno nas kontaktirajte.</p>
      </div>
    </section>
  );
}
