import SectionHeading from "@/components/SectionHeading/SectionHeading";
import Button from "@/components/Button/Button";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./TreatmentPricing.module.css";

export default function TreatmentPricing({ treatment }) {
  return (
    <section className="section" id="cjenik">
      <div className="container">
        <SectionHeading
          eyebrow="Cjenik"
          title="Cijene i paketi"
          description="Jasan pregled cijena prije rezervacije - za dodatna pitanja o zonama ili paketima javite se na konzultaciju."
        />

        <Reveal className={styles.card}>
          {treatment.pricing.note && <p className={styles.note}>{treatment.pricing.note}</p>}

          <ul className={styles.priceList}>
            {treatment.pricing.packages.map((pkg) => (
              <li key={pkg.label}>
                <span>{pkg.label}</span>
                <strong>{pkg.price}€</strong>
              </li>
            ))}
          </ul>

          <Button href="/rezervacija" variant="primary" className={styles.cta}>
            Rezerviraj termin
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
