import { Text } from "@radix-ui/themes";
import React from "react"

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="z-10 relative h-fit">
        <div className="flex items-center">
          <div>
            <h1 className="z-10 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-serif sm:text-6xl md:text-8xl lg:text-9xl whitespace-nowrap bg-clip-text">
              {children}

            </h1>
            <div className="fixed font-serif py-3">
              <Text trim="both" className="duration-1000 animate-fade-in text-xl sm:text-2xl md:text-4xl text-zinc-200">
                kevin he
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
    </div>
  )
};

export default Title;
