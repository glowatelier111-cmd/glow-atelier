import PageHero from "@/components/PageHero/PageHero";
import styles from "./page.module.css";

export const metadata = {
  title: "Politika privatnosti",
  description:
    "Politika privatnosti Glow Atelier d.o.o. - kako prikupljamo, koristimo i štitimo vaše osobne podatke u skladu s GDPR-om.",
};

export default function PolitikaPrivatnostiPage() {
  return (
    <main>
      <PageHero eyebrow="Pravne informacije" title="Politika privatnosti" />

      <section className="section">
        <div className="container">
          <div className={styles.content}>
            <p className={styles.updated}>Zadnja izmjena: 1. kolovoza 2026.</p>

            <p>
              Ova politika privatnosti objašnjava koje osobne podatke prikupljamo putem web
              stranice glowatelier.eu, u koju svrhu ih koristimo te koja prava imate u vezi s
              njima, u skladu s Općom uredbom o zaštiti podataka (GDPR).
            </p>

            <h2>1. Voditelj obrade podataka</h2>
            <p>
              Voditelj obrade osobnih podataka je:
              <br />
              GLOW ATELIER d.o.o. za njegu tijela
              <br />
              Sjedište: Poljane 67B, 51410 Poljane, Hrvatska
              <br />
              OIB: 58085427397
              <br />
              MBS: 040489093
              <br />
              E-mail: glowatelier.rijeka@gmail.com
            </p>
            <p>
              Salon posluje na adresi Franje Matkovića 23, 50000 Rijeka, gdje se odvijaju
              tretmani i konzultacije.
            </p>

            <h2>2. Koje osobne podatke prikupljamo</h2>
            <p>Putem obrazaca za kontakt i rezervaciju prikupljamo:</p>
            <ul>
              <li>ime i prezime</li>
              <li>e-mail adresu</li>
              <li>broj telefona</li>
              <li>sadržaj poruke i, kod rezervacije, odabrani tretman</li>
            </ul>
            <p>
              Uz privolu za analitičke i marketinške kolačiće, putem alata poput Google Tag
              Managera prikupljamo i tehničke podatke o korištenju stranice (npr. IP adresa,
              vrsta preglednika, stranice koje posjećujete).
            </p>

            <h2>3. Svrha obrade i pravna osnova</h2>
            <p>Vaše podatke obrađujemo radi:</p>
            <ul>
              <li>odgovaranja na upite poslane putem kontakt obrasca (legitimni interes)</li>
              <li>
                dogovaranja i potvrde termina rezervacije (poduzimanje radnji prije sklapanja
                ugovora)
              </li>
              <li>
                analize korištenja stranice i prikazivanja oglasa, isključivo uz vašu privolu
                putem postavki kolačića
              </li>
            </ul>

            <h2>4. Razdoblje čuvanja podataka</h2>
            <p>
              Podatke iz obrazaca čuvamo onoliko dugo koliko je potrebno za odgovor na vaš upit ili
              dogovor termina, a najdulje 12 mjeseci od posljednjeg kontakta, osim ako je duže
              čuvanje potrebno radi zakonskih obveza (npr. računovodstvenih propisa).
            </p>

            <h2>5. Primatelji podataka i treće strane</h2>
            <p>
              Vaše podatke ne prodajemo niti dijelimo s trećim stranama u marketinške svrhe bez
              vaše privole. Podaci mogu biti dostupni pružateljima usluga koje koristimo za rad
              stranice (npr. Google - Tag Manager, Analytics i Ads, uz vašu privolu putem
              kolačića), koji podatke obrađuju u skladu sa svojim vlastitim pravilima privatnosti.
            </p>

            <h2>6. Kolačići</h2>
            <p>
              Stranica koristi kolačiće radi ispravnog rada, analitike i prikazivanja oglasa.
              Kolačiće koji nisu nužni za rad stranice postavljamo isključivo uz vašu privolu, a
              svoje postavke možete izmijeniti u bilo kojem trenutku putem poveznice &quot;Postavke
              kolačića&quot; u podnožju stranice.
            </p>

            <h2>7. Vaša prava</h2>
            <p>U skladu s GDPR-om imate pravo:</p>
            <ul>
              <li>zatražiti pristup svojim osobnim podacima</li>
              <li>zatražiti ispravak netočnih podataka</li>
              <li>zatražiti brisanje podataka</li>
              <li>ograničiti ili prigovoriti obradi podataka</li>
              <li>zatražiti prijenos podataka drugom voditelju obrade</li>
              <li>povući privolu za kolačiće u bilo kojem trenutku</li>
            </ul>
            <p>
              Zahtjeve možete poslati na glowatelier.rijeka@gmail.com. Ako smatrate da su vaša
              prava povrijeđena, imate pravo podnijeti pritužbu Agenciji za zaštitu osobnih
              podataka (AZOP).
            </p>

            <h2>8. Sigurnost podataka</h2>
            <p>
              Poduzimamo razumne tehničke i organizacijske mjere kako bismo zaštitili vaše
              podatke od neovlaštenog pristupa, gubitka ili zlouporabe.
            </p>

            <h2>9. Izmjene politike privatnosti</h2>
            <p>
              Ovu politiku privatnosti možemo povremeno ažurirati. Datum posljednje izmjene
              naveden je na vrhu stranice.
            </p>

            <h2>10. Kontakt</h2>
            <p>
              Za sva pitanja vezana uz zaštitu osobnih podataka javite nam se na
              glowatelier.rijeka@gmail.com ili putem{" "}
              <a href="/kontakt">kontakt obrasca</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
