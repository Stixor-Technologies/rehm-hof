import Link from "next/link";
import React, {
  useEffect,
  //  useRef
} from "react";
import { gsap } from "gsap";

const Sidebar = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  //   const tl = useRef<GSAPTimeline>();

  useEffect(() => {
    // tl.current?.play();
    // isMenuOpen
    //   ? gsap.to(".animated", { opacity: 1, duration: 0.15 })
    //   : gsap.to(".animated", { opacity: 0, duration: 0.15 });

    if (isMenuOpen) {
      gsap.to("#sidebar", {
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        opacity: 1,
        duration: 0.5,
      });
      gsap.to(".animated", { opacity: 1, duration: 0.15 });
    } else {
      gsap.to(".animated", { opacity: 0, duration: 0.01 });

      gsap.to("#sidebar", {
        width: 0,
        height: 0,
        top: 112,
        left: 64,
        opacity: 0,
        duration: 0.3,
      });
    }
  }, [isMenuOpen]);

  //   useEffect(() => {
  //     tl.current = gsap.timeline({ paused: true });
  //     if (isMenuOpen) {
  //       tl.current.to("#sidebar", {
  //         width: "100vw",
  //         height: "100vh",
  //         top: 0,
  //         left: 0,
  //         opacity: 1,
  //         duration: 0.5,
  //       });
  //       gsap.to(".animated", { opacity: 1, duration: 0.15 });
  //     } else {
  //       tl.current.to("#sidebar", {
  //         width: 0,
  //         height: 0,
  //         top: 112,
  //         left: 64,
  //         opacity: 0,
  //         duration: 0.5,
  //       });
  //       gsap.to(".animated", { opacity: 0, duration: 0.15 });
  //     }
  //   }, []);

  const link = (title: string, href: string, className: string = "") => (
    <Link
      href={href}
      className={`animated pb-8 text-4xl uppercase tracking-normal text-primary opacity-0 sm:pb-[2.813rem] sm:text-[4.063rem] sm:leading-[4.688rem] ${className} transition-all duration-500 hover:translate-x-[3.75rem]`}
      onClick={() => setIsMenuOpen(false)}
    >
      {title}
    </Link>
  );

  return (
    <>
      <div
        className="absolute left-16 top-28 z-40 h-0 w-0 overflow-x-hidden bg-slate opacity-0"
        id="sidebar"
      />
      <div className="absolute left-4 top-28 z-50 flex flex-col sm:left-16 sm:top-[13.688rem] xl:top-[13.688rem] 4xl:left-[11.25rem]">
        {link("PROJEKT", "/projekt", "4xl:w-[17.625rem]")}
        {link("LAGE", "/lage", "4xl:w-[10.375rem]")}
        {link("BAUTRÄGER", "/bautrager", "4xl:w-[24.125rem]")}
        {link("KONTAKT", "/kontakt", "4xl:w-[18.688rem]")}
      </div>
    </>
  );
};

export default Sidebar;
