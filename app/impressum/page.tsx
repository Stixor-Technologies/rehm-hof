import React from "react";
import ImpressumDatenschutzTemplate from "@/components/impressum-datenschutz-template";

const Impressum = () => {
  return (
    <ImpressumDatenschutzTemplate title="Impressum">
      <div className="grid gap-0 text-base tracking-[0.025rem] text-secondary md:grid-cols-2 md:gap-10 md:text-xl 2xl:gap-[11.313rem]">
        <div className="leading-8 4xl:h-[85.5rem] 4xl:w-[43.125rem]">
          <h2 className="pb-6">ANGABEN GEMÄß § 5 TMG</h2>
          <ul>
            <li>HYEST Real Estate GmbH</li>
            <li>Jungfernstieg 50</li>
            <li>20354 Hamburg</li>
            <li>
              Geschäftsführer: Julian Lorenz, Benjamin Marcus Tödt, Sven Thomsen
            </li>
            <li>Handelsregister: HRB 170512</li>
            <li>Registergericht: Amtsgericht Hamburg</li>
          </ul>
          <ul className="pt-6">
            <li>Umsatzsteuer-ID</li>
            <li>Umsatzsteuer-Identifikationsnummer gemäß §27 a</li>
            <li>Umsatzsteuergesetz:</li>
            <li>DE346184951</li>
          </ul>
          <h2 className="py-6">HAFTUNG FÜR INHALTE</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
          <h2 className="py-6">URHEBERRECHT</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </div>

        <div className="leading-8 4xl:w-[43.063rem]">
          <h2 className="pb-7">KONTAKT</h2>
          <ul>
            <li>T +49 40 34 68 34</li>
            <li>F +49 40 35 12 62</li>
            <li>E-Mail: info@hyest.de</li>
          </ul>
          <h2 className="py-7">STREITSCHLICHTUNG</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:
            https://ec.europa.eu/consumers/odr.
          </p>
          <p>
            Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
            bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          <h2 className="py-7">HAFTUNG FÜR LINKS</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
            Haftung für die Inhalte externer Links. Für den Inhalt der
            verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich.
          </p>
          <h2 className="py-7">BILDNACHWEIS</h2>
          <ul>
            <li>ALT/SHIFT.</li>
            <li>Fotos S. 14-15: Amelie Wüst</li>
          </ul>
          <h2 className="py-7">KONZEPT UND DESIGN</h2>
          <ul>
            <li>www.altshift.de</li>
            <li>www.boredbrand.studio</li>
          </ul>
        </div>
      </div>
    </ImpressumDatenschutzTemplate>
  );
};

export default Impressum;
