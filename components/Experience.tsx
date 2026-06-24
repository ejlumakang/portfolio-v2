"use client"

import { useRef } from "react"
import { experience, technologies } from "@/data/portfolio"
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
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 md:mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-1"
          >
            <span className="font-mono text-xs text-muted-foreground/60 tracking-widest">01 / WHERE I'VE BEEN</span>
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
  
  const getTechIcon = (techName: string) => {
    const foundTech = technologies.find(
      (t) => t.name.toLowerCase() === techName.toLowerCase()
    )
    return foundTech ? foundTech.icon : null
  }

  const startYear = exp.period.match(/\d{4}/)?.[0] || exp.period.split(" ").shift()

  return (
    <div className={`relative flex w-full justify-start md:justify-center ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
      
      {/* Timeline Dot */}
      <div className="absolute left-[7px] md:left-1/2 w-3 h-3 rounded-full bg-foreground top-4 z-20 
        -translate-x-[6px]
        shadow-[0_0_0_2px_hsl(var(--background)),0_0_8px_2px_rgba(255,255,255,0.4)] 
        dark:shadow-[0_0_0_2px_hsl(var(--background)),0_0_10px_3px_rgba(255,255,255,0.3)]" />
      
      {/* Background Floating Token displaying the startYear */}
      <div 
        className={`hidden md:block absolute top-5 font-mono text-7xl font-medium tracking-tighter select-none pointer-events-none transition-all duration-500 px-2
          text-foreground/10 dark:text-foreground/10 group-hover:text-foreground/40 dark:group-hover:text-foreground/30 group-hover:scale-[1.03]
          ${isLeft ? "left-[54%] text-left" : "right-[54%] text-right"}`}
      >
        {startYear}
      </div>

      {/* Card Wrapper */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-[calc(100%-24px)] md:w-[46%] pl-6 md:pl-0 group"
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
                <h3 className="text-base font-bold tracking-tight leading-snug truncate">{exp.role}</h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-medium mt-0.5">{exp.company}</p>
            </div>
          </div>

          <ul className="text-muted-foreground leading-relaxed text-sm list-none space-y-2 pl-0 mb-4 relative z-10">
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