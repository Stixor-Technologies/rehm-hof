import React, { ReactNode } from "react";
import Image from "next/image";

interface ImpressumDatenschutzTemplateProps {
  title: string;
  className?: string;
  children: ReactNode;
}

const ImpressumDatenschutzTemplate: React.FC<
  ImpressumDatenschutzTemplateProps
> = ({ title, className = "", children }) => {
  return (
    <div className="bg-white text-secondary">
      <div className="relative min-h-[25rem] bg-impressum-datenschutz-header bg-cover bg-center bg-no-repeat">
        <Image
          src={"/assets/images/key.svg"}
          alt="Key image"
          width={254}
          height={73.67}
          className="absolute right-0 top-16"
        />
      </div>

      <div
        className={`container pb-[4.563rem] pt-10 md:pb-[7.563rem] md:pt-16 xl:pb-[12.063rem] xl:pt-[6.25rem] ${className}`}
      >
        <h1 className="pb-5 text-3xl uppercase text-primary md:pb-10 lg:text-5xl xl:pb-[5.625rem] xl:text-[4.063rem]">
          {title}
        </h1>

        {children}
      </div>
    </div>
  );
};

export default ImpressumDatenschutzTemplate;
