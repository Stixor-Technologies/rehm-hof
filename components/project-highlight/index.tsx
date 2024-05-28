import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const ProjectsHighlight = () => {
  const marque1Data = [
    "INDIVIDUELLE GRUNDRISSMÖGLICHKEITEN",
    "PHOTOVOLTAIKANLAGE",
    "AUFZUG, DIREKT INS PENTHOUSE",
  ];

  const marque2Data = [
    "GÄRTEN/TERRASSEN/BALKONE/DACHTERRASSEN",
    "RUHIGE INNENHOFLAGE",
    "TIEFGARAGENSTELLPLÄTZE",
  ];

  const marque3Data = [
    "LUFT/ WASSER-WÄREPUMPENANLAGE",
    "EXKLUSIVE MATERIALAUSWAHL",
  ];

  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section>
      <h2 className=" mx-auto w-full max-w-[61.25rem] px-4 text-center text-[clamp(2.063rem,5vw,4.063rem)] leading-tight text-primary 2xl:leading-[4.688rem]">
        PROJEKT-HIGHLIGHTS
      </h2>

      <div className="mb-12 mt-8 lg:mb-[6.25rem] lg:mt-[3.75rem]">
        <Marquee speed={windowSize >= 768 ? 90 : 60} autoFill loop={0}>
          <ul className="marquee-list">
            {marque1Data?.map((marqueItem) => (
              <li key={marqueItem} className="marquee-list-item">
                <span className="marquee-item flex-1">{marqueItem}</span>
              </li>
            ))}
          </ul>
        </Marquee>

        <Marquee
          speed={windowSize >= 768 ? 90 : 60}
          autoFill
          loop={0}
          direction="right"
        >
          <ul className="marquee-list">
            {marque2Data?.map((marqueItem) => (
              <li key={marqueItem} className="marquee-list-item !border-0">
                <span className="marquee-item flex-1">{marqueItem}</span>
              </li>
            ))}
          </ul>
        </Marquee>

        <Marquee speed={windowSize >= 768 ? 90 : 60} autoFill loop={0}>
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
  );
};

export default ProjectsHighlight;
