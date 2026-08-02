"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";
import styles from "./HomeHero.module.css";

const headline = "Ljepota kojoj Rijeka vjerujee";
const words = headline.split(" ");
const wordStart = 0.45;
const wordStagger = 0.1;
const wordDuration = 0.85;
const afterWords = wordStart + (words.length - 1) * wordStagger + wordDuration;

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.media} aria-hidden="true">
        <Image
          src="/images/hero/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.mediaImg}
        />
        <div className={styles.mediaOverlay} />
      </div>

      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <motion.span
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.eyebrowLine} />
          Glow Atelier Rijeka
          <span className={styles.eyebrowLine} />
        </motion.span>

        <h1 className={styles.headline} aria-label={headline}>
          {words.map((word, i) => (
            <span key={word} className={styles.wordMask}>
              <motion.span
                className={styles.word}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: wordDuration,
                  delay: wordStart + i * wordStagger,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: afterWords - 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Laserska epilacija, Hydrafacial i Tesla tretmani — uz besplatnu konzultaciju i
          individualan pristup svakom klijentu.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: afterWords + 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button href="/rezervacija" variant="primary">
            Rezerviraj termin
          </Button>
          <Button href="#tretmani" variant="secondary">
            Pogledaj tretmane
          </Button>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollCue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: afterWords + 0.6 }}
        aria-hidden="true"
      >
        <span className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}
