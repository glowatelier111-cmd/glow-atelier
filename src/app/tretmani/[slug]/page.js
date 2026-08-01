import { notFound } from "next/navigation";
import { treatments } from "@/data/treatments";
import TreatmentHero from "@/components/TreatmentHero/TreatmentHero";
import TreatmentPricing from "@/components/TreatmentPricing/TreatmentPricing";
import TreatmentProcess from "@/components/TreatmentProcess/TreatmentProcess";
import TreatmentSuitability from "@/components/TreatmentSuitability/TreatmentSuitability";
import Faq from "@/components/Faq/Faq";
import FinalCta from "@/components/FinalCta/FinalCta";
import JsonLd from "@/components/JsonLd/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { getServiceSchema, getFaqSchema } from "@/lib/structuredData";

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    return {};
  }

  return buildMetadata({
    title: treatment.title,
    description: treatment.metaDescription,
    path: `/tretmani/${treatment.slug}`,
  });
}

export default async function TreatmentPage({ params }) {
  const { slug } = await params;
  const treatment = treatments.find((item) => item.slug === slug);

  if (!treatment) {
    notFound();
  }

  return (
    <main>
      <JsonLd data={getServiceSchema(treatment)} />
      <JsonLd data={getFaqSchema(treatment.faqs)} />
      <TreatmentHero treatment={treatment} />
      <TreatmentPricing treatment={treatment} />
      <TreatmentProcess treatment={treatment} />
      <TreatmentSuitability treatment={treatment} />
      <Faq
        items={treatment.faqs}
        eyebrow="Česta pitanja"
        title={`Pitanja o tretmanu: ${treatment.title}`}
        description="Odgovori na najčešća pitanja prije rezervacije ovog tretmana."
      />
      <FinalCta />
    </main>
  );
}
