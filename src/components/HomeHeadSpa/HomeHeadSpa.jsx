import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import Button from "@/components/Button/Button";
import { headSpa } from "@/data/headSpa";
import styles from "./HomeHeadSpa.module.css";

const highlights = ["Analiza vlasišta trihološkom kamerom", "Masaža glave, vrata i ramena", "Alfaparf Milano"];

export default function HomeHeadSpa() {
  const { intro, images, rituals, href } = headSpa;
  const startingPrice = Math.min(...rituals.map((ritual) => ritual.price));

  return (
    <section className="section" id="head-spa">
      <div className="container">
        <Reveal className={styles.panel}>
          <div className={styles.media}>
            <Image
              src={images.home}
              alt="Head Spa ritual u Glow Atelieru"
              fill
              sizes="(max-width: 900px) 92vw, 520px"
              className={styles.image}
            />
            <span className={styles.badge}>Novo u Glow Atelieru</span>
          </div>

          <div className={styles.copy}>
            <span className={styles.eyebrow}>Head Spa</span>
            <h2>{intro.title}</h2>
            <p>{intro.paragraphs[1]}</p>

            <ul className={styles.highlights}>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className={styles.summary}>
              {rituals.length} rituala <span aria-hidden="true">·</span> od <strong>{startingPrice}€</strong>
            </p>

            <div className={styles.actions}>
              <Button href={href} variant="primary">
                Otkrijte rituale
              </Button>
              <Button href="/rezervacija?tretman=head-spa-basic" variant="secondary">
                Rezerviraj termin
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
