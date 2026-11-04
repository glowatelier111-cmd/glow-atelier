"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Button from "@/components/Button/Button";
import { headSpa, HEAD_SPA_ANCHOR_SINCE, LIGHTS_ADDON_PRICE } from "@/data/headSpa";
import styles from "./HeadSpaRituals.module.css";

const lightsLabels = {
  included: "Lights uključen",
  addon: `+ Lights ${LIGHTS_ADDON_PRICE}€`,
};

const defaultRitual = headSpa.rituals.find((ritual) => ritual.slug === "basic");

export default function HeadSpaRituals() {
  const [activeSlug, setActiveSlug] = useState(defaultRitual.slug);
  const active = headSpa.rituals.find((ritual) => ritual.slug === activeSlug);
  const longestStep = Math.max(...active.steps.map((step) => step.minutes));

  return (
    <section className={`section ${styles.section}`} id="rituali">
      <div className="container">
        <SectionHeading
          eyebrow="Rituali"
          title="Odaberite svoj Head Spa ritual"
          description="Od nježnog rituala za djecu do najpotpunijeg Premium iskustva - odaberite ritual i pogledajte što uključuje, korak po korak."
        />

        <div className={styles.picker} role="group" aria-label="Odabir rituala">
          {headSpa.rituals.map((ritual) => {
            const isActive = ritual.slug === activeSlug;

            return (
              <button
                key={ritual.slug}
                type="button"
                className={[
                  styles.option,
                  isActive ? styles.optionActive : "",
                  ritual.featured ? styles.optionFeatured : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-pressed={isActive}
                aria-controls="ritualDetails"
                onClick={() => setActiveSlug(ritual.slug)}
              >
                <span className={styles.optionTag}>{ritual.tagline}</span>
                <span className={styles.optionName}>{ritual.name}</span>
                <span className={styles.optionMeta}>
                  <Clock size={13} strokeWidth={2} aria-hidden="true" />
                  {ritual.duration} min
                </span>
                <span className={styles.optionPrice}>{ritual.price}€</span>
                <span className={styles.optionAnchor}>Sidrena cijena: {ritual.price}€</span>
                {ritual.lights && (
                  <span
                    className={`${styles.lightsTag} ${
                      ritual.lights === "included" ? styles.lightsIncluded : ""
                    }`}
                  >
                    {lightsLabels[ritual.lights]}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className={styles.panelWrap} id="ritualDetails" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.slug}
              className={styles.panel}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.details}>
                <span className={styles.detailsTag}>{active.tagline}</span>
                <h3>
                  Head Spa <em>{active.name}</em>
                </h3>
                <div className={styles.facts}>
                  <span>{active.duration} min</span>
                  <span>{active.price}€</span>
                  <small>
                    Sidrena cijena (od {HEAD_SPA_ANCHOR_SINCE}): {active.price}€
                  </small>
                </div>
                <p>{active.description}</p>
                {active.note && <p className={styles.note}>{active.note}</p>}

                <h4>Ritual uključuje</h4>
                <ul className={styles.includes}>
                  {active.includes.map((item) => (
                    <li key={item}>
                      <Check size={15} strokeWidth={2.4} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                {active.closing && <p className={styles.closing}>{active.closing}</p>}
                {active.lights === "addon" && (
                  <p className={styles.lightsNote}>
                    Proizvodi linije Lights dostupni su uz nadoplatu od {LIGHTS_ADDON_PRICE}€.
                  </p>
                )}
                {active.lights === "included" && (
                  <p className={styles.lightsNote}>Proizvodi linije Lights uključeni su u cijenu.</p>
                )}

                <Button
                  href={`/rezervacija?tretman=head-spa-${active.slug}`}
                  variant="primary"
                  className={styles.cta}
                >
                  Rezerviraj {active.name}
                </Button>
              </div>

              <div className={styles.timeline}>
                <div className={styles.timelineHead}>
                  <h4>Tok rituala</h4>
                  <span>Ukupno {active.duration} min</span>
                </div>
                <ol>
                  {active.steps.map((step, index) => (
                    <li key={step.label}>
                      <span className={styles.stepIndex}>{index + 1}</span>
                      <div className={styles.stepBody}>
                        <div className={styles.stepRow}>
                          <span>{step.label}</span>
                          <strong>{step.minutes} min</strong>
                        </div>
                        <span className={styles.bar} aria-hidden="true">
                          <span style={{ width: `${(step.minutes / longestStep) * 100}%` }} />
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
