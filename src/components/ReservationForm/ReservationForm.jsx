"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import { treatments } from "@/data/treatments";
import { submitToWeb3Forms, WEB3FORMS_KEYS } from "@/lib/web3forms";
import styles from "./ReservationForm.module.css";

export default function ReservationForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

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
        <select id="service" name="service" defaultValue="" required>
          <option value="" disabled>
            Odaberite tretman
          </option>
          {treatments.map((treatment) => (
            <option key={treatment.slug} value={treatment.slug}>
              {treatment.title}
            </option>
          ))}
        </select>
      </div>

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
