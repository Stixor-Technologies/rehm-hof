import Image from "next/image";
import React from "react";
// import Image from "next/image";

const Kontakt = () => {
  return (
    <div className="bg-white text-secondary">
      <div className=" max-h-[50rem] min-h-[50rem] overflow-hidden">
        <div className="bg-kontakt-header relative z-0 min-h-[50rem]  bg-cover bg-center bg-no-repeat transition-all duration-700 hover:scale-150">
          {/* <div className="bg-hero-gradient absolute inset-0 flex items-center ">
            <div className="container">
              <p className=" text-[clamp(2rem,5vw,5.063rem)] uppercase leading-tight text-white">
                Leben <br /> Zwischen <br /> stadtpark <br />
                <span className=" font-semibold text-primary">& </span>
                alster
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <div className={`container py-16 md:py-[6.25rem]`}>
        <div className="flex flex-col gap-10 lg:flex-row 2xl:gap-16 4xl:gap-[10.3rem]">
          <div className="2xl:w-[35rem]">
            <Image
              src={"/assets/images/kontakt/hyest-logo-2.svg"}
              alt="Hyest Logo"
              width={294}
              height={70}
            />
            <div className="pt-[3.75rem] text-base leading-8 tracking-[0.025rem] text-secondary md:text-lg xl:text-xl">
              <p>
                HYEST ist ein modernes und spezialisiertes Unternehmen, das sich
                auf die Akquisition und den Verkauf von Grundstücken,
                Neubauprojekten und Bestandsimmobilien konzentriert. Unser
                Hauptaugenmerk liegt darauf, unseren Kunden eine umfassende
                Beratung und Unterstützung hinsichtlich individueller
                Bedürfnisse und Herausforderungen anzubieten.
              </p>
              <p className="pt-8">
                Das Team von HYEST setzt sich aus erfahrenen Immobilienexperten
                zusammen, die über fundierte Fachkenntnisse in verschiedenen
                Disziplinen der Immobilienwirtschaft verfügen. Wir legen großen
                Wert auf einen engen und professionellen Austausch mit unseren
                Kunden, um auf ihre jeweiligen Anforderungen und Bedürfnisse
                einzugehen und passgenaue Lösungsansätze zu entwickeln.
              </p>
            </div>
          </div>

          <Image
            src={"/assets/images/kontakt/kontakt-promotional.png"}
            alt="Promotional image"
            width={832}
            height={690}
            className="z-10 w-full  lg:-mt-[8.5rem] lg:max-h-[28rem] lg:w-[37rem] xl:max-h-[31.25rem] xl:w-[40.625rem] 2xl:-mt-[10.625rem] 2xl:max-h-[43.125rem] 2xl:w-[52rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
