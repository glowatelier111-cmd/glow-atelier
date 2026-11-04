import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Button from "@/components/Button/Button";
import Reveal from "@/components/Reveal/Reveal";
import { headSpa, HEAD_SPA_ANCHOR_SINCE, LIGHTS_ADDON_PRICE } from "@/data/headSpa";
import styles from "./HeadSpaPricing.module.css";

const addonRituals = headSpa.rituals
  .filter((ritual) => ritual.lights === "addon")
  .map((ritual) => ritual.name)
  .join(" i ");

const extras = [
  {
    name: headSpa.led.name,
    meta: `${headSpa.led.duration} min · samostalan tretman`,
    price: `${headSpa.led.price}€`,
  },
  {
    name: "Lights Experience",
    meta: `nadogradnja uz ${addonRituals} ritual`,
    price: `+${LIGHTS_ADDON_PRICE}€`,
  },
];

function PriceRow({ name, meta, tag, price }) {
  return (
    <li className={styles.row}>
      <div className={styles.item}>
        <span className={styles.name}>
          {name}
          {tag && <em className={styles.tag}>{tag}</em>}
        </span>
        <span className={styles.meta}>{meta}</span>
      </div>
      <span className={styles.anchor} aria-label={`Sidrena cijena ${price}`}>
        {price}
      </span>
      <strong className={styles.price} aria-label={`Cijena ${price}`}>
        {price}
      </strong>
    </li>
  );
}

export default function HeadSpaPricing() {
  return (
    <section className="section" id="cjenik">
      <div className="container">
        <SectionHeading
          eyebrow="Cjenik"
          title="Cijene Head Spa rituala"
          description="Jasne cijene po ritualu, bez skrivenih troškova - odaberite ritual koji vam odgovara i rezervirajte termin."
        />

        <Reveal className={styles.card}>
          <div className={styles.head} aria-hidden="true">
            <span>Ritual</span>
            <span>
              Sidrena cijena
              <small>od {HEAD_SPA_ANCHOR_SINCE}</small>
            </span>
            <span>Cijena</span>
          </div>

          <ul className={styles.list}>
            {headSpa.rituals.map((ritual) => (
              <PriceRow
                key={ritual.slug}
                name={ritual.name}
                meta={`${ritual.duration} min · ${ritual.tagline}`}
                tag={ritual.lights === "included" && !ritual.tagline.includes("Lights") ? "Lights uključen" : null}
                price={`${ritual.price}€`}
              />
            ))}
          </ul>

          <span className={styles.groupLabel}>Dodatno</span>
          <ul className={styles.list}>
            {extras.map((extra) => (
              <PriceRow key={extra.name} {...extra} />
            ))}
          </ul>

          <div className={styles.footer}>
            <p>
              Uz <a href="#paketi">pakete</a> dobivate dodatne rituale gratis.
            </p>
            <Button href="/rezervacija?tretman=head-spa-basic" variant="primary">
              Rezerviraj termin
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
