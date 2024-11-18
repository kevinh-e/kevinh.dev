import Particles from "@/components/particles"
import { Text } from "@radix-ui/themes"

export default function Home() {
  return (
    <div className="mt-32 w-fit duration-1000 animate-grow border-zinc-50 font-serif">
      <Text as="span" trim="both" className="animate-fade-in">
        kevin is currently studying computer-science and physics at UNSW.
      </Text>
        <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
        />
    </div>
  )
}
