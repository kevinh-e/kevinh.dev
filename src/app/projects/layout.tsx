import React from "react";

import Nav from "@/components/Nav3";
import LayoutWrapper from "@/components/LayoutWrapper";

const title = "Contact";

export const metadata = {
  title: {
    default: "projects",
    template: "%s | kevinh.dev",
  },
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <Nav />
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
    </div>
  );
}
