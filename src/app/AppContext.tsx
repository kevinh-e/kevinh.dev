"use client"

import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation';
import { navigation } from '@/util/routing';

type AppContextType = {
  currPage: string;
  pageIndex: number;
}

export const AppContext = createContext<AppContextType>({ currPage: "/", pageIndex: 0 });

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const routes = navigation;
  const pathname = usePathname()

  const [pageIndex, setPageIndex] = useState<number>(0);
  const [currPage, setCurrPage] = useState(pathname);

  useEffect(() => {
    const index = routes.findIndex(route => route.href === pathname);
    setPageIndex(index !== -1 ? index : 0);

    if (pathname !== currPage) {
      setCurrPage(pathname);
      console.log("Changed page to:", pathname, index);
    }
  }, [pathname, currPage, routes])

  return (
    <AppContext.Provider value={{ currPage, pageIndex }}>
      {children}
    </AppContext.Provider>
  )
};
