import Image from "next/image";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Reveal from "@/components/Reveal/Reveal";
import { headSpa } from "@/data/headSpa";
import styles from "./HeadSpaAlfaparf.module.css";

export default function HeadSpaAlfaparf() {
  const { alfaparf, images } = headSpa;

  return (
    <section className="section">
      <div className="container">
        <div className={styles.top}>
          <Reveal className={styles.imageWrap}>
            <Image
              src={images.products}
              alt="Profesionalni preparati za njegu kose"
              fill
              sizes="(max-width: 900px) 92vw, 560px"
              className={styles.image}
            />
          </Reveal>

          <Reveal delay={0.1} className={styles.intro}>
            <SectionHeading eyebrow={alfaparf.eyebrow} title={alfaparf.title} align="left" />
            <p>{alfaparf.lead}</p>

            <dl className={styles.facts}>
              {alfaparf.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal as="figure" className={styles.quote}>
          <figcaption>{alfaparf.quote.label}</figcaption>
          <blockquote>„{alfaparf.quote.text}”</blockquote>
        </Reveal>
      </div>
    </section>
  );
}
