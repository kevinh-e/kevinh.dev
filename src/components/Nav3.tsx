"use client"

import React, { useContext } from 'react'

import { Text } from "@radix-ui/themes";
import Link from "next/link";
import { navigation } from '@/util/routing';
import { AppContext } from '@/app/AppContext';

const Nav = () => {
  const routes = navigation;
  const { currPage } = useContext(AppContext);

  return (
    <div className='container w-full'>
      <div className='w-full h-10 flex flex-row gap-3 items-end'>
        {routes.map((route, index) => {
          return (
            <Text
              className={`${route.href.localeCompare(currPage) === 0 ? "cursor-auto text-2xl md:text-3xl xl:text-4xl" : "cursor-pointer text-muted text-xl md:text-2xl xl:text-3xl"} font-serif font-semibold hover:text-primary transition-all duration-300`}
              key={index}
            > <Link href={route.href}>{route.name}</Link></Text>
          )
        })}
      </div>
      <div className={`w-full max-w-[800px] h-[2px] bg-transparent mt-3 mb-8 bg-gradient-to-r from-foreground/80 via-40 via-foreground/80 to-border/20 transition-all duration-300`} />
    </div >
  )
}

export default Nav;
