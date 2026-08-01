import Image from "next/image";
import PageHero from "@/components/PageHero/PageHero";
import FinalCta from "@/components/FinalCta/FinalCta";
import Reveal from "@/components/Reveal/Reveal";
import { galleryCategories } from "@/data/gallery";
import styles from "./page.module.css";

export const metadata = {
  title: "Galerija",
  description:
    "Pogledajte prostor, opremu i tretmane u Glow Atelieru - kozmetičkom salonu u Rijeci za lasersku epilaciju, Hydrafacial i Tesla tretmane.",
};

export default function GalerijaPage() {
  return (
    <main>
      <PageHero
        eyebrow="Galerija"
        title="Pogledajte naš prostor i tretmane"
        description="Fotografije prostora, opreme i tretmana koji vas očekuju prilikom dolaska u Glow Atelier."
      />

      <section className="section">
        <div className="container">
          {galleryCategories.map((category) => (
            <div key={category.id} className={styles.categoryBlock}>
              <Reveal as="h2" className={styles.categoryTitle}>
                {category.label}
              </Reveal>
              <div className={styles.masonry}>
                {category.items.map((item, itemIndex) => (
                  <Reveal
                    key={item.src}
                    className={styles.item}
                    delay={(itemIndex % 4) * 0.06}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                      className={styles.image}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
