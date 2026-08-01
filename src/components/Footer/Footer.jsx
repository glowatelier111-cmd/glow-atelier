import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon/InstagramIcon";
import PrivacySettingsTrigger from "@/components/PrivacySettingsTrigger/PrivacySettingsTrigger";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image
              src="/images/logo/logo.webp"
              alt="Glow Atelier"
              width={150}
              height={32}
              className={styles.logo}
            />
            <p>Franje Matkovića 23, 50000 Rijeka</p>
            <p className={styles.tagline}>
              Kozmetički salon za lasersku epilaciju, Hydrafacial i Tesla tretmane.
            </p>
            <a
              className={styles.social}
              href="https://instagram.com/glowatelier_rijeka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Glow Atelier na Instagramu"
            >
              <InstagramIcon />
            </a>
          </div>

          <nav className={styles.col} aria-label="Stranice">
            <h3>Stranice</h3>
            <Link href="/">Početna</Link>
            <Link href="/o-nama">O nama</Link>
            <Link href="/#tretmani">Tretmani</Link>
            <Link href="/galerija">Galerija</Link>
            <Link href="/kontakt">Kontakt</Link>
            <Link href="/rezervacija">Rezervacija</Link>
          </nav>

          <div className={styles.col}>
            <h3>Javite se</h3>
            <a href="tel:+385953517205">
              <Phone size={15} strokeWidth={2} aria-hidden="true" />
              +385 95 351 7205
            </a>
            <a href="mailto:glowatelier.rijeka@gmail.com">
              <Mail size={15} strokeWidth={2} aria-hidden="true" />
              glowatelier.rijeka@gmail.com
            </a>
            <a href="https://wa.me/385953517205" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={15} strokeWidth={2} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.credit}>
            <span>Sva prava pridržana © {year} Glow Atelier</span>
            <span className={styles.creditDivider} aria-hidden="true">
              ·
            </span>
            <span>
              Izrada sajta:{" "}
              <a href="https://www.tyne.rs/" target="_blank" rel="noopener noreferrer">
                Tyne Agency
              </a>
            </span>
          </div>
          <div className={styles.legal}>
            <Link href="/politika-privatnosti">Politika privatnosti</Link>
            <Link href="/politika-kolacica">Politika kolačića</Link>
            <PrivacySettingsTrigger className={styles.cookieBtn}>
              Postavke kolačića
            </PrivacySettingsTrigger>
          </div>
        </div>
      </div>
    </footer>
  );
}
