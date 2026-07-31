import styles from "./SectionHeading.module.css";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const classes = [styles.head, align === "left" ? styles.left : ""].filter(Boolean).join(" ");

  return (
    <div className={classes}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
