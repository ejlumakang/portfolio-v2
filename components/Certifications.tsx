"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Calendar } from "lucide-react"
import { certifications } from "@/data/portfolio"

const getCredlyLink = (id: string) => {
  return id.startsWith("cert-") 
    ? "https://www.credly.com/users/eloiza-lumakang/badges/credly" 
    : "https://www.credly.com/users/eloiza-lumakang"
}

const getBadgeIcon = (id: string) => {
  const badges: Record<string, string> = {
    "cert-01": "https://images.credly.com/size/680x680/images/e8fe3d67-2967-43d0-bc4a-7a268a37f47b/image.png",
    "cert-02": "https://images.credly.com/size/680x680/images/dcdf1a3c-2594-4f4c-a33a-050b4bca58b5/image.png",
    "cert-03": "https://images.credly.com/size/680x680/images/1fdfeaeb-e61c-4450-bdfe-a07bd4e715df/image.png",
    "cert-04": "https://images.credly.com/size/680x680/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    "cert-05": "https://images.credly.com/size/680x680/images/fce226c2-0f13-4e17-b60c-24fa6ffd88cb/Intro2IoT.png",
    "cert-06": "https://images.credly.com/size/680x680/images/b38a42e0-dc58-4ce2-b6c0-28d978e8aaad/image.png",
  }
  return badges[id] || "https://images.credly.com/images/9936cf18-0f04-4560-b8d9-2fb0e806bc3d/Linux_Essentials.png"
}

export default function Certifications() {
  const topRow = certifications.slice(0, 3)
  const bottomRow = certifications.slice(3, 6)

  return (
    <section id="certifications" className="py-20 md:py-28 border-t border-border bg-background relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 mb-16 md:mb-24 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-1"
          >
            <span className="font-mono text-xs text-muted-foreground/60 tracking-widest">04 / KNOWLEDGE BASE</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">Certifications.</h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base text-muted-foreground leading-relaxed"
          >
            Technical specializations and industry-vetted skill pathways verified by Cisco Networking Academy.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-6 flex flex-col">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topRow.map((cert, idx) => (
              <motion.a
                key={cert.id}
                href={getCredlyLink(cert.id)}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group/badge w-full bg-card border border-border rounded-xl p-6 flex items-center gap-5 transition-colors duration-300 hover:border-foreground/20 hover:shadow-md relative overflow-hidden transform-gpu backface-hidden"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center relative transition-transform duration-500 group-hover/badge:scale-105">
                  <img 
                    src={getBadgeIcon(cert.id)}
                    alt={cert.title}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>

                <div className="flex flex-col justify-between flex-grow h-full min-w-0">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[9px] text-muted-foreground/60 uppercase tracking-widest block">
                      {cert.issuer} Academy
                    </span>
                    <h3 className="text-sm font-bold tracking-tight text-foreground leading-snug line-clamp-1 group-hover/badge:text-foreground/80 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground/40 mt-3">
                    <Calendar size={11} />
                    <span>Issued {cert.date}</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 text-muted-foreground/30 group-hover/badge:text-foreground group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5 transition-all duration-300">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </div>
              </motion.a>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bottomRow.map((cert, idx) => (
              <motion.a
                key={cert.id}
                href={getCredlyLink(cert.id)}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ duration: 0.5, delay: (idx + 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group/badge w-full bg-card border border-border rounded-xl p-6 flex items-center gap-5 transition-colors duration-300 hover:border-foreground/20 hover:shadow-md relative overflow-hidden transform-gpu backface-hidden"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center relative transition-transform duration-500 group-hover/badge:scale-105">
                  <img 
                    src={getBadgeIcon(cert.id)}
                    alt={cert.title}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </div>

                <div className="flex flex-col justify-between flex-grow h-full min-w-0">
                  <div className="space-y-0.5">
                    <span className="font-mono text-[9px] text-muted-foreground/60 uppercase tracking-widest block">
                      {cert.issuer} Academy
                    </span>
                    <h3 className="text-sm font-bold tracking-tight text-foreground leading-snug line-clamp-1 group-hover/badge:text-foreground/80 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground/40 mt-3">
                    <Calendar size={11} />
                    <span>Issued {cert.date}</span>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 text-muted-foreground/30 group-hover/badge:text-foreground group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5 transition-all duration-300">
                  <ArrowUpRight size={14} strokeWidth={2.5} />
                </div>
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}