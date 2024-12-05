"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/util/routing";
import { DotFilledIcon } from "@radix-ui/react-icons";

const Nav = () => {
  const currentRoute = usePathname();
  return (
    <div className="absolute duration-500 transition-all right-6 lg:right-12">
      <nav className="flex duration-1000 gap-2">
        <ul className="animate-nav flex flex-col px-2 self-center items-center text-right">
          {navigation.map((item) => {
            if (currentRoute === item.href) {
              return <Link key={item.href} href={item.href} className="px-3 py-1 animate-fade-nodelay"> <DotFilledIcon color="white" width="35" height="35" /> </Link>
            } else {
              return <Link key={item.href} href={item.href} className="text-md duration-300 transition-all xl:text-lg lg:text-md font-serif text-zinc-300 hover:text-zinc-500 block rounded-md px-3 py-2 animate-fade-nodelay"> {item.name} </Link>
            }
          }
          )}
        </ul>
        <div className="animate-navbar transition-all h-48 lg:h-64 w-px mr-2 animate-glow bg-gradient-to-b from-zinc-50/50 via-zinc-50 to-zinc-50/50" />
      </nav>
    </div>
  );
};

export default Nav;
