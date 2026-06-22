"use client"

import { useState } from "react"
import { projects } from "@/data/portfolio"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, ExternalLink, Award, ArrowUpRight, X } from "lucide-react"
import { Button } from "./ui/button"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const handleOpen = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setCurrentImgIndex(0)
  }

  const nextImg = () => {
    if (selectedProject) {
      setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length)
    }
  }

  const prevImg = () => {
    if (selectedProject) {
      setCurrentImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
    }
  }

  return (
    <section id="projects" className="py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-8 md:gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2"
          >
            <span className="font-mono text-sm text-muted-foreground">03 /</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Projects.</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            A collection of work ranging from academic research and collaborative team builds to personal projects I work on in my free time.
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => handleOpen(project)}
              className="group cursor-pointer bg-card border border-border rounded-[15px] overflow-hidden transition-all duration-500 ease-out flex flex-col hover:-translate-y-2 hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] hover:border-foreground/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#141416]">
                <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-md border border-white/10 text-white font-mono text-[11px] font-medium px-2 py-1.5 rounded-md z-10">
                  {project.id}
                </div>
                <div className="absolute top-5 right-5 w-8 h-8 bg-black/40 backdrop-blur-md border border-white/10 text-white rounded-full flex items-center justify-center z-10 transition-all duration-200 group-hover:bg-white group-hover:text-black group-hover:scale-105">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </div>
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <span className="font-mono text-[0.75rem] text-muted-foreground uppercase tracking-[0.05em] mb-3 block">
                  {project.category}
                </span>
                <h3 className="text-[1.45rem] font-semibold tracking-tight text-foreground mb-3">{project.title}</h3>
                <p className="text-[0.95rem] text-muted-foreground line-clamp-3 mb-6 leading-[1.6]">{project.description}</p>
                <div className="border-t border-border mt-auto mb-6" />
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 5).map(tag => (
                    <span key={tag.name} className="flex items-center gap-1.5 text-[0.78rem] font-medium bg-foreground/5 border border-border px-3 py-1.5 rounded-md text-muted-foreground">
                      <img src={tag.icon} alt={tag.name} className={`w-[14px] h-[14px] object-contain ${tag.darkInvert ? 'dark:invert' : ''}`} />
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
                  className="absolute top-6 right-6 z-50 p-2 rounded-full bg-transparent border border-muted-foreground/40 transition-all duration-300 hover:border-foreground hover:scale-110 active:scale-95"
                >
                  <X size={20} strokeWidth={2.5} className="transition-colors duration-300 text-muted-foreground group-hover:text-foreground" />
                </button>

                <DialogTitle className="sr-only">{selectedProject.title}</DialogTitle>
                <DialogDescription className="sr-only">{selectedProject.description}</DialogDescription>
                
                <div className="w-full h-1/2 md:w-[60%] md:h-full bg-background relative flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-border">
                  {selectedProject.images.length > 1 && (
                    <>
                      <button onClick={prevImg} className="absolute left-4 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition"><ChevronLeft size={20} /></button>
                      <button onClick={nextImg} className="absolute right-4 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 transition"><ChevronRight size={20} /></button>
                    </>
                  )}
                  <motion.img 
                    key={currentImgIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    src={selectedProject.images[currentImgIndex]} 
                    alt="Project View" 
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white font-mono text-xs px-3 py-1.5 rounded-md">
                    0{currentImgIndex + 1} / 0{selectedProject.images.length}
                  </div>
                </div>

                <div className="w-full h-1/2 md:w-[40%] md:h-full p-6 md:p-10 overflow-y-auto flex flex-col gap-y-8">
                  <div>
                    <div className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-3">PROJECT • {selectedProject.id}</div>
                    <h2 className="text-3xl font-bold mb-3">{selectedProject.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">{selectedProject.description}</p>
                  </div>
                  
                  {selectedProject.awards && (
                    <div>
                      <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-4">Awards & Certificates</span>
                      {selectedProject.awards.map(award => (
                        <span key={award} className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-500 text-xs font-semibold px-3 py-1.5 rounded-md mb-2 block w-fit">
                          <Award size={14} /> {award}
                        </span>
                      ))}
                      {(selectedProject as any).certificates && (selectedProject as any).certificates.length > 0 && (
                        <div className="grid grid-cols-4 gap-2 mt-2">
                          {(selectedProject as any).certificates.map((cert: string, i: number) => (
                            <img key={i} src={cert} onClick={() => window.open(cert, "_blank")} className="cursor-pointer border border-border rounded-lg aspect-[4/3] object-cover hover:border-foreground/50 transition" />
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <div>
                    <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-4">Built With</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag.name} className="flex items-center gap-1.5 text-xs bg-foreground/5 border border-border px-3 py-1.5 rounded-md text-muted-foreground">
                          <img src={tag.icon} alt={tag.name} className={`w-3.5 h-3.5 ${tag.darkInvert ? 'dark:invert' : ''}`} />
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-dashed border-border">
                    <span className="block font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-4">Links</span>
                    <div className="flex gap-2 flex-wrap">
                      {selectedProject.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
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