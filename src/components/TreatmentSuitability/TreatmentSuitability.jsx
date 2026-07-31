import { Check } from "lucide-react";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./TreatmentSuitability.module.css";

export default function TreatmentSuitability({ treatment }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Za koga je i što očekivati"
          title="Kome je tretman namijenjen i što očekivati tijekom vremena"
          description={treatment.suitability.intro}
        />

        <div className={styles.grid}>
          <Reveal className={styles.card}>
            <h3>Kome je namijenjeno</h3>
            <ul className={styles.points}>
              {treatment.suitability.points.map((point) => (
                <li key={point}>
                  <Check size={16} strokeWidth={2.2} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className={styles.card}>
            <h3>Što očekivati tijekom vremena</h3>
            <ul className={styles.timeline}>
              {treatment.timeline.map((item, index) => (
                <li key={item.title}>
                  <span className={styles.timelineStep}>{index + 1}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
