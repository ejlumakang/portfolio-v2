"use client"

import { useRef } from "react"
import { experience } from "@/data/portfolio"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Experience() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className="py-16 md:py-20 text-foreground overflow-hidden border-t border-border"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 md:mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-1"
          >
            <span className="font-mono text-xs text-muted-foreground">01 /</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Experience.</h2>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] md:left-1/2 w-[2px] h-full bg-border -translate-x-[1px]" />
          
          <motion.div 
            style={{ height: height }}
            className="absolute left-[7px] md:left-1/2 w-[2px] bg-gradient-to-b from-transparent via-foreground/50 to-foreground -translate-x-[1px] origin-top z-10"
          />

          <div className="flex flex-col gap-6 md:gap-8">
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
  
  return (
    <div className={`relative flex w-full justify-start md:justify-center ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
      
      {/* Timeline Dot */}
      <div className="absolute left-[7px] md:left-1/2 w-3 h-3 rounded-full bg-foreground top-4 z-20 
        -translate-x-[6px]
        shadow-[0_0_0_2px_hsl(var(--background)),0_0_8px_2px_rgba(255,255,255,0.4)] 
        dark:shadow-[0_0_0_2px_hsl(var(--background)),0_0_10px_3px_rgba(255,255,255,0.3)]" />
      
      {/* Card Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-[calc(100%-24px)] md:w-[46%] pl-6 md:pl-0"
      >
        <div className="group p-4 md:p-5 rounded-xl bg-card border border-border transition-all duration-300 hover:border-foreground/20 hover:-translate-y-0.5 hover:shadow-md relative">
          
          <div className="flex items-start gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center border border-border flex-shrink-0 overflow-hidden">
              <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow min-w-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                <h3 className="text-base font-bold tracking-tight leading-snug truncate">{exp.role}</h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-medium mt-0.5">{exp.company}</p>
            </div>
          </div>

          <ul className="text-muted-foreground leading-relaxed text-sm list-none space-y-2 pl-0 mb-4">
            {Array.isArray(exp.description) 
              ? exp.description.map((point: string, i: number) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="text-foreground/40 mt-1 select-none text-[11px]">•</span> 
                    <span>{point}</span>
                  </li> 
                ))
              : <li>{exp.description}</li>
            }
          </ul>

          {/* Tech Tags */}
          {exp.tech && exp.tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
              {exp.tech.map((technology: string) => (
                <span 
                  key={technology} 
                  className="text-[11px] font-mono uppercase tracking-wide bg-muted/40 border border-border/30 px-2 py-0.5 rounded-md text-muted-foreground/70 select-none"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}

        </div>
      </motion.div>
    </div>
  )
}