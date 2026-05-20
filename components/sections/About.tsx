"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeading } from "../shared/SectionWrapper";

const paragraphs = [
  "I build random things that usually start with me thinking, \"there has to be a better way to do this.\"",
  "Right now, I spend most of my time working on AI, automation, and software projects — a lot of them inspired by real problems around me, especially in retail workflows and daily routines. I enjoy figuring out how systems work behind the scenes and then trying to simplify them with technology.",
  "I like learning by building, experimenting, breaking things, and slowly improving them until they actually feel useful.",
];

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <SectionHeading label="// about me" title="The Story Behind the Stack" />
          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
                className="text-white/70 text-lg leading-relaxed font-serif"
              >{p}</motion.p>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center lg:justify-end"
        >
          <div className="w-full max-w-sm overflow-hidden"
            style={{ clipPath: "inset(10% 0 10% 0)" }}>
            <video
              src="/animate.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            />
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
