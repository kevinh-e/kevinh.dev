import React from 'react'
import Title from './title'

const GlobalTitle = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="z-10 relative h-fit">
        <Title>kevin he</Title>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
    </div>
  )
}

export default GlobalTitle