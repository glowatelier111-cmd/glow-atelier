"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import { treatments } from "@/data/treatments";
import styles from "./ReservationForm.module.css";

export default function ReservationForm() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push("/rezervacija-hvala");
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
        <Button type="submit" variant="primary">
          Pošalji upit
        </Button>
        <p className={styles.note}>
          Slanjem upita ostavljate podatke isključivo radi dogovora termina.
        </p>
      </div>
    </form>
  );
}
