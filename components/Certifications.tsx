"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, X, ArrowUpRight } from "lucide-react"
import { certifications } from "@/data/portfolio"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"

type FilterType = "CERTIFICATION" | "COMPETITION" | "EVENTS"

const getFallbackIcon = (type: string) => {
  if (type === "COMPETITION") return "https://images.credly.com/images/9c3ea1af-2212-42c2-b7e1-87c6b5b9cf4a/Competency_Icon.png" 
  return "https://images.credly.com/images/9936cf18-0f04-4560-b8d9-2fb0e806bc3d/Linux_Essentials.png"
}

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeFilter, setActiveFilter] = useState<FilterType>("CERTIFICATION")
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null)

  const filters: { label: string; value: FilterType }[] = [
    { label: "Credentials", value: "CERTIFICATION" },
    { label: "Competitions", value: "COMPETITION" },
    { label: "Events", value: "EVENTS" },
  ]

  const filteredCertifications = certifications.filter(cert => cert.type === activeFilter)

  return (
    <section id="certifications" ref={sectionRef} className="py-20 md:py-28 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col gap-12 mb-16">
          <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-end">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-3">
              <span className="font-mono text-xs text-pink-500 font-bold tracking-[0.2em] uppercase">04 / THE CREDENTIALS</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Knowledge <span className="font-serif italic text-foreground/80 font-normal">Base.</span>
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              className="text-base text-muted-foreground leading-relaxed"
            >
              This includes professional certifications, tech competitions, and the various workshops and seminars I’ve joined to level up my skills.
            </motion.p>
          </div>

          <div className="relative pt-6 flex items-center justify-center">
            <div className="flex items-center gap-1 bg-card border border-border p-1 rounded-full w-fit relative">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.value;
                return (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`px-4 py-2 text-xs font-mono font-medium rounded-full transition-colors relative z-10 ${
                      isActive 
                        ? "text-primary-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="relative z-20">{filter.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-foreground rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredCertifications.map((cert, index) => {
              const displayId = (index + 1).toString().padStart(2, '0');
              return (
                <motion.div
                  layout
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.2, 
                    ease: "easeInOut",
                    layout: { duration: 0.3 }
                  }}
                  className="group cursor-pointer bg-card border border-border/80 rounded-xl overflow-hidden transition-all duration-300 ease-out flex flex-col hover:-translate-y-1.5 hover:shadow-[0_4px_20px_-4px_rgba(236,72,153,0.15)] dark:hover:shadow-[0_4px_20px_-4px_rgba(236,72,153,0.25)] hover:border-pink-500 dark:hover:border-pink-400"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted/20 p-6 flex items-center justify-center">
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] font-medium px-2 py-1 rounded-md z-10">
                      {displayId}
                    </div>
                    <div className="absolute top-4 right-4 w-7 h-7 bg-black/50 backdrop-blur-md border border-white/10 text-white rounded-full flex items-center justify-center z-10 transition-all duration-300 opacity-0 transform translate-y-1 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </div>
                    <img 
                      src={cert.image || getFallbackIcon(cert.type || "CERTIFICATION")} 
                      alt={cert.title} 
                      className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-300"
                    />
                  </div>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="font-mono text-[10px] text-muted-foreground/80 uppercase tracking-widest mb-1.5 block">{cert.issuer}</p>
                    
                    {/* Changed transition-colors to explicit text property targeting to fix dark mode lag */}
                    <h3 className="text-base font-bold tracking-tight text-foreground mb-4 group-hover:text-pink-400 dark:group-hover:text-pink-300 transition-[color] duration-300">
                      {cert.title}
                    </h3>
                    
                    <div className="mt-auto pt-4 border-t border-border/60 flex items-center justify-between">
                      {cert.type === "COMPETITION" && cert.result ? (
                        <span className="text-[10px] font-bold text-pink-500 uppercase">{cert.result}</span>
                      ) : <span />}
                      <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1">
                        <Calendar size={10} /> {cert.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="sm:max-w-[850px] w-[95vw] p-0 overflow-hidden bg-transparent border-none shadow-none [&>button]:hidden">
          <DialogTitle className="sr-only">Certificate Preview</DialogTitle>
          <DialogDescription className="sr-only">Large view of the selected certification</DialogDescription>
          
          {selectedCert && (
            <div className="relative">
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-colors"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
              <img 
                src={selectedCert.image || getFallbackIcon(selectedCert.type || "CERTIFICATION")} 
                alt={selectedCert.title} 
                className="w-full h-auto rounded-lg shadow-2xl" 
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}