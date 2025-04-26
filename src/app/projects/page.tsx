"use client"

import { Text } from "@radix-ui/themes"
import { projects } from "./projects"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { ExternalLink } from "lucide-react"
import { openProject } from "@/util/helpers"
import { Badge } from "@/components/ui/badge"
import { useMediaQuery } from "@/hooks/use-media-query"

import { topicStyles } from "@/util/topicstyles"

export default function Home() {
  const isAtLeastMd = useMediaQuery("(min-width: 768px)")

  return (
    <div className="container mx-auto px-4 py-6 h-full overflow-auto custom-scrollbar fade-out-bottom">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${isAtLeastMd && project.isBig ? "md:col-span-2" : ""
              } transition-all duration-500 ease-in-out`}
            onClick={(e) => {
              e.stopPropagation()
              openProject(project.github)
            }}
          >
            <div className="group relative cursor-pointer h-full">
              <Card className={`h-full flex flex-col border-2 border-border relative bg-secondary/30 z-10 transition duration-200 hover:shadow-lg ${topicStyles[project.topic].cardHoverShadow} ${topicStyles[project.topic].cardBorder}`}>
                <CardHeader className="flex-none">
                  <Text className="text-muted-foreground text-sm">{project.date}</Text>
                  <CardTitle className="font-serif text-xl md:text-2xl line-clamp-2">{project.name}</CardTitle>
                  <CardDescription className={"text-base line-clamp-3"}>
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge key={'topic'} variant={`${project.topic}`} className={`${topicStyles[project.topic].badgeShadow}`}>
                      {project.topicTag}
                    </Badge>
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex-none mt-auto pt-4 flex justify-between gap-2">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation()
                      openProject(project.github)
                    }}
                    variant="outline"
                    className="bg-transparent font-sans font-normal tracking-wide text-sm"
                    size="sm"
                  >
                    <GitHubLogoIcon className="mr-1 h-4 w-4" />
                    Github
                  </Button>

                  {project.link != "" ? (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        openProject(project.link)
                      }}
                      variant="outline"
                      className="bg-secondary/50 font-sans font-normal tracking-wide text-sm"
                      size="sm"
                    >
                      Visit
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Button>
                  ) : <></>}
                </CardFooter>
              </Card>
            </div >
          </div >
        ))
        }
      </div >
    </div >
  )
}
