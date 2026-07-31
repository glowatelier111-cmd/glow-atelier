import HomeHero from "@/components/HomeHero/HomeHero";
import Benefits from "@/components/Benefits/Benefits";
import Treatments from "@/components/Treatments/Treatments";
import Cjenik from "@/components/Cjenik/Cjenik";
import Faq from "@/components/Faq/Faq";
import FinalCta from "@/components/FinalCta/FinalCta";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Benefits />
      <Treatments />
      <Cjenik />
      <Faq />
      <FinalCta />
    </main>
  );
}
