"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { treatments } from "@/data/treatments";
import styles from "./Header.module.css";

const treatmentLinks = treatments.map(({ href, title }) => ({ href, label: title }));

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setTreatmentsOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.container} ${styles.row}`}>
          <Link
            href="/"
            className={styles.brand}
            aria-label="Glow Atelier početna"
            onClick={closeMenu}
          >
            <Image
              src="/images/logo/logo.webp"
              alt="Glow Atelier"
              width={190}
              height={40}
              priority
              className={styles.logoImg}
            />
          </Link>

          <nav className={styles.nav} aria-label="Primarna navigacija">
            <Link href="/">Početna</Link>
            <Link href="/o-nama">O nama</Link>
            <div className={styles.navItem}>
              <button type="button" className={styles.navTrigger}>
                Tretmani <span className={styles.caret} aria-hidden="true">▾</span>
              </button>
              <div className={styles.dropdown}>
                {treatmentLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/galerija">Galerija</Link>
          </nav>

          <div className={styles.actions}>
            <Link href="/kontakt" className={styles.contactLink}>
              Kontakt
            </Link>
            <Button href="/rezervacija" variant="primary" size="sm">
              Rezerviraj
            </Button>
          </div>

          <button
            type="button"
            className={styles.toggle}
            aria-label={menuOpen ? "Zatvori navigaciju" : "Otvori navigaciju"}
            aria-controls="mobileMenu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav
          id="mobileMenu"
          className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
          aria-label="Mobilna navigacija"
        >
          <div className={styles.mobileNavInner}>
            <Link href="/" onClick={closeMenu}>
              Početna
            </Link>
            <Link href="/o-nama" onClick={closeMenu}>
              O nama
            </Link>

            <button
              type="button"
              className={styles.mobileAccordionTrigger}
              aria-expanded={treatmentsOpen}
              aria-controls="mobileTreatments"
              onClick={() => setTreatmentsOpen((open) => !open)}
            >
              Tretmani
              <span className={`${styles.caret} ${treatmentsOpen ? styles.caretOpen : ""}`} aria-hidden="true">
                ▾
              </span>
            </button>
            <div
              id="mobileTreatments"
              className={`${styles.mobileSubmenu} ${treatmentsOpen ? styles.mobileSubmenuOpen : ""}`}
            >
              {treatmentLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              ))}
            </div>

            <Link href="/galerija" onClick={closeMenu}>
              Galerija
            </Link>
            <Link href="/kontakt" onClick={closeMenu}>
              Kontakt
            </Link>
            <a
              href="https://wa.me/385953517205"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              WhatsApp
            </a>
            <Button href="/rezervacija" variant="primary" onClick={closeMenu}>
              Rezerviraj termin
            </Button>
          </div>
        </nav>
      </header>

      <div
        className={menuOpen ? styles.dimVisible : styles.dim}
        aria-hidden="true"
        onClick={closeMenu}
      />
    </>
  );
}
