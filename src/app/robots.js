import { SITE_URL } from "@/lib/seo";

// The two "-hvala" thank-you pages are handled via a noindex meta tag on the
// pages themselves rather than a Disallow rule here - disallowing them in
// robots.txt would stop crawlers from ever seeing that noindex tag, which is
// the exact anti-pattern Google's own guidance warns against.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
