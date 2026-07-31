import { Cormorant_Garamond, Manrope } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
