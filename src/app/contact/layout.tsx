import React from "react";

import { Text } from "@radix-ui/themes";
import Nav from "@/components/Nav3";

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
      {children}
    </div>
  );
}
