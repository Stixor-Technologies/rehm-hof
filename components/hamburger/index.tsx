"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hamburger = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const menuTopRef = useRef<SVGPathElement | null>(null);
  const menuMidRef = useRef<SVGPathElement | null>(null);
  const menuBottomRef = useRef<SVGPathElement | null>(null);

  const tl = useRef<GSAPTimeline>();

  useEffect(() => {
    isMenuOpen ? tl.current?.play() : tl.current?.reverse();
  }, [isMenuOpen]);

  useEffect(() => {
    // timeline for menu button animation
    tl.current = gsap.timeline({ paused: true });
    tl.current
      .to(menuTopRef.current, { y: "-2px", duration: 0.2 }, "initial")
      .to(menuBottomRef.current, { y: "2px", duration: 0.2 }, "initial")
      .to(
        menuMidRef.current,
        { opacity: 0, transformOrigin: "50% 50%", duration: 0.2 },
        "initial",
      )
      .to(menuTopRef.current, { y: 7, duration: 0.2 }, "rotate")
      .to(menuBottomRef.current, { y: -7, duration: 0.2 }, "rotate")
      .to(
        menuTopRef.current,
        {
          rotationZ: 45,
          transformOrigin: "50% 50%",
          duration: 0.2,
        },
        "rotate",
      )
      .to(
        menuBottomRef.current,
        {
          rotationZ: -45,
          transformOrigin: "50% 50%",
          duration: 0.2,
        },
        "rotate",
      );
  }, []);

  return (
    <button
      className="group z-50 flex size-9 h-[2.125rem] w-9 transform items-center justify-center drop-shadow-lg sm:w-[3.125rem]"
      type="button"
      onClick={() => {
        setIsMenuOpen(!isMenuOpen);
        !isMenuOpen
          ? document.body.classList.add("!overflow-hidden")
          : document.body.classList.remove("!overflow-hidden");
      }}
    >
      <div
        className={`group-hover:bg-light-purple absolute left-1/2 top-1/2 -z-10 h-[2.125rem] w-9 -translate-x-1/2 -translate-y-1/2 scale-0 transform rounded-full  transition-all duration-[400ms] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] group-hover:scale-100 group-hover:opacity-60 sm:w-[3.125rem] `}
      />
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 25 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path ref={menuTopRef} d="M0 2H25" stroke="#000000" strokeWidth="2" />
        <path ref={menuMidRef} d="M0 9H25" stroke="#000000" strokeWidth="2" />
        <path
          ref={menuBottomRef}
          d="M0 16H25"
          stroke="#000000"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

export default Hamburger;
