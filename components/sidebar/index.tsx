import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const link = (title: string, href: string, className: string = "") => (
    <Link
      href={href}
      className={`pb-8 text-4xl uppercase tracking-normal text-primary sm:pb-[2.813rem] sm:text-[4.063rem] sm:leading-[4.688rem] ${className} transition-all duration-500 hover:translate-x-[3.75rem]`}
    >
      {title}
    </Link>
  );
  return (
    <div className=" absolute top-0 z-40 h-screen w-screen overflow-x-hidden bg-slate">
      <div className="container static left-[11.25rem] top-[13.688rem] flex flex-col pt-28 sm:pt-[13.688rem] xl:absolute xl:!px-0 xl:pt-0">
        {link("PROJEKT", "/projekt", "4xl:w-[17.625rem]")}
        {link("LAGE", "/lage", "4xl:w-[10.375rem]")}
        {link("BAUTRÄGER", "/bautrager", "4xl:w-[24.125rem]")}
        {link("KONTAKT", "/kontakt", "4xl:w-[18.688rem]")}
      </div>
    </div>
  );
};

export default Sidebar;
