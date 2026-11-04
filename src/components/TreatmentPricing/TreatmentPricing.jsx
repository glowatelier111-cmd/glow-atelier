import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Button from "@/components/Button/Button";
import Reveal from "@/components/Reveal/Reveal";
import { TREATMENTS_ANCHOR_SINCE } from "@/data/treatments";
import styles from "./TreatmentPricing.module.css";

export default function TreatmentPricing({ treatment }) {
  return (
    <section className="section" id="cjenik">
      <div className="container">
        <SectionHeading
          eyebrow="Cjenik"
          title="Cijene i paketi"
          description="Odaberite paket koji odgovara vašem cilju - za pomoć oko odabira zone ili broja tretmana slobodno nas kontaktirajte."
        />

        <Reveal className={styles.card}>
          {treatment.pricing.note && <p className={styles.note}>{treatment.pricing.note}</p>}

          <ul className={styles.priceList}>
            {treatment.pricing.packages.map((pkg) => (
              <li key={pkg.label}>
                <div className={styles.priceRow}>
                  <span className={styles.label}>{pkg.label}</span>
                  <span className={styles.leader} aria-hidden="true" />
                  <strong aria-label={`Cijena ${pkg.price}€`}>{pkg.price}€</strong>
                </div>
                <span className={styles.anchorPrice}>Sidrena cijena {pkg.price}€</span>
              </li>
            ))}
          </ul>

          <p className={styles.anchorNote}>Sidrena cijena vrijedi od {TREATMENTS_ANCHOR_SINCE}</p>

          <Button href="/rezervacija" variant="primary" className={styles.cta}>
            Rezerviraj termin
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
