import ThankYou from "@/components/ThankYou/ThankYou";
import { buildMetadata } from "@/lib/seo";

export const metadata = {
  ...buildMetadata({
    title: "Hvala Vam",
    description: "Vaš upit za rezervaciju je uspješno zaprimljen.",
    path: "/rezervacija-hvala",
  }),
  robots: { index: false, follow: false },
};

export default function RezervacijaHvalaPage() {
  return (
    <main>
      <ThankYou
        title="Hvala Vam na upitu!"
        description="Vaš zahtjev za rezervaciju je uspješno zaprimljen. Naš tim će vas kontaktirati telefonom kako bismo potvrdili termin."
      />
    </main>
  );
}
