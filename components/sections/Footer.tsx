"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/[0.06] py-8 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(to bottom, transparent, rgba(139,92,246,0.04))",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-display font-bold text-sm text-white/80">
            Subramanya Hegde
          </span>
          <span className="hidden sm:block text-white/15">·</span>
          <span className="text-sm text-white/35 font-serif">
            Built with Next.js in Vellore
          </span>
        </div>

        <div className="flex items-center gap-5">
          {[
            { href: siteConfig.github, icon: GithubIcon, label: "GitHub" },
            { href: siteConfig.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
            { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/30 hover:text-violet-400 transition-colors duration-200"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>

        <p className="text-xs font-mono text-white/20">© {year}</p>
      </div>
    </footer>
  );
}
