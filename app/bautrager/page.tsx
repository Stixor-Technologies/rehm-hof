import React from "react";
import Image from "next/image";
import TorHous from "@/public/assets/images/bautrager/tor-haus.svg";
import Pinneberger from "@/public/assets/images/bautrager/Pinneberger.png";
import Strassenansicht from "@/public/assets/images/bautrager/strassenansicht.png";

const Bautrager = () => {
  return (
    <div>
      <section className="container my-10 flex flex-col gap-0 lg:flex-row lg:gap-10 xl:my-[6.25rem]">
        <div className="w-full lg:max-w-[47.5rem]">
          <Image
            src={TorHous}
            width={302}
            height={103}
            alt="tor-haus"
            className=" hidden lg:block"
          />

          <div className="grid flex-1  grid-cols-[53%_21%_26.4%] grid-rows-[43.05%_17%_22.8%] lg:mt-[6.798rem] ">
            <div className="col-span-2">
              <Image src={Strassenansicht} alt="building-sm" />
            </div>

            <div className="col-span-2 col-start-2 row-span-2">
              <Image src={Pinneberger} alt="bildergruppe" className="h-full" />
            </div>
          </div>
        </div>
        <div className="flex-1 lg:w-1/2 lg:max-w-[47.5rem]">
          <Image
            src={TorHous}
            width={302}
            height={103}
            alt="tor-haus"
            className="mb-7 block w-40 sm:w-auto lg:hidden"
          />

          <h2 className="break-words text-[clamp(2.063rem,5vw,4.063rem)] leading-snug text-primary 2xl:leading-[4.688rem]">
            TORHAUS PROJEKTENTWICKLUNGSGE SELLSCHAFT
          </h2>
          <p className=" mt-4 break-words tracking-[0.025rem] text-secondary lg:mt-[3.125rem] lg:text-xl lg:leading-[2rem]">
            Seit über 25 Jahren baut die torHaus
            Projektsentwicklungsgesellschaft Wohnimmobilien in den beliebtesten
            Stadtteilen Hamburgs. Mit mehr als 50 erfolgreich realisierten
            Objekten verfügen der Inhaber Torsten Hamm und sein Team aus
            kompetenten Spezialisten über eine solide Expertise im Bereich
            innenstädischer Bauvorhaben. Herr Hamm versteht sich als Hanseat der
            alten Schule und formuliert die Philosophie von torHaus ein einem
            Satz: „Von meinem Vater habe ich gelernt: Was man sagt, muss man
            machen.”
          </p>

          <address className="mt-4 not-italic tracking-[0.025rem] text-secondary lg:mt-[3.375rem] lg:text-xl lg:leading-[2rem]">
            BAUHERR <br /> Grundstücksgesellschaft Rehmstraße <br /> mbH & Co.
            KG
            <br /> Magdalenenstraße 40 <br />
            20148 Hamburg
          </address>
        </div>
      </section>
    </div>
  );
};

export default Bautrager;
