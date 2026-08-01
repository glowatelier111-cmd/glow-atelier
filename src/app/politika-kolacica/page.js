import PageHero from "@/components/PageHero/PageHero";
import PrivacySettingsTrigger from "@/components/PrivacySettingsTrigger/PrivacySettingsTrigger";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "Politika kolačića",
  description:
    "Pregled kolačića koje glowatelier.eu koristi - naziv, svrha i trajanje, te način na koji možete upravljati svojim postavkama privatnosti.",
  path: "/politika-kolacica",
});

const cookieRows = [
  {
    name: "_ga",
    purpose: "Google Analytics - razlikuje jedinstvene posjetitelje stranice.",
    duration: "2 godine",
    category: "Analytics",
  },
  {
    name: "_ga_*",
    purpose: "Google Analytics 4 - održava stanje sesije posjeta.",
    duration: "2 godine",
    category: "Analytics",
  },
  {
    name: "_gid",
    purpose: "Google Analytics - razlikuje korisnike unutar 24 sata.",
    duration: "24 sata",
    category: "Analytics",
  },
  {
    name: "_gcl_au",
    purpose: "Google Ads - praćenje učinkovitosti oglasa i konverzija.",
    duration: "90 dana",
    category: "Marketing",
  },
  {
    name: "IDE",
    purpose: "Google Ads (DoubleClick) - prikaz relevantnijih oglasa.",
    duration: "13 mjeseci",
    category: "Marketing",
  },
  {
    name: "test_cookie",
    purpose: "Google Ads - provjera podržava li preglednik kolačiće.",
    duration: "15 minuta",
    category: "Marketing",
  },
];

export default function PolitikaKolacicaPage() {
  return (
    <main>
      <PageHero eyebrow="Pravne informacije" title="Politika kolačića" />

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <p>
              Kolačići su male tekstualne datoteke koje web stranice spremaju u vaš preglednik
              radi ispravnog rada, analitike ili prikazivanja oglasa. Vaš odabir postavki
              privatnosti pohranjujemo lokalno u vašem pregledniku (localStorage), a ne putem
              kolačića.
            </p>

            <h2>Nužni kolačići</h2>
            <p>
              Trenutno ne postavljamo vlastite nužne kolačiće - osnovne funkcije stranice rade
              bez njih. Ako se to promijeni, ova stranica će biti ažurirana.
            </p>

            <h2>Kolačići trećih strana</h2>
            <p>
              Sljedeći kolačići postavljaju se isključivo ako u postavkama privatnosti odobrite
              kategorije Analytics i/ili Marketing:
            </p>

            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Naziv</th>
                    <th>Svrha</th>
                    <th>Trajanje</th>
                    <th>Kategorija</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieRows.map((row) => (
                    <tr key={row.name}>
                      <td>
                        <code>{row.name}</code>
                      </td>
                      <td>{row.purpose}</td>
                      <td>{row.duration}</td>
                      <td>{row.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Upravljanje postavkama</h2>
            <p>
              Svoj odabir možete izmijeniti u bilo kojem trenutku - odabir se odmah primjenjuje i
              na Google Consent Mode signale koji kontroliraju analitičke i oglasne alate.
            </p>

            <PrivacySettingsTrigger className={styles.settingsButton}>
              Postavke privatnosti
            </PrivacySettingsTrigger>
          </div>
        </div>
      </section>
    </main>
  );
}
