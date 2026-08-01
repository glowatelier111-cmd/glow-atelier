import { SITE_URL } from "./seo";

const BUSINESS_NAME = "Glow Atelier";

// Placeholder hours (same ones shown on /kontakt) until the owner confirms
// real working hours - update both places together when that happens.
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: BUSINESS_NAME,
    image: `${SITE_URL}/images/gallery/reception.webp`,
    url: SITE_URL,
    telephone: "+385953517205",
    email: "glowatelier.rijeka@gmail.com",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Franje Matkovića 23",
      postalCode: "50000",
      addressLocality: "Rijeka",
      addressCountry: "HR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "15:00",
      },
    ],
    sameAs: ["https://instagram.com/glowatelier_rijeka"],
  };
}

export function getServiceSchema(treatment) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: treatment.title,
    description: treatment.metaDescription,
    url: `${SITE_URL}${treatment.href}`,
    areaServed: "Rijeka",
    provider: {
      "@type": "BeautySalon",
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
  };
}

export function getFaqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
