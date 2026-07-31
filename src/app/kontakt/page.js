import { MapPin, Phone, Clock } from "lucide-react";
import PageHero from "@/components/PageHero/PageHero";
import ContactForm from "@/components/ContactForm/ContactForm";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./page.module.css";

export const metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte Glow Atelier u Rijeci - adresa, telefon i obrazac za upite o laserskoj epilaciji, Hydrafacialu i Tesla tretmanima.",
};

const hours = [
  { day: "Ponedjeljak - Petak", time: "09:00 - 20:00" },
  { day: "Subota", time: "09:00 - 15:00" },
  { day: "Nedjelja", time: "Zatvoreno" },
];

export default function KontaktPage() {
  return (
    <main>
      <PageHero
        eyebrow="Kontakt"
        title="Javite nam se"
        description="Tu smo za sva pitanja o tretmanima, cijenama i dostupnim terminima - odgovaramo brzo putem poziva, WhatsAppa ili obrasca ispod."
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            <Reveal className={styles.infoCard}>
              <h2>Kontakt podaci</h2>
              <div className={styles.infoList}>
                <span>
                  <MapPin size={17} strokeWidth={2} aria-hidden="true" />
                  Franje Matkovića 23, 50000 Rijeka
                </span>
                <a href="tel:+385953517205">
                  <Phone size={17} strokeWidth={2} aria-hidden="true" />
                  +385 95 351 7205
                </a>
              </div>

              <h3 className={styles.hoursTitle}>
                <Clock size={16} strokeWidth={2} aria-hidden="true" />
                Radno vrijeme
              </h3>
              <ul className={styles.hoursList}>
                {hours.map((item) => (
                  <li key={item.day} className={styles.hoursRow}>
                    <span>{item.day}</span>
                    <strong>{item.time}</strong>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>

            <Reveal className={styles.mapCard} delay={0.2}>
              <iframe
                src="https://www.google.com/maps?q=Franje+Matkovi%C4%87a+23,+50000+Rijeka,+Hrvatska&output=embed"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija Glow Atelier salona na karti"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
