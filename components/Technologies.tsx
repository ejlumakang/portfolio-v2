"use client"

import { technologies } from "@/data/portfolio"
import { motion } from "framer-motion"

export default function Technologies() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 mb-16 items-end">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-pink-500 font-bold tracking-[0.2em] uppercase">
              02 / THE TOOLKIT
            </span>
            <h2 className="flex flex-wrap items-baseline gap-x-3 text-4xl md:text-5xl leading-[0.85]">
              <span className="font-black tracking-tight text-foreground">Technical</span>
              <span className="font-serif italic text-foreground/80 font-normal">Stack.</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            These are the tools and stacks I’ve worked with through projects and academics, and stuff I'm still actively playing around with and learning as I go.
          </p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 auto-rows-[110px] [grid-auto-flow:dense]">
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`group relative p-4 rounded-2xl border border-border bg-card hover:border-pink-500 transition-all duration-300 overflow-hidden
                ${(tech as any).size === 'large' ? 'col-span-2 row-span-2' : 
                  (tech as any).size === 'medium' ? 'col-span-2' : 'col-span-1'}`}
            >
              <div className="flex flex-col h-full justify-between z-10 relative">
                
                <div className="w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className={`w-full h-full object-contain ${(tech as any).darkInvert ? 'dark:invert' : ''}`} 
                  />
                </div>
                
                <div className="opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="font-bold text-xs text-foreground truncate">{tech.name}</h3>
                  <p className="text-[9px] font-mono font-bold tracking-widest uppercase text-muted-foreground/50 truncate mt-0.5">
                    {(tech as any).category || 'TOOL'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}