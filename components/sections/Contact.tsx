"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Mail, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/SocialIcons";
import { toast } from "sonner";
import { siteConfig } from "@/lib/data";
import { SectionWrapper, SectionHeading } from "../shared/SectionWrapper";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected"),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full px-4 py-3 rounded-xl font-serif text-base text-white/85 placeholder:text-white/30 " +
  "border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm " +
  "focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.06] " +
  "transition-all duration-200";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (data.honeypot) return;
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      toast.success("Message sent!", {
        description: "I'll get back to you within 24 hours.",
      });
      reset();
    } catch {
      toast.error("Failed to send message", {
        description: "Please try emailing me directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* Left side */}
        <div>
          <SectionHeading
            label="// contact"
            title="Let's Build Something"
          />
          <p className="text-white/70 text-lg leading-relaxed mb-10 font-serif">
            Have a project in mind, an interesting problem, or just want to talk shop
            about event-driven architecture? My inbox is open.
          </p>

          <div className="space-y-4">
            {[
              { href: `mailto:${siteConfig.email}`, icon: Mail, label: siteConfig.email },
              { href: siteConfig.github, icon: GithubIcon, label: "github.com/subbu-h21" },
              { href: siteConfig.linkedin, icon: LinkedinIcon, label: "linkedin.com/in/subramanya-hegde-6099661a1" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/45 hover:text-orange-300 transition-colors group"
              >
                <div
                  className="w-9 h-9 rounded-xl border border-white/[0.07] bg-white/[0.04]
                              flex items-center justify-center flex-shrink-0
                              group-hover:border-orange-500/30 group-hover:bg-orange-500/10
                              transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-base">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Honeypot */}
            <input
              type="text"
              className="absolute -left-[9999px] opacity-0"
              tabIndex={-1}
              aria-hidden="true"
              {...register("honeypot")}
            />

            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="font-mono text-xs uppercase tracking-wider text-white/35 block"
              >
                Name
              </label>
              <input
                id="name"
                placeholder="Subramanya Hegde"
                className={inputClass}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-400/80 text-xs font-mono mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="font-mono text-xs uppercase tracking-wider text-white/35 block"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="hello@example.com"
                className={inputClass}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-400/80 text-xs font-mono mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="font-mono text-xs uppercase tracking-wider text-white/35 block"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Tell me about your project or just say hi..."
                rows={5}
                className={`${inputClass} resize-none`}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-400/80 text-xs font-mono mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                         bg-orange-600 text-white font-serif text-sm
                         hover:bg-orange-500 disabled:opacity-40 transition-colors duration-200
                         shadow-[0_0_24px_rgba(249,115,22,0.25)]"
            >
              {submitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
