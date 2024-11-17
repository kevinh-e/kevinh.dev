"use client"

import Particles from "@/components/Particles";
import { Text } from "@radix-ui/themes/dist/cjs/index.js";

export default function Home() {
  return (
    <main className="bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="flex fixed justify-evenly inset-[3vh] p-[3%] border bg-black border-zinc-400">
        <div className="mt-32 w-fit duration-1000 animate-grow border-zinc-50 font-serif">
          <Text as="span" trim="both" className="animate-fade-in">
            kevin is currently studying computer-science and physics at UNSW.
          </Text>
          <Particles
            className="absolute inset-0 -z-10 animate-fade-in"
            quantity={100}
          />
        </div >
      </div>
    </main >
  );
}
