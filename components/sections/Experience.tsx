"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { SectionWrapper, SectionHeading } from "../shared/SectionWrapper";

const typeLabels: Record<string, string> = {
  dev: "Dev",
  creative: "Creative",
  leadership: "Leadership",
  business: "Business",
};

const typePill: Record<string, string> = {
  dev: "border-orange-500/30 bg-orange-500/10 text-orange-300",
  creative: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  leadership: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
  business: "border-red-500/30 bg-red-500/10 text-red-300",
};

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        label="// experience"
        title="Where I've Been"
      />

      <div className="relative">
        {/* Vertical timeline rule */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px hidden sm:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(249,115,22,0.3) 15%, rgba(249,115,22,0.15) 85%, transparent)",
          }}
        />

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: "easeOut" }}
              className="relative sm:pl-10 group"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-[-5px] top-7 w-2.5 h-2.5 rounded-full hidden sm:block
                           border border-orange-500/40 bg-background
                           group-hover:bg-orange-500/50 group-hover:border-orange-400
                           transition-all duration-300"
              />

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
                  <h3 className="font-display font-bold text-lg text-white leading-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0 flex-wrap">
                    <span
                      className={`font-mono text-xs px-2.5 py-0.5 rounded-full border
                                  ${typePill[exp.type] ?? "border-white/10 bg-white/5 text-white/50"}`}
                    >
                      {typeLabels[exp.type] ?? exp.type}
                    </span>
                    <span className="font-mono text-sm text-white/55">{exp.period}</span>
                  </div>
                </div>
                {exp.subtitle && (
                  <p className="font-mono text-sm text-white/45 mb-3">{exp.subtitle}</p>
                )}
                <p className="text-white/70 leading-relaxed text-base font-serif">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
