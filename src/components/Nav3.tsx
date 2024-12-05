"use client"

import React, { useContext } from 'react'

import { Text } from "@radix-ui/themes";
import Link from "next/link";
import { navigation } from '@/util/routing';
import { AppContext } from '@/app/AppContext';

const Nav = () => {
  const routes = navigation;
  const { currPage, currIndex } = useContext(AppContext);
  console.log(currIndex)

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
      <div className={`w-full h-[2px] bg-transparent mt-6 mb-12 bg-gradient-to-r from-border/10 via-${currIndex}0% via-foreground to-[${currIndex + 3}0%] to-border/10 transition-all duration-300`} />
    </div >
  )
}

export default Nav;
