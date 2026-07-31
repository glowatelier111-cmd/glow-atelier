"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/kontakt-hvala");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
        <Button type="submit" variant="primary">
          Pošalji poruku
        </Button>
        <p className={styles.note}>
          Slanjem poruke ostavljate podatke isključivo radi odgovora na vaš upit.
        </p>
      </div>
    </form>
  );
}
