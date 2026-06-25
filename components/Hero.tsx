"use client"

import { useEffect, useState } from "react"
import { MapPin, Mail, ArrowDown, Download } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Instrument_Serif } from "next/font/google"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
})

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, 
        delayChildren: 0.1,
      },
    },
  }

  const topPillVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0, 0, 0.58, 1] as const
      },
    },
  }

  const nameVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.16, 1, 0.3, 1] as const
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <TooltipProvider delayDuration={100}>
      <section id="home" className="min-h-screen flex flex-col justify-between pt-36 pb-12 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] -z-10" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col items-center justify-center text-center px-4 w-full z-10 max-w-7xl mx-auto"
        >
          <motion.div
            variants={topPillVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/40 bg-muted/20 text-xs font-mono tracking-tight text-muted-foreground/80 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for Work
          </motion.div>

          <motion.h1 
            variants={nameVariants}
            className="text-[15vw] sm:text-[13vw] md:text-[11vw] font-black tracking-[-0.01em] leading-[0.8] text-foreground select-none w-full text-center flex items-baseline justify-center transition-all duration-300"
          >
            <span>Elo</span>
            
            <span className="relative inline-flex items-baseline mx-[0.03em]">
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.span 
                    whileHover={{ rotate: prefersReducedMotion ? 0 : -8, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="absolute -top-[0.25em] left-1/2 -translate-x-1/2 w-[3.5vw] sm:w-[3vw] md:w-[2.5vw] aspect-square rounded-full border-2 sm:border-[3px] border-foreground overflow-hidden z-20 cursor-pointer"
                  >
                    <Image 
                      src="/img/profile.JPG" 
                      alt="Eloiza Lumakang Portrait" 
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.span>
                </TooltipTrigger>
                <TooltipContent 
                  side="top" 
                  sideOffset={12} 
                  className="bg-foreground text-background font-mono text-xs px-3 py-1.5 rounded-md shadow-md border-none select-none"
                >
                  Hi, I'm Eloi!
                </TooltipContent>
              </Tooltip>
              <span className="w-[2.4vw] sm:w-[1.9vw] md:w-[1.55vw] h-[0.45em] bg-foreground rounded-[4px] md:rounded-[2px] inline-block self-end" />
            </span>

            <span>za Joy</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="mt-8 md:mt-10 max-w-4xl select-none">
            <p className="text-sm sm:text-base md:text-lg font-sans font-semibold tracking-[0.25em] uppercase text-muted-foreground/60 mb-2">
              Computer science student studying
            </p>
            <p 
              className={`${instrumentSerif.className} text-3xl sm:text-5xl md:text-6xl text-foreground subpixel-antialiased tracking-normal leading-tight`}
            >
              Intelligent Systems.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3.5 mt-10 md:mt-12"
          >
            <Button asChild className="rounded-full px-6 py-5 text-sm gap-2 group transition-all duration-300">
              <a href="#projects">
                View Projects <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6 py-5 text-sm gap-2 bg-transparent border-border/80 text-muted-foreground dark:text-foreground hover:text-foreground hover:border-foreground hover:bg-muted/10 transition-all duration-300">
              <a href="https://drive.google.com/file/d/1RaPukzDFC8hjoMG-DtIEM8_sBSpGVqbw/view" target="_blank" rel="noopener noreferrer">
                Download Resume <Download className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Framing Footer */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-end justify-between z-10 mt-auto">
          {/* Bottom Left: Location Meta */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-start gap-1.5 text-left"
          >
            <div className="p-2 rounded-lg bg-muted/40 border border-border/40 text-emerald-500">
              <MapPin className="w-4 h-4" />
            </div>
            <div className="font-sans select-none">
              <p className="text-[11px] font-bold tracking-wider uppercase text-foreground">Based in Cavite,</p>
              <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground">Philippines</p>
            </div>
          </motion.div>

          {/* Bottom Right: Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-5 text-muted-foreground pb-2"
          >
            <a href="mailto:ejlumakang@gmail.com" aria-label="Send Email" className="hover:text-foreground transition-all hover:-translate-y-0.5 duration-200">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ejlmkng/" target="_blank" rel="noopener noreferrer" aria-label="Open Linkedin" className="hover:text-foreground transition-all hover:-translate-y-0.5 duration-200">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/ejlumakang" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub" className="hover:text-foreground transition-all hover:-translate-y-0.5 duration-200">
              <FaGithub size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  )
}