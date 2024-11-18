"use client"

import { DevCallout } from "@/components/DevCallout";
import Particles from "@/components/Particles";
import Title from "@/components/Title";
import { Text } from "@radix-ui/themes/dist/cjs/index.js";

export default function Home() {
  return (
    <main className="bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="flex fixed justify-evenly inset-1 p-[3%] border bg-black border-zinc-400">
        <DevCallout />
        <div className="self-center flex flex-col justify-center items-center">
          <div className="w-fit duration-1000 animate-grow border-zinc-50 font-serif">
            <Title>kevin he</Title>
            <Text as="span" trim="both" className="animate-fade-in">
              kevin is currently studying computer-science and physics at UNSW.
            </Text>
            <Particles
              className="absolute inset-0 -z-10 animate-fade-in"
              quantity={100}
            />
          </div >
        </div>
      </div>
    </main>
  );
}
