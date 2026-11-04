import { Suspense } from "react";
import PageHero from "@/components/PageHero/PageHero";
import ReservationForm, { ReservationFormFromQuery } from "@/components/ReservationForm/ReservationForm";
import Reveal from "@/components/Reveal/Reveal";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "Rezervacija",
  description:
    "Rezervirajte lasersku epilaciju, Hydrafacial, Head Spa ritual ili tretman oblikovanja tijela u Glow Atelieru Rijeka. Ispunite obrazac i naš tim će vas kontaktirati radi potvrde termina.",
  path: "/rezervacija",
});

export default function RezervacijaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Rezervacija"
        title="Rezervirajte svoj termin"
        description="Ispunite obrazac i javit ćemo vam se telefonom kako bismo potvrdili termin i odgovorili na sva pitanja."
      />

      <section className="section">
        <div className="container">
          <div className={styles.wrap}>
            <Reveal>
              <Suspense fallback={<ReservationForm />}>
                <ReservationFormFromQuery />
              </Suspense>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
