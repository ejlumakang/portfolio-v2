"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null); 
  const containerRef = useRef<HTMLUListElement>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const sections = ["home", "experience", "technologies", "projects", "certifications"];
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [activeSection]);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const activeElement = containerRef.current.querySelector(
      `[data-section="${activeSection}"]`
    ) as HTMLElement | null;

    if (activeElement) {
      setPillStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
        opacity: 1,
      });
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection, mounted]);

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
  const navItems = ["home", "experience", "technologies", "projects", "certifications"];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-8 flex justify-center items-center w-full">

      <nav className={`flex items-center justify-between flex-nowrap gap-2 p-2 pl-3 pr-4 rounded-full border backdrop-blur-md transition-all max-w-full w-auto select-none
        ${isDark ? "bg-[#1f1f1f]/80 border-white/[0.08]" : "bg-white/70 border-gray-200"}`}>
        
        <ul 
          ref={containerRef}
          className="relative flex items-center gap-1 overflow-x-auto whitespace-nowrap list-none m-0 p-0 max-w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            className="absolute inset-y-0 rounded-full pointer-events-none -z-10 bg-black dark:bg-white"
            style={{
              left: `${pillStyle.left}px`,
              width: `${pillStyle.width}px`,
              opacity: pillStyle.opacity,
              transitionProperty: "left, width, opacity",
              transitionDuration: "280ms",
              transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)", 
            }}
          />

          {navItems.map((item) => {
            const isActive = activeSection === item;
            
            return (
              <a 
                key={item}
                data-section={item}
                href={`#${item}`} 
                onClick={(e) => {
                  e.preventDefault(); 
                  
                  setActiveSection(item);
                  isScrollingRef.current = true;
                  
                  if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
                  
                  const element = document.getElementById(item);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                    
                    scrollTimeoutRef.current = setTimeout(() => {
                      isScrollingRef.current = false;
                    }, 800);
                  }
                }}
                className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-full capitalize whitespace-nowrap inline-block transition-all duration-200
                  ${isActive 
                    ? "text-white dark:text-black font-semibold" 
                    : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
              >
                <span className="relative z-10 pointer-events-none">{item}</span>
              </a>
            );
          })}
        </ul>

        <button 
          onClick={toggleTheme} 
          className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors shrink-0 ml-2"
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </nav>
    </div>
  );
}