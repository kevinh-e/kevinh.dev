"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { contacts } from "./contacts"
import { openProject } from "@/util/helpers"
import { sendMessage } from "./actions"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await sendMessage(formData)
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default",
      })
      setFormData({ name: "", email: "", message: "" })
    } catch {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container flex flex-col justify-center sm:py-4 md:py-6 md:py-8 lg:py-12 px-2 sm:px-4 h-full">
      <div className="flex flex-col lg:flex-row gap-8 lg:items-center h-full">
        {/* Contact cards - vertical on desktop, horizontal on mobile */}
        <div className="lg:w-1/4 xl:w-1/5 space-y-4">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <Card
                key={index}
                className="cursor-pointer border-border border-2 hover:border-indigo-400/80 transition duration-200 hover:shadow-md hover:shadow-indigo-600/80 transform hover:scale-105 bg-secondary/30"
                onClick={() => openProject(contact.href)}
              >
                <div className="flex items-center p-4">
                  {Icon && <Icon className="h-8 w-8 text-secondary-foreground mr-4" />}
                  <div>
                    <CardTitle className="font-semibold text-xl tracking-wide">{contact.name}</CardTitle>
                    <p className="font-sans text-md">{contact.content}</p>
                    <CardDescription className="font-sans text-sm">{contact.site}</CardDescription>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="flex flex-row w-full gap-8 items-stretch">
          {/* Divider */}
          <div className="mx-4 hidden lg:block self-stretch w-[2px] bg-gradient-to-b from-slate-50 to-border/20">
          </div>

          {/* Message form */}
          <div className="flex-grow self-stretch">
            <Card className="border-border border-2 bg-secondary/30 h-full">
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle className="font-semibold text-2xl tracking-wide">send a message</CardTitle>
                  <CardDescription>get in touch with me directly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={7}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      spellCheck
                      className="bg-background/50 resize-none"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="w-full flex justify-end">
                    <Button
                      type="submit"
                      className="font-sans text-background/80 font-base w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
