"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import Hamburger from "../hamburger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const bar1Ref = useRef<HTMLDivElement | null>(null);
  // const bar2Ref = useRef<HTMLDivElement | null>(null);
  // const bar3Ref = useRef<HTMLDivElement | null>(null);
  // const handleClick = async () => {
  //   await setIsOpen(!isOpen);

  //   const tl = gsap.timeline();

  //   gsap.to([bar1Ref.current, bar3Ref.current], {
  //     xPercent: -15,
  //   });

  //   gsap.to(bar2Ref.current, {
  //     opacity: 0,
  //   });

  //   tl.to(bar3Ref.current, {
  //     yPercent: 70,
  //     duration: 0.1,
  //     ease: "power1.inOut",
  //   });

  //   tl.to(bar3Ref.current, {
  //     yPercent: -1000,
  //     duration: 0.6,
  //     ease: "power1.inOut",
  //   });

  //   gsap.to([bar1Ref.current, bar2Ref.current, bar3Ref.current], {
  //     display: "none",
  //     duration: 0.5,
  //   });

  //   tl.to(bar1Ref.current, {
  //     y: 10,
  //     rotation: 45,
  //     width: 40,
  //     duration: 0.0001,
  //     ease: "power1.inOut",
  //   });

  //   tl.to(bar3Ref.current, {
  //     y: 40,
  //     rotation: -45,
  //     width: 40,
  //     duration: 0.0001,
  //     ease: "power1.inOut",
  //   });

  //   tl.to([bar1Ref.current, bar3Ref.current], {
  //     display: "block",
  //   });
  // };
  return (
    <div className="flex h-[5rem] w-full items-center justify-between gap-4 bg-white px-5 sm:h-[7.688rem] md:px-8 lg:px-[3.75rem]">
      <Hamburger isMenuOpen={isOpen} setIsMenuOpen={setIsOpen} />
      {/* <div
        className="relative flex h-[1.875rem] w-9 cursor-pointer flex-col gap-2.5 sm:w-[1.875rem] sm:gap-2.5"
        onClick={handleClick}
      >
        <div
          className="absolute left-1/2 top-1/2 h-0 !w-[2.5rem] min-w-[2.5rem] -translate-x-1/2 -translate-y-1/2 rotate-45 transform border border-black sm:border-2"
          ref={bar1Ref}
        />
        <div
          className="absolute left-1/2 top-1/2 h-0 !w-[2.5rem] min-w-[2.5rem] -translate-x-1/2 -translate-y-1/2 -rotate-45 transform border border-black sm:border-2"
          ref={bar3Ref}
        />
      </div> */}
      {/* <div
        className="flex h-[2.125rem] w-9 cursor-pointer flex-col gap-2.5 overflow-x-hidden sm:w-[3.125rem] sm:gap-2.5"
        onClick={handleClick}
      >
        <div className="border border-black sm:border-2" ref={bar1Ref} />
        <div className="border border-black sm:border-2" ref={bar2Ref} />
        <div className="border border-black sm:border-2" ref={bar3Ref} />
      </div> */}

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
