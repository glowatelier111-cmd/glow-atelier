import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PrivacyBanner from "@/components/PrivacyBanner/PrivacyBanner";
import "./globals.css";

const GTM_ID = "GTM-P9P2WPFG";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-heading",
  weight: ["600", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Glow Atelier Rijeka | Laserska epilacija, Hydrafacial i Tesla tretmani",
    template: "%s | Glow Atelier Rijeka",
  },
  description:
    "Glow Atelier je kozmetički salon u Rijeci za lasersku epilaciju, Hydrafacial i Tesla tretmane. Besplatne konzultacije, individualan pristup i licencirano osoblje.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="hr"
      data-scroll-behavior="smooth"
      className={`${cormorantGaramond.variable} ${manrope.variable}`}
    >
      <body>
        {/* Google Consent Mode v2 defaults - must run before the GTM loader
            below, so every signal starts denied until the visitor chooses
            via PrivacyBanner. beforeInteractive guarantees this ordering. */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>

        <Script id="gtm-loader" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        {children}
        <Footer />
        <PrivacyBanner />
      </body>
    </html>
  );
}
