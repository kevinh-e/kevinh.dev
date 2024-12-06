"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { contacts } from "./contacts";
import { openProject } from "@/util/helpers";

export default function Home() {
  return (
    <div className="container overflow-y-scroll md:overflow-auto flex flex-col justify-start md:justify-center items-center h-full px-6 py-6 md:px-3 md:py-3 transition-all duration-300">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
        {contacts.map((contact, index) => {
          const Icon = contact.icon
          return (
            <Card
              key={index}
              className="flex flex-row border-border border-2 hover:border-indigo-600/40 transition-all duration-300 transform hover:scale-105 bg-secondary/30"
              onClick={() => openProject(contact.href)}
            >
              <div className="h-full flex justify-center items-center pl-6">
                {Icon && <Icon className="h-10 w-10 text-secondary-foreground" />}
              </div>
              <div className="">
                <CardHeader>
                  <CardTitle className="font-serif font-semibold text-2xl tracking-wide">{contact.name}</CardTitle>
                  <p className="font-sans text-md">{contact.content}</p>
                  <CardDescription className="font-sans text-sm">{contact.site}</CardDescription>
                </CardHeader>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  );
}
