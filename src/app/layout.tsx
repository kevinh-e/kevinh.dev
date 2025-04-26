import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

import { inter, libre_baskerville } from "@/app/fonts/fonts";
import "../../globals.css"
import Footer from "@/components/Footer";
import { AppProvider } from "./AppContext";
import Particles from "@/components/Particles";
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    default: "kevinh.dev",
    template: "%s | kevinh.dev",
  },
  description: "Software Engineer and Student @UNSW",
  openGraph: {
    title: "kevinh.dev",
    description:
      "Software Engineering student at UNSW, Sydney",
    url: "https://kevinh.dev",
    siteName: "kevinh.dev",
    // images: [
    //   {
    //     url: "https://chronark.com/og.png",
    //     width: 1920,
    //     height: 1080,
    //   },
    // ],
    locale: "en-AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // twitter: {
  //   title: "Chronark",
  //   card: "summary_large_image",
  // },
  icons: {
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${libre_baskerville.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Theme
            accentColor="iris"
            grayColor="mauve"
            radius="large"
            scaling="100%"
            panelBackground="translucent"
          >
            <main>
              <div className="flex flex-col fixed items-center justify-center inset-[3vh] p-5 md:p-10 lg:p-16 border bg-black border-zinc-500 bg-gradient-to-tl from-black via-zinc-600/20 to-black rounded-lg">
                <AppProvider>
                  {children}
                  <Toaster />
                  <Particles
                    className="absolute inset-0 animate-fade-in -z-10"
                    quantity={100}
                  />
                </AppProvider>
              </div>
            </main>
            <Footer />
          </Theme>
        </ThemeProvider>
      </body>
    </html >
  );
}
