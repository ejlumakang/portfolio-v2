"use client"

import { technologies } from "@/data/portfolio"
import { motion } from "framer-motion"
import { Settings, ChartNoAxesCombined, Code } from "lucide-react"

export default function Technologies() {
  const categories = [
    { 
      id: "languages & frameworks", 
      title: "Languages & Frameworks", 
      icon: Code 
    },
    { 
      id: "data science & analytics", 
      title: "Data Science & Analytics", 
      icon: ChartNoAxesCombined 
    },
    { 
      id: "tools & technologies", 
      title: "Tools & Technologies", 
      icon: Settings 
    }
  ]

  return (
    <section id="technologies" className="py-20 md:py-28 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 mb-16 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="flex flex-col gap-3"
          >
            <span className="font-mono text-xs text-pink-500 font-bold tracking-[0.2em] uppercase">02 / THE TOOLKIT</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Technical <span className="font-serif italic text-foreground/80 font-normal">Stack.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="text-base text-muted-foreground leading-relaxed"
          >
            These are the tools and stacks I’ve worked with through projects and academics, and stuff I'm still actively playing around with and learning as I go.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div 
              key={category.id} 
              className="p-6 rounded-3xl border border-border bg-card flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-2 rounded-xl bg-pink-500/10 text-pink-500">
                  <category.icon size={18} strokeWidth={2.5} />
                </div>
                <h3 className="text-[18px] font-bold tracking-tight">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {technologies
                  .filter(t => t.category === category.title.toUpperCase())
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((tech) => (
                    <motion.div 
                      key={tech.name} 
                      className="flex flex-col items-center gap-2 group"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div className="w-full aspect-square p-2.5 rounded-xl border border-border/60 bg-white/5 flex items-center justify-center hover:border-pink-500/50 transition-all shadow-sm">
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className={`w-full h-full object-contain ${(tech as any).darkInvert ? 'dark:invert' : ''}`} 
                        />
                      </div>
                      <span className="font-mono text-[8px] font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center w-full truncate px-1">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}