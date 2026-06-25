"use client"

import { useRef } from "react"
import { experience, technologies } from "@/data/portfolio"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"


import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "700",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
})

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="py-16 md:py-24 text-foreground overflow-hidden border-t border-border w-full bg-background relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 mb-12 md:mb-16 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <span className="font-mono text-xs text-muted-foreground/50 tracking-tight">
              01 / THE JOURNEY
            </span>
            
            <h2 className="flex flex-wrap items-baseline gap-x-3 text-4xl md:text-5xl leading-[0.85]">
              <span className={`${plusJakarta.className} font-semibold tracking-tight text-black dark:text-white`}>
                Where I've
              </span>
              <span className={`${instrumentSerif.className} text-black dark:text-white subpixel-antialiased tracking-normal lowercase`}>
                been.
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-muted-foreground leading-relaxed"
          >
            Where I started, places I've worked, and teams I've collaborated with. This is where I apply what I know to build real-world systems and tackle engineering challenges outside the classroom.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] md:left-1/2 w-[2px] h-full bg-border -translate-x-[1px]" />
          
          <motion.div 
            style={{ height: height }}
            className="absolute left-[7px] md:left-1/2 w-[2px] bg-gradient-to-b from-transparent via-foreground/50 to-foreground -translate-x-[1px] origin-top z-10"
          />

          <motion.div 
            style={{ height: height }}
            className="absolute left-[7px] md:left-1/2 w-[2px] bg-gradient-to-b from-transparent via-transparent dark:via-foreground/50 to-transparent dark:to-foreground -translate-x-[1px] origin-top z-10 blur-[4px] opacity-0 dark:opacity-45 pointer-events-none"
          />

          <motion.div 
            style={{ height: height }}
            className="absolute left-[7px] md:left-1/2 w-[4px] bg-gradient-to-b from-transparent via-transparent dark:via-foreground/30 to-transparent dark:to-foreground -translate-x-[2px] origin-top z-10 blur-[8px] opacity-0 dark:opacity-25 pointer-events-none"
          />

          <div className="flex flex-col gap-10 md:gap-16">
            {experience.map((exp, index) => (
              <TimelineItem key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ exp, index }: { exp: any, index: number }) {
  const isLeft = index % 2 === 0
  const prefersReducedMotion = useReducedMotion()
  const itemRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1])
  const blurValue = useTransform(scrollYProgress, [0, 0.4, 1], [16, 0, 0])
  const filter = useTransform(() => prefersReducedMotion ? "none" : `blur(${blurValue.get()}px)`)
  
  const y = useTransform(scrollYProgress, [0, 0.4, 1], [prefersReducedMotion ? 0 : 60, 0, 0])
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [prefersReducedMotion ? 1 : 0.94, 1, 1])

  const getTechIcon = (techName: string) => {
    const foundTech = technologies.find(
      (t) => t.name.toLowerCase() === techName.toLowerCase()
    )
    return foundTech ? foundTech.icon : null
  }

  return (
    <div 
      ref={itemRef}
      className={`relative flex w-full justify-start md:justify-center ${isLeft ? "md:justify-start" : "md:justify-end"} group`}
    >
      
      {/* Timeline Dot */}
      <div 
        className="absolute left-[7px] md:left-1/2 w-3 h-3 rounded-full bg-foreground top-4 z-20 -translate-x-[6px]
          shadow-[0_0_0_2px_hsl(var(--background)),0_0_0px_0px_transparent] 
          dark:shadow-[0_0_0_2px_hsl(var(--background)),0_0_8px_2px_rgba(255,255,255,0.6)]" 
      />

      {/* Card Wrapper */}
      <motion.div 
        style={{ 
          opacity, 
          filter, 
          y, 
          scale 
        }}
        className="w-[calc(100%-24px)] md:w-[46%] pl-6 md:pl-0"
      >
        <div className="p-5 md:p-6 rounded-xl bg-card border border-border transition-all duration-300 hover:border-foreground/20 hover:-translate-y-0.5 hover:shadow-md relative overflow-hidden">
    
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
            style={{
              background: `radial-gradient(
                300px circle at 100% 100%, 
                rgba(120, 119, 198, 0.04), 
                transparent 100%
              )`
            }}
          />
          
          <div className="flex items-start gap-3 mb-3 relative z-10">
            <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center border border-border flex-shrink-0 overflow-hidden">
              <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <h3 className="text-base font-bold tracking-tight leading-snug break-words">{exp.role}</h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-medium mt-0.5">{exp.company}</p>
            </div>
          </div>

          {Array.isArray(exp.description) ? (
            <ul className="text-muted-foreground/80 leading-relaxed text-sm list-disc pl-4 space-y-2 mb-4 relative z-10">
              {exp.description.map((point: string, i: number) => (
                <li key={i} className="marker:text-foreground/30">
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground/80 leading-relaxed text-sm mb-4 relative z-10">{exp.description}</p>
          )}

          {exp.tech && exp.tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60 relative z-10">
              {exp.tech.map((technology: string) => {
                const iconUrl = getTechIcon(technology)
                
                return (
                  <span 
                    key={technology} 
                    className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wide bg-muted/40 border border-border/30 px-2 py-1 rounded-md text-muted-foreground/70 select-none"
                  >
                    {iconUrl && (
                      <img 
                        src={iconUrl} 
                        alt={technology} 
                        className="w-3.5 h-3.5 object-contain"
                      />
                    )}
                    {technology}
                  </span>
                )
              })}
            </div>
          )}

        </div>
      </motion.div>
    </div>
  )
}