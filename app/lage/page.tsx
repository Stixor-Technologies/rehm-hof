"use client";
import React, { useRef, useState } from "react";
import HamburgWinterHude from "@/public/assets/images/lage/hamburg-winterhude.png";
import Leben from "@/public/assets/images/lage/leben.png";
import Essen from "@/public/assets/images/lage/essen.png";
import Alster from "@/public/assets/images/lage/Alster.png";
import Markt from "@/public/assets/images/lage/Markt.jpeg";
import Room from "@/public/assets/images/lage/room.png";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { faq } from "@/utils/utils";
import { FaqITemType } from "@/utils/types";

const FaqItem = ({
  id,
  faqItem,
  isActive,
  toggleActive,
}: {
  id: number;
  faqItem: FaqITemType;
  isActive: boolean;
  toggleActive: (id: number) => void;
}) => {
  const answerRef = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP();

  const questionClicked = contextSafe(() => {
    const activeFaq = document.querySelector(".active");
    if (activeFaq) {
      gsap.to(activeFaq, {
        height: "0",
        marginTop: "0px",
        duration: 0.4,
      });
      activeFaq?.classList.remove("active");
    }

    if (!isActive) {
      gsap.to(answerRef.current, {
        height: "auto",
        marginTop: `${window.innerWidth >= 1024 ? "35px" : "34px"}`,
        duration: 0.4,
      });
      answerRef.current?.classList.add("active");
    } else {
      gsap.to(answerRef.current, {
        height: 0,
        marginTop: "0px",
        duration: 0.4,
      });
      answerRef.current?.classList.remove("active");
    }

    toggleActive(id);
  });

  return (
    <div className={` border-b border-b-black py-4 lg:pb-9 lg:pt-8`}>
      <div
        className="group relative flex cursor-pointer items-center gap-[1.125rem]"
        onClick={questionClicked}
      >
        <Image
          src={faqItem?.icon}
          width={30}
          height={30}
          alt="icon"
          className="w-6 lg:w-auto"
        />

        <span
          className={
            "flex-1 leading-[1.5rem] tracking-[0.025rem] text-secondaryLight lg:text-xl"
          }
        >
          {faqItem?.question}
        </span>

        <Image
          src={`${!isActive ? "/assets/images/lage/zeigen.svg" : "/assets/images/lage/verstecken.svg"}`}
          width={32}
          height={32}
          alt="expand-eye-icon"
          className="w-6 lg:w-auto"
        />
      </div>

      <div
        ref={answerRef}
        className="ml-[3.125rem] h-0 overflow-hidden text-lg leading-[1.875rem] text-secondary"
      >
        <ul>
          {faqItem?.answer?.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

const Lage = () => {
  const image1Ref = useRef<HTMLImageElement | null>(null);
  const image2Ref = useRef<HTMLImageElement | null>(null);
  const [activeFaq, setActiveFaq] = useState<number>(-1);

  const toggleActive = (id: number) => {
    setActiveFaq((prevActiveFaq) => (prevActiveFaq === id ? -1 : id));
  };

  const { contextSafe } = useGSAP();

  const handleMouseEnter = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(image1Ref.current, {
      scaleX: 1.35,
      scaleY: 1.2,
      transformOrigin: "top right",
      duration: 1,
    }).to(
      image2Ref.current,
      {
        scale: 1.25,
        duration: 1,
      },
      0,
    );
  });
  const handleMouseLeave = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(image1Ref.current, {
      scale: 1,
      duration: 1,
    }).to(
      image2Ref.current,
      {
        scale: 1,
        duration: 1,
      },
      0,
    );
  });

  return (
    <section>
      {/* section# 1 */}

      <section className="mx-auto mt-10 flex max-w-[1920px] flex-col gap-10 bg-slate px-4 pb-[4.535rem] pt-12 sm:px-8 lg:mt-[5.625rem] lg:flex-row lg:pr-0 lg:pt-[5.84rem] 4xl:pl-[11.25rem]">
        <div className=" flex-1   xl:ml-[10.313rem] ">
          <p className=" w-full text-[clamp(2rem,5.5vw,6.563rem)] uppercase leading-tight text-secondary 2xl:leading-[6.75rem]">
            Leben <br /> Zwischen <br /> stadtpark <br />
            <span className=" font-semibold text-primary">& </span>
            alster
          </p>

          <p className="mt-4 text-[clamp(1.2rem,2vw,2.188rem)]  tracking-[0.044rem] text-secondary lg:mt-[3.563rem] lg:max-w-[775px] 2xl:leading-[3.125rem]">
            NATÜRLICH URBAN LEBEN: WASSER, PARK & DAS PULSIERENDE LEBEN VOR DER
            TÜR - DEIN ZUHAUSE IM HERZEN DES GESCHEHENS
          </p>
        </div>
        <Image
          width={672}
          height={634}
          src={Leben}
          alt=""
          className="w-full lg:w-[50%] lg:max-w-[672px] 2xl:w-full"
        />
      </section>

      <section className="container">
        {/* section# 2 */}
        <div className="my-[6.375rem] flex flex-col items-start gap-10 lg:flex-row">
          <Image
            src={HamburgWinterHude}
            width={760}
            height={618}
            alt="Hamburg-WinterHude"
            className="w-full lg:max-w-[760px] lg:flex-1 2xl:flex-none"
          />
          <div className=" flex-1">
            <h2 className=" text-[clamp(2.063rem,4vw,4.063rem)] leading-none text-primary 2xl:leading-[4.688rem]">
              HAMBURG-WINTERHUDE
            </h2>

            <div className=" hamburg-winter-text mt-5 space-y-4 xl:mt-[3.75rem] 2xl:space-y-10">
              <p>
                Willkommen in einem gewachsenem Stadtteil voller Charme und
                urbaner Raffinesse. Die Umgebung vereint auf einzigartige Weise
                das geschäftige Treiben der Stadt mit einer Fülle von
                gastronomischen Erlebnissen sowie Sport- und
                Freizeitmöglichkeiten.
              </p>

              <p>
                Winterhudes Herzstück ist dort zu finden, wo belebte Straßen von
                einer Vielzahl von Geschäften, Boutiquen, Restaurants und Cafés
                gesäumt werden. Die kulinarische Vielfalt spiegelt die
                Atmosphäre des Stadtteils wider und lässt Foodie-Herzen
                höherschlagen.
              </p>

              <p>
                Das lebhafte Treiben zeigt sich nicht nur in den Straßen,
                sondern auch in einer breiten Palette von Sport- und
                Freizeitmöglichkeiten. Der Stadtpark und das Alsterufer laden zu
                entspannten Spaziergängen oder ausgedehnten Laufrunden ein,
                während moderne Fitnessstudios und exklusive Spa- und
                Wellnessclubs die sportlichen Ambitionen und das Wellbeing der
                Bewohner unterstützen. Wassersportliebhaber können zudem die
                nahegelegene Alster für ihre Aktivitäten nutzen, während der
                Stadtpark Raum für Konzerte, Sportveranstaltungen und erholsame
                Stunden im Grünen bietet. Des Weiteren zeichnen sich die
                Bildungseinrichtungen in Winterhude sich durch höchste Qualität
                aus.
              </p>
            </div>
          </div>
        </div>

        {/* section# 3 */}
        <section className="my-[6.25rem] flex flex-col items-start gap-12 md:flex-row md:gap-10">
          <div className="flex-1">
            <Image src={Alster} width={760} height={487} alt="" />
          </div>
          <div className="grid w-full max-w-[47.5rem] flex-1 grid-cols-[26.5%_21%_52.6%] grid-rows-[28.4%_49.3%_19%]">
            <div className="col-span-2  col-start-2 row-span-2 row-start-1 overflow-hidden">
              <Image
                ref={image1Ref}
                src={Markt}
                alt=""
                className="relative z-10 h-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="col-span-2 col-start-1 row-span-2 row-start-2 overflow-hidden">
              <Image
                ref={image2Ref}
                src={Room}
                alt=""
                className="relative z-20 h-full"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </div>
        </section>

        {/* section# 4 */}
        <div className="my-[6.25rem] flex flex-col items-start gap-10 lg:flex-row">
          <div className="w-full lg:max-w-[560px]">
            {faq.map((faqItem, index) => (
              <FaqItem
                id={index}
                faqItem={faqItem}
                isActive={activeFaq === index}
                toggleActive={toggleActive}
                key={index}
              />
            ))}
          </div>

          <Image
            src={Essen}
            width={960}
            height={786}
            alt="essen"
            className="lg:w-[50%] lg:max-w-[960px] 2xl:w-full"
          />
        </div>
      </section>
    </section>
    // </section>
  );
};

export default Lage;
