"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import OSVG from "@/public/assets/images/o.svg";
import logo from "@/public/assets/images/logo.svg";
import StadTPark from "@/public/assets/images/home-page/Stadtpark.png";
import InnenraumStaffel from "@/public/assets/images/home-page/Innenraum_Staffel.png";
import Strassenansicht from "@/public/assets/images/home-page/Strassenansicht.png";
import Bildergruppe from "@/public/assets/images/home-page/Bildergruppe.png";
import Pattern from "@/public/assets/images/Pattern.svg";
import Section6Image from "@/public/assets/images/home-page/section6.png";
import Building from "@/public/assets/images/home-page/buildings.png";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const LandingPage = () => {
  const buttonRef = useRef<HTMLImageElement | null>(null);
  const image1Ref = useRef<HTMLDivElement | null>(null);
  const image2Ref = useRef<HTMLDivElement | null>(null);

  const collageImage1Container = useRef<HTMLDivElement | null>(null);
  const collageImage2Container = useRef<HTMLDivElement | null>(null);
  const collageImage1Ref = useRef<HTMLImageElement | null>(null);
  const collageImage2Ref = useRef<HTMLImageElement | null>(null);

  const [isSliderActive, setIsSliderActive] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<number>(1);

  const DURATION = 0.3;

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

  const slideImage = contextSafe(() => {
    const tl = gsap.timeline();

    setIsSliderActive(!isSliderActive);
    if (!isSliderActive) {
      setActiveImage(2);
      tl.to(buttonRef.current, {
        right: -40,
      }).to(
        [image1Ref.current, image2Ref.current],
        {
          xPercent: 100,
          duration: 0.5,
          scale: 1,
        },
        0,
      );
    } else {
      setActiveImage(1);
      tl.to(buttonRef.current, {
        right: 0,
      }).to(
        [image1Ref.current, image2Ref.current],
        {
          xPercent: 0,
          duration: 0.5,
          scale: 1,
        },
        0,
      );
    }
  });

  const handleMouseEnter = () => {
    if (activeImage === 1) {
      // TODO: These Gsap transition will be different for both images, need to change them later
      gsap.to(image1Ref.current, {
        yPercent: -52,
        scale: 1.15,
      });
    } else {
      gsap.to(image2Ref.current, {
        yPercent: -55,
        scale: 1.15,
      });
    }
  };

  const handleMouseLeave = () => {
    gsap.to(activeImage === 1 ? image1Ref.current : image2Ref.current, {
      yPercent: 0,
      scale: 1,
    });
  };

  const handleMouseEnterCollage = contextSafe(() => {
    const tl = gsap.timeline();

    tl.to(collageImage1Ref.current, {
      scale: 1.32,
      transformOrigin: "right",
      duration: DURATION,
    })
      .to(
        collageImage1Container.current,
        {
          translateX: -10,
          translateY: -10,
          duration: DURATION,
        },
        0,
      )
      .to(
        collageImage2Container.current,
        {
          translateX: 10,
          duration: DURATION,
        },
        0,
      )
      .to(
        collageImage2Ref.current,
        {
          scale: 1.15,
          duration: DURATION,
        },
        0,
      );
  });
  const handleMouseLeaveCollage = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(collageImage1Ref.current, {
      scale: 1,
      duration: DURATION,
    })
      .to(
        collageImage1Container.current,
        {
          translateX: 0,
          translateY: 0,
          duration: DURATION,
        },
        0,
      )
      .to(
        collageImage2Container.current,
        {
          translateX: 0,
          duration: DURATION,
        },
        0,
      )
      .to(
        collageImage2Ref.current,
        {
          scale: 1,
          duration: DURATION,
        },
        0,
      );
  });

  return (
    <div>
      {/* section# 1*/}

      <section className="relative mx-auto h-[41.667vw] max-h-[800px] w-full max-w-[120rem] overflow-hidden">
        <Image
          src={OSVG}
          ref={buttonRef}
          width={254}
          height={73}
          alt="slide-button"
          onClick={slideImage}
          className=" absolute right-0 top-4 z-10 w-24 max-w-[15.875rem] cursor-pointer sm:top-16 lg:top-[3.962rem] lg:h-[4.563rem] lg:w-auto "
        />
        <div className="relative mx-auto h-full w-full max-w-[120rem] overflow-hidden">
          <div className=" z-10 flex flex-nowrap items-start">
            <div
              ref={image1Ref}
              className=" w-full  shrink-0 overflow-hidden lg:-translate-y-[6%]"
            >
              <Image
                src={Building}
                width={1920}
                height={800}
                alt="building"
                className="mx-auto"
              />
            </div>

            <div
              ref={image2Ref}
              className=" w-full shrink-0 -translate-x-[200%]  overflow-hidden"
            >
              <Image
                src={Strassenansicht}
                width={1920}
                height={1600}
                alt="strassenansicht"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 flex max-w-[1118px] items-center bg-hero-gradient"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="container  xl:ml-[calc((105vw-1278px)/2)] xl:pl-0 2xl:ml-[calc((105vw-1534px)/2)] 4xl:ml-[11.25rem]">
            <p className=" text-[clamp(1.5rem,5.5vw,6.563rem)] uppercase leading-tight text-white 3xl:leading-[6.75rem]">
              Leben <br /> Zwischen <br /> stadtpark <br />
              <span className=" font-semibold text-primary">& </span>
              alster
            </p>
          </div>
        </div>
      </section>

      {/* section# 2 */}
      <section className="container mb-[6.25rem] mt-[5.125rem] flex flex-col justify-between gap-10 lg:flex-row">
        <div className="md:flex-1">
          <Image
            src={StadTPark}
            width={760}
            height={699}
            alt="ENTDECKE"
            className="max-h-[43.688rem] w-full lg:max-w-[47.5rem]"
          />
        </div>
        <div className="flex-1 lg:max-w-[35rem]">
          <Image
            src={logo}
            alt="Logo"
            width={210}
            height={104.79}
            className="mx-auto pb-4 lg:mx-0 lg:pb-0"
          />

          <h2 className=" my-4 text-[clamp(2.063rem,5vw,4.063rem)] leading-snug text-primary lg:leading-[4.688rem] xl:my-[3.75rem]">
            ENTDECKE DIE RUHE DES NEUEN.
          </h2>

          <p className=" text-[clamp(1rem,2vw,1.253rem)] tracking-[0.025rem] text-secondary lg:leading-[2rem]">
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
          <div className="container flex flex-col justify-between gap-6 pb-[6.263rem] pt-[2.738rem] lg:flex-row lg:gap-[10vw] 4xl:h-[38.75rem]">
            <div className="mt-[3.56rem] lg:order-1 lg:w-1/2 lg:max-w-[47.5rem] 2xl:w-full">
              <h2 className="text-[clamp(1.6rem,2.4vw,2.813rem)] text-primary sm:w-1/2 lg:w-[70%] xl:mt-1.5 2xl:-mt-3.5 2xl:w-full 2xl:leading-[3.813rem]">
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
                <div className="flex w-full items-end gap-5 lg:gap-2">
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
        {/* grid-cols-[53%_21%_26.4%] grid-rows-[45.9%_18.3%_24.3%] */}
        <section className="container mb-[6.25rem] mt-[6.6rem] flex flex-col gap-16 md:flex-row md:gap-10">
          {/* grid-cols-[52.632%_21.054%_26.316%] grid-rows-[43.14%_17.06%_22.745%] */}
          <div className="grid w-full max-w-[47.5rem] flex-1 grid-cols-[52.632%_21.054%_26.316%] grid-rows-[53.86%_21.297%_28.396%] place-content-end ">
            <div
              ref={collageImage1Container}
              className="col-span-2 col-start-1 row-span-2 row-start-1 overflow-hidden"
            >
              <Image
                onMouseEnter={handleMouseEnterCollage}
                onMouseLeave={handleMouseLeaveCollage}
                ref={collageImage1Ref}
                src={Building}
                alt="building-sm"
                className="h-full"
              />
            </div>
            <div
              ref={collageImage2Container}
              className="col-span-2 col-start-2 row-span-2 row-start-2 overflow-hidden"
            >
              <Image
                onMouseEnter={handleMouseEnterCollage}
                onMouseLeave={handleMouseLeaveCollage}
                ref={collageImage2Ref}
                src={Bildergruppe}
                alt="bildergruppe"
                className="h-full"
              />
            </div>
          </div>
          <div className="flex-1 self-end">
            <Image
              src={InnenraumStaffel}
              width={760}
              height={494}
              alt="InnenraumStaffel"
            />
          </div>
        </section>

        <Image
          src={Pattern}
          alt="pattern"
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

      <section className="container relative max-w-[120rem] p-0">
        <Image
          src={Section6Image}
          width={1920}
          height={574}
          className="object-cover"
          alt="layout-tree"
        />
      </section>
    </div>
  );
};

export default LandingPage;
