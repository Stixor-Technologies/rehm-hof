import KontaktForm from "@/components/kontakt-form";
import KontaktInformation from "@/components/kontakt-information";
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

      <KontaktInformation />

      <KontaktForm />
    </div>
  );
};

export default Kontakt;
