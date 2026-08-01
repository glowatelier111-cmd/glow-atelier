"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button/Button";
import {
  PRIVACY_REOPEN_EVENT,
  applyConsentToGtag,
  getStoredConsent,
  saveConsent,
} from "@/lib/privacyPreferences";
import styles from "./PrivacyBanner.module.css";

export default function PrivacyBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();

    if (stored) {
      applyConsentToGtag(stored);
      setAnalytics(Boolean(stored.analytics));
      setMarketing(Boolean(stored.marketing));
    } else {
      setVisible(true);
    }

    function handleReopen() {
      const current = getStoredConsent();
      if (current) {
        setAnalytics(Boolean(current.analytics));
        setMarketing(Boolean(current.marketing));
      }
      setExpanded(false);
      setVisible(true);
    }

    window.addEventListener(PRIVACY_REOPEN_EVENT, handleReopen);
    return () => window.removeEventListener(PRIVACY_REOPEN_EVENT, handleReopen);
  }, []);

  useEffect(() => {
    if (!visible) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") setVisible(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [visible]);

  if (!visible) return null;

  const acceptAll = () => {
    saveConsent({ analytics: true, marketing: true });
    setAnalytics(true);
    setMarketing(true);
    setVisible(false);
  };

  const rejectAll = () => {
    saveConsent({ analytics: false, marketing: false });
    setAnalytics(false);
    setMarketing(false);
    setVisible(false);
  };

  const saveCustom = () => {
    saveConsent({ analytics, marketing });
    setVisible(false);
  };

  const panelClasses = [styles.panel, !expanded ? styles.compact : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.wrap}>
      <div className={panelClasses} role="dialog" aria-label="Postavke privatnosti">
        <div className={styles.mainRow}>
          <p className={styles.text}>
            Koristimo kolačiće za ispravan rad stranice, analitiku i prikazivanje oglasa. Nužni
            kolačići su uvijek aktivni, a za ostale možete odabrati vlastite postavke. Više u{" "}
            <a href="/politika-kolacica">Politici kolačića</a>.
          </p>

          {!expanded && (
            <div className={styles.actions}>
              <Button type="button" variant="primary" size="sm" onClick={acceptAll}>
                Prihvati sve
              </Button>
              <Button type="button" variant="secondary" size="sm" onClick={rejectAll}>
                Odbij sve
              </Button>
              <Button type="button" variant="ghost" size="sm" onClick={() => setExpanded(true)}>
                Prilagodi
              </Button>
            </div>
          )}
        </div>

        {expanded && (
          <>
            <div className={styles.toggles}>
              <div className={styles.toggleRow}>
                <div className={styles.toggleLabel}>
                  <strong>Nužni</strong>
                  <span>Potrebni su za osnovan rad stranice i uvijek su aktivni.</span>
                </div>
                <label className={styles.switch}>
                  <input type="checkbox" checked disabled readOnly />
                  <span className={styles.slider} />
                </label>
              </div>

              <div className={styles.toggleRow}>
                <div className={styles.toggleLabel}>
                  <strong>Analytics</strong>
                  <span>Pomažu nam razumjeti kako posjetitelji koriste stranicu.</span>
                </div>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(event) => setAnalytics(event.target.checked)}
                  />
                  <span className={styles.slider} />
                </label>
              </div>

              <div className={styles.toggleRow}>
                <div className={styles.toggleLabel}>
                  <strong>Marketing</strong>
                  <span>Koriste se za prikaz relevantnijih oglasa.</span>
                </div>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(event) => setMarketing(event.target.checked)}
                  />
                  <span className={styles.slider} />
                </label>
              </div>
            </div>

            <div className={styles.actions}>
              <Button type="button" variant="primary" size="sm" onClick={saveCustom}>
                Spremi postavke
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
