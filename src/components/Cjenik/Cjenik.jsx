"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Button from "@/components/Button/Button";
import { treatments } from "@/data/treatments";
import styles from "./Cjenik.module.css";

export default function Cjenik() {
  const trackRef = useRef(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const checkOverflow = () => {
      setCanScroll(track.scrollWidth > track.clientWidth + 1);
    };

    checkOverflow();
    const observer = new ResizeObserver(checkOverflow);
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const scrollByAmount = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="section" id="cjenik">
      <div className={styles.media} aria-hidden="true">
        <Image
          src="/images/treatments/treatment2.webp"
          alt=""
          fill
          sizes="100vw"
          className={styles.mediaImg}
        />
        <div className={styles.mediaOverlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <SectionHeading
          eyebrow="Cjenik"
          title="Brzi pregled ponude i cijena"
          description="Jasne cijene po tretmanu, bez skrivenih troškova - pogledajte ponudu i rezervirajte termin koji vam odgovara."
        />

        <motion.div
          className={styles.sliderWrap}
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {canScroll && (
            <button
              type="button"
              className={`${styles.navBtn} ${styles.navPrev}`}
              onClick={() => scrollByAmount(-1)}
              aria-label="Prethodni tretman"
            >
              <ChevronLeft size={18} />
            </button>
          )}

          <div className={styles.track} ref={trackRef}>
            {treatments.map((treatment) => (
              <article key={treatment.slug} className={styles.card}>
                <h3>{treatment.title}</h3>
                {treatment.pricing.note && (
                  <p className={styles.note}>{treatment.pricing.note}</p>
                )}

                <ul className={styles.priceList}>
                  {treatment.pricing.packages.map((pkg) => (
                    <li key={pkg.label}>
                      <span>{pkg.label}</span>
                      <strong>{pkg.price}€</strong>
                    </li>
                  ))}
                </ul>

                <Button href={treatment.href} variant="secondary" size="sm" className={styles.cardCta}>
                  Saznaj više
                </Button>
              </article>
            ))}
          </div>

          {canScroll && (
            <button
              type="button"
              className={`${styles.navBtn} ${styles.navNext}`}
              onClick={() => scrollByAmount(1)}
              aria-label="Sljedeći tretman"
            >
              <ChevronRight size={18} />
            </button>
          )}
        </motion.div>

        <div className={styles.cta}>
          <Button href="/rezervacija" variant="primary">
            Rezerviraj termin
          </Button>
        </div>
      </div>
    </section>
  );
}
