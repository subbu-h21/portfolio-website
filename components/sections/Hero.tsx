"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";
import { siteConfig, roles } from "@/lib/data";

function useTypewriter(words: string[], typeSpeed = 75, deleteSpeed = 38, pauseMs = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    if (pausing) {
      const t = setTimeout(() => { setPausing(false); setDeleting(true); }, pauseMs);
      return () => clearTimeout(t);
    }
    if (!deleting) {
      if (text.length < word.length) {
        const t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeSpeed);
        return () => clearTimeout(t);
      } else { setPausing(true); }
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(word.slice(0, text.length - 1)), deleteSpeed);
        return () => clearTimeout(t);
      } else { setDeleting(false); setWordIdx((i) => (i + 1) % words.length); }
    }
  }, [text, wordIdx, deleting, pausing, words, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-[hsl(20_8%_4%)]">

      {/* ── Background orbs ── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(234,88,12,0.14) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(251,146,60,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />

      {/* ── Dot grid ── */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* ── Layout: left text + right photo slot ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-8 sm:px-12 lg:px-20">

        {/* LEFT — text */}
        <motion.div variants={stagger} initial="hidden" animate="show">

          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-7">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
                             border border-orange-500/30 bg-orange-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-orange-200/80 tracking-widest uppercase">
                Available for work
              </span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={fadeUp}
            className="font-display font-extrabold leading-[0.88] tracking-tight text-white mb-6"
            style={{ fontSize: "clamp(2.8rem, 4.5vw, 4.8rem)" }}
          >
            Subramanya
            <br />
            <span className="gradient-text">Hegde.</span>
          </motion.h1>

          {/* Role typewriter */}
          <motion.div variants={fadeUp}
            className="flex items-center gap-2 h-6 mb-5" aria-live="polite"
          >
            <span className="font-mono text-xs text-orange-400/50 tracking-widest">—</span>
            <span className="font-mono text-base text-white/65 tracking-wide">{typed}</span>
            <span className="w-[2px] h-3.5 bg-orange-400/60 animate-pulse" />
          </motion.div>

          {/* Bio */}
          <motion.div variants={fadeUp}
            className="text-white/65 text-base leading-relaxed mb-9 max-w-lg font-serif"
          >
            <p>
              Building AI-powered systems, automation tools, and web experiences that turn
              real-world ideas into working products. Focused on creating software that feels
              practical, fast, and genuinely useful.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mb-9">
            <a href="#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg
                         bg-orange-600 text-white text-sm font-sans font-medium
                         hover:bg-orange-500 transition-colors
                         shadow-[0_0_24px_rgba(249,115,22,0.35)]"
            >
              View Projects
            </a>
            <a href="/resume.pdf" download
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg
                         border border-white/12 text-white/60 text-sm font-sans
                         hover:bg-white/[0.06] hover:border-white/20 hover:text-white/85
                         transition-all"
            >
              Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className="flex items-center gap-5">
            {[
              { href: siteConfig.github, icon: GithubIcon, label: "GitHub" },
              { href: siteConfig.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
              { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer" aria-label={label}
                className="text-white/25 hover:text-orange-300 transition-colors duration-200"
              >
                <Icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </motion.div>

        </motion.div>


      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                   flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-white/25 tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown className="w-3.5 h-3.5 text-white/25" />
        </motion.div>
      </motion.div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(20 8% 4%))" }} />
    </section>
  );
}
