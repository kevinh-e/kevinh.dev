'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import { navigation } from '@/app/categories/navigation'
import { DotFilledIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'

const GlobalNav = () => {
  const currentRoute = usePathname();
  return (
    <div className="w-0 h-full flex justify-end items-center self-center fixed right-[10%]">
      <nav className="flex duration-1000 gap-1 sm:gap-1.5 md:gap-2">
        <ul className="animate-nav flex flex-col px-2 self-center items-center text-right">
          {navigation.map((item) => {
            if (currentRoute === item.href) {
             return  <Link key={item.href} href={item.href} className="px-3 py-1 animate-fade-nodelay"> <DotFilledIcon color="white" width="35" height="35"/> </Link>
            } else {
              return <Link key={item.href} href={item.href} className="text-sm md:text-lg sm:text-md font-serif text-zinc-300 hover:text-zinc-500 block rounded-md px-3 py-2 animate-fade-nodelay"> {item.name} </Link>
            }
          }
            // <Link key={item.href} href={item.href} className="text-sm md:text-lg sm:text-md font-serif italic duration-500 text-zinc-500 hover:text-zinc-300 rounded-md px-3 py-3"> {item.name} </Link>
            // <GlobalNavItem key={item.href} item={item} />
          )}
        </ul>
        <div className="animate-navbar duration-1000 h-[8rem] sm:h-[10rem] md:h-[15rem] w-px mr-2 md:block animate-glow bg-white" />
      </nav>
    </div>
  )
}

function GlobalNavItem(item: any) {
  const currentRoute = usePathname();
  const isActive = item.href === currentRoute;
  console.log(item);

  return (
      <Link
        onClick={close}
        href={`/${item.slug}`}
        className={clsx(
          'text-sm md:text-lg sm:text-md font-serif italic duration-500 text-zinc-500 hover:text-zinc-300 block rounded-md px-3 py-2',
          {
            'text-gray-400 hover:bg-gray-800': !isActive,
            'text-white': isActive,
          },
        )}
      >
        {item.name}
      </Link>
  );
}


export default GlobalNav