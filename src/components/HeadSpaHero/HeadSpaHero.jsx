"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";
import { headSpa } from "@/data/headSpa";
import styles from "./HeadSpaHero.module.css";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function HeadSpaHero() {
  const { hero, images } = headSpa;

  return (
    <section className={styles.hero}>
      {/* Same photo, blurred and darkened, as an ambient full-width backdrop */}
      <div className={styles.media} aria-hidden="true">
        <Image src={images.hero} alt="" fill sizes="50vw" className={styles.mediaImg} />
        <div className={styles.mediaOverlay} />
      </div>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <motion.div className={styles.copy} variants={containerVariants} initial="hidden" animate="show">
          <motion.span className={styles.eyebrow} variants={itemVariants}>
            <span className={styles.eyebrowLine} />
            {hero.eyebrow}
          </motion.span>
          <motion.h1 variants={itemVariants}>{hero.title}</motion.h1>
          <motion.p className={styles.tagline} variants={itemVariants}>
            {hero.tagline}
          </motion.p>
          <motion.p className={styles.lead} variants={itemVariants}>
            {hero.lead}
          </motion.p>
          <motion.div className={styles.actions} variants={itemVariants}>
            <Button href="/rezervacija?tretman=head-spa-basic" variant="primary">
              Rezerviraj termin
            </Button>
            <Button href="#rituali" variant="secondary">
              Pogledaj rituale
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageFrame}>
            <Image
              src={images.hero}
              alt="Head Spa ritual uz toplu paru u Glow Atelieru"
              fill
              preload
              sizes="(max-width: 900px) 92vw, 560px"
              className={styles.image}
            />
          </div>
          <div className={styles.badge}>
            <span>Analiza vlasišta</span>
            <strong>trihološkom kamerom</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
