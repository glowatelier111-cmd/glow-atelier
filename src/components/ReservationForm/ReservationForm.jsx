"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/Button/Button";
import { treatments } from "@/data/treatments";
import { headSpaServiceOptions, LIGHTS_ADDON_PRICE } from "@/data/headSpa";
import { submitToWeb3Forms, WEB3FORMS_KEYS } from "@/lib/web3forms";
import styles from "./ReservationForm.module.css";

const serviceValues = [
  ...treatments.map((treatment) => treatment.slug),
  ...headSpaServiceOptions.map((option) => option.value),
];

// Preselects the treatment for links like /rezervacija?tretman=head-spa-basic.
// Render inside <Suspense> with a plain <ReservationForm /> fallback so the
// page stays statically prerendered.
export function ReservationFormFromQuery() {
  const searchParams = useSearchParams();
  return <ReservationForm initialService={searchParams.get("tretman") ?? ""} />;
}

export default function ReservationForm({ initialService = "" }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [service, setService] = useState(serviceValues.includes(initialService) ? initialService : "");

  const offersLights = headSpaServiceOptions.some(
    (option) => option.value === service && option.lightsAddon
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setHasError(false);
    setIsSubmitting(true);

    const success = await submitToWeb3Forms(event.target, WEB3FORMS_KEYS.reservation).catch(
      () => false
    );

    if (success) {
      router.push("/rezervacija-hvala");
      return;
    }

    setHasError(true);
    setIsSubmitting(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="hidden" name="subject" value="Novi upit za rezervaciju - Glow Atelier" />
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
      />

      <div className={styles.field}>
        <label htmlFor="fullName">Ime i prezime *</label>
        <input id="fullName" name="fullName" type="text" autoComplete="name" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">E-mail *</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Broj telefona *</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="service">Tretman *</label>
        <select
          id="service"
          name="service"
          value={service}
          onChange={(event) => setService(event.target.value)}
          required
        >
          <option value="" disabled>
            Odaberite tretman
          </option>
          <optgroup label="Tretmani">
            {treatments.map((treatment) => (
              <option key={treatment.slug} value={treatment.slug}>
                {treatment.title}
              </option>
            ))}
          </optgroup>
          <optgroup label="Head Spa">
            {headSpaServiceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      {offersLights && (
        <label className={styles.checkbox}>
          <input type="checkbox" name="lights" value="Da" />
          <span>
            Dodaj Lights Experience (+{LIGHTS_ADDON_PRICE} €) - Alfaparf Milano Lights njega za mekšu,
            glađu i sjajniju kosu
          </span>
        </label>
      )}

      <div className={styles.field}>
        <label htmlFor="message">Poruka</label>
        <textarea id="message" name="message" rows={5} />
      </div>

      <div className={styles.actions}>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Slanje..." : "Pošalji upit"}
        </Button>
        {hasError && (
          <p className={styles.error}>
            Došlo je do pogreške prilikom slanja upita. Pokušajte ponovno ili nas kontaktirajte izravno telefonom.
          </p>
        )}
        <p className={styles.note}>
          Slanjem upita ostavljate podatke isključivo radi dogovora termina.
        </p>
      </div>
    </form>
  );
}
