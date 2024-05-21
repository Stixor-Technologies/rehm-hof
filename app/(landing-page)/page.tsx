import React from "react";
import Image from "next/image";
import OSVG from "@/public/assets/images/o.svg";
import logo from "@/public/assets/images/logo.svg";
import Section1Image from "@/public/assets/images/home-page/section3.jpg";
import InnenraumStaffel from "@/public/assets/images/home-page/Innenraum_Staffel.png";
import Strassenansicht from "@/public/assets/images/home-page/Strassenansicht.png";
import Bildergruppe from "@/public/assets/images/home-page/Bildergruppe.jpg";
import Pattern from "@/public/assets/images/Pattern.svg";
import Section6Image from "@/public/assets/images/home-page/section6.jpg";
import Building from "@/public/assets/images/home-page/building.png";
import Marquee from "react-fast-marquee";

const LandingPage = () => {
  const marque1Data = [
    "INDIVIDUELLE GRUNDRISSMÖGLICHKEITEN",
    "PHOTOVOLTAIKANLAGE",
    "AUFZUG, DIREKT INS PENTHOUSE",
    "INDIVIDUELLE GRUNDRISSMÖGLICHKEITEN",
  ];

  const marque2Data = [
    "GÄRTEN/TERRASSEN/BALKONE/DACHTERRASSEN",
    "RUHIGE INNENHOFLAGE",
    "TIEFGARAGENSTELLPLÄTZE",
    "GÄRTEN/TERRASSEN/BALKONE/DACHTERRASSEN",
  ];

  const marque3Data = [
    "LUFT/ WASSER-WÄREPUMPENANLAGE",
    "EXKLUSIVE MATERIALAUSWAHL",
    "LUFT/ WASSER-WÄREPUMPENANLAGE",
    "EXKLUSIVE MATERIALAUSWAHL",
  ];
  return (
    <div className="min-h-screen">
      {/* section# 2*/}

      {/* <section className="group relative h-[800px] w-full overflow-hidden">
        <div className="relative mx-auto h-full w-full max-w-[1920px] overflow-hidden">
          <Image
            src={OSVG}
            width={300}
            height={200}
            alt=""
            className=" absolute right-0 top-4"
          />

          <Image
            src={Building}
            width={1920}
            height={1600}
            alt=""
            className="mx-auto h-[1600px] duration-500 group-hover:translate-y-[-55%] group-hover:scale-[1.15]"
          />

          <div className="bg-hero-gradient absolute inset-0 flex max-w-[800px] items-center pl-[11.25rem]">
            <p className=" uppercase">Leben Zwischen stadtpark & alster</p>
          </div>
        </div>
      </section> */}

      <section className="container mb-[6.25rem] mt-[5.125rem] flex justify-between">
        <div className=" ">
          <Image
            src={Section1Image}
            width={760}
            height={699}
            alt=""
            className="max-h-[699px]"
          />
        </div>
        <div className="max-w-[35rem] flex-1">
          <Image src={logo} alt="Logo" width={210} height={104.79} />

          <h2 className="text-[clamp(2.063rem,5vw,4.063rem)] text-primary xl:my-[3.75rem] 2xl:leading-[4.688rem]">
            ENTDECKE DIE RUHE DES NEUEN.
          </h2>

          <p className=" text-[clamp(1rem,2vw,1.253rem)] leading-[1.92rem] tracking-[0.4px] text-secondary">
            In begehrter Lage von Hamburg-Winterhude erwartet Sie ein
            beeindruckendes Neubauprojekt, das moderne Architektur und urbanen
            Lifestyle vereint. Diese exklusive Anlage mit nur 9 Einheiten bietet
            eine gelungene Mischung aus Ruhe und urbaner Eleganz, typisch für
            das Flair von Winterhude. Ein wahrer Schatz, der sich nahtlos in die
            Umgebung einfügt und dennoch seinen eigenen unverwechselbaren
            Charakter besitzt.
          </p>
        </div>
      </section>

      {/* section# 3 */}

      <section className="relative">
        {/* <section className="bg-bone bg-opacity-50">
          <div className="container flex flex-col justify-between gap-6 pb-[6.263rem] pt-[2.738rem] lg:flex-row lg:gap-[10vw]">
            <div className="mt-[3.563rem] w-full lg:order-1 lg:max-w-[47.5rem]">
              <h2 className="text-[clamp(1.6rem,2.4vw,2.813rem)] text-primary sm:w-[50%] xl:w-[100%] 2xl:leading-[3.813rem]">
                VIELFALTIGE WOHNMÖGLICHKEITEN IM HAMBURGER CHIC
              </h2>
              <p className="mt-4 tracking-[0.4px] text-secondary xl:mt-[3.75rem] xl:text-xl xl:leading-[1.938rem]">
                Die Vielfalt der Wohnmöglichkeiten in diesem Neubauprojekt ist
                bemerkenswert: von Stadthäusern mit privaten Gärten bis hin zu
                einem exklusiven Penthouse mit Dachterrasse und großzügigen
                Etagenwohnungen. Die Wohnflächen variieren zwischen 112 und 176
                Quadratmetern, um den Bedürfnissen verschiedener Lebensstile
                gerecht zu werden. Hier vereinen sich großzügige Räume mit
                durchdachtem Design.
              </p>
            </div>

            <div className="lg:order-0 w-full uppercase text-primary lg:max-w-[29.688rem]">
              <div className="mb-3.5 flex w-full items-end gap-2">
                <span className="town-houses-numbers">4</span>
                <span className="town-houses-tag">STADTHÄUSER</span>
              </div>

              <div className="flex items-end gap-2">
                <span className="town-houses-numbers xl:mb-7">5</span>
                <span className="town-houses-tag ml-auto w-full max-w-[200px] xl:ml-0 xl:max-w-full">
                  EIGENTUMS-WOHNUNGEN
                </span>
              </div>
              <hr className="my-6 h-1 w-full bg-primary lg:mb-[2.188rem] lg:mt-12" />

              <div className="town-houses-tag">
                <p>1 - 4,5 ZIMMER</p>

                <p>115 - 168 M2</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* section# 4 */}
        {/* <section className="container my-[6.25rem] flex gap-10">
          <div className="grid w-full max-w-[47.5rem] grid-cols-[25rem_10rem_12.5rem]  grid-rows-[21.813rem_8.625rem_11.5rem]">
            <div className="col-span-2 row-start-1 row-end-2">
              <Image src={Strassenansicht} alt="" />
            </div>
            <div className="col-span-2 col-start-2 row-span-2">
              <Image src={Bildergruppe} alt="" className="h-full" />
            </div>
          </div>
          <div className="self-end">
            <Image src={InnenraumStaffel} width={760} height={494} alt="" />
          </div>
        </section> */}

        {/* <Image
          src={Pattern}
          // width={340}
          // height={934}
          alt=""
          fill
          className="absolute !-left-5 !bottom-0 !top-auto h-[934px] max-h-[934px] max-w-[340px] object-cover"
        /> */}
      </section>

      {/* section# 7 */}

      {/* <section>
        <h2 className=" mx-auto w-full max-w-[61.25rem] text-center text-[clamp(2rem,5vw,4.063rem)] text-primary 2xl:leading-[4.688rem]">
          PROJEKT-HIGHLIGHTS
        </h2>

        <div className="mb-[6.25rem] mt-[3.75rem]">
          <Marquee speed={90} autoFill loop={0}>
            <ul className="marquee-list">
              {marque1Data?.map((marqueItem) => (
                <li key={marqueItem} className="marquee-list-item">
                  <span className="marquee-item flex-1">{marqueItem}</span>
                </li>
              ))}
            </ul>
          </Marquee>

          <Marquee speed={90} autoFill loop={0} direction="right">
            <ul className="marquee-list">
              {marque2Data?.map((marqueItem) => (
                <li key={marqueItem} className="marquee-list-item !border-0">
                  <span className="marquee-item flex-1">{marqueItem}</span>
                </li>
              ))}
            </ul>
          </Marquee>

          <Marquee speed={90} autoFill loop={0}>
            <ul className="marquee-list">
              {marque3Data?.map((marqueItem) => (
                <li key={marqueItem} className="marquee-list-item">
                  <span className="marquee-item flex-1">{marqueItem}</span>
                </li>
              ))}
            </ul>
          </Marquee>
        </div>
      </section> */}

      {/* section# 6 */}
      <section className="container relative h-[35.875rem] bg-orange-300">
        <Image
          src={Section6Image}
          fill
          className="absolute object-cover"
          alt=""
        />
      </section>
    </div>
  );
};

export default LandingPage;
