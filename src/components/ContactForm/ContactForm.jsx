"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import { submitToWeb3Forms, WEB3FORMS_KEYS } from "@/lib/web3forms";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setHasError(false);
    setIsSubmitting(true);

    const success = await submitToWeb3Forms(event.target, WEB3FORMS_KEYS.contact).catch(
      () => false
    );

    if (success) {
      router.push("/kontakt-hvala");
      return;
    }

    setHasError(true);
    setIsSubmitting(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="hidden" name="subject" value="Nova poruka s kontakt forme - Glow Atelier" />
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
        <label htmlFor="message">Poruka *</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      <div className={styles.actions}>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Slanje..." : "Pošalji poruku"}
        </Button>
        {hasError && (
          <p className={styles.error}>
            Došlo je do pogreške prilikom slanja poruke. Pokušajte ponovno ili nas kontaktirajte izravno telefonom.
          </p>
        )}
        <p className={styles.note}>
          Slanjem poruke ostavljate podatke isključivo radi odgovora na vaš upit.
        </p>
      </div>
    </form>
  );
}
