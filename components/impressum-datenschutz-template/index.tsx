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
      <div className="relative min-h-[25rem] w-screen bg-impressum-datenschutz-header bg-cover bg-center bg-no-repeat">
        <Image
          src={"/assets/images/key.svg"}
          alt="Key image"
          width={150}
          height={40}
          className="absolute right-0 top-8"
        />
      </div>

      <div className={`container py-[6.25rem] ${className}`}>
        <h1 className="pb-5 text-3xl uppercase text-primary md:pb-10 lg:text-5xl xl:pb-[6.25rem] xl:text-6xl">
          {title}
        </h1>

        {children}
      </div>
    </div>
  );
};

export default ImpressumDatenschutzTemplate;
