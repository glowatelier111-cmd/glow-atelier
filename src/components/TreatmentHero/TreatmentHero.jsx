"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";
import styles from "./TreatmentHero.module.css";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function TreatmentHero({ treatment }) {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.copy}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.span className={styles.eyebrow} variants={itemVariants}>
            {treatment.kicker}
          </motion.span>
          <motion.h1 variants={itemVariants}>{treatment.title}</motion.h1>
          <motion.p variants={itemVariants}>{treatment.heroBenefit}</motion.p>
          <motion.div className={styles.actions} variants={itemVariants}>
            <Button href="/rezervacija" variant="primary">
              Rezerviraj termin
            </Button>
            <Button href="#cjenik" variant="secondary">
              Pogledaj cijene
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageFrame}>
            <Image
              src={treatment.image}
              alt={`${treatment.title} u Glow Atelieru`}
              fill
              priority
              sizes="(max-width: 900px) 90vw, 480px"
              className={styles.image}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
