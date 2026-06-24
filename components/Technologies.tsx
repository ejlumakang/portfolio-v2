"use client"

import { technologies } from "@/data/portfolio"
import { motion } from "framer-motion"

function TechCard({ tech }: { tech: any }) {
  return (
    <div className="w-[260px] flex-shrink-0 group flex items-center gap-4 p-4 rounded-[16px] border border-border bg-card transition-all duration-300 ease-out cursor-default select-none hover:border-foreground/20 dark:hover:border-foreground/35 hover:bg-muted/30 hover:-translate-y-1 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] dark:hover:shadow-[0_4px_20px_-4px_rgba(255,255,255,0.08)]">
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-[10px] bg-muted/50 p-2 group-hover:scale-105 group-hover:bg-card transition-all duration-300 ease-out border border-transparent group-hover:border-border/40">
        <img 
          src={tech.icon} 
          alt={tech.name} 
          className={`w-full h-full object-contain ${tech.darkInvert ? 'dark:invert' : ''} group-hover:scale-105 transition-transform duration-300`} 
        />
      </div>
      <div className="flex flex-col overflow-hidden">
        <span className="text-sm font-bold truncate group-hover:text-foreground transition-colors duration-300">{tech.name}</span>
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Technology</span>
      </div>
    </div>
  )
}

export default function Technologies() {
  const half = Math.ceil(technologies.length / 2)
  const row1 = technologies.slice(0, half)
  const row2 = technologies.slice(half)

  return (
    <section id="technologies" className="py-16 md:py-24 border-t border-border w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="flex flex-col items-center gap-1"
          >
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="font-mono text-xs text-muted-foreground/60 tracking-widest"
            >
              02 / WHAT I USE
            </motion.span>
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground"
            >
              Technologies.
            </motion.h2>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-6 mt-12 relative w-full overflow-x-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        {/* Row 1 */}
        <div className="flex overflow-x-hidden w-full py-2">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 100 }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-6 pr-6">
                {row1.map((tech) => (
                  <TechCard key={`${i}-${tech.name}`} tech={tech} />
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="flex overflow-x-hidden w-full py-2">
          <motion.div
            className="flex w-max"
            animate={{ x: ["-50%", "0%"] }} 
            transition={{ repeat: Infinity, ease: "linear", duration: 100 }} 
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-6 pr-6">
                {row2.map((tech) => (
                  <TechCard key={`${i}-${tech.name}`} tech={tech} />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
    </section>
  )
}