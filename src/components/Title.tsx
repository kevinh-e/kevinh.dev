"use client"

import React from "react";
import "../../globals.css";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <>
      <div className="hidden w-screen h-px animate- md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="px-0.5 z-10 tracking-wide text-5xl transition-all text-transparent bg-white cursor-default text-edge-outline animate-title font-serif sm:text-6xl md:text-8xl lg:text-9xl whitespace-nowrap bg-clip-text ">
        {children}
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
    </>
  )
};

export default Title;
