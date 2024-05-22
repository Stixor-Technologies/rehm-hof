"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import OSVG from "@/public/assets/images/o.svg";
import logo from "@/public/assets/images/logo.svg";
import Section1Image from "@/public/assets/images/home-page/section3.jpg";
import InnenraumStaffel from "@/public/assets/images/home-page/Innenraum_Staffel.png";
import Strassenansicht from "@/public/assets/images/home-page/Strassenansicht.png";
import Bildergruppe from "@/public/assets/images/home-page/Bildergruppe.jpg";
import Pattern from "@/public/assets/images/Pattern.svg";
import Section6Image from "@/public/assets/images/home-page/section6.jpg";
import Building from "@/public/assets/images/home-page/buildings.png";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LandingPage = () => {
  const buttonRef = useRef<HTMLImageElement | null>(null);
  const image1Ref = useRef<HTMLDivElement | null>(null);
  const image2Ref = useRef<HTMLDivElement | null>(null);

  const [isSliderActive, setIsSliderActive] = useState<boolean>(false);

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

  const { contextSafe } = useGSAP();

  const questionClicked = contextSafe(() => {
    const tl = gsap.timeline();

    setIsSliderActive(!isSliderActive);

    if (!isSliderActive) {
      tl.to(buttonRef.current, {
        right: -50,
      }).to(
        [image1Ref.current, image2Ref.current],
        {
          xPercent: 100,
          duration: 0.4,
          translateY: 0,
          ease: "none",
        },
        0,
      );
    } else {
      tl.to(buttonRef.current, {
        right: 0,
      })
        .to(
          image2Ref.current,
          {
            xPercent: -100,
            duration: 0.4,
            translateY: 0,
            ease: "none",
          },
          0,
        )
        .to(
          image1Ref.current,
          {
            xPercent: 0,
            translateY: 0,
            duration: 0.4,
            ease: "none",
          },
          ">-0.5",
        );
    }
  });

  return (
    <div className="min-h-screen">
      {/* section# 1*/}
      <section className="group relative h-[50rem] w-full overflow-hidden">
        <div className="relative mx-auto h-full w-full max-w-[120rem] overflow-hidden">
          <Image
            src={OSVG}
            ref={buttonRef}
            width={150}
            height={300}
            alt=""
            onClick={questionClicked}
            className="absolute right-0 top-16 z-10"
          />

          <div className="flex h-full">
            <div ref={image1Ref} className=" shrink-0 overflow-hidden">
              <Image
                src={Building}
                width={1920}
                height={1600}
                alt=""
                className="mx-auto transition-transform duration-500 group-hover:translate-y-[-55%] group-hover:scale-[1.15]"
              />
            </div>

            <div
              ref={image2Ref}
              className=" shrink-0 -translate-x-[200%]  overflow-hidden"
            >
              <Image
                src={Strassenansicht}
                width={1920}
                height={1600}
                alt=""
                className="mx-auto transition-transform duration-500 group-hover:translate-y-[-55%] group-hover:scale-[1.15]"
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center bg-hero-gradient ">
            <div className="container">
              <p className=" text-[clamp(2rem,5vw,5.063rem)] uppercase leading-tight text-white">
                Leben <br /> Zwischen <br /> stadtpark <br />
                <span className=" font-semibold text-primary">& </span>
                alster
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section# 2 */}
      <section className="container mb-[6.25rem] mt-[5.125rem] flex flex-col justify-between gap-10 lg:flex-row">
        <div className="md:flex-1">
          <Image
            src={Section1Image}
            width={760}
            height={699}
            alt=""
            className="max-h-[43.688rem] w-full lg:max-w-[47.5rem]"
          />
        </div>
        <div className="flex-1 lg:max-w-[35rem]">
          <Image
            src={logo}
            alt="Logo"
            width={210}
            height={104.79}
            className="mx-auto pb-4 lg:mx-0"
          />

          <h2 className=" my-4 text-[clamp(2.063rem,5vw,4.063rem)] leading-snug text-primary lg:leading-[4.688rem] xl:my-[3.75rem]">
            ENTDECKE DIE RUHE DES NEUEN.
          </h2>

          <p className=" text-[clamp(1rem,2vw,1.253rem)] tracking-[0.025rem] text-secondary lg:leading-[1.92rem]">
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
        <section className="relative z-10 bg-bone bg-opacity-50">
          <div className="container flex flex-col justify-between gap-6 pb-[6.263rem] pt-[2.738rem] lg:flex-row lg:gap-[10vw]">
            <div className="mt-[3.563rem] lg:order-1 lg:w-[50%] lg:max-w-[47.5rem] 2xl:w-full">
              <h2 className="text-[clamp(1.6rem,2.4vw,2.813rem)] text-primary sm:w-[50%] lg:w-[70%] 2xl:w-full 2xl:leading-[3.813rem]">
                VIELFALTIGE WOHNMÖGLICHKEITEN IM HAMBURGER CHIC
              </h2>
              <p className="mt-4 tracking-[0.025rem] text-secondary xl:mt-[3.75rem] xl:text-xl xl:leading-[1.938rem]">
                Die Vielfalt der Wohnmöglichkeiten in diesem Neubauprojekt ist
                bemerkenswert: von Stadthäusern mit privaten Gärten bis hin zu
                einem exklusiven Penthouse mit Dachterrasse und großzügigen
                Etagenwohnungen. Die Wohnflächen variieren zwischen 112 und 176
                Quadratmetern, um den Bedürfnissen verschiedener Lebensstile
                gerecht zu werden. Hier vereinen sich großzügige Räume mit
                durchdachtem Design.
              </p>
            </div>

            <div className="lg:order-0 flex max-w-[29.688rem] flex-col justify-between gap-5 uppercase text-primary sm:flex-row lg:w-[30%] lg:flex-col lg:gap-0 2xl:w-full">
              <div>
                <div className="mb-3.5 flex w-full items-end gap-5 lg:gap-2">
                  <span className="town-houses-numbers">4</span>
                  <span className="town-houses-tag">STADTHÄUSER</span>
                </div>

                <div className="flex items-end gap-5 lg:gap-2">
                  <span className="town-houses-numbers xl:mb-7">5</span>
                  <span className="town-houses-tag">
                    EIGENTUMS- <br />
                    WOHNUNGEN
                  </span>
                </div>
              </div>

              <hr className="my-6 ml-[calc(475px-1920px)] hidden h-1 bg-primary lg:block xl:mb-[2.188rem] xl:mt-12" />

              <div className="town-houses-tag self-end">
                <p>1 - 4,5 ZIMMER</p>

                <p>115 - 168 M2</p>
              </div>
            </div>
          </div>
        </section>

        {/* section# 4 */}
        <section className="container my-[6.25rem] flex flex-col gap-16 md:flex-row md:gap-10 2xl:mt-3.5">
          <div className="grid w-full max-w-[47.5rem] flex-1 grid-cols-[53%_21%_26.4%] grid-rows-[45.9%_18.3%_24.3%] place-content-end ">
            <div className="col-span-2 row-start-1 row-end-2">
              <Image src={Building} alt="" />
            </div>
            <div className="col-span-2 col-start-2 row-span-2">
              <Image src={Bildergruppe} alt="" className="h-full" />
            </div>
          </div>
          <div className="flex-1 self-end">
            <Image src={InnenraumStaffel} width={760} height={494} alt="" />
          </div>
        </section>

        <Image
          src={Pattern}
          alt=""
          fill
          className="absolute !-left-5 !bottom-2.5 !top-auto hidden max-h-[58.375rem] max-w-[21.25rem] object-cover lg:block"
        />
      </section>

      {/* section# 5 */}

      <section>
        <h2 className=" mx-auto w-full max-w-[61.25rem] text-center text-[clamp(2.063rem,5vw,4.063rem)] text-primary 2xl:leading-[4.688rem]">
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
      </section>

      {/* section# 6 */}
      <section className="container relative h-[35.875rem] max-w-[120rem] p-0">
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
