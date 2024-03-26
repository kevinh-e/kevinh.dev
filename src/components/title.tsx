import { Text } from '@radix-ui/themes';
import React from 'react'

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    // add relative classname to center h1
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
      {/* <div className="absolute -bottom-4 w-[125%] flex justify-between">
        <div className="w-1/2">
          <div className="w-full h-[1px] bg-gradient-to-l from-white/80 via-90% via-white" />
          <div className="w-full h-[2px] bg-gradient-to-l from-yellow-300 via-90% via-amber-100 blur-sm" />
        </div>
        <div className="w-1/2">
          <div className="w-full h-[1px] bg-gradient-to-r from-white/80 via-90% via-white" />
          <div className="w-full h-[2px] bg-gradient-to-r from-yellow-300 via-90% via-amber-100 blur-sm" />
        </div>
      </div> */}
    </div>
  )
}

export default Title