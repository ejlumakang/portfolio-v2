"use client"

import { ArrowDown, Download, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { motion, useReducedMotion } from "framer-motion"

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

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

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 md:pt-16 pb-12 md:pb-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 -z-10" />
  
      <div className="max-w-6xl w-full mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="order-1 flex justify-center"
        >
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-square md:aspect-[4/5] relative rounded-2xl shadow-xl group bg-muted/20 border border-transparent">
            
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
              
              {!prefersReducedMotion && (
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="absolute inset-[-2px] rounded-2xl bg-[conic-gradient(from_0deg,transparent_50%,currentColor_100%)] text-transparent dark:text-foreground/50 blur-[4px] opacity-0 dark:opacity-45 origin-center"
                />
              )}

              {!prefersReducedMotion && (
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="absolute inset-[-4px] rounded-2xl bg-[conic-gradient(from_0deg,transparent_50%,currentColor_100%)] text-transparent dark:text-foreground/30 blur-[8px] opacity-0 dark:opacity-25 origin-center"
                />
              )}

              {!prefersReducedMotion && (
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="absolute inset-[-100%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_40%,currentColor_100%)] text-foreground/40 dark:text-foreground/40 origin-center"
                />
              )}
            </div>

            <div className="absolute inset-[1.5px] rounded-[calc(1rem-1.5px)] overflow-hidden bg-card z-10">
              <img 
                src="/img/profile.JPG" 
                alt="Eloiza Lumakang Portrait Photograph" 
                className="w-full h-full object-cover opacity-95 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Details Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 flex flex-col items-center md:items-start text-center md:text-left z-10"
        >
          <motion.span 
            variants={itemVariants}
            className="flex items-center gap-2 font-mono text-xs md:text-sm text-muted-foreground mb-4 md:mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for Work · Philippines
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 md:mb-5 leading-[1.1] text-foreground"
          >
            Eloiza Joy B. Lumakang
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-muted-foreground/90 max-w-[500px] mb-8 md:mb-10 leading-relaxed"
          >
            A Computer Science student studying Intelligent Systems at De La Salle University - Dasmarinas.
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start gap-3.5 mb-8 md:mb-10"
          >
            <Button asChild className="rounded-full px-5 py-5 md:px-6 md:py-6 text-sm gap-2 group transition-all duration-300">
              <a href="#projects">
                View Projects <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-5 py-5 md:px-6 md:py-6 text-sm gap-2 bg-transparent border-border/80 text-muted-foreground dark:text-foreground hover:text-foreground hover:border-foreground hover:bg-muted/10 transition-all duration-300">
              <a href="https://drive.google.com/file/d/1RaPukzDFC8hjoMG-DtIEM8_sBSpGVqbw/view" target="_blank" rel="noopener noreferrer">
                Download Resume <Download className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-5 text-muted-foreground"
          >
            <a href="mailto:ejlumakang@gmail.com" aria-label="Send Email to ejlumakang@gmail.com" className="hover:text-foreground transition-transform hover:-translate-y-0.5 duration-200"><Mail className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/ejlmkng/" target="_blank" rel="noopener noreferrer" aria-label="Open Linkedin Profile Link" className="hover:text-foreground transition-transform hover:-translate-y-0.5 duration-200"><FaLinkedin size={20} /></a>
            <a href="https://github.com/ejlumakang" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub Profile Link" className="hover:text-foreground transition-transform hover:-translate-y-0.5 duration-200"><FaGithub size={20} /></a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}