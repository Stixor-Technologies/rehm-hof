import React from "react";
import Image from "next/image";
import InteriorBg from "@/public/assets/images/project-page/interior-bg.png";

const Projekt = () => {
  return (
    <div>
      <section>
        <div className="container">
          <section className="w-full max-w-[47.5rem] lg:my-[6.25rem]">
            <h2 className="text-[clamp(2.063rem,4vw,4.063rem)] text-primary 2xl:leading-[4.688rem]">
              PROJEKT BESCHREIBUNG
            </h2>
            <p className="tracking-[0.025rem] text-secondary lg:mt-[3.84rem] xl:text-xl xl:leading-[2rem]">
              Der Innenhof des „Rehm-Hof“ bietet eine harmonische Ruheoase im
              lebendigen Winterhude. Eine stilvolle Gartenanlage lädt zum
              Entspannen und Verweilen ein, während man sich dennoch mitten im
              Geschehen befindet. Dieses Neubauprojekt schafft eine einzigartige
              Balance zwischen privater Rückzugsmöglichkeit und dem lebhaften
              Treiben Winterhudes und ist somit die perfekte Adresse für
              anspruchsvolles, modernes Wohnen in Hamburg.
            </p>

            <p className="mt-8 tracking-[0.025rem] text-secondary xl:text-xl xl:leading-[2rem]">
              Ein weiteres Highlight ist die Tiefgarage. Die zukünftigen
              Bewohner können die Vorzüge des innerstädtischen Lebens in vollen
              Zügen genießen, ohne auf den Luxus eines eigenen Stellplatzes
              verzichten zu müssen. Hier entsteht nicht nur ein Zuhause, sondern
              ein Lifestyle, der Exklusivität und urbanen Chic perfekt vereint.
            </p>
          </section>
        </div>

        <section className="mx-auto mt-[1.813rem] flex max-w-[1920px] flex-col gap-10 lg:flex-row">
          <Image
            src={InteriorBg}
            width={1140}
            height={573}
            alt="interior-bg"
            className=" w-full max-w-[1140px] lg:w-1/2 3xl:w-full"
          />

          <div className="lg:w-1/2 lg:max-w-[560px]">
            <h2 className="text-[clamp(2.063rem,4vw,4.063rem)] text-primary 2xl:leading-[4.688rem]">
              MODERN INTERIOR
            </h2>
            <p className="mt-5 pr-0 tracking-[0.025rem] text-secondary lg:mt-[3.125rem] xl:text-xl xl:leading-[2rem] 4xl:pr-0">
              Hier vereinen sich modernes Design und nachhaltige Technologie, um
              ein unvergleichliches Wohngefühl zu bieten. Mit individuellen
              Grundrisskonzepten können wird der Wohnraum nach Ihren
              persönlichen Bedürfnissen gestaltet. Die offenen,
              lichtdurchfluteten Wohnbereiche schaffen eine einladende
              Atmosphäre und maximieren das natürliche Licht. Die Verwendung von
              exklusiven und hochwertigen Materialien, geben jedem Raum ein
              Gefühl von Klasse.
            </p>
          </div>
        </section>

        <section className="container">
          <p></p>
        </section>
      </section>
    </div>
  );
};

export default Projekt;
