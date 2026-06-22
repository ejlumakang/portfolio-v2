"use client"

import { ArrowDown, Download, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 md:pt-16 pb-12 md:pb-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 -z-10" />
      
      {/* 
        Changed grid-cols-1 by default for mobile, and md:grid-cols-[1fr_1.2fr] for desktop. 
        Adjusted px-6 on mobile, px-8 on desktop to fit tight screens beautifully.
      */}
      <div className="max-w-6xl w-full mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-center">
        
        {/* 
          Centered the image wrapper container on mobile with justify-center, 
          while retaining md:justify-start for desktop alignment.
        */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
          className="order-1 flex justify-center md:justify-start"
        >
          {/* Constrained max-width safely on mobile so it does not take up the entire viewport width */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] aspect-square md:aspect-[4/5] relative rounded-[1rem] overflow-hidden shadow-xl group">
            
            {/* Gradient tracing effect */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-[-100%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_75%,black_100%)] dark:bg-[conic-gradient(from_0deg,transparent_75%,white_100%)] origin-center"
            />

            <div className="absolute inset-[3px] rounded-[calc(1rem-3px)] overflow-hidden bg-card z-10 border border-border">
              <img 
                src="/img/profile.JPG" 
                alt="Eloiza Lumakang" 
                className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* 
          Changed alignment to items-center text-center on mobile, 
          reverting back to md:items-start md:text-left on desktop.
        */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
          className="order-2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <span className="flex items-center gap-2 font-mono text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
            Available for Work · Philippines
          </span>
          
          {/* Scaled text size seamlessly: text-4xl on mobile, text-5xl on tablet, text-7xl on desktop */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
            Eloiza Joy B. Lumakang
          </h1>
          
          {/* Adjusted paragraph typography limits for consistent layout scales */}
          <p className="text-base md:text-xl text-muted-foreground max-w-[560px] mb-8 md:mb-12 leading-relaxed">
            A Computer Science student studying Intelligent Systems at De La Salle University - Dasmarinas.
          </p>
          
          {/* Centered button groups comfortably on smaller viewpoints */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 md:mb-10">
            <Button asChild className="rounded-full px-5 py-5 md:px-6 md:py-6 text-sm md:text-base gap-2 group">
              <a href="#projects">
                View Projects <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-5 py-5 md:px-6 md:py-6 text-sm md:text-base gap-2 bg-transparent border-border text-muted-foreground dark:text-foreground hover:text-foreground hover:border-foreground hover:bg-transparent transition-all duration-300">
              <a href="https://drive.google.com/file/d/1RaPukzDFC8hjoMG-DtIEM8_sBSpGVqbw/view" target="_blank">
                Download Resume <Download className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="mailto:ejlumakang@gmail.com" className="hover:text-foreground transition-colors"><Mail className="w-5 h-5 md:w-6 md:h-6" /></a>
            <a href="https://www.linkedin.com/in/ejlmkng/" target="_blank" className="hover:text-foreground transition-colors"><FaLinkedin size={24} className="w-5 h-5 md:w-6 md:h-6" /></a>
            <a href="https://github.com/ejlumakang" target="_blank" className="hover:text-foreground transition-colors"><FaGithub size={24} className="w-5 h-5 md:w-6 md:h-6" /></a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}