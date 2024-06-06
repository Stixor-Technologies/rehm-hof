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
import Building from "@/public/assets/images/home-page/building.jpeg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectsHighlight from "@/components/project-highlight";
import { ScrollTrigger } from "gsap/all";

const LandingPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  const buttonRef = useRef<HTMLImageElement | null>(null);
  const image1Ref = useRef<HTMLDivElement | null>(null);
  const image2Ref = useRef<HTMLDivElement | null>(null);

  const collageImage1Container = useRef<HTMLDivElement | null>(null);
  const collageImage2Container = useRef<HTMLDivElement | null>(null);
  const collageImage1Ref = useRef<HTMLImageElement | null>(null);
  const collageImage2Ref = useRef<HTMLImageElement | null>(null);

  const bannerContainer = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const [isSliderActive, setIsSliderActive] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<number>(1);

  const DURATION = 0.3;

  const { contextSafe } = useGSAP();

  const slideImage = contextSafe(() => {
    const tl = gsap.timeline();

    setIsSliderActive(!isSliderActive);
    tl.to(bannerContainer.current, {
      y: 0,
    });
    if (!isSliderActive) {
      setActiveImage(2);
      tl.to(
        buttonRef.current,
        {
          right: -40,
        },
        0,
      ).to(
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
      tl.to(
        buttonRef.current,
        {
          right: 0,
        },
        0,
      ).to(
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

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          isMobile: "(max-width: 640px)",
          isTablet: "(min-width: 642px) and (max-width: 1023px)",
          isDesktop: "(min-width: 1024px)",
        },
        (context) => {
          if (context.conditions) {
            const { isMobile, isTablet } = context.conditions;
            // if (isDesktop) {
            const tl = gsap.timeline();
            console.log(activeImage);
            tl.to(textRef.current, {
              y: -832 - (textRef.current?.clientHeight || 0) - 64,
              duration: 1,
              ease: "none",
              scrollTrigger: {
                trigger: bannerContainer.current,
                start: isMobile ? "top 6%" : isTablet ? "top 7%" : "top 10%",
                end: "+=60%",
                scrub: true,
                // markers: true,
              },
            });

            tl.to(
              image1Ref.current,
              {
                yPercent: -42,
                scale: 1.15,
                duration: 0.3,
                scrollTrigger: {
                  trigger: textRef.current,
                  start: isMobile ? "top 7%" : isTablet ? "top 10%" : "top 20%",
                  scrub: true,
                  markers: true,
                },
              },
              0,
            ).to(
              image2Ref.current,
              {
                yPercent: -18,
                duration: 0.3,
                scrollTrigger: {
                  trigger: textRef.current,
                  start: isMobile ? "top 7%" : isTablet ? "top 10%" : "top 20%",
                  scrub: true,
                },
              },
              0,
            );
            // }
          }
        },
      );
    },
    { scope: bannerContainer },
  );

  return (
    <div>
      {/* section# 1*/}

      <section
        ref={bannerContainer}
        className="relative mx-auto h-[41.667vw] max-h-[800px] w-full max-w-[120rem] overflow-hidden"
      >
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
              className=" w-full  shrink-0 overflow-hidden lg:-translate-y-[2%]"
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
              className=" w-full shrink-0 -translate-x-[200%] -translate-y-[18%] overflow-hidden"
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

        <div className="absolute inset-0 flex max-w-[1118px] items-center bg-hero-gradient 4xl:block">
          <div className="container xl:ml-[calc((105vw-1278px)/2)] xl:pl-0 2xl:ml-[calc((105vw-1534px)/2)] 4xl:ml-[11.25rem] 4xl:mt-[176px]">
            <div ref={textRef}>
              <p className="text-[clamp(1.5rem,5.5vw,6.563rem)] uppercase leading-tight text-white 3xl:leading-[6.75rem]">
                Leben <br /> Zwischen <br /> stadtpark <br />
                <span className=" font-semibold text-primary">& </span>
                alster
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section# 2 */}
      <section className="container my-12 flex flex-col justify-between gap-7 lg:mb-[6.25rem] lg:mt-[5.125rem] lg:flex-row lg:gap-10">
        <div className="flex-1 lg:order-last lg:max-w-[35rem]">
          <Image
            src={logo}
            alt="Logo"
            width={210}
            height={104.79}
            className="max-w-[6.25rem] pb-0 lg:mx-0 lg:w-full lg:max-w-[13.125rem] lg:pb-0"
          />

          <h2 className=" my-4 text-[clamp(2.063rem,5vw,4.063rem)] leading-snug text-primary lg:leading-[4.688rem] xl:my-[3.75rem]">
            ENTDECKE DIE RUHE DES NEUEN.
          </h2>

          <p className=" text-[clamp(1rem,2vw,1.253rem)] tracking-[0.025rem] text-secondary lg:leading-[2rem] 4xl:h-[248px]">
            In begehrter Lage von Hamburg-Winterhude erwartet Sie ein
            beeindruckendes Neubauprojekt, das moderne Architektur und urbanen
            Lifestyle vereint. Diese exklusive Anlage mit nur 9 Einheiten bietet
            eine gelungene Mischung aus Ruhe und urbaner Eleganz, typisch für
            das Flair von Winterhude. Ein wahrer Schatz, der sich nahtlos in die
            Umgebung einfügt und dennoch seinen eigenen unverwechselbaren
            Charakter besitzt.
          </p>
        </div>

        <div className="md:flex-1 lg:order-first">
          <Image
            src={StadTPark}
            width={760}
            height={699}
            alt="ENTDECKE"
            className="w-full lg:max-h-[43.688rem] lg:max-w-[47.5rem]"
          />
        </div>
      </section>

      {/* section# 3 */}
      <section className="relative">
        <section className="relative z-10 bg-bone bg-opacity-50">
          <div className="container flex flex-col justify-between gap-6 py-10 lg:flex-row lg:gap-[10vw] lg:pb-[6.263rem] lg:pt-[2.738rem] 4xl:h-[38.75rem]">
            <div className="lg:order-1 lg:mt-[3.56rem] lg:w-1/2 lg:max-w-[47.5rem] 2xl:w-full">
              <h2 className="text-[clamp(1.6rem,2.4vw,2.813rem)] text-primary sm:w-1/2 lg:w-[70%] xl:mt-1.5 2xl:-mt-3.5 2xl:w-full 2xl:leading-[3.813rem]">
                VIELFALTIGE WOHNMÖGLICHKEITEN IM HAMBURGER CHIC
              </h2>
              <p className="mt-4 tracking-[0.025rem] text-secondary xl:mt-[3.75rem] xl:text-xl xl:leading-[1.938rem] 4xl:h-[11.5rem]">
                Die Vielfalt der Wohnmöglichkeiten in diesem Neubauprojekt ist
                bemerkenswert: von Stadthäusern mit privaten Gärten bis hin zu
                einem exklusiven Penthouse mit Dachterrasse und großzügigen
                Etagenwohnungen. Die Wohnflächen variieren zwischen 112 und 176
                Quadratmetern, um den Bedürfnissen verschiedener Lebensstile
                gerecht zu werden. Hier vereinen sich großzügige Räume mit
                durchdachtem Design.
              </p>
            </div>

            <div className="lg:order-0 flex flex-col justify-between gap-5 uppercase text-primary sm:flex-row lg:w-[30%] lg:max-w-[29.688rem] lg:flex-col lg:gap-0 2xl:w-full">
              <div className="mb-6 xl:mb-12">
                <div className="mb-5 flex w-full items-end gap-5 lg:gap-2">
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

              <hr className="-ml-10 mr-10 h-1 bg-primary lg:ml-[calc(475px-1920px)] lg:mr-0 lg:block " />

              <div className="town-houses-tag mt-6 xl:mt-[2.188rem]">
                <p className="text-left lg:text-right">3,5 - 5 ZIMMER</p>

                <p className="text-left lg:text-right">116 - 177 M2</p>
              </div>
            </div>
          </div>
        </section>

        {/* section# 4 */}
        {/* grid-cols-[53%_21%_26.4%] grid-rows-[45.9%_18.3%_24.3%] */}
        <section className="container my-12 flex flex-col gap-7 md:flex-row md:gap-10 lg:my-[6.25rem]">
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
          width={340}
          height={934}
          className="absolute !-left-5 !bottom-2.5 !top-auto hidden h-[48.65vw] max-h-[58.375rem] w-[17.71vw]  max-w-[21.25rem] overflow-visible object-cover lg:block"
        />
      </section>

      {/* section# 5 */}

      <ProjectsHighlight />

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
