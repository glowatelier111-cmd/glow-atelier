import Reveal from "@/components/Reveal/Reveal";
import { headSpa, LIGHTS_ADDON_PRICE } from "@/data/headSpa";
import styles from "./HeadSpaLights.module.css";

const ritualNames = (lights) =>
  headSpa.rituals
    .filter((ritual) => ritual.lights === lights)
    .map((ritual) => ritual.name)
    .join(" · ");

export default function HeadSpaLights() {
  const { lightsExperience } = headSpa;

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <Reveal className={styles.panel}>
          <div className={styles.glow} aria-hidden="true" />

          <div className={styles.copy}>
            <span className={styles.eyebrow}>{lightsExperience.eyebrow}</span>
            <h2>{lightsExperience.title}</h2>
            <p>{lightsExperience.line}</p>
            <p>{lightsExperience.text}</p>
            <p className={styles.closing}>{lightsExperience.closing}</p>
          </div>

          <div className={styles.options}>
            <div className={styles.option}>
              <span>{ritualNames("addon")}</span>
              <strong>+{LIGHTS_ADDON_PRICE}€</strong>
              <p>Dostupan kao nadogradnja rituala</p>
            </div>
            <div className={`${styles.option} ${styles.optionIncluded}`}>
              <span>{ritualNames("included")}</span>
              <strong>Uključeno</strong>
              <p>Lights je dio rituala</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
