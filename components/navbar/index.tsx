import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex h-[5rem] w-full items-center justify-between gap-4 bg-white px-5 sm:h-[7.688rem] md:px-8 lg:px-[3.75rem]">
      <div className="flex h-[2.125rem] w-9 cursor-pointer flex-col gap-2.5 sm:w-[3.125rem]  sm:gap-3">
        <div className="border border-black sm:border-2" />
        <div className="border border-black sm:border-2" />
        <div className="border border-black sm:border-2" />
      </div>

      <Link href={"/"}>
        <Image
          src={"/assets/images/logo.svg"}
          alt="Logo"
          width={110}
          height={54.82}
          className="h-[2rem] w-[4rem]  sm:h-[3.426rem] sm:w-[6.875rem]"
        />
      </Link>

      <Link
        href={"/kontakt"}
        className="flex h-[2rem] w-[5rem] items-center justify-center border border-primary text-sm text-primary  transition-all duration-500 hover:bg-primary hover:text-white sm:h-[2.438rem] sm:w-[9rem] sm:text-base md:text-lg "
      >
        KONTAKT
      </Link>
    </div>
  );
};

export default Navbar;
