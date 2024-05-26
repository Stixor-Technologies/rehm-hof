import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "swiper";

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
      number: "01",
      header: "OBERGESCHOSS",
      map: "/assets/images/project-page/map1.png",
    },
    {
      number: "02",
      header: "asasasas",
      map: "/assets/images/project-page/map1.png",
    },
    {
      number: "03",
      header: "OBERGESCHOSS",
      map: "/assets/images/project-page/map1.png",
    },
    {
      number: "04",
      header: "AwAasas",
      map: "/assets/images/project-page/map1.png",
    },
  ];

  return (
    <div className=" container ml-auto mt-[67px] max-w-[1920px] pl-4 sm:pl-8 lg:pr-0 3xl:pl-[11.25rem]">
      <div className="flex flex-col gap-10 lg:flex-row 2xl:gap-[6.273rem]">
        {/* <div className="flex items-start text-primary">
          <h2 className="-mt-10 w-[160px] text-[clamp(2rem,5.5vw,6.563rem)] 2xl:leading-[6.75rem]">
            01
          </h2>

          <div>
            <span className="block text-[clamp(1.4rem,2.4vw,2.813rem)] 2xl:leading-[3.813rem] ">
              OBERGESCHOSS
            </span>
            <span className="block text-secondaryLight xl:text-xl xl:leading-[2rem]">
              STADTHÄUSER 01 - 04
            </span>
          </div>
        </div> */}

        <Swiper
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper !mx-0 lg:w-1/2 lg:max-w-[43.728rem]"
          //   paginationUpdate={(swiper: any, paginationEl: HTMLElement) => {}}
          onPaginationUpdate={(swiper) => {
            console.log(swiper?.activeIndex);
            console.log("asasas");
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
                  <h2 className=" text-[clamp(3rem,5.5vw,6.563rem)] leading-tight 2xl:leading-[6.75rem] 3xl:h-[124px] 3xl:w-[160px]">
                    {slide?.number}
                  </h2>

                  <div>
                    <span className="block text-[clamp(1.4rem,2.4vw,2.813rem)] lg:mt-[30px] 2xl:leading-[3.813rem]">
                      {slide?.header}
                    </span>
                    <span className="block text-secondaryLight xl:text-xl xl:leading-[1.5rem]">
                      STADTHÄUSER 01 - 04
                    </span>
                  </div>
                </div>

                <div className=" mt-6 lg:ml-[58px] lg:mt-[2.526rem] ">
                  <Image
                    src={slide?.map}
                    width={642}
                    height={615}
                    alt=""
                    className="w-full "
                  />
                </div>
              </SwiperSlide>
            </>
          ))}
        </Swiper>

        <div className="relative flex-1 overflow-y-auto  lg:mt-[135px] 2xl:mt-[158.97px] ">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className=" text-lg leading-[30px] tracking-[0.36px] text-primary ">
                <th className="w-[130px] pb-[17.8px] pl-[60px] font-normal">
                  WE
                </th>
                <th className="w-[138px] pb-[17.8px] pl-[46px] font-normal">
                  GESCHOSS
                </th>
                <th className="w-[125.47px] pb-[17.8px] pl-[37.47px] font-normal">
                  GRÖßE
                </th>
                <th className="w-[114.12px] pb-[17.8px] pl-[39.12px] font-normal">
                  GARTEN
                </th>
                <th className="w-[96.73px] pb-[17.8px]  pl-[47.73] font-normal">
                  ZIMMER
                </th>
                <th className="w-[140.18px] pb-[17.8px] pl-[42.18px] font-normal">
                  KAUFPREIS
                </th>
                <th className=" w-[50px] pb-[17.8px] font-normal 3xl:w-auto"></th>
              </tr>
            </thead>
            <tbody>
              {tableData?.map((data, idx) => {
                return (
                  <tr
                    key={idx}
                    className={`td-row ${active === idx && "bg-slate"}`}
                  >
                    <td className="td-container pl-[60px]">
                      {data?.WE?.map((we, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-[10.68px]"
                        >
                          <Image src={LinkIcon} width={16} height={16} alt="" />
                          <span className="td-item flex-1">{we.value}</span>
                        </div>
                      ))}
                    </td>
                    <td className="td-container pl-[46px]">
                      {data?.GESCHOSS?.map((geschoss, idx) => (
                        <span key={idx} className="td-item">
                          {geschoss.value}
                        </span>
                      ))}
                    </td>

                    <td className="td-container pl-[37.47px]">
                      {data?.GRÖßE?.map((grobe, idx) => (
                        <span key={idx} className="td-item">
                          {grobe.value}
                        </span>
                      ))}
                    </td>

                    <td className="td-container pl-[39.12px]">
                      {data?.GARTEN?.map((garten, idx) => (
                        <span key={idx} className="td-item">
                          {garten.value}
                        </span>
                      ))}
                    </td>

                    <td className="td-container pl-[47.73]">
                      {data?.ZIMMER?.map((zimmer, idx) => (
                        <span key={idx} className="td-item">
                          {zimmer.value}
                        </span>
                      ))}
                    </td>

                    <td className="td-container pl-[42.18px]">
                      {data?.KAUFPREIS?.map((kaufpreis, idx) => (
                        <span key={idx} className="td-item">
                          {kaufpreis.value}
                        </span>
                      ))}
                    </td>
                    <td className="td-container p-10"></td>
                  </tr>
                );
              })}

              {/* <tr className={`td-row ${active === 1 && "bg-slate"}`}>
                <td className="td-container">
                  <span className="td-item">01</span>
                  <span className="td-item">02</span>
                  <span className="td-item">03</span>
                  <span className="td-item">04</span>
                </td>
                <td className="td-container td-container-2">
                  <span className="td-item">EG - 1. OG</span>
                  <span className="td-item">EG - 1. OG</span>
                  <span className="td-item">EG - 1. OG</span>
                  <span className="td-item">EG - 1. OG</span>
                </td>
                <td className="td-container">
                  <span className="td-item">122.92 m²</span>
                  <span className="td-item">143.08 m²</span>
                  <span className="td-item">173.81 m²</span>
                  <span className="td-item">111.93 m²</span>
                </td>
                <td className="td-container">
                  <span className="td-item">88.4 m²</span>
                  <span className="td-item">92.7 m²</span>
                  <span className="td-item">49.3 m²</span>
                  <span className="td-item">46.0 m²</span>
                </td>
                <td className="td-container">
                  <span className="td-item">4</span>
                  <span className="td-item">4</span>
                  <span className="td-item">4</span>
                  <span className="td-item">3 1/2</span>
                </td>
                <td className="td-container">
                  <span className="td-item">860.000 €</span>
                  <span className="td-item">899.000 €</span>
                  <span className="td-item">489.000 €</span>
                  <span className="td-item">459.000 €</span>
                </td>
              </tr>

              <tr className={`td-row ${active === 2 && "bg-slate"}`}>
                <td className="td-container">
                  <span className="td-item">05</span>
                  <span className="td-item">06</span>
                </td>
                <td className="td-container">
                  <span className="td-item">2. OG</span>
                  <span className="td-item">2. OG</span>
                </td>
                <td className="td-container">
                  <span className="td-item">140.11 m²</span>
                  <span className="td-item">154.85 m²</span>
                </td>
                <td className="td-container">
                  <span className="td-item">-</span>
                  <span className="td-item">-</span>
                </td>
                <td className="td-container">
                  <span className="td-item">4</span>
                  <span className="td-item">5</span>
                </td>
                <td className="td-container">
                  <span className="td-item">383.000 €</span>
                  <span className="td-item">510.000 €</span>
                </td>
              </tr>

              <tr className={`td-row  ${active === 3 && "bg-slate"}`}>
                <td className="td-container">
                  <span className="td-item">07</span>
                  <span className="td-item">08</span>
                </td>
                <td className="td-container">
                  <span className="td-item">3. OG</span>
                  <span className="td-item">3. OG</span>
                </td>
                <td className="td-container">
                  <span className="td-item">140.11 m²</span>
                  <span className="td-item">154.85 m²</span>
                </td>
                <td className="td-container">
                  <span className="td-item">-</span>
                  <span className="td-item">-</span>
                </td>
                <td className="td-container">
                  <span className="td-item">4</span>
                  <span className="td-item">5</span>
                </td>
                <td className="td-container">
                  <span className="td-item">383.000 €</span>
                  <span className="td-item">510.000 €</span>
                </td>
              </tr>

              <tr className={` td-row ${active === 4 && "bg-slate"}`}>
                <td className="td-container">
                  <span className="td-item">09</span>
                </td>
                <td className="td-container">
                  <span className="td-item">STG</span>
                </td>
                <td className="td-container">
                  <span className="td-item">175 m²</span>
                </td>
                <td className="td-container">
                  <span className="td-item">-</span>
                  <span className="td-item">-</span>
                </td>
                <td className="td-container">
                  <span className="td-item">4</span>
                </td>
                <td className="td-container">
                  <span className="td-item">383.000 €</span>
                </td>
              </tr> */}

              {/* ); */}
              {/* })} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;
