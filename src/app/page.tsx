import { Text } from "@radix-ui/themes";

import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex flex-col justify-center items-center relative">
      <Title> kevin he</Title >
      <Text as="span" trim="both" className="animate-fade-in lg:text-lg font-sans text-zinc-400 mt-4 lg:mt-6 max-w-[200px] md:max-w-sm lg:max-w-none whitespace-pre-wrap transition-all">
        I'm a machine learning enthusiast currently studying software engineering at {<a href="https://www.unsw.edu.au/" target="_blank" className="transition-all text-zinc-300 duration-300 hover:text-zinc-50">UNSW</a>}!
      </Text>
      <Button variant="default" size="lg" className="group mt-8 animate-fade-in-delay font-sans tracking-wide"><Link href="/projects">Learn More</Link></Button>
    </div >
  );
}
