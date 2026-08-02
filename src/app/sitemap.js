import { treatments } from "@/data/treatments";
import { SITE_URL } from "@/lib/seo";

export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = [
    { url: "/", priority: 1, changeFrequency: "weekly" },
    { url: "/o-nama", priority: 0.7, changeFrequency: "monthly" },
    { url: "/galerija", priority: 0.6, changeFrequency: "monthly" },
    { url: "/kontakt", priority: 0.8, changeFrequency: "monthly" },
    { url: "/rezervacija", priority: 0.9, changeFrequency: "monthly" },
    { url: "/politika-privatnosti", priority: 0.3, changeFrequency: "yearly" },
    { url: "/politika-kolacica", priority: 0.3, changeFrequency: "yearly" },
  ];

  const treatmentRoutes = treatments.map((treatment) => ({
    url: treatment.href,
    priority: 0.9,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...treatmentRoutes].map((route) => ({
    url: `${SITE_URL}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
