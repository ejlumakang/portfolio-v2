"use client"

import { technologies, techCategories } from "@/data/portfolio"
import { motion, Variants } from "framer-motion"

interface TechItem {
  name: string;
  icon: string;
  darkInvert?: boolean;
}

function TechCard({ tech }: { tech: TechItem }) {
  return (
    <div className="group font-mono flex flex-col items-center justify-center gap-2.5 p-3 rounded-[12px] border border-border bg-card transition-all duration-300 ease-out cursor-default select-none hover:border-pink-500 dark:hover:border-pink-400 hover:bg-pink-500/[0.01] dark:hover:bg-pink-500/[0.02] hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(236,72,153,0.12)] dark:hover:shadow-[0_2px_10px_rgba(236,72,153,0.18)] text-center">
      <div className="w-9 h-9 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-out">
        <img 
          src={tech.icon} 
          alt={tech.name} 
          className={`w-full h-full object-contain ${tech.darkInvert ? 'dark:invert' : ''}`} 
        />
      </div>
      <span className="text-[10px] tracking-tight font-bold truncate max-w-full text-muted-foreground group-hover:text-foreground dark:group-hover:text-white transition-colors duration-300 px-0.5">
        {tech.name}
      </span>
    </div>
  )
}

export default function Technologies() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  }

  return (
    <section id="technologies" className="font-sans py-16 md:py-24 border-t border-border w-full bg-background relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 mb-12 md:mb-16 items-end">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col gap-3"
          >
            <motion.span 
              variants={itemVariants}
              className="font-mono text-xs text-pink-500 dark:text-pink-400 font-bold tracking-[0.2em] uppercase mb-4"
            >
              02 / THE TOOLKIT
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="flex flex-wrap items-baseline gap-x-3 text-4xl md:text-5xl leading-[0.85]"
            >
              <span className="font-black tracking-tight text-black dark:text-white">
                Technical
              </span>
              <span className="font-serif italic text-foreground/80 font-normal">
                Stack.
              </span>
            </motion.h2>
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

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch"
        >
          {Object.entries(techCategories).map(([categoryName, techNames], index) => {
            const targetedTech = techNames
              .map(name => technologies.find(t => t.name.toUpperCase() === name.toUpperCase()))
              .filter((t): t is TechItem => !!t);

            const formattedIndex = String(index + 1).padStart(2, '0');
            const isFrontendSection = index === 2;

            return (
              <motion.div 
                key={categoryName}
                variants={itemVariants}
                className="flex flex-col p-6 rounded-xl border border-border bg-card transition-colors duration-300 relative overflow-hidden"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[11px] font-bold text-pink-500 dark:text-pink-400 bg-pink-500/5 dark:bg-pink-400/5 px-2 py-0.5 rounded-[6px] border border-pink-500/10 dark:border-pink-400/10">
                    {formattedIndex}
                  </span>
                  
                  <h3 className="text-base font-sans font-semibold text-foreground tracking-tight">
                    {categoryName}
                  </h3>
                </div>

                <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 ${
                  isFrontendSection ? "xl:grid-cols-4 gap-2" : "xl:grid-cols-3 gap-3.5"
                } content-start`}>
                  {targetedTech.map((tech) => (
                    <TechCard key={tech.name} tech={tech} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}