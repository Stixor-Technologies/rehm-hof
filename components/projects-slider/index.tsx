import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { tableData } from "@/utils/utils";
import LinkIcon from "@/public/assets/images/project-page/link-icon.svg";

const ProjectsSlider = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [active, setActive] = useState<number>(0);

  const SlideData = [
    {
      number: "00",
      header: "ERDGESCHOSS",
      subHeading: "STADTHÄUSER 01 - 04",
      map: "/assets/images/project-page/map1.png",
    },
    {
      number: "01",
      header: "Obergeschoss",
      subHeading: "STADTHÄUSER 01 - 04",
      map: "/assets/images/project-page/map2.png",
    },
    {
      number: "02",
      header: "Obergeschoss",
      subHeading: "STADTHÄUSER 05 - 06",
      map: "/assets/images/project-page/map3.png",
    },
    {
      number: "03",
      header: "Obergeschoss",
      subHeading: "STADTHÄUSER 07 - 08",
      map: "/assets/images/project-page/map4.png",
    },
    {
      number: "04",
      header: "Obergeschoss",
      subHeading: "STADTHÄUSER 09",
      map: "/assets/images/project-page/map5.png",
    },
  ];
  return (
    <div className=" container ml-auto mt-[4.188rem] max-w-[120rem] pl-4 sm:pl-8 lg:pr-0 3xl:pl-[11.25rem]">
      <div className="flex flex-col gap-10 lg:flex-row 2xl:gap-[6.273rem]">
        <Swiper
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper !mx-0 lg:w-1/2 lg:max-w-[43.728rem]"
          onPaginationUpdate={(swiper) => {
            setActive(swiper?.activeIndex);
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {SlideData.map((slide, idx) => (
            <>
              <SwiperSlide key={idx} className="bg-white">
                <div className="bg flex items-start gap-4 text-primary">
                  <h2 className=" text-[clamp(3rem,5.5vw,6.563rem)] leading-tight 2xl:leading-[6.75rem] 3xl:h-[7.75rem] 3xl:w-[10rem]">
                    {slide?.number}
                  </h2>

                  <div>
                    <span className="block text-[clamp(1.4rem,2.4vw,2.813rem)] uppercase lg:mt-[1.875rem] 2xl:leading-[3.813rem]">
                      {slide?.header}
                    </span>
                    <span className="block text-secondaryLight xl:text-xl xl:leading-[1.5rem]">
                      {slide?.subHeading}
                    </span>
                  </div>
                </div>

                <div className=" mt-6 lg:ml-[3.625rem] lg:mt-[2.526rem] ">
                  <Image
                    src={slide?.map}
                    width={642}
                    height={615}
                    alt=""
                    className="z-10 w-full bg-white"
                  />
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>

        <div className="relative flex-1 overflow-y-auto  lg:mt-[8.438rem] 2xl:mt-[9.936rem]">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className=" tracking-[0.023rem] text-primary lg:text-lg lg:leading-[1.875rem] ">
                <th className="w-[8.125rem] pb-[1.113rem] pl-[3.75rem] font-normal">
                  WE
                </th>
                <th className="w-[8.625rem] pb-[1.113rem] pl-[2.875rem] font-normal">
                  GESCHOSS
                </th>
                <th className="w-[7.842rem] pb-[1.113rem] pl-[2.342rem] font-normal">
                  GRÖßE
                </th>
                <th
                  className={`w-[7.133rem] pb-[1.113rem] pl-[2.445rem] font-normal ${active === 1 && "hidden"}`}
                >
                  GARTEN
                </th>
                <th className="w-[6.046rem] pb-[1.113rem]  pl-[2.983rem] font-normal">
                  ZIMMER
                </th>
                <th className="w-[9.761rem] pb-[1.113rem] pl-[2.636rem] font-normal">
                  KAUFPREIS
                </th>
                <th className=" w-[3.125rem]] pb-[1.113rem] font-normal 3xl:w-auto"></th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((data, idx) => {
                const shouldHideRow =
                  (active === 0 && idx === 1) || (active >= 1 && idx === 0);

                const isBgColorApplied = active === idx;

                if (shouldHideRow) {
                  return null;
                }
                return (
                  <tr
                    key={idx}
                    className={`td-row ${isBgColorApplied ? "bg-slate" : ""}`}
                  >
                    <td className={`td-container pl-[3.75rem]`}>
                      {data?.WE?.map((we, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-[0.668rem]"
                        >
                          <Link target="_blank" href={we.pdfLink}>
                            <Image
                              src={LinkIcon}
                              width={16}
                              height={16}
                              alt=""
                            />
                          </Link>
                          <span className="td-item flex-1">{we.value}</span>
                        </div>
                      ))}
                    </td>
                    <td className={`td-container pl-[2.875rem]`}>
                      {data?.GESCHOSS?.map((geschoss, idx) => (
                        <span key={idx} className="td-item">
                          {geschoss.value}
                        </span>
                      ))}
                    </td>

                    <td className={`td-container pl-[2.342rem]`}>
                      {data?.GRÖßE?.map((grobe, idx) => (
                        <span key={idx} className="td-item">
                          {grobe.value}
                        </span>
                      ))}
                    </td>

                    <td
                      className={`td-container pl-[2.445rem] ${active === 1 && "hidden"} text-pink`}
                    >
                      {data?.GARTEN?.map((garten, idx) => (
                        <span key={idx} className="td-item">
                          {garten.value}
                        </span>
                      ))}
                    </td>

                    <td className={`td-container pl-[2.983rem]`}>
                      {data?.ZIMMER?.map((zimmer, idx) => (
                        <span key={idx} className="td-item">
                          {zimmer.value}
                        </span>
                      ))}
                    </td>

                    <td
                      className={`td-container pl-[2.636rem] ${active === 1 ? "text-secondary" : "text-pink"}`}
                    >
                      {data?.KAUFPREIS?.map((kaufpreis, idx) => (
                        <span key={idx} className="td-item">
                          {kaufpreis.value}
                        </span>
                      ))}
                    </td>
                    <td className={`td-container p-10`}></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;
