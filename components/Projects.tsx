"use client"

import { useState, useEffect, useCallback } from "react"
import { projects } from "@/data/portfolio"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, ExternalLink, Award, ArrowUpRight, X } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const handleOpen = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setCurrentImgIndex(0)
  }

  const nextImg = useCallback(() => {
    if (selectedProject) {
      setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }, [selectedProject])

  const prevImg = useCallback(() => {
    if (selectedProject) {
      setCurrentImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }, [selectedProject])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return
      if (e.key === "ArrowRight") nextImg()
      if (e.key === "ArrowLeft") prevImg()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedProject, nextImg, prevImg])

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 mb-12 items-end">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-1"
          >
            <span className="font-mono text-xs text-muted-foreground/60 tracking-widest">03 / BUILDS & COLLABORATIONS</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground">Projects.</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-muted-foreground leading-relaxed"
          >
            A curated collection of academic research, team collaborations, and personal projects.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => handleOpen(project)}
              className="group cursor-pointer bg-card border border-border/80 rounded-xl overflow-hidden transition-all duration-500 ease-out flex flex-col hover:-translate-y-1.5 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] dark:hover:shadow-[0_4px_20px_-4px_rgba(255,255,255,0.08)] hover:border-foreground/15"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9.5] overflow-hidden bg-muted/20">
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 text-white font-mono text-[10px] font-medium px-2 py-1 rounded-md z-10">
                  {project.id}
                </div>
                <div className="absolute top-4 right-4 w-7 h-7 bg-black/50 backdrop-blur-md border border-white/10 text-white rounded-full flex items-center justify-center z-10 transition-all duration-300 opacity-0 transform translate-y-1 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </div>
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              
              {/* Content Area */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="font-mono text-[10px] text-muted-foreground/80 uppercase tracking-wider mb-1.5 block">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs md:text-[13px] text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/60">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag.name} className="flex items-center gap-1 text-[11px] font-medium bg-secondary/40 border border-border/50 px-2 py-0.5 rounded-md text-muted-foreground">
                      <img 
                        src={tag.icon} 
                        alt={tag.name} 
                        className={`w-3 h-3 ${(tag as any).darkInvert ? 'dark:invert' : ''}`}
                      />
                      {tag.name}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-mono text-muted-foreground/60 self-center pl-1">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <AnimatePresence>
          {selectedProject && (
            <DialogContent className="sm:max-w-[1200px] w-[95vw] h-[85vh] p-0 overflow-hidden bg-card border-border rounded-2xl [&>button]:hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col md:flex-row w-full h-full overflow-hidden relative group"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 rounded-full bg-background/80 backdrop-blur-md border border-muted-foreground/30 transition-all duration-300 hover:border-foreground hover:scale-110 active:scale-95"
                  aria-label="Close modal dialog"
                >
                  <X size={18} strokeWidth={2.5} className="transition-colors duration-300 text-muted-foreground text-foreground" />
                </button>

                <DialogTitle className="sr-only">{selectedProject.title}</DialogTitle>
                <DialogDescription className="sr-only">{selectedProject.description}</DialogDescription>
                
                <div className="w-full h-[45%] md:w-[60%] md:h-full bg-background relative flex items-center justify-center p-4 md:p-8 border-b md:border-b-0 md:border-r border-border overflow-hidden">
                  {selectedProject.images.length > 1 && (
                    <>
                      <button onClick={prevImg} className="absolute left-4 z-10 p-2.5 md:p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition" aria-label="Previous screenshot"><ChevronLeft size={20} /></button>
                      <button onClick={nextImg} className="absolute right-4 z-10 p-2.5 md:p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition" aria-label="Next screenshot"><ChevronRight size={20} /></button>
                    </>
                  )}
                  <div className="w-full h-full flex items-center justify-center relative">
                    <motion.img 
                      key={currentImgIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      src={selectedProject.images[currentImgIndex]} 
                      alt={`Project Screenshot view folder ${currentImgIndex + 1}`} 
                      className="max-w-full max-h-full object-contain rounded-lg shadow-sm"
                    />
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white font-mono text-xs px-3 py-1.5 rounded-md select-none">
                    {currentImgIndex + 1} / {selectedProject.images.length}
                  </div>
                </div>

                <div className="w-full h-[55%] md:w-[40%] md:h-full p-6 md:p-10 overflow-y-auto flex flex-col gap-y-6 md:gap-y-8">
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-2">PROJECT • {selectedProject.id}</div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">{selectedProject.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">{selectedProject.description}</p>
                  </div>
                  
                  {selectedProject.awards && (
                    <div>
                      <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-3">Awards & Certificates</span>
                      {selectedProject.awards.map(award => (
                        <span key={award} className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-500 text-xs font-semibold px-3 py-1.5 rounded-md mb-2 block w-fit">
                          <Award size={14} /> {award}
                        </span>
                      ))}
                      {(selectedProject as any).certificates && (selectedProject as any).certificates.length > 0 && (
                        <div className="grid grid-cols-4 gap-2 mt-2">
                          {(selectedProject as any).certificates.map((cert: string, i: number) => (
                            <img key={i} src={cert} alt="Award credential document mini view" onClick={() => window.open(cert, "_blank")} className="cursor-pointer border border-border rounded-lg aspect-[4/3] object-cover hover:border-foreground/50 transition" />
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <div>
                    <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-3">Built With</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag.name} className="flex items-center gap-1.5 text-xs bg-foreground/5 border border-border px-3 py-1.5 rounded-md text-muted-foreground">
                          <img 
                            src={tag.icon} 
                            alt={tag.name} 
                            className={`w-3.5 h-3.5 ${(tag as any).darkInvert ? 'dark:invert' : ''}`} 
                          />
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-dashed border-border">
                    <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-3">Links</span>
                    <div className="flex gap-2 flex-wrap">
                      {selectedProject.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center h-9 px-4 rounded-full text-xs font-medium gap-2 border transition-colors duration-200 ${
                            link.label !== 'Demo' 
                              ? 'bg-transparent border-muted-foreground/40 text-muted-foreground hover:text-foreground hover:border-foreground' 
                              : 'bg-foreground text-background hover:opacity-90'
                          }`}
                        >
                          {link.label} <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
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