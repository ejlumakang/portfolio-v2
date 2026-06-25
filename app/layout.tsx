import type { Metadata } from "next"
import { Plus_Jakarta_Sans, JetBrains_Mono, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import { SmoothScroller } from "@/components/smooth-scroller"

const sans = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
})
const mono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
})

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Eloiza Lumakang",
  description: "Computer Science student and Frontend Developer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} ${serif.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <SmoothScroller>
            <main>{children}</main>
          </SmoothScroller>
        </ThemeProvider>
      </body>
    </html>
  )
}