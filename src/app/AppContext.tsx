"use client"

import React, { createContext, useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation';
import { navigation } from '@/util/routing';

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const routes = navigation;
  const pathname = usePathname()
  let pageIndex: number;

  routes.forEach((route, index) => {
    if (route.href.localeCompare(pathname) === 0) {
      pageIndex = index;
    }
  });

  const [currPage, setCurrPage] = useState(pathname);
  const [currIndex, setCurrIndex] = useState(pageIndex);

  useEffect(() => {
    if (pathname !== currPage) {
      setCurrPage(pathname);
      setCurrIndex(pageIndex)
      console.log("Changed page to:", pathname, pageIndex);
    }
  }, [pathname, currPage, currIndex])

  return (
    <AppContext.Provider value={{ currPage, currIndex }}>
      {children}
    </AppContext.Provider>
  )
};
