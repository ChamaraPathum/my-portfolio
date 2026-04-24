"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, FileCode2, Terminal, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/lib/data";

// Category colour map so each has its own accent
const CATEGORY_COLORS: Record<
  string,
  { text: string; bg: string; border: string; glow: string }
> = {
  All: {
    text: "text-[#28C840]",
    bg: "bg-[#28C840]/15",
    border: "border-[#28C840]/40",
    glow: "shadow-[0_0_14px_rgba(40,200,64,0.25)]",
  },
  Frontend: {
    text: "text-[#6E9FFF]",
    bg: "bg-[#6E9FFF]/15",
    border: "border-[#6E9FFF]/40",
    glow: "shadow-[0_0_14px_rgba(110,159,255,0.25)]",
  },
  Backend: {
    text: "text-[#FF7B72]",
    bg: "bg-[#FF7B72]/15",
    border: "border-[#FF7B72]/40",
    glow: "shadow-[0_0_14px_rgba(255,123,114,0.25)]",
  },
  "Full Stack": {
    text: "text-[#FEBC2E]",
    bg: "bg-[#FEBC2E]/15",
    border: "border-[#FEBC2E]/40",
    glow: "shadow-[0_0_14px_rgba(254,188,46,0.25)]",
  },
};

function getCategoryColor(cat: string) {
  return (
    CATEGORY_COLORS[cat] ?? {
      text: "text-[#28C840]",
      bg: "bg-[#28C840]/15",
      border: "border-[#28C840]/40",
      glow: "shadow-[0_0_14px_rgba(40,200,64,0.25)]",
    }
  );
}

