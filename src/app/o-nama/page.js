import Image from "next/image";
import { Fingerprint, Sparkles, Building2, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero/PageHero";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import FinalCta from "@/components/FinalCta/FinalCta";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./page.module.css";

export const metadata = {
  title: "O nama",
  description:
    "Glow Atelier by Orešković Clinic - ekskluzivni kozmetički salon u Rijeci, dio Orešković Clinic mreže prisutne u Zagrebu i Opatiji.",
};

const trustPoints = [
  {
    icon: Fingerprint,
    title: "Individualan pristup",
    text: "Svaki plan tretmana prilagođavamo vašem cilju, tipu kože i tempu, umjesto univerzalnog rješenja za sve.",
  },
  {
    icon: Sparkles,
    title: "Vrhunska tehnologija",
    text: "Vertona Superior laser i Tesla HiEMT Pro Max ubrajaju se među najnaprednije uređaje na tržištu za svoju namjenu.",
  },
  {
    icon: Building2,
    title: "Dio Orešković Clinic mreže",
    text: "Glow Atelier dio je Orešković Clinic mreže prisutne u Zagrebu i Opatiji, koja iskustvo u rehabilitaciji i estetskim tretmanima donosi i u Rijeku.",
  },
  {
    icon: ShieldCheck,
    title: "Higijena i urednost",
    text: "Klijenti prostor opisuju kao uredan i čist, s dojmom da je sve na svom mjestu od prvog trenutka.",
  },
];

export default function ONamaPage() {
  return (
    <main>
      <PageHero
        eyebrow="O nama"
        title="Glow Atelier by Orešković Clinic"
        description="Ekskluzivni kozmetički salon u Rijeci koji spaja vrhunsku tehnologiju, individualan pristup i iskustvo Orešković Clinic mreže."
      />

      <section className="section">
        <div className="container">
          <div className={styles.storyGrid}>
            <Reveal className={styles.storyCopy}>
              <SectionHeading
                align="left"
                eyebrow="Naša priča"
                title="Kako je nastao Glow Atelier"
              />
              <p>
                Glow Atelier by Orešković Clinic otvoren je 1. listopada 2025. godine na Donjoj
                Vežici u Rijeci, kao dio Orešković Clinic mreže prisutne u Zagrebu i Opatiji u
                području rehabilitacije, oporavka i estetskih tretmana. Otvaranjem salona u
                Rijeci, to iskustvo i vrhunska tehnologija postali su dostupni i klijentima na
                Kvarneru.
              </p>
              <p>
                U srcu ponude nalaze se dva uređaja nove generacije: Vertona Superior laser za
                lasersku epilaciju te Tesla HiEMT Pro Max za neinvazivno oblikovanje tijela, koji
                u samo 30 minuta ostvaruje učinak i do 36.000 kontrakcija mišića. Tehnologiju smo
                birali prema tome što klijentima donosi vidljive rezultate uz maksimalnu udobnost.
              </p>
              <p>
                Svaki dolazak počinje razgovorom o vašem cilju, tipu kože i očekivanjima, a plan
                tretmana gradimo oko vas. Salon se nalazi na lokaciji s osiguranim parkirnim
                mjestom, kako bi dolazak bio jednostavan od prvog trenutka.
              </p>
            </Reveal>

            <Reveal delay={0.1} className={styles.storyMedia}>
              <div className={styles.storyFrame}>
                <Image
                  src="/images/gallery/treatment-room.webp"
                  alt="Prostor Glow Atelier salona u Rijeci"
                  fill
                  sizes="(max-width: 900px) 90vw, 480px"
                  className={styles.storyImage}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Zašto nam klijenti vjeruju"
            title="Povjerenje koje gradimo od prve konzultacije"
            description="Kombinacija provjerene tehnologije, individualnog pristupa i iskustva Orešković Clinic mreže."
          />

          <div className={styles.trustGrid}>
            {trustPoints.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.08} className={styles.trustCard}>
                <span className={styles.iconWrap}>
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className={styles.mapCard}>
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
      </section>

      <FinalCta />
    </main>
  );
}
