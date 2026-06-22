import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border font-mono text-sm">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-muted-foreground">© 2026 Eloiza Lumakang.</span>
        <div className="flex items-center gap-6 text-muted-foreground">
          <a href="mailto:ejlumakang@gmail.com" className="hover:text-foreground transition-transform hover:-translate-y-1"><Mail size={18}/></a>
          <a href="https://github.com/ejlumakang" target="_blank" className="hover:text-foreground transition-transform hover:-translate-y-1"><FaGithub size={18}/></a>
          <a href="https://www.linkedin.com/in/ejlmkng/" target="_blank" className="hover:text-foreground transition-transform hover:-translate-y-1"><FaLinkedin size={18}/></a>
        </div>
      </div>
    </footer>
  )
}