import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";
import { inter, libre_baskerville } from "@/app/fonts/fonts";

export const metadata: Metadata = {
  title: {
    default: "kevinh.devjsdlasd",
    template: "%s | kevinh.dev",
  },
  description: "Software Engineer and Student @UNSW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${libre_baskerville.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Theme
            accentColor="iris"
            grayColor="mauve"
            radius="large"
            scaling="100%"
            panelBackground="translucent"
          >
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html >
  );
}
