import ThankYou from "@/components/ThankYou/ThankYou";

export const metadata = {
  title: "Hvala Vam",
  description: "Vaša poruka je uspješno zaprimljena.",
  robots: { index: false, follow: false },
};

export default function KontaktHvalaPage() {
  return (
    <main>
      <ThankYou
        title="Hvala Vam na poruci!"
        description="Vaš upit je uspješno zaprimljen. Javit ćemo vam se u najkraćem mogućem roku putem e-maila ili telefona."
      />
    </main>
  );
}
