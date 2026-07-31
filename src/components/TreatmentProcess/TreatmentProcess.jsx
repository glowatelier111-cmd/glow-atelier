import Image from "next/image";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./TreatmentProcess.module.css";

export default function TreatmentProcess({ treatment }) {
  const hasImage = Boolean(treatment.secondImage);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Kako izgleda tretman"
          title="Što tretman uključuje i kako izgleda proces"
          description="Pregled koraka od konzultacije do njege nakon tretmana."
        />

        <div className={`${styles.grid} ${hasImage ? styles.gridWithImage : ""}`}>
          <Reveal className={styles.steps}>
            {treatment.steps.map((step, index) => (
              <div key={step.title} className={styles.step}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </Reveal>

          {hasImage && (
            <Reveal delay={0.15} className={styles.imageWrap}>
              <Image
                src={treatment.secondImage}
                alt={`Proces tretmana ${treatment.title} u Glow Atelieru`}
                fill
                sizes="(max-width: 900px) 90vw, 420px"
                className={styles.image}
              />
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
