"use client";

import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";
import Button from "@/components/Button/Button";
import styles from "./FinalCta.module.css";

export default function FinalCta() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          className={styles.panel}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.glowA} aria-hidden="true" />
          <div className={styles.glowB} aria-hidden="true" />

          <span className={styles.eyebrow}>Rezervacija</span>
          <h2>Vaš termin je udaljen jedan klik</h2>
          <p>
            Rezervirajte tretman ili zatražite besplatnu konzultaciju — javljamo se brzo putem
            poziva, WhatsAppa ili obrasca na stranici.
          </p>

          <div className={styles.actions}>
            <Button href="/rezervacija" variant="primary">
              Rezerviraj termin
            </Button>
          </div>

          <div className={styles.links}>
            <a href="tel:+385953517205">
              <Phone size={16} strokeWidth={2.2} aria-hidden="true" />
              +385 95 351 7205
            </a>
            <a href="https://wa.me/385953517205" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} strokeWidth={2.2} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
