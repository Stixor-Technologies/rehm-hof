"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "../hamburger";
import Sidebar from "../sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="z-50 flex h-[5rem] w-full items-center justify-between gap-4 bg-white px-5 sm:h-[7.688rem] md:px-8 lg:px-[3.75rem]">
        <Hamburger isMenuOpen={isOpen} setIsMenuOpen={setIsOpen} />

        <Link href={"/"} className="z-50">
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
          className="z-50 flex h-[2rem] w-[5rem] items-center justify-center border border-primary text-sm text-primary  transition-all duration-500 hover:bg-primary hover:text-white sm:h-[2.438rem] sm:w-[9rem] sm:text-base md:text-lg "
        >
          KONTAKT
        </Link>
      </div>

      {isOpen && <Sidebar />}
    </div>
  );
};

export default Navbar;
