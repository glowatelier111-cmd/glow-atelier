import Image from "next/image";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Reveal from "@/components/Reveal/Reveal";
import { headSpa } from "@/data/headSpa";
import styles from "./HeadSpaIntro.module.css";

export default function HeadSpaIntro() {
  const { intro, philosophy, images } = headSpa;

  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.imageWrap}>
          <Image
            src={images.massage}
            alt="Opuštajuća masaža glave tijekom Head Spa rituala"
            fill
            sizes="(max-width: 900px) 92vw, 460px"
            className={styles.image}
          />
        </Reveal>

        <Reveal delay={0.1} className={styles.copy}>
          <SectionHeading eyebrow="Head Spa ritual" title={intro.title} align="left" />
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <blockquote className={styles.quote}>
            <strong>{philosophy.title}</strong>
            <p>{philosophy.text}</p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
