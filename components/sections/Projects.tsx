"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Folder,
  FolderOpen,
  FileCode2,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Projects() {
  const categories = [
    "All",
    ...Array.from(new Set(PORTFOLIO_DATA.projects.map((p) => p.category))),
  ];
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(
    PORTFOLIO_DATA.projects[0],
  );

  const filteredProjects = PORTFOLIO_DATA.projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter,
  );

  return (
    <section id="projects" className="py-24 relative bg-black/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
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

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)]"
        >
          {/* Terminal Chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-xs font-mono text-gray-500 tracking-widest">
                ~/chamara/projects — zsh
              </span>
            </div>
            {/* Filter tabs as terminal flags */}
            <div className="flex gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1 rounded-md text-xs font-mono transition-all duration-200 ${
                    activeFilter === cat
                      ? "bg-[#28C840]/20 text-[#28C840] border border-[#28C840]/30"
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                  }`}
                >
                  --{cat.toLowerCase().replace(/\s+/g, "-")}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Body: 2-pane layout */}
          <div className="bg-[#0d1117] flex min-h-[520px]">
            {/* LEFT PANE: file explorer */}
            <div className="w-64 shrink-0 border-r border-white/5 p-4 font-mono text-xs overflow-y-auto">
              {/* Command prompt */}
              <div className="flex items-center gap-1.5 mb-4 text-[10px]">
                <span className="text-[#28C840]">$</span>
                <span className="text-[#6E9FFF]">ls</span>
                <span className="text-[#FEBC2E]">./projects/</span>
              </div>

              {/* Category groups */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFilter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-1"
                >
                  {/* Group projects by category for folder structure */}
                  {(activeFilter === "All"
                    ? Array.from(
                        new Set(PORTFOLIO_DATA.projects.map((p) => p.category)),
                      )
                    : [activeFilter]
                  ).map((cat) => {
                    const catProjects = filteredProjects.filter(
                      (p) => p.category === cat,
                    );
                    if (catProjects.length === 0) return null;
                    return (
                      <div key={cat} className="mb-3">
                        <div className="flex items-center gap-1.5 text-[#FEBC2E] mb-1 px-1">
                          <FolderOpen size={12} />
                          <span>{cat}/</span>
                        </div>
                        <div className="ml-4 space-y-1">
                          {catProjects.map((project) => {
                            const isSelected =
                              selectedProject.id === project.id;
                            return (
                              <button
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className={`w-full flex items-center gap-1.5 px-2 py-1 rounded transition-all duration-150 text-left ${
                                  isSelected
                                    ? "bg-[#28C840]/15 text-[#28C840]"
                                    : "text-[#8b949e] hover:text-white hover:bg-white/5"
                                }`}
                              >
                                <FileCode2 size={11} className="shrink-0" />
                                <span className="truncate text-[10px]">
                                  {project.title
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}
                                  .tsx
                                </span>
                                {isSelected && (
                                  <ChevronRight
                                    size={10}
                                    className="ml-auto shrink-0"
                                  />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* Cursor at bottom */}
              <div className="mt-4 flex items-center gap-1 text-[10px]">
                <span className="text-[#28C840]">›</span>
                <span className="w-[6px] h-3 bg-[#28C840] animate-[blink_1s_step-end_infinite] inline-block" />
              </div>
            </div>

            {/* RIGHT PANE: selected project detail */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* File tab bar */}
              <div className="flex items-center border-b border-white/5 bg-[#0d1117] px-4 gap-2 overflow-x-auto">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.button
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedProject(project)}
                      className={`flex items-center gap-1.5 px-3 py-2 text-[10px] font-mono border-b-2 transition-all duration-150 whitespace-nowrap shrink-0 ${
                        selectedProject.id === project.id
                          ? "border-[#28C840] text-white"
                          : "border-transparent text-[#8b949e] hover:text-gray-300"
                      }`}
                    >
                      <FileCode2 size={10} />
                      {project.title.toLowerCase().replace(/\s+/g, "-")}.tsx
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>

              {/* Project content */}
              <div className="flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProject.id}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                    className="h-full flex flex-col md:flex-row"
                  >
                    {/* Image preview */}
                    <div className="md:w-1/2 relative aspect-video md:aspect-auto shrink-0 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent z-10 pointer-events-none" />
                      <Image
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        fill
                        className="object-cover opacity-80 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Hover actions */}
                      <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xs font-mono border border-white/10 transition-all"
                        >
                          <ExternalLink size={12} />
                          live_preview()
                        </a>
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xs font-mono border border-white/10 transition-all"
                        >
                          <GithubIcon size={12} />
                          git_clone()
                        </a>
                      </div>
                    </div>

                    {/* Code-style metadata */}
                    <div className="md:w-1/2 p-6 font-mono text-xs leading-6 overflow-y-auto">
                      {/* Line numbers + code */}
                      <div className="space-y-1">
                        <CodeLine num={1} indent={0}>
                          <span className="text-[#6E9FFF]">export</span>{" "}
                          <span className="text-[#6E9FFF]">const</span>{" "}
                          <span className="text-[#79D8A4]">project</span>{" "}
                          <span className="text-white">= {"{"}</span>
                        </CodeLine>

                        <CodeLine num={2} indent={1}>
                          <span className="text-[#8b949e]">title</span>
                          <span className="text-white">: </span>
                          <span className="text-[#FF7B72]">
                            &quot;{selectedProject.title}&quot;
                          </span>
                          <span className="text-white">,</span>
                        </CodeLine>

                        <CodeLine num={3} indent={1}>
                          <span className="text-[#8b949e]">category</span>
                          <span className="text-white">: </span>
                          <span className="text-[#FF7B72]">
                            &quot;{selectedProject.category}&quot;
                          </span>
                          <span className="text-white">,</span>
                        </CodeLine>

                        <CodeLine num={4} indent={1}>
                          <span className="text-[#8b949e]">description</span>
                          <span className="text-white">: </span>
                        </CodeLine>
                        <CodeLine num={5} indent={2}>
                          <span className="text-[#28C840]">
                            /* {selectedProject.description} */
                          </span>
                        </CodeLine>

                        <CodeLine num={6} indent={1}>
                          <span className="text-[#8b949e]">stack</span>
                          <span className="text-white">: [</span>
                        </CodeLine>

                        {selectedProject.tags.map((tag, i) => (
                          <CodeLine key={tag} num={7 + i} indent={2}>
                            <span className="text-[#FEBC2E]">
                              &quot;{tag}&quot;
                            </span>
                            {i < selectedProject.tags.length - 1 && (
                              <span className="text-white">,</span>
                            )}
                          </CodeLine>
                        ))}

                        <CodeLine
                          num={7 + selectedProject.tags.length}
                          indent={1}
                        >
                          <span className="text-white">],</span>
                        </CodeLine>

                        <CodeLine
                          num={8 + selectedProject.tags.length}
                          indent={1}
                        >
                          <span className="text-[#8b949e]">live</span>
                          <span className="text-white">: </span>
                          <span className="text-[#6E9FFF]">
                            &quot;{selectedProject.liveUrl}&quot;
                          </span>
                          <span className="text-white">,</span>
                        </CodeLine>

                        <CodeLine
                          num={9 + selectedProject.tags.length}
                          indent={1}
                        >
                          <span className="text-[#8b949e]">repo</span>
                          <span className="text-white">: </span>
                          <span className="text-[#6E9FFF]">
                            &quot;{selectedProject.githubUrl}&quot;
                          </span>
                          <span className="text-white">,</span>
                        </CodeLine>

                        <CodeLine
                          num={10 + selectedProject.tags.length}
                          indent={0}
                        >
                          <span className="text-white">{"}"}</span>
                        </CodeLine>

                        {/* cursor */}
                        <div className="flex items-center gap-2 mt-3 pl-2">
                          <span className="text-[#28C840]">›</span>
                          <span className="w-[6px] h-3 bg-[#28C840] animate-[blink_1s_step-end_infinite] inline-block" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CodeLine({
  num,
  indent,
  children,
}: {
  num: number;
  indent: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-[#3d3d3d] w-5 shrink-0 text-right select-none">
        {num}
      </span>
      <span style={{ paddingLeft: `${indent * 16}px` }}>{children}</span>
    </div>
  );
}
