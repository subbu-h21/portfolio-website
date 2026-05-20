"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "backdrop-blur-xl bg-black/25 border-b border-white/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display font-bold text-sm tracking-tight text-white/90 hover:text-white transition-colors"
          >
            SH<span className="text-orange-400">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "relative text-sm font-serif transition-colors duration-200",
                    isActive ? "text-white" : "text-white/50 hover:text-white/80"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-orange-400"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-lg
                         border border-white/10 text-white/80 text-sm font-serif
                         hover:bg-white/10 hover:border-white/20 hover:text-white
                         transition-all duration-200 backdrop-blur-sm"
            >
              Resume
            </a>
            <button
              className="md:hidden w-8 h-8 border border-white/10 rounded-lg flex items-center justify-center
                         text-white/60 hover:text-white hover:border-white/20 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{
              background: "rgba(8, 5, 2, 0.96)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.06, ease: "easeOut" }}
                onClick={() => scrollTo(link.href)}
                className="font-display text-3xl font-bold text-white/80 hover:text-white hover:text-orange-300 transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.a
              href="/resume.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
              className="mt-2 px-6 py-2.5 border border-orange-500/40 text-orange-300 font-serif text-sm
                         hover:bg-orange-500/10 hover:border-orange-400/60 transition-all rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
