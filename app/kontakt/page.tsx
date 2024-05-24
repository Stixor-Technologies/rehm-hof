import KontaktForm from "@/components/kontakt-form";
import KontaktInformation from "@/components/kontakt-information";
import React from "react";

const Kontakt = () => {
  return (
    <div className="bg-white text-secondary">
      <div className="group relative max-h-[50rem] min-h-[50rem] overflow-hidden">
        <div className="z-0 min-h-[50rem] bg-kontakt-header bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-150" />
        <div className="absolute inset-0 max-w-[150px] bg-hero-gradient bg-no-repeat md:max-w-[400px] xl:max-w-[600px] 2xl:max-w-[800px] 3xl:max-w-[900px] 4xl:max-w-[1100px]">
          <div className="flex h-full items-center  bg-pattern bg-no-repeat">
            <div className="container">
              <p className=" text-[clamp(1.5rem,5vw,4.063rem)] uppercase leading-tight text-white">
                MAßGEFERTIGTE IMMOBILIENLÖSUNGEN FÜR IHRE ANFORDERUNGEN
              </p>
            </div>
          </div>
        </div>
      </div>

      <KontaktInformation />

      <KontaktForm />
    </div>
  );
};

export default Kontakt;
