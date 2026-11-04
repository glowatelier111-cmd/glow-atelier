import Image from "next/image";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./HeadSpaFeature.module.css";

// Split image + copy section shared by the Head Spa page's editorial blocks
// (trihološka kamera). Children render under the heading.
export default function HeadSpaFeature({ eyebrow, title, image, imageAlt, reverse = false, id, children }) {
  return (
    <section className="section" id={id}>
      <div className={`container ${styles.grid} ${reverse ? styles.reverse : ""}`}>
        <Reveal className={styles.imageWrap}>
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 92vw, 520px" className={styles.image} />
        </Reveal>

        <Reveal delay={0.1} className={styles.copy}>
          <SectionHeading eyebrow={eyebrow} title={title} align="left" />
          {children}
        </Reveal>
      </div>
    </section>
  );
}
