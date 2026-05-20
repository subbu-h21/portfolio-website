"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { skills } from "@/lib/data";
import { brandIcons } from "@/lib/icons";
import { SectionWrapper, SectionHeading } from "../shared/SectionWrapper";

function SkillChip({
  name,
  icon,
  delay,
}: {
  name: string;
  icon: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const si = brandIcons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "flex items-center gap-2 px-3.5 py-2 rounded-lg cursor-default select-none",
        "border transition-all duration-200",
        hovered
          ? "border-orange-500/40 bg-orange-500/10"
          : "border-white/[0.07] bg-white/[0.03]"
      )}
    >
      {si ? (
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          aria-hidden="true"
          className="shrink-0 transition-all duration-200"
          style={{
            fill: hovered ? `#${si.hex}` : "rgba(255,255,255,0.35)",
          }}
        >
          <path d={si.path} />
        </svg>
      ) : (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0 transition-colors",
            hovered ? "bg-orange-400" : "bg-white/25"
          )}
        />
      )}
      <span
        className={cn(
          "font-mono text-sm transition-colors",
          hovered ? "text-orange-200" : "text-white/55"
        )}
      >
        {name}
      </span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        label="// tech stack"
        title="Tools of the Trade"
        subtitle="Languages, frameworks, and infrastructure I use to bring ideas to production."
      />

      <div className="glass-card rounded-2xl overflow-hidden">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.08, duration: 0.5 }}
            className={cn(
              "flex flex-col sm:flex-row sm:items-start gap-4 px-6 py-5",
              gi < skills.length - 1 && "border-b border-white/[0.06]"
            )}
          >
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-orange-400/70 pt-1.5 sm:w-28 shrink-0">
              {group.category}
            </span>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, si) => (
                <SkillChip
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  delay={gi * 0.07 + si * 0.04}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
