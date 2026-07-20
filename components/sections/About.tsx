"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function About() {
  const { personal, stats } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-tag mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            About Me
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#f1f5f9] mb-4">
            Crafting Digital{" "}
            <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-[#64748b] text-base max-w-xl leading-relaxed">
            Passionate about building scalable, beautiful, and performant web applications.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Glow ring behind photo */}
            <div
              className="absolute inset-0 m-auto w-80 h-80 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />

            {/* Photo frame */}
            <div className="relative group">
              {/* Animated border ring */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, #6366f1, #a78bfa, #6366f1)",
                  backgroundSize: "200% 200%",
                  animation: "shimmer 3s infinite",
                  filter: "blur(4px)",
                }}
              />
              <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-3xl overflow-hidden border border-indigo-500/20">
                <Image
                  src="/my-image.png"
                  alt="Chamara Pathum"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 288px, 320px"
                  priority
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge — bottom */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -right-5 glass-card rounded-2xl px-4 py-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm font-heading">3+</span>
                </div>
                <div>
                  <p className="text-[#f1f5f9] text-xs font-semibold leading-tight">Years</p>
                  <p className="text-[#64748b] text-[10px]">Experience</p>
                </div>
              </motion.div>

              {/* Floating badge — top */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-5 -left-5 glass-card rounded-2xl px-4 py-3 flex items-center gap-2.5"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 dot-pulse" />
                <span className="text-[#f1f5f9] text-xs font-semibold">Available to hire</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading font-bold text-2xl text-[#f1f5f9] mb-4">
                Full Stack Developer based in{" "}
                <span className="gradient-text">Sri Lanka</span>
              </h3>
              <p className="text-[#94a3b8] leading-relaxed text-base">
                {personal.bio}
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 glass-card rounded-xl px-4 py-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-[#475569] text-[11px] uppercase tracking-wider font-medium">Location</p>
                  <p className="text-[#f1f5f9] text-sm font-medium">{personal.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 glass-card rounded-xl px-4 py-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-[#475569] text-[11px] uppercase tracking-wider font-medium">Email</p>
                  <p className="text-[#f1f5f9] text-sm font-medium truncate">{personal.email}</p>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-2xl p-4 text-center"
                >
                  <span className="block text-2xl font-heading font-bold gradient-text leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[#64748b] text-[10px] font-medium uppercase tracking-wider leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/Chamara Pathum - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 text-sm py-2.5"
              >
                <Download size={15} />
                Download CV
              </a>
              <a
                href={personal.socials[0].url}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary flex items-center gap-2 text-sm py-2.5"
              >
                <GithubIcon size={15} />
                GitHub
              </a>
              <a
                href={personal.socials[1].url}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary flex items-center gap-2 text-sm py-2.5"
              >
                <LinkedinIcon size={15} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
