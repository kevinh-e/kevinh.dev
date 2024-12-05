"use client"

import { useState } from "react";
import { Glow, GlowCapture } from "@codaworks/react-glow";

export default function Home() {
  const [hovering, setHovering] = useState<number | null>(null);

  return (
    <GlowCapture className="container h-full grid grid-cols-1 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-3 px-6 py-6 md:px-3 md:py-3 gap-6 transition-all duration-300">
    </GlowCapture>
  );
}
