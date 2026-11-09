import HeadSpaHero from "@/components/HeadSpaHero/HeadSpaHero";
import HeadSpaIntro from "@/components/HeadSpaIntro/HeadSpaIntro";
import HeadSpaBenefits from "@/components/HeadSpaBenefits/HeadSpaBenefits";
import HeadSpaRituals from "@/components/HeadSpaRituals/HeadSpaRituals";
import HeadSpaFeature from "@/components/HeadSpaFeature/HeadSpaFeature";
import HeadSpaAlfaparf from "@/components/HeadSpaAlfaparf/HeadSpaAlfaparf";
import HeadSpaLights from "@/components/HeadSpaLights/HeadSpaLights";
import HeadSpaLed from "@/components/HeadSpaLed/HeadSpaLed";
import HeadSpaPricing from "@/components/HeadSpaPricing/HeadSpaPricing";
import HeadSpaPackages from "@/components/HeadSpaPackages/HeadSpaPackages";
import Faq from "@/components/Faq/Faq";
import FinalCta from "@/components/FinalCta/FinalCta";
import JsonLd from "@/components/JsonLd/JsonLd";
import { headSpa, BLOW_DRY } from "@/data/headSpa";
import { buildMetadata } from "@/lib/seo";
import { getServiceSchema, getFaqSchema } from "@/lib/structuredData";

export const metadata = buildMetadata({
  title: "Head Spa",
  description: headSpa.metaDescription,
  path: headSpa.href,
});

const offers = [
  ...headSpa.rituals.map((ritual) => ({
    name: `Head Spa ${ritual.name}`,
    price: ritual.price,
  })),
  { name: headSpa.led.name, price: headSpa.led.price },
  { name: BLOW_DRY.name, price: BLOW_DRY.price },
];

const serviceSchema = {
  ...getServiceSchema(headSpa),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Head Spa rituali",
    itemListElement: offers.map((offer) => ({
      "@type": "Offer",
      price: offer.price,
      priceCurrency: "EUR",
      itemOffered: { "@type": "Service", name: offer.name },
    })),
  },
};

export default function HeadSpaPage() {
  const { camera, images } = headSpa;

  return (
    <main>
      <JsonLd data={serviceSchema} />
      <JsonLd data={getFaqSchema(headSpa.faqs)} />
      <HeadSpaHero />
      <HeadSpaPricing />
      <HeadSpaRituals />
      <HeadSpaIntro />
      <HeadSpaBenefits />

      <HeadSpaFeature
        eyebrow={camera.eyebrow}
        title={camera.title}
        image={images.camera}
        imageAlt="Analiza vlasišta i kose pod povećanjem"
        reverse
      >
        {camera.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </HeadSpaFeature>

      <HeadSpaAlfaparf />

      <HeadSpaLights />
      <HeadSpaLed />
      <HeadSpaPackages />
      <Faq
        items={headSpa.faqs}
        eyebrow="Česta pitanja"
        title="Pitanja o Head Spa ritualu"
        description="Odgovori na najčešća pitanja prije vašeg prvog Head Spa rituala."
      />
      <FinalCta />
    </main>
  );
}
