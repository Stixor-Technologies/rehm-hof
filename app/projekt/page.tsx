"use client";
import React, { useRef } from "react";
import Image from "next/image";
import RehmstrasseBg from "@/public/assets/images/project-page/rehmstrasse-bg.png";
import InteriorBg from "@/public/assets/images/project-page/interior-bg.png";
import ProjectGroupBg from "@/public/assets/images/project-page/project-group-bg.png";
import ProjectsHighlight from "@/components/project-highlight";
import Pattern from "@/public/assets/images/Pattern.svg";
import BuilderGruppe from "@/public/assets/images/project-page/bildergruppe.png";
import Room from "@/public/assets/images/lage/room.png";
import Tap from "@/public/assets/images/project-page/taps.png";
import Shower from "@/public/assets/images/project-page/shower.png";
import OSVG from "@/public/assets/images/o-white.svg";
import OSVGGray from "@/public/assets/images/o.svg";

import ProjectsSlider from "@/components/projects-slider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Projekt = () => {
  const gruppeImage1Ref = useRef<HTMLImageElement | null>(null);
  const gruppeImage2Ref = useRef<HTMLImageElement | null>(null);

  const showerImageRef = useRef<HTMLImageElement | null>(null);
  const tapImageRef = useRef<HTMLImageElement | null>(null);

  const DURATION = 0.7;

  const { contextSafe } = useGSAP();

  const handleMouseEnterGruppe = contextSafe(() => {
    const tl = gsap.timeline();

    tl.to(gruppeImage1Ref.current, {
      scale: 1.8,
      transformOrigin: "top left",
      duration: DURATION,
    })

      .to(
        gruppeImage2Ref.current,
        {
          scale: 1.17,
          transformOrigin: "bottom right",
          duration: DURATION,
        },
        0,
      );
  });
  const handleMouseLeaveGruppe = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(gruppeImage1Ref.current, {
      scale: 1,
      duration: DURATION,
    })

      .to(
        gruppeImage2Ref.current,
        {
          scale: 1,
          duration: DURATION,
        },
        0,
      );
  });

  const handleMouseEnterInterior = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(tapImageRef.current, {
      yPercent: -40,
      duration: DURATION,
    }).to(
      showerImageRef.current,
      {
        scale: 1.2,
        transformOrigin: "top center",
        duration: DURATION,
      },
      0,
    );
  });

  const handleMouseLeaveInterior = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(tapImageRef.current, {
      yPercent: 0,
      duration: DURATION,
    }).to(
      showerImageRef.current,
      {
        scale: 1,
        transformOrigin: "top center",
        duration: DURATION,
      },
      0,
    );
  });

  return (
    <div>
      <section className="relative mx-auto max-w-[120rem] overflow-hidden">
        {/* section# 1 */}
        <section className="h-full max-h-[50rem]">
          <Image
            src={RehmstrasseBg}
            width={1920}
            height={800}
            alt="Rehmstrasse"
          />
        </section>

        <div className="container relative z-10">
          {/* section# 2 */}
          <section className="my-7 w-full lg:my-14 lg:max-w-[47.5rem] xl:my-[6.25rem]">
            <h2 className="text-[clamp(2.063rem,4vw,4.063rem)] leading-tight text-primary 2xl:leading-[4.688rem]">
              PROJEKT BESCHREIBUNG
            </h2>
            <p className="mt-4 tracking-[0.025rem] text-secondary xl:mt-[4.465rem] xl:text-xl xl:leading-[2rem]">
              Der Innenhof des „Rehm-Hof“ bietet eine harmonische Ruheoase im
              lebendigen Winterhude. Eine stilvolle Gartenanlage lädt zum
              Entspannen und Verweilen ein, während man sich dennoch mitten im
              Geschehen befindet. Dieses Neubauprojekt schafft eine einzigartige
              Balance zwischen privater Rückzugsmöglichkeit und dem lebhaften
              Treiben Winterhudes und ist somit die perfekte Adresse für
              anspruchsvolles, modernes Wohnen in Hamburg.
            </p>

            <p className="mt-6 tracking-[0.025rem] text-secondary xl:text-xl xl:leading-[2rem]">
              Ein weiteres Highlight ist die Tiefgarage. Die zukünftigen
              Bewohner können die Vorzüge des innerstädtischen Lebens in vollen
              Zügen genießen, ohne auf den Luxus eines eigenen Stellplatzes
              verzichten zu müssen. Hier entsteht nicht nur ein Zuhause, sondern
              ein Lifestyle, der Exklusivität und urbanen Chic perfekt vereint.
            </p>
          </section>
        </div>

        <Image
          src={Pattern}
          alt="pattern"
          width={468}
          height={1300}
          className="absolute -right-10 bottom-28 hidden h-full max-h-[81.25rem] w-[24.38vw] max-w-[29.25rem] overflow-visible object-cover lg:block"
        />
      </section>

      {/* section# 3 */}
      <section className="relative mx-auto flex max-w-[120rem] flex-col gap-5 overflow-hidden lg:flex-row lg:gap-10">
        <Image
          src={InteriorBg}
          width={1140}
          height={573}
          alt="interior-bg"
          className=" w-full max-w-[71.25rem] lg:w-1/2 3xl:w-full"
        />

        <div className=" px-4 sm:px-8 lg:w-1/2 lg:max-w-[35rem] lg:px-4 3xl:px-0">
          <Image
            src={OSVGGray}
            width={340}
            height={73}
            alt="slide-button"
            className=" absolute right-0 top-4 -z-10  w-24 max-w-[21.25rem] cursor-pointer sm:top-16 lg:top-0 lg:h-[4.563rem] lg:w-full 2xl:top-[1.962rem] "
          />
          <h2 className="text-[clamp(2.063rem,4vw,4.063rem)] leading-tight text-primary 2xl:leading-[4.688rem]">
            MODERN INTERIOR
          </h2>
          <p className="tracking-[0.025rem] text-secondary lg:mt-[3.75rem] xl:text-xl xl:leading-[2rem]">
            Hier vereinen sich modernes Design und nachhaltige Technologie, um
            ein unvergleichliches Wohngefühl zu bieten. Mit individuellen
            Grundrisskonzepten können wird der Wohnraum nach Ihren persönlichen
            Bedürfnissen gestaltet. Die offenen, lichtdurchfluteten Wohnbereiche
            schaffen eine einladende Atmosphäre und maximieren das natürliche
            Licht. Die Verwendung von exklusiven und hochwertigen Materialien,
            geben jedem Raum ein Gefühl von Klasse.
          </p>
        </div>
      </section>

      {/* section# 4 */}
      <section className="container">
        <div className="mb-[3.125rem] mt-[2.563rem] flex flex-row flex-wrap items-start gap-10">
          <p className="tracking-[0.025rem] text-secondary lg:mt-[3.125rem] xl:text-xl xl:leading-[2rem] 4xl:max-w-[35rem]">
            Der „Rehm-Hof“ integriert modernste energetische Technologien,
            einschließlich einer Photovoltaikanlage für Solarstrom, einer
            effizienten Luft-Wasser-Wärmepumpe zur Heizung und Kühlung, sowie
            einem begrünten Dach zur Verbesserung der Wärmedämmung und
            Biodiversität. Diese nachhaltigen Lösungen tragen zur Verringerung
            der Umweltbelastung bei und bieten langfristige Kosteneinsparungen
            für die Bewohner.
          </p>

          <div className="flex flex-wrap gap-10">
            <div className="max-h-[21.688rem] overflow-hidden">
              <Image
                onMouseEnter={handleMouseEnterInterior}
                onMouseLeave={handleMouseLeaveInterior}
                ref={tapImageRef}
                src={Tap}
                width={360}
                height={347}
                alt="tap-interior"
              />
            </div>

            <div className="overflow-hidden">
              <Image
                onMouseEnter={handleMouseEnterInterior}
                onMouseLeave={handleMouseLeaveInterior}
                ref={showerImageRef}
                src={Shower}
                width={560}
                height={347}
                alt="shower-interior"
              />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-10">
          <div className="overflow-hidden">
            <Image
              ref={gruppeImage1Ref}
              src={Room}
              width={360}
              height={410}
              alt="wood-texture"
            />
          </div>
          <div
            className="overflow-hidden"
            onMouseEnter={handleMouseEnterGruppe}
            onMouseLeave={handleMouseLeaveGruppe}
          >
            <Image
              ref={gruppeImage2Ref}
              src={BuilderGruppe}
              width={1160}
              height={555}
              alt="wood-texture"
            />
          </div>
        </div>
      </section>

      <ProjectsSlider />

      {/* section# 6 */}
      <section className="relative mx-auto flex max-w-[120rem] flex-col gap-[2.313rem] px-4 pt-16 tracking-[0.025rem] text-secondary sm:px-8 lg:flex-row lg:pr-0 lg:pt-[5.84rem] xl:pt-[12.75rem] xl:text-xl xl:leading-[2rem] 4xl:pl-[11.25rem]">
        <div className="w-full max-w-[22.688rem]">
          <h2 className="text-[clamp(2.063rem,4vw,4.063rem)] leading-tight text-primary 2xl:leading-[4.688rem]">
            EXKLUSIVE STADT-HÄUSER
          </h2>
          <ul className="exlusive mt-5 list-none xl:mt-[8.748rem] ">
            <li className="custom-list-type">EIGENER EINGANG </li>
            <li className="custom-list-type">EIGENER GARTENANTEIL </li>
            <li className="custom-list-type">IDEAL FÜR JUNGE FAMILIEN </li>
            <li className="custom-list-type">GUTE SCHULEN, GYMNASIEN </li>
            <li className="custom-list-type">INDIVIDUELL GRUNDRISSKONZEPTE</li>
            <li className="custom-list-type">UMWELTFREUNDLICH</li>
            <li className="custom-list-type">ENERGIESPAREND</li>
          </ul>
        </div>

        <div className="flex-1 bg-slate px-5 py-14 xl:pb-[12.065rem] xl:pl-[12.688rem] xl:pt-[6.248rem]">
          <div className="flex flex-col gap-7 sm:flex-row lg:gap-10">
            <div className="w-full sm:max-w-[22.5rem]">
              <p>
                Die Stadthäuser kombinieren Ruhe mit urbaner Eleganz und sorgen
                so für ein angenehmes Wohngefühl. Sie bieten eine ideale
                Umgebung für junge Familien. Jedes Haus verfügt über einen
                eigenen Eingang und einen privaten Gartenanteil, der ausreichend
                Platz zum Spielen und Entspannen bietet.
              </p>
              <p className="mt-7 lg:mt-10">
                Dank der Photovoltaikanlage für Solarstrom und einer effizienten
                Luft-Wasser-Wärmepumpe für Heizung und Kühlung leben die
                zukünftigen Bewohner zudem umweltfreundlich und energiesparend.
              </p>
            </div>

            <div className="w-full sm:max-w-[22.5rem]">
              <p>
                Die individuell gestaltbaren Grundrisskonzepte ermöglichen es,
                den Wohnraum nach Ihren persönlichen Bedürfnissen anzupassen und
                so ein Zuhause zu schaffen, das perfekt zu Ihnen passt.
              </p>
            </div>
          </div>
        </div>

        <Image
          src={OSVG}
          width={496}
          height={114}
          alt="key-button"
          className="absolute bottom-10 right-0 hidden w-56 max-w-[496px] sm:block xl:bottom-[10.2vw] xl:w-auto"
        />
      </section>

      {/* section# 7 */}
      <section className="container relative my-10 md:my-[3.75rem] xl:-mt-[6rem]">
        <Image
          src={ProjectGroupBg}
          width={1560}
          height={574}
          alt="project-group-bg"
        />
      </section>
      <ProjectsHighlight />
    </div>
  );
};

export default Projekt;
