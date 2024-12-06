import Image from 'next/image'

export function CustomDiscordIcon({ className }: { className?: string }) {
  return (
    <Image
      src="discord-mark-white.svg"
      alt="Discord"
      width={24}
      height={24}
      className={className}
    />
  )
}
