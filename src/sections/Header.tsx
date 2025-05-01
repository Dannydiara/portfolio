'use client';

import { smoothScroll } from "@/utils/scroll";
import { useRef } from "react";
import PageScrollProgressBar from "react-page-scroll-progress-bar";

export const Header = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="flex justify-center items-center fixed w-full top-3 z-10">
      <PageScrollProgressBar
        container={containerRef.current}
        color="#101828"
        bgColor="#99a1af"
        height="2px"
      />
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur-sm">
        <a onClick={() => smoothScroll('home')} className="nav-item cursor-pointer">Home</a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/90 hover:text-gray-900/50"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
