"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/lib/data";

const CATEGORY_STYLES: Record<string, { pill: string; dot: string }> = {
  "Full Stack": {
    pill: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    dot: "bg-indigo-400",
  },
  Frontend: {
    pill: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    dot: "bg-violet-400",
  },
  Backend: {
    pill: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    dot: "bg-blue-400",
  },
  Mobile: {
    pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    dot: "bg-emerald-400",
  },
};

function getStyle(cat: string) {
  return CATEGORY_STYLES[cat] ?? CATEGORY_STYLES["Full Stack"];
}

export default function Projects() {
  const categories = ["All", ...Array.from(new Set(PORTFOLIO_DATA.projects.map((p) => p.category)))];
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = PORTFOLIO_DATA.projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none opacity-10"
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
          className="mb-12"
        >
          <div className="section-tag mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Portfolio
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#f1f5f9] mb-3">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-[#64748b] text-base max-w-xl leading-relaxed">
                A selection of real-world projects I&apos;ve designed and built.
              </p>
            </div>
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-xl text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                    activeFilter === cat
                      ? "bg-indigo-500/15 text-indigo-300 border-indigo-500/35"
                      : "text-[#64748b] border-white/8 hover:text-[#f1f5f9] hover:bg-white/5 hover:border-white/15"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => {
              const style = getStyle(project.category);
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group glass-card rounded-3xl overflow-hidden flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-[#1e293b]/30 to-transparent" />

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold ${style.pill}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                        {project.category}
                      </span>
                    </div>

                    {/* Hover overlay — action buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#020817]/50 backdrop-blur-sm">
                      {project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-all backdrop-blur-sm"
                        >
                          <ExternalLink size={13} />
                          Live Site
                        </a>
                      )}
                      {project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-all backdrop-blur-sm"
                        >
                          <GithubIcon size={13} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-heading font-bold text-[#f1f5f9] text-base leading-snug group-hover:text-indigo-300 transition-colors duration-200">
                        {project.title}
                      </h3>
                      {(project.liveUrl !== "#" || project.githubUrl !== "#") && (
                        <ArrowUpRight
                          size={16}
                          className="text-[#475569] group-hover:text-indigo-400 transition-colors shrink-0 mt-0.5"
                        />
                      )}
                    </div>

                    <p className="text-[#64748b] text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-lg bg-[#0f172a] border border-white/8 text-[#94a3b8] text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
