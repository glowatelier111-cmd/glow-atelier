import { Compass } from "lucide-react";
import Button from "@/components/Button/Button";
import Reveal from "@/components/Reveal/Reveal";
import { buildMetadata } from "@/lib/seo";
import styles from "./not-found.module.css";

export const metadata = {
  ...buildMetadata({
    title: "Stranica nije pronađena",
    description: "Stranica koju tražite ne postoji ili je premještena.",
    path: "/404",
  }),
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.glow} aria-hidden="true" />
        <Reveal className={`container ${styles.content}`}>
          <span className={styles.icon}>
            <Compass size={40} strokeWidth={1.6} aria-hidden="true" />
          </span>
          <span className={styles.code}>404</span>
          <h1>Stranica nije pronađena</h1>
          <p>
            Stranica koju tražite ne postoji ili je premještena. Vratite se na početnu stranicu
            ili nas kontaktirajte ako trebate pomoć.
          </p>
          <div className={styles.actions}>
            <Button href="/" variant="primary">
              Povratak na početnu
            </Button>
            <Button href="/kontakt" variant="secondary">
              Kontaktirajte nas
            </Button>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
