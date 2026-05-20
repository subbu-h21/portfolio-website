"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/shared/SocialIcons";
import { projects } from "@/lib/data";
import { SectionWrapper, SectionHeading } from "../shared/SectionWrapper";

function ArchitectureFlow({ steps }: { steps: string[] }) {
  return (
    <div className="flex items-center gap-2 flex-wrap mt-4">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md border border-white/[0.08] bg-white/[0.04]
                           font-mono text-xs text-white/45">
            {step}
          </span>
          {i < steps.length - 1 && (
            <ArrowRight className="w-3 h-3 text-orange-400/30 shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [archOpen, setArchOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="glass-card rounded-2xl overflow-hidden"
    >
      {/* Gradient top border glow */}
      <div
        className="h-px w-full"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${project.gradient
            .replace("from-", "")
            .split(" ")[0]
            .replace("from-", "")
            }, transparent 100%)`,
        }}
      >
        <div className={`h-px bg-gradient-to-r ${project.gradient} opacity-70`} />
      </div>

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-6 mb-5">
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <h3 className="font-display font-bold text-xl text-white">{project.title}</h3>
              <span className="font-mono text-xs px-2 py-0.5 rounded-md border border-white/[0.08]
                               bg-white/[0.04] text-white/45">
                {project.category}
              </span>
            </div>
            <p className="font-mono text-sm text-white/50">{project.date}</p>
          </div>
          <a
            href={project.github}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08]
                       text-xs font-mono text-white/45 hover:text-orange-300 hover:border-orange-500/30
                       hover:bg-orange-500/5 transition-all shrink-0"
          >
            <GithubIcon className="w-3 h-3" />
            GitHub
          </a>
        </div>

        {/* Impact metric */}
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg
                        border border-white/[0.07] bg-white/[0.03] mb-5">
          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} shrink-0`} />
          <span className="font-mono text-sm text-white/80">{project.impact}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-0.5 rounded-md border border-white/[0.07]
                         bg-white/[0.03] text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bullets */}
        <ul className="space-y-2.5 mb-6">
          {project.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-base text-white/70 leading-relaxed font-serif"
            >
              <span className="mt-2 w-1 h-1 rounded-full bg-orange-400/50 shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Architecture */}
        <div className="border-t border-white/[0.06] pt-4">
          <button
            onClick={() => setArchOpen(!archOpen)}
            className="flex items-center justify-between w-full group"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-white/30
                             group-hover:text-orange-400/70 transition-colors">
              System Architecture
            </span>
            {archOpen ? (
              <ChevronUp className="w-3.5 h-3.5 text-white/25" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-white/25" />
            )}
          </button>
          <AnimatePresence initial={false}>
            {archOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: "hidden" }}
              >
                <ArchitectureFlow steps={project.architecture} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="// projects"
        title="Work That Ships"
        subtitle="Real systems solving real problems — built, deployed, and used daily."
      />

      <div className="space-y-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
