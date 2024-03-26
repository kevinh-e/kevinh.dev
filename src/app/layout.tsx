import './globals.css'
import type { Metadata } from 'next'
import { Theme } from '@radix-ui/themes'
import { inter, libre_baskerville } from './fonts'
import "@radix-ui/themes/styles.css"
import DevCallout from "@/components/devcallout";
import GlobalTitle from '@/components/global-title'
import GlobalNav from '@/components/global-nav'
import { AnimatePresence } from 'framer-motion';

export const metadata: Metadata = {
  title: {
    default: "laniakea",
    template: "%s | laniakea",
  },
  description: "Student Software Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={[inter.variable, libre_baskerville.variable].join(" ")}>
      <body>
        <Theme appearance="dark" accentColor="iris">
          <main className="bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <div className="flex fixed justify-evenly inset-[3vh] p-[3%] border bg-black border-zinc-400">
              <DevCallout />
              <div className="self-center flex flex-col justify-center items-center">
                <GlobalTitle />
                {children}
              </div>
              <GlobalNav />
            </div>
          </main>
        </Theme>
      </body>
    </html>
  )
}
