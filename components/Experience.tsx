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
      className="py-20 md:py-24 text-foreground overflow-hidden border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-16 md:mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-sm text-muted-foreground">01 /</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Experience.</h2>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[7px] md:left-1/2 w-[2px] h-full bg-border -translate-x-[1px]" />
          
          <motion.div 
            style={{ height: height }}
            className="absolute left-[7px] md:left-1/2 w-[2px] bg-foreground -translate-x-[1px] origin-top z-10"
          />

          <div className="flex flex-col gap-12 md:gap-20">
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
      
      {/* Timeline Dot: Adjusted to -6px */}
      <div className="absolute left-[7px] md:left-1/2 w-3 h-3 rounded-full bg-foreground top-0 z-20 
        -translate-x-[6px]
        shadow-[0_0_0_2px_hsl(var(--background)),0_0_8px_2px_rgba(255,255,255,0.4)] 
        dark:shadow-[0_0_0_2px_hsl(var(--background)),0_0_10px_3px_rgba(255,255,255,0.3)]" />
      
      {/* Card Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-[calc(100%-24px)] md:w-[45%] pl-6 md:pl-0"
      >
        <div className="group p-6 md:p-8 rounded-[20px] md:rounded-[24px] bg-card border border-border transition-all duration-500 hover:border-foreground/20 relative">
          
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-muted flex items-center justify-center border border-border">
              <img src={exp.logo} alt={exp.company} className="w-5 h-5 md:w-6 md:h-6 object-contain" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold tracking-tight">{exp.role}</h3>
              <p className="text-xs md:text-sm text-muted-foreground font-medium">{exp.company}</p>
            </div>
          </div>

          <div className="inline-block bg-muted/50 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-[11px] font-mono uppercase tracking-wider mb-4 md:mb-6 border border-border">
            {exp.period}
          </div>

          <ul className="text-muted-foreground leading-relaxed text-xs md:text-sm list-none space-y-2 md:space-y-3">
            {Array.isArray(exp.description) 
              ? exp.description.map((point: string, i: number) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-foreground mt-1">•</span> {point}
                  </li>
                ))
              : <li>{exp.description}</li>
            }
          </ul>
        </div>
      </motion.div>
    </div>
  )
}