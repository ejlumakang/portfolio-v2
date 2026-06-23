import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border font-mono text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-muted-foreground/80">© 2026 Eloiza Lumakang.</span>
        
        <div className="flex items-center gap-6 text-muted-foreground/80">
          <a 
            href="mailto:ejlumakang@gmail.com" 
            className="hover:text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 block"
          >
            <Mail size={18}/>
          </a>
          <a 
            href="https://github.com/ejlumakang" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 block"
          >
            <FaGithub size={18}/>
          </a>
          <a 
            href="https://www.linkedin.com/in/ejlmkng/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 block"
          >
            <FaLinkedin size={18}/>
          </a>
        </div>
      </div>
    </footer>
  )
}