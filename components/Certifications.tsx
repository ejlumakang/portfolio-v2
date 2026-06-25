"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Calendar, Trophy, Award, X, ExternalLink, Briefcase } from "lucide-react"
import { certifications } from "@/data/portfolio"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"

type FilterType = "CERTIFICATION" | "COMPETITION" | "EVENTS"

const getCredlyLink = (id: string) => {
  return id.startsWith("cert-") 
    ? "https://www.credly.com/users/eloiza-lumakang/badges/credly" 
    : "https://www.credly.com/users/eloiza-lumakang"
}

const getFallbackIcon = (type: string) => {
  if (type === "COMPETITION") return "https://images.credly.com/images/9c3ea1af-2212-42c2-b7e1-87c6b5b9cf4a/Competency_Icon.png" 
  return "https://images.credly.com/images/9936cf18-0f04-4560-b8d9-2fb0e806bc3d/Linux_Essentials.png"
}

const getTypeMeta = (type: string) => {
  switch (type) {
    case "COMPETITION":
      return { label: "Competition", icon: Trophy, color: "text-pink-400 bg-pink-500/10 border-pink-500/20" }
    case "EVENTS":
      return { label: "Events", icon: Briefcase, color: "text-pink-400 bg-pink-500/10 border-pink-500/20" }
    default:
      return { label: "Certification", icon: Award, color: "text-pink-400 bg-pink-500/10 border-pink-500/20" }
  }
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

  const filteredCertifications = certifications.filter(cert => {
    return cert.type === activeFilter
  })

  return (
    <section id="certifications" ref={sectionRef} className="py-20 md:py-28 border-t border-border bg-background relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] opacity-100 -z-30" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 mb-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            {/* UPDATED PILL OVERLAY LAYER: Changed text color fields to matching vibrant theme pink styles */}
            <span className="font-mono text-xs text-pink-500 dark:text-pink-400 font-bold tracking-[0.2em] uppercase mb-4">
              04 / THE CREDENTIALS
            </span>
           <h2 className="flex flex-wrap items-baseline gap-x-3 text-4xl md:text-5xl leading-[0.85]">
            <span className="font-black tracking-tight text-black dark:text-white">
              Knowledge
            </span>
            <span className="font-serif text-black dark:text-white subpixel-antialiased tracking-normal">
              Base.
            </span>
          </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-muted-foreground leading-relaxed"
          >
           This growing knowledge base includes professional certifications, tech competitions, and the various workshops and seminars I’ve joined to level up my skills.
          </motion.p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap gap-2 mb-12 pb-2 border-b border-border/40">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`relative px-4 py-2 text-xs font-mono font-medium rounded-full transition-colors duration-300 ${
                  isActive ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCertFilter"
                    className="absolute inset-0 bg-muted rounded-full -z-10 border border-border"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {filter.label}
              </button>
            )
          })}
        </div>

        {/* Certifications Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[200px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredCertifications.map((cert) => {
              const meta = getTypeMeta(cert.type || "CERTIFICATION")
              const IconComponent = meta.icon
              const actionText = cert.result || (cert.type === "COMPETITION" ? "Won" : "Issued")

              return (
                <motion.div
                  layout
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group/badge w-full bg-card border border-border rounded-xl p-6 flex items-center gap-5 transition-colors duration-300 hover:border-foreground/20 hover:shadow-md relative overflow-hidden transform-gpu backface-hidden cursor-pointer select-none"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center relative transition-transform duration-500 group-hover/badge:scale-105 overflow-hidden rounded-md bg-muted/30">
                    <img 
                      src={cert.image || getFallbackIcon(cert.type || "CERTIFICATION")}
                      alt={cert.title}
                      className="w-full h-full object-contain filter drop-shadow-sm"
                    />
                  </div>

                  <div className="flex flex-col justify-between flex-grow h-full min-w-0">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-mono text-[9px] text-muted-foreground/60 uppercase tracking-widest truncate">
                          {cert.issuer}
                        </span>
                        <span className={`flex items-center gap-1 text-[8px] font-mono font-bold uppercase tracking-wide border px-1.5 py-0.5 rounded-md ${meta.color}`}>
                          <IconComponent size={9} />
                          {meta.label}
                        </span>
                      </div>
                      
                      <h3 className="text-sm font-bold tracking-tight text-foreground leading-snug line-clamp-2 group-hover/badge:text-foreground/80 transition-colors">
                        {cert.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground/40 mt-3">
                      <Calendar size={11} />
                      <span>{actionText} {cert.date}</span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 text-muted-foreground/30 group-hover/badge:text-foreground group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5 transition-all duration-300">
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Preview Modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <AnimatePresence>
          {selectedCert && (
            <DialogContent className="sm:max-w-[800px] w-[95vw] h-[75vh] p-0 overflow-hidden bg-card border-border rounded-2xl [&>button]:hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col w-full h-full relative"
              >
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-md border border-muted-foreground/30 transition-all duration-300 hover:border-foreground hover:scale-110 active:scale-95"
                  aria-label="Close dialog"
                >
                  <X size={18} strokeWidth={2.5} className="text-muted-foreground hover:text-foreground transition-colors" />
                </button>

                <DialogTitle className="sr-only">{selectedCert.title}</DialogTitle>
                <DialogDescription className="sr-only">Visual validation image for {selectedCert.title}</DialogDescription>
                
                <div className="w-full flex-grow bg-background relative flex items-center justify-center p-6 md:p-12 overflow-hidden border-b border-border">
                  <img 
                    src={selectedCert.image || getFallbackIcon(selectedCert.type || "CERTIFICATION")} 
                    alt={`${selectedCert.title} verification credential view`} 
                    className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                  />
                </div>

                <div className="w-full p-5 md:p-6 bg-card flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <span className="block font-mono text-[9px] text-muted-foreground uppercase tracking-widest mb-0.5">
                      {selectedCert.issuer}
                    </span>
                    <h2 className="text-base font-bold tracking-tight text-foreground">{selectedCert.title}</h2>
                  </div>
                  
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-xs text-muted-foreground">
                      {selectedCert.result || (selectedCert.type === "COMPETITION" ? "Won" : "Issued")}: {selectedCert.date}
                    </span>
                    <a
                      href={getCredlyLink(selectedCert.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-9 px-4 rounded-full text-xs font-medium gap-2 border bg-foreground text-background hover:opacity-95 transition-opacity"
                    >
                      Verify Credentials <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>
    </section>
  )
}