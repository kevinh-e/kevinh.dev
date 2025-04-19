"use client"

import { useState } from "react";

import { Text } from "@radix-ui/themes";
import { projects } from "./projects";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card";
import { Glow, GlowCapture } from "@codaworks/react-glow";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ExternalLink } from "lucide-react";
import { openProject } from "@/util/helpers";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [hovering, setHovering] = useState<number | null>(null);

  return (
    <GlowCapture className="container overflow-y-scroll scroll-smooth xl:overflow-auto h-full grid grid-cols-1 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-3 px-6 py-6 xl:px-12 md:py-6 gap-8 transition-all duration-300">
      {projects.map((project, index) => {
        return (
          <Glow key={index} className="h-full">
            <Card
              className="h-full relative overflow-hidden bg-secondary/30 border-2 border-border glow:border-indigo-600/60 transition-all duration-300 hover:border-indigo-600/40"
              onMouseEnter={() => setHovering(index)}
              onClick={() => setHovering(prev => prev ? index : null)}
              onMouseLeave={() => setHovering(null)}
            >
              <div className={`h-full absolute inset-0 bg-transparent transition-opacity duration-300 ${hovering === index ? 'opacity-0' : 'opacity-100'}`} />
              <div className={`h-full relative z-1 transition-all duration-300 ${hovering === index || hovering === null ? 'filter-none' : 'blur-sm'}`}>
                <CardHeader>
                  <Text className="text-muted-foreground">{project.date}</Text>
                  <CardTitle className="font-serif text-2xl md:text-3xl transition-all duration-300">{project.name}</CardTitle>
                  <CardDescription className="text-lg tracking-wide overflow-y">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="mb-16">
                  <li className="flex flex-row gap-3 list-none">
                    {project.tags.map((tag, index) => (
                      <Badge key={index}>{tag}</Badge>
                    ))}
                  </li>
                </CardContent>
                <CardFooter className="flex flex-row absolute bottom-0 gap-4 justify-between w-full">
                  <Button onClick={() => openProject(project.github)} variant="outline" className="bg-transparent font-sans font-normal tracking-wide"><GitHubLogoIcon />Github</Button>
                  {project.link ? <Button onClick={() => openProject(project.link)} variant="outlineSecondary" className="bg-secondary/50 font-sans font-normal tracking-wide" >visit<ExternalLink /></Button> : null}
                </CardFooter>
              </div>
            </Card>
          </Glow>
        )
      })}
    </GlowCapture>
  );
}
