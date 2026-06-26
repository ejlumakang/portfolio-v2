"use client"

import { motion } from "framer-motion"
import { Copy, ArrowUpRight } from "lucide-react"
import { useState } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } }
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText("ejlumakang@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20 md:py-24 border-t border-border bg-background">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-16 items-center"
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <span className="font-mono text-xs text-pink-500 font-bold tracking-[0.2em] uppercase">05 / GET IN TOUCH</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9]">
            Building things<br />
            <span className="font-serif italic text-foreground/80">that work.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            I'm currently looking for new opportunities and open to collaborating on projects. Feel free to reach out if you'd like to chat.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col gap-4">
          <a href="https://linkedin.com/in/ejlumakang" target="_blank" rel="noreferrer" className="group p-6 rounded-2xl border border-border bg-card hover:border-pink-500 transition-all flex items-center justify-between">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">LinkedIn</p>
              <p className="font-medium">linkedin.com/in/ejlumakang</p>
            </div>
            <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-pink-500 transition-colors" />
          </a>

          <a href="https://github.com/ejlumakang" target="_blank" rel="noreferrer" className="group p-6 rounded-2xl border border-border bg-card hover:border-pink-500 transition-all flex items-center justify-between">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Github</p>
              <p className="font-medium">github.com/ejlumakang</p>
            </div>
            <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-pink-500 transition-colors" />
          </a>

          <button 
            onClick={copyToClipboard}
            className="group w-full text-left p-6 rounded-2xl border border-border bg-card hover:border-pink-500 transition-all flex items-center justify-between"
          >
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Email</p>
              <p className="font-medium">ejlumakang@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border group-hover:bg-pink-500/10 group-hover:border-pink-500 transition-colors text-sm font-medium">
              {copied ? "Copied!" : "Copy"} <Copy size={14} className="group-hover:text-pink-500" />
            </div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}