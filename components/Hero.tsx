"use client"

import { useEffect, useState } from "react"
import { Mail, ArrowDown, Download } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.2 
      } 
    },
  }

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  const photoVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-12 relative overflow-hidden bg-background">
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        className="flex-1 flex flex-col-reverse md:flex-row-reverse items-center justify-center px-6 md:px-12 w-full z-10 max-w-6xl mx-auto gap-12 md:gap-16"
      >
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <motion.div variants={textVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/40 bg-muted/20 text-xs font-mono tracking-tight text-muted-foreground/80 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
            Available for Work
          </motion.div>

          <motion.h1 variants={textVariants} className="text-[12vw] sm:text-[8vw] md:text-[5vw] font-black tracking-tight leading-[1] text-foreground select-none w-full">
            <span className="cursor-default transition-colors duration-300 hover:text-pink-600">Eloiza</span>{' '}
            <span className="cursor-default transition-colors duration-300 hover:text-pink-600">Joy</span>{' '}
            <span className="cursor-default transition-colors duration-300 hover:text-pink-600">B.</span>
            <br />
            <span className="font-serif italic text-foreground/80 text-[14vw] sm:text-[10vw] md:text-[7vw] cursor-default transition-colors duration-300 hover:text-pink-600">Lumakang</span>
          </motion.h1>

          <motion.p variants={textVariants} className="mt-6 text-muted-foreground text-lg max-w-lg">
            A Computer Science student studying Intelligent Systems at De La Salle University-Dasmarinas.
          </motion.p>
          
          <motion.div variants={textVariants} className="flex flex-col items-center md:items-start gap-6 mt-10">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Button asChild className="rounded-full h-11 px-6 text-sm font-semibold bg-foreground text-background hover:bg-foreground/90">
                <a href="#projects">View Projects <ArrowDown className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button asChild variant="outline" className="rounded-full h-11 px-6 text-sm font-medium border-border hover:bg-transparent hover:border-foreground hover:text-foreground">
                <a href="https://drive.google.com/file/d/1RaPukzDFC8hjoMG-DtIEM8_sBSpGVqbw/view" target="_blank" rel="noopener noreferrer">Download Resume <Download className="ml-2 w-4 h-4" /></a>
              </Button>
            </div>
            <div className="flex items-center gap-6 text-muted-foreground pt-2">
              <a href="mailto:ejlumakang@gmail.com" className="hover:text-pink-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ejlmkng/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-pink-600 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://github.com/ejlumakang" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-pink-600 transition-colors"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div variants={photoVariants} className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[280px] md:max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border-0 p-[3px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute inset-[-100%] w-[300%] h-[300%] 
                  bg-[conic-gradient(from_0deg,transparent_75%,rgba(0,0,0,0.4)_100%)] 
                  dark:bg-[conic-gradient(from_0deg,transparent_75%,rgba(255,255,255,0.4)_100%)] 
                  origin-center"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-transparent to-foreground/10 dark:to-white/10 pointer-events-none" />
            </div>
            
            <div className="relative w-full h-full rounded-[21px] overflow-hidden bg-background">
              <Image src="/img/profile.JPG" alt="Eloiza Joy B. Lumakang" fill className="object-cover" priority />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5 dark:ring-white/5 rounded-[21px]" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}