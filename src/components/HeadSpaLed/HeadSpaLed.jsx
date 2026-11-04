import Image from "next/image";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Reveal from "@/components/Reveal/Reveal";
import Button from "@/components/Button/Button";
import { headSpa, HEAD_SPA_ANCHOR_SINCE } from "@/data/headSpa";
import styles from "./HeadSpaLed.module.css";

export default function HeadSpaLed() {
  const { led, images } = headSpa;

  return (
    <section className="section" id={led.slug}>
      <div className="container">
        <div className={styles.grid}>
          <Reveal className={styles.copy}>
            <SectionHeading eyebrow={led.eyebrow} title={led.title} align="left" />
            {led.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className={styles.lights}>
              {led.lights.map((light) => (
                <div key={light.tone} className={`${styles.light} ${styles[light.tone]}`}>
                  <span className={styles.dot} aria-hidden="true" />
                  <h3>{light.title}</h3>
                  <p>{light.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className={styles.visual}>
            <div className={styles.imageWrap}>
              <Image
                src={images.led}
                alt="LED maska za lice tijekom tretmana"
                fill
                sizes="(max-width: 900px) 92vw, 460px"
                className={styles.image}
              />
            </div>
            <div className={styles.priceCard}>
              <span>Samostalan tretman</span>
              <strong>{led.price}€</strong>
              <small>
                Sidrena cijena (od {HEAD_SPA_ANCHOR_SINCE}): {led.price}€
              </small>
              <em>{led.duration} min · uključeno u Premium ritual</em>
              <Button href={`/rezervacija?tretman=${led.slug}`} variant="primary" size="sm">
                Rezerviraj LED masku
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className={styles.results}>
          <h3>Što je važno znati o rezultatima?</h3>
          <div className={styles.resultGrid}>
            {led.results.map((item) => (
              <div key={item.title} className={styles.result}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <p className={styles.closing}>{led.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
