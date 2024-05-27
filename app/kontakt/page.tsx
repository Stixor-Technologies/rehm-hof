import KontaktForm from "@/components/kontakt-form";
import KontaktInformation from "@/components/kontakt-information";
import React from "react";

const Kontakt = () => {
  return (
    <div className="bg-white text-secondary">
      <div className="group relative max-h-[50rem] min-h-[50rem] overflow-hidden">
        <div
          className="z-0 min-h-[50rem] bg-kontakt-header bg-cover bg-[80%] bg-no-repeat transition-all duration-700 group-hover:scale-110 sm:bg-[75%] lg:bg-[70%]  lg:group-hover:scale-125 2xl:bg-center 2xl:group-hover:scale-[140%] 3xl:group-hover:scale-150"
          style={{ transformOrigin: "60% 20%" }}
        />
        <div className="absolute inset-0 max-w-[150px] bg-hero-gradient bg-no-repeat md:max-w-[300px] lg:max-w-[600px] 2xl:max-w-[800px] 3xl:max-w-[900px] 4xl:max-w-[1100px]">
          <div className="-ms-[75px] -mt-[70px] flex h-[110%] items-center  bg-pattern bg-no-repeat" />
        </div>

        <div className="container absolute inset-0 ms-0 flex items-center justify-start md:px-16 lg:px-[7.5rem] 3xl:px-[11.25rem] ">
          <div className="3xl:max-w-[800px]">
            <p className="text-[clamp(1.5rem,5vw,4.063rem)] uppercase leading-tight text-white lg:leading-[4.688rem]  4xl:max-w-[800px]">
              MAßGEFERTIGTE IMMOBILIENLÖSUNGEN FÜR IHRE ANFORDERUNGEN
            </p>
          </div>
        </div>
      </div>

      <KontaktInformation />

      <KontaktForm />
    </div>
  );
};

export default Kontakt;
