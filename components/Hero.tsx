"use client"

import { useEffect, useState } from "react"
import { Mail, ArrowDown, Download, MapPin } from "lucide-react"
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
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
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
        className="flex-1 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 w-full z-10 max-w-6xl mx-auto gap-12 md:gap-16"
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
            I'm a Computer Science student at DLSU-D, focused on building intelligent systems and crafting intuitive digital experiences.
          </motion.p>

          <motion.div variants={textVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-10">
            <Button asChild className="rounded-full h-13 px-6 text-sm font-semibold bg-foreground text-background hover:bg-foreground/90">
              <a href="#projects">View Projects <ArrowDown className="ml-2 w-4 h-4" /></a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              className="rounded-full h-13 px-6 text-sm font-medium bg-transparent border-border hover:bg-transparent hover:border-foreground transition-colors"
            >
              <a href="https://drive.google.com/file/d/1RaPukzDFC8hjoMG-DtIEM8_sBSpGVqbw/view" target="_blank" rel="noopener noreferrer">
                Download Resume <Download className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div variants={photoVariants} className="w-full md:w-1/2 flex flex-col items-center gap-6">
          <div className="relative w-full max-w-[300px] md:max-w-[360px] aspect-square rounded-full overflow-hidden border-0 p-[3px]">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute inset-[-100%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_75%,rgba(0,0,0,0.4)_100%)] dark:bg-[conic-gradient(from_0deg,transparent_75%,rgba(255,255,255,0.4)_100%)] origin-center"
              />
            </div>
            <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
              <Image 
                src="/img/profile.JPG" 
                alt="Eloiza Joy B. Lumakang" 
                fill 
                sizes="(max-width: 768px) 300px, 360px"
                className="object-cover" 
                style={{ objectPosition: "50% 20%" }}
                priority 
              />
              </motion.div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-[300px] md:max-w-[360px] rounded-2xl border border-border bg-card overflow-hidden">
            {[
              { label: "GPA", value: "3.7" },
              { label: "Projects", value: "10+" },
              { label: "Years Coding", value: "4" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="flex-1 flex flex-col items-center justify-center py-4 relative group"
              >
                {i < 2 && (
                  <div className="absolute right-0 top-0 bottom-0 my-auto h-8 w-[1px] bg-border" />
                )}
                
                <span className="text-base sm:text-lg font-black text-foreground group-hover:text-pink-500 transition-colors">
                  {stat.value}
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider sm:tracking-widest text-muted-foreground font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="mailto:ejlumakang@gmail.com" className="hover:text-pink-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ejlmkng/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/ejlumakang" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
              <FaGithub size={24} />
            </a>
            <div className="h-6 w-[1px] bg-border" />
            <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
              <MapPin className="w-4 h-4 text-pink-500" />
              <span>Cavite, Philippines</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}