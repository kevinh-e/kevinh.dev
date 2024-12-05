"use client"

import { useState } from "react";

import { Text } from "@radix-ui/themes";
import { projects } from "./projects";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLink } from "lucide-react";

export default function Home() {
  const [hovering, setHovering] = useState<number | null>(null);

  const openProject = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <GlowCapture className="container h-full grid grid-cols-1 md:grid-cols-2 xl:grid-rows-3 xl:grid-cols-3 px-6 py-6 xl:px-12 md:py-6 gap-12 transition-all duration-300">
      {projects.map((project, index) => {
        return (
          <Glow key={index} className="h-full">
            <Card
              className="h-full relative overflow-hidden bg-secondary/30 border-2 border-border glow:border-indigo-600/60 transition-all duration-300 hover:border-indigo-600/40"
              onMouseEnter={() => setHovering(index)}
              onMouseLeave={() => setHovering(null)}
            >
              <div className={`h-full absolute inset-0 bg-transparent transition-opacity duration-300 ${hovering === index ? 'opacity-0' : 'opacity-100'}`} />
              <div className={`h-full relative z-1 transition-all duration-300 ${hovering === index || hovering === null ? 'filter-none' : 'blur-sm'}`}>
                <CardHeader className="mb-20">
                  <Text className="text-muted-foreground">{project.date}</Text>
                  <CardTitle className="font-serif text-2xl md:text-3xl transition-all duration-300">{project.name}</CardTitle>
                  <CardDescription className="text-lg tracking-wide">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-row absolute bottom-0 gap-4 justify-between w-full">
                  <Button onClick={() => openProject(project.github)} variant="outline" className="bg-transparent font-sans font-normal tracking-wide" size="lg"><GitHubLogoIcon />Github</Button>
                  {project.link ? <Button onClick={() => openProject(project.link)} variant="outlineSecondary" className="bg-secondary/50 font-sans font-normal tracking-wide" size="lg">visit<ExternalLink /></Button> : null}
                </CardFooter>
              </div>
            </Card>
          </Glow>
        )
      })}
    </GlowCapture>
  );
}
