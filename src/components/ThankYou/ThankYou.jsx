import { CheckCircle2 } from "lucide-react";
import Button from "@/components/Button/Button";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./ThankYou.module.css";

export default function ThankYou({ title, description }) {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <Reveal className={`container ${styles.content}`}>
        <span className={styles.icon}>
          <CheckCircle2 size={40} strokeWidth={1.6} aria-hidden="true" />
        </span>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button href="/" variant="primary">
          Povratak na početnu
        </Button>
      </Reveal>
    </section>
  );
}
