"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import TorHous from "@/public/assets/images/bautrager/tor-haus.svg";
import Pinneberger from "@/public/assets/images/bautrager/pinneberger.png";
import Strassenansicht from "@/public/assets/images/bautrager/strassenansicht.png";
import PinnebergerSM from "@/public/assets/images/bautrager/pinneberger_sm.png";
import StrassenansichtSM from "@/public/assets/images/bautrager/strassenansich_sm.png";
import OSVG from "@/public/assets/images/o.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Bautrager = () => {
  const buttonRef = useRef<HTMLImageElement | null>(null);
  const slideImage1Ref = useRef<HTMLDivElement | null>(null);
  const slideImage2Ref = useRef<HTMLDivElement | null>(null);

  const gridImage1Ref = useRef<HTMLImageElement | null>(null);
  const gridImage2Ref = useRef<HTMLImageElement | null>(null);
  const gridImage1Container = useRef<HTMLImageElement | null>(null);
  const gridImage2Container = useRef<HTMLImageElement | null>(null);

  const [isSliderActive, setIsSliderActive] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<number>(1);

  const { contextSafe } = useGSAP();

  // animation for Sliding images
  const slideImage = contextSafe(() => {
    const tl = gsap.timeline();

    setIsSliderActive(!isSliderActive);
    if (!isSliderActive) {
      setActiveImage(2);
      tl.to(buttonRef.current, {
        right: -40,
      }).to(
        [slideImage1Ref.current, slideImage2Ref.current],
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
        [slideImage1Ref.current, slideImage2Ref.current],
        {
          xPercent: 0,
          duration: 0.5,
          scale: 1,
        },
        0,
      );
    }
  });

  const handleMouseEnterSlideAnimation = () => {
    if (activeImage === 1) {
      gsap.to(slideImage1Ref.current, {
        yPercent: -26,
        transformOrigin: "bottom right",
        scale: 1.15,
      });
    } else {
      gsap.to(slideImage2Ref.current, {
        yPercent: -45,
        scale: 1.15,
      });
    }
  };

  const handleMouseLeaveSlideAnimation = () => {
    gsap.to(
      activeImage === 1 ? slideImage1Ref.current : slideImage2Ref.current,
      {
        yPercent: 0,
        scale: 1,
      },
    );
  };

  // animation for Grid images
  const handleMouseEnterGrid = contextSafe(() => {
    const tl = gsap.timeline();

    tl.to(gridImage1Ref.current, {
      scale: 1.2,
      transformOrigin: "top left",
      duration: 0.4,
    })
      .to(
        gridImage1Container.current,
        {
          translateX: -10,
          translateY: -10,
          duration: 0.4,
        },
        0,
      )
      .to(
        gridImage2Container.current,
        {
          translateX: 10,
          duration: 0.4,
        },
        0,
      )
      .to(
        gridImage2Ref.current,
        {
          scale: 1.7,
          transformOrigin: "bottom center",
          duration: 0.4,
        },
        0,
      );
  });
  const handleMouseLeaveGrid = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(gridImage1Ref.current, {
      scale: 1,
      duration: 0.4,
    })
      .to(
        gridImage1Container.current,
        {
          translateX: 0,
          translateY: 0,
          duration: 0.4,
        },
        0,
      )
      .to(
        gridImage2Container.current,
        {
          translateX: 0,
          duration: 0.4,
        },
        0,
      )
      .to(
        gridImage2Ref.current,
        {
          scale: 1,
          duration: 0.4,
        },
        0,
      );
  });

  return (
    <div>
      <section
        className="max-h-[20.834vw] w-full overflow-hidden"
        onMouseEnter={handleMouseEnterSlideAnimation}
        onMouseLeave={handleMouseLeaveSlideAnimation}
      >
        <div className="relative mx-auto h-full w-full max-w-[120rem] overflow-hidden">
          <Image
            src={OSVG}
            ref={buttonRef}
            width={254}
            height={73}
            alt="slide-button"
            onClick={slideImage}
            className=" absolute right-0 top-4 z-10 w-24 max-w-[15.875rem] cursor-pointer sm:top-16 lg:top-[3.962rem] lg:h-[4.563rem] lg:w-auto"
          />

          <div className=" z-10 flex flex-nowrap items-start">
            <div
              ref={slideImage1Ref}
              className=" w-full shrink-0 -translate-y-[30%] overflow-hidden"
            >
              <Image
                src={Pinneberger}
                width={1920}
                height={800}
                alt="building"
                className="mx-auto"
              />
            </div>

            <div
              ref={slideImage2Ref}
              className=" w-full shrink-0 -translate-x-[200%] overflow-hidden lg:-translate-y-[8%]"
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
      </section>

      <section className="container my-10 flex flex-col sm:gap-20 lg:flex-row lg:gap-10 xl:my-[6.25rem]">
        <div className="w-full lg:max-w-[47.5rem]">
          <Image
            src={TorHous}
            width={302}
            height={103}
            alt="tor-haus"
            className=" hidden lg:block"
          />
          <div className="mb-[6.875rem] grid flex-1 grid-cols-[52.632%_21.054%_26.317%] grid-rows-[61.72%_24.4%_32.544%] lg:mt-[6.798rem] ">
            <div
              ref={gridImage1Container}
              className="col-[1_/_span_2] row-[1_/_span_2]  overflow-hidden"
            >
              <Image
                src={StrassenansichtSM}
                alt="strassenansicht-sm"
                ref={gridImage1Ref}
                onMouseEnter={handleMouseEnterGrid}
                onMouseLeave={handleMouseLeaveGrid}
                className="h-full"
              />
            </div>
            <div
              ref={gridImage2Container}
              className="col-[2_/_span_3] row-[2_/_span_3] overflow-hidden"
              onMouseEnter={handleMouseEnterGrid}
              onMouseLeave={handleMouseLeaveGrid}
            >
              <Image
                ref={gridImage2Ref}
                src={PinnebergerSM}
                alt="pinneberger-sm"
                className="h-full"
              />
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

          <h2 className=" break-words  text-[clamp(2.063rem,5vw,4.063rem)] leading-snug text-primary xl:leading-tight 2xl:leading-[4.688rem] 4xl:h-[14.75rem] 4xl:w-[52.125rem]">
            TORHAUS PROJEKTENTWICKLUNGS GESELLSCHAFT
          </h2>
          <p className=" mt-4 break-words tracking-[0.025rem] text-secondary lg:mt-[3.125rem] lg:text-xl lg:leading-[1.929rem]">
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
