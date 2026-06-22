"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sections = ["home", "experience", "technologies", "projects"];
      let currentSection = activeSection;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            currentSection = section;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const isDark = resolvedTheme === "dark";
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    if (!document.startViewTransition) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    const transition = document.startViewTransition(() => {
      setTheme(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      document.documentElement.style.setProperty("--x", `${x}px`);
      document.documentElement.style.setProperty("--y", `${y}px`);
    });
  };

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const navItems = ["home", "experience", "technologies", "projects", "resume"];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center">
      <nav className={`flex items-center gap-2 p-2 px-3 rounded-full border backdrop-blur-md transition-all w-full max-w-fit
        ${isDark ? "bg-[#1f1f1f]/80 border-white/[0.08]" : "bg-white/70 border-gray-200"}`}>
        
        <ul className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-[calc(100vw-80px)]">
          {navItems.map((item) => {
            const isResume = item === "resume";
            
            return (
              <a 
                key={item}
                href={isResume ? "https://drive.google.com/file/d/1RaPukzDFC8hjoMG-DtIEM8_sBSpGVqbw/view?usp=sharing" : `#${item}`} 
                target={isResume ? "_blank" : undefined}
                rel={isResume ? "noopener noreferrer" : undefined}
                onClick={(e) => {
                  if (!isResume) {
                    e.preventDefault(); 
                    setActiveSection(item);
                    const element = document.getElementById(item);
                    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                // COHERENT HOVER: Added hover:bg-black/5 dark:hover:bg-white/10 to match toggle button
                className={`px-4 py-2 text-sm font-medium rounded-full capitalize transition-all duration-300 whitespace-nowrap
                  ${!isResume && activeSection === item 
                    ? (isDark ? "bg-white/10 text-white" : "bg-black/10 text-black") 
                    : "text-muted-foreground hover:bg-black/5 dark:hover:bg-white/10 hover:text-foreground"
                  }`}
              >
                {item}
              </a>
            );
          })}
        </ul>
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors shrink-0">
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </nav>
    </div>
  );
}