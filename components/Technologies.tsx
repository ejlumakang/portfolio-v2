"use client"

import { technologies } from "@/data/portfolio"
import { motion } from "framer-motion"

function TechCard({ tech }: { tech: any }) {
  return (
    <div className="w-[260px] flex-shrink-0 group flex items-center gap-4 p-4 rounded-[16px] border border-border bg-card hover:border-foreground/20 transition-all duration-300">
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-[10px] bg-muted/50 p-2">
        <img 
          src={tech.icon} 
          alt={tech.name} 
          className={`w-full h-full object-contain ${tech.darkInvert ? 'dark:invert' : ''}`} 
        />
      </div>
      <div className="flex flex-col overflow-hidden">
        <span className="text-sm font-bold truncate">{tech.name}</span>
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Technology</span>
      </div>
    </div>
  )
}

export default function Technologies_3() {
  const half = Math.ceil(technologies.length / 2)
  const row1 = technologies.slice(0, half)
  const row2 = technologies.slice(half)

  return (
    <section id="technologies" className="py-20 md:py-32 border-t border-border w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        
        {/* Header with Staggered Animation */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="flex flex-col items-center gap-2"
          >
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="font-mono text-sm text-muted-foreground"
            >
              02 /
            </motion.span>
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl md:text-6xl font-bold tracking-tighter"
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
        className="flex flex-col gap-6 mt-24 relative w-full overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        {/* Row 1 */}
        <div className="flex overflow-hidden w-full">
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
        <div className="flex overflow-hidden w-full">
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