"use server"

interface MessageData {
  name: string
  email: string
  message: string
}

export async function sendMessage(data: MessageData) {
  // Validate the data
  if (!data.name || !data.email || !data.message) {
    throw new Error("All fields are required")
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    throw new Error("Please provide a valid email address")
  }

  // Here you would typically send the message via an email service
  // For example, using Nodemailer, SendGrid, or another email API

  // For now, we'll simulate a successful submission with a delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real implementation, you would send the email here
  // If it fails, throw an error that will be caught in the component

  return { success: true }
}
