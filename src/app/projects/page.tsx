import { Text } from "@radix-ui/themes"
import { projects } from "./projects"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

import Link from "next/link";

import { topicStyles } from "@/util/topicstyles"

export default function Home() {
  return (
    <div className="container mx-auto px-2 sm:px-4 sm:py-4 md:py-6 h-full overflow-auto custom-scrollbar fade-out-bottom">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${project.isBig ? "md:col-span-2" : ""} ${project.isFlag ? "lg:col-span-3" : ""} transition-all duration-500 ease-in-out`}
          >
            <div className="group relative cursor-pointer h-full">
              <Card className={`h-full flex flex-col border-2 border-border relative bg-secondary/30 z-10 transition duration-200 hover:shadow-lg ${topicStyles[project.topic].cardHoverShadow} ${topicStyles[project.topic].cardBorder}`}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <CardHeader className="flex-none">
                    <Text className="text-muted-foreground text-sm">{project.date}</Text>
                    <CardTitle className="text-xl md:text-2xl line-clamp-2">{project.name}</CardTitle>
                    <CardDescription className={"text-base line-clamp-5"}>
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
                </a>

                <CardFooter className="flex-none mt-auto pt-4 flex justify-between gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="bg-transparent font-sans font-normal tracking-wide text-sm"
                    size="sm"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GitHubLogoIcon className="mr-1 h-4 w-4" />
                      Github
                    </a>
                  </Button>

                  {project.link != "" ? (
                    <Button
                      asChild
                      variant="outline"
                      className="bg-secondary/50 font-sans font-normal tracking-wide text-sm"
                      size="sm"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Visit
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
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
