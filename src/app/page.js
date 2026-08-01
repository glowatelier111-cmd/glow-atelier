import HomeHero from "@/components/HomeHero/HomeHero";
import Benefits from "@/components/Benefits/Benefits";
import Treatments from "@/components/Treatments/Treatments";
import Cjenik from "@/components/Cjenik/Cjenik";
import Faq from "@/components/Faq/Faq";
import FinalCta from "@/components/FinalCta/FinalCta";
import JsonLd from "@/components/JsonLd/JsonLd";
import { defaultFaqs } from "@/data/homeFaq";
import { getLocalBusinessSchema, getFaqSchema } from "@/lib/structuredData";

export default function Home() {
  return (
    <main>
      <JsonLd data={getLocalBusinessSchema()} />
      <JsonLd data={getFaqSchema(defaultFaqs)} />
      <HomeHero />
      <Benefits />
      <Treatments />
      <Cjenik />
      <Faq />
      <FinalCta />
    </main>
  );
}
