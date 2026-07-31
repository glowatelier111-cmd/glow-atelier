import ThankYou from "@/components/ThankYou/ThankYou";

export const metadata = {
  title: "Hvala Vam",
  description: "Vaš upit za rezervaciju je uspješno zaprimljen.",
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