export default function Projects() {
  const categories = [
    "All",
    ...Array.from(new Set(PORTFOLIO_DATA.projects.map((p) => p.category))),
  ];
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProjects = PORTFOLIO_DATA.projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter,
  );

  return (
    <section id="projects" className="py-24 relative bg-black/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
            Featured Work
          </h2>
          <div className="mt-6 flex flex-col gap-2">
            <div className="flex justify-between items-end w-48 text-[10px] font-mono text-[#8b949e] uppercase tracking-widest">
              <span>status: loading...</span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8 }}
                className="text-[#28C840]"
              >
                100%
              </motion.span>
            </div>
            <div className="h-1 w-48 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                className="h-full bg-[#28C840] rounded-full shadow-[0_0_12px_rgba(40,200,64,0.6)]"
              />
            </div>
          </div>
        </motion.div>

        {/* ── Terminal Window ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)]"
        >
          {/* Chrome bar */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            <Terminal size={12} className="text-gray-500 ml-2" />
            <span className="text-xs font-mono text-gray-500 tracking-widest">
              ~/chamara/projects — zsh
            </span>
          </div>

          {/* Body */}
          <div className="bg-[#0d1117]">
            {/* ── Category selector bar ── */}
            <div className="px-5 pt-5 pb-0">
              {/* prompt line */}
              <div className="flex items-center gap-2 font-mono text-xs mb-3">
                <span className="text-[#28C840]">$</span>
                <span className="text-[#6E9FFF]">ls</span>
                <span className="text-[#FEBC2E]">./projects/</span>
                <span className="text-[#8b949e]">--filter</span>
                <motion.span
                  key={activeFilter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`${getCategoryColor(activeFilter).text} font-bold`}
                >
                  {activeFilter.toLowerCase().replace(/\s+/g, "-")}
                </motion.span>
              </div>

              {/* tab row */}
              <div className="flex flex-wrap gap-5 pb-2 justify-center">
                {categories.map((cat) => {
                  const col = getCategoryColor(cat);
                  const isActive = activeFilter === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveFilter(cat)}
                      className={`
                        relative flex items-center gap-1.5 px-4 py-2 rounded-t-lg
                        font-mono text-xs border-t border-l border-r
                        transition-all duration-200 cursor-pointer
                        ${
                          isActive
                            ? `${col.bg} ${col.text} ${col.border} ${col.glow}`
                            : "bg-transparent text-[#8b949e] border-white/5 hover:text-white hover:bg-white/5"
                        }
                      `}
                    >
                      <FileCode2 size={12} />
                      <span>--{cat.toLowerCase().replace(/\s+/g, "-")}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTabUnderline"
                          className={`absolute bottom-0 left-0 right-0 h-[2px] ${col.bg.replace("/15", "")} rounded-t`}
                          style={{ background: "currentColor" }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              {/* tab bottom border */}
              <div className="h-px bg-white/5 -mx-5" />
            </div>

            {/* ── Project grid ── */}
            <div className="p-5">
              {/* result count line */}
              <div className="font-mono text-[11px] text-[#8b949e] mb-4">
                <span className="text-[#28C840]">›</span>{" "}
                <span className="text-white">{filteredProjects.length}</span>{" "}
                result{filteredProjects.length !== 1 ? "s" : ""} found in{" "}
                <span className={getCategoryColor(activeFilter).text}>
                  /{activeFilter.toLowerCase().replace(/\s+/g, "-")}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFilter}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4"
                >
                  {filteredProjects.map((project, i) => {
                    const col = getCategoryColor(project.category);
                    const isHovered = hoveredId === project.id;
                    return (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.07 }}
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className={`
                          group relative rounded-xl overflow-hidden
                          border transition-all duration-300
                          ${isHovered ? `${col.border} ${col.glow}` : "border-white/8 hover:border-white/15"}
                          bg-[#0b0f17]
                        `}
                      >
                        {/* Image */}
                        <div className="relative aspect-video overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/30 to-transparent z-10" />
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"} opacity-70`}
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                          {/* Category badge on image */}
                          <div className="absolute top-3 right-3 z-20">
                            <span
                              className={`
                                inline-flex items-center gap-1 px-2 py-0.5
                                rounded-md font-mono text-[10px] border
                                ${col.bg} ${col.text} ${col.border}
                              `}
                            >
                              {project.category}
                            </span>
                          </div>
                          {/* Hover overlay actions */}
                          <div
                            className={`
                              absolute inset-0 z-20 flex items-center justify-center gap-3
                              transition-opacity duration-300
                              ${isHovered ? "opacity-100" : "opacity-0"}
                            `}
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white text-xs font-mono border border-white/15 transition-all"
                            >
                              <ExternalLink size={11} />
                              live_preview()
                            </a>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/25 backdrop-blur-sm text-white text-xs font-mono border border-white/15 transition-all"
                            >
                              <GithubIcon size={11} />
                              git_clone()
                            </a>
                          </div>
                        </div>

                        {/* Card body */}
                        <div className="p-4 font-mono">
                          {/* filename */}
                          <div className="flex items-center gap-1.5 text-[10px] text-[#8b949e] mb-2">
                            <FileCode2 size={10} />
                            <span>
                              {project.title.toLowerCase().replace(/\s+/g, "-")}
                              .tsx
                            </span>
                          </div>

                          {/* title */}
                          <h3
                            className={`text-sm font-bold mb-1.5 transition-colors duration-200 ${isHovered ? col.text : "text-white"}`}
                          >
                            {project.title}
                          </h3>

                          {/* description */}
                          <p className="text-[11px] text-[#8b949e] leading-5 mb-3">
                            {project.description}
                          </p>

                          {/* stack tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-[#FEBC2E] border border-white/8"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* footer link */}
                          <div
                            className={`mt-3 flex items-center gap-1 text-[10px] ${col.text} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                          >
                            <ChevronRight size={10} />
                            <span>view_details()</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* terminal cursor */}
              <div className="mt-5 flex items-center gap-1.5 font-mono text-[11px]">
                <span className="text-[#28C840]">$</span>
                <span className="w-[6px] h-3 bg-[#28C840] animate-[blink_1s_step-end_infinite] inline-block" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
