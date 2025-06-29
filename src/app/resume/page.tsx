"use client"

import { Text } from "@radix-ui/themes"
import { resumeData } from "./resume-data"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Download, ExternalLink, Mail, Phone, Github } from "lucide-react"
import Link from "next/link";

export default function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf" // You'll need to add your PDF to the public folder
    link.download = "Kevin_He_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 sm:py-4 md:py-6 py-6 h-full overflow-auto custom-scrollbar fade-out-bottom">
      {/* Header with contact info and download button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide">{resumeData.name}</h1>
          <div className="flex flex-wrap gap-3 mt-2">
            <div className="flex items-center text-sm text-muted-foreground">
              <Mail className="h-4 w-4 mr-1" />
              <span>{resumeData.contact.email}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-1" />
              <span>{resumeData.contact.phone}</span>
            </div>
            <Link href="/">
              <div className="flex items-center text-sm text-muted-foreground">
                <ExternalLink className="h-4 w-4 mr-1" />
                <span className="hover:text-foreground transition-colors duration-300">{resumeData.contact.website}</span>
              </div>
            </Link>
            <Link href="https://github.com/kevinh-e">
              <div className="flex items-center text-sm text-muted-foreground">
                <Github className="h-4 w-4 mr-1" />
                <span className="hover:text-foreground transition-colors duration-300">{resumeData.contact.github}</span>
              </div>
            </Link>
          </div>
        </div>
        <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90 font-sans tracking-wide">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>

      <div className="w-full h-[2px] bg-transparent mt-3 mb-8 bg-gradient-to-r from-foreground/80 via-40 via-foreground/80 to-border/20 transition-all duration-300" />

      {/* Education Section */}
      <div className="mb-8">
        <div className="relative">
          <h2 className="absolute font-sans text-2xl lg:text-3xl font-semibold tracking-wide">Education</h2>
          <div className="absolute font-sans text-2xl lg:text-3xl font-semibold tracking-wide">Education</div>
          <h2 className="font-sans text-2xl lg:text-3xl font-semibold mb-4 tracking-wide">Education</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resumeData.education.map((edu, index) => (
            <Card key={index} className="border-2 border-border bg-secondary/30">
              <CardHeader>
                <CardTitle className="font-sans text-xl xl:text-2xl">{edu.institution}</CardTitle>
                <CardDescription>{edu.location}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-start">
                  <Text className="font-medium">{edu.degree}</Text>
                  <Text className="text-muted-foreground text-sm">{edu.period}</Text>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mb-8">
        <h2 className="font-sans text-2xl lg:text-3xl font-semibold mb-4 tracking-wide">Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(resumeData.technologies).map(([category, items], index) => (
            <Card key={index} className="border-2 border-border bg-secondary/30">
              <CardHeader>
                <CardTitle className="font-sans text-xl">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="outline" className="bg-secondary/50">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="mb-8">
        <h2 className="font-sans text-2xl lg:text-3xl font-semibold mb-4 tracking-wide">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumeData.projects.map((project, index) => (
            <Card
              key={index}
              className={`border-2 border-border bg-secondary/30 col-span-3`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-sans text-xl">{project.name}</CardTitle>
                  <Text className="text-muted-foreground text-sm">{project.year}</Text>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
              {project.link && (
                <CardFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-secondary/50 font-sans font-normal tracking-wide text-sm"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    {project.linkType || "Visit"}
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-8">
        <h2 className="font-sans text-2xl lg:text-3xl font-semibold mb-4 tracking-wide">Experience</h2>
        <div className="grid grid-cols-1 gap-4">
          {resumeData.experience.map((exp, index) => (
            <Card key={index} className="border-2 border-border bg-secondary/30">
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                  <div>
                    <CardTitle className="font-sans text-xl">{exp.position}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                    <CardDescription>{exp.location}</CardDescription>
                  </div>
                  <Text className="text-muted-foreground text-sm mt-2 md:mt-0">{exp.period}</Text>
                </div>
              </CardHeader>
              {exp.details && (
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Extracurricular Section */}
      <div className="mb-8">
        <h2 className="font-sans text-2xl lg:text-3xl font-semibold mb-4 tracking-wide">Extracurricular</h2>
        <Card className="border-2 border-border bg-secondary/30">
          <CardContent className="pt-6">
            <ul className="list-disc pl-5 space-y-2">
              {resumeData.extracurricular.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center text-sm text-muted-foreground mt-8">Last updated in {resumeData.lastUpdated}</div>
    </div>
  )
}
