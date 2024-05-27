import KontaktForm from "@/components/kontakt-form";
import KontaktInformation from "@/components/kontakt-information";
import Image from "next/image";
import React from "react";
import background from "@/public/assets/images/kontakt/header.png";

const Kontakt = () => {
  return (
    <div className="bg-white text-secondary">
      <section className="group relative mx-auto h-[41.667vw] max-h-[800px] w-full max-w-[120rem] overflow-hidden">
        <div className="relative mx-auto h-full w-full max-w-[120rem] overflow-hidden">
          <div className=" z-10 flex flex-nowrap items-end">
            <div className=" w-full  shrink-0 overflow-hidden ">
              <Image
                src={background}
                width={1920}
                height={800}
                alt="image"
                className="mx-auto transition-all duration-700 group-hover:scale-150"
                style={{ transformOrigin: "60% 20%" }}
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 h-[800px] max-h-[800px] max-w-[150px] bg-hero-gradient bg-no-repeat md:max-w-[300px] lg:max-w-[600px] 2xl:max-w-[800px] 3xl:max-w-[900px] 4xl:max-w-[1100px]">
          <div className="-ms-[75px] -mt-[70px] flex h-[110%] items-center  bg-pattern bg-no-repeat" />
        </div>

        <div className="container absolute inset-0 ms-0 flex items-center justify-start md:px-16 lg:px-[7.5rem] 3xl:px-[11.25rem] ">
          <div className="3xl:max-w-[800px]">
            <p className="text-[clamp(0.8rem,5vw,4.063rem)] uppercase leading-tight text-white lg:leading-[4.688rem]  4xl:max-w-[800px]">
              MAßGEFERTIGTE
              <br />
              IMMOBILIENLÖSUNGEN
              <br />
              FÜR IHRE
              <br />
              ANFORDERUNGEN
            </p>
          </div>
        </div>
      </section>

      <KontaktInformation />

      <KontaktForm />
    </div>
  );
};

export default Kontakt;
