"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Projects() {
  const categories = ["All", ...Array.from(new Set(PORTFOLIO_DATA.projects.map((p) => p.category)))];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PORTFOLIO_DATA.projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 relative bg-black/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan">Work</span>
          </h2>
          <div className="h-1 w-20 bg-brand-violet rounded-full mb-8" />
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "px-5 py-2 rounded-xl text-sm font-medium transition-all shadow-md",
                  activeFilter === category 
                    ? "btn-3d text-white font-bold" 
                    : "card-3d text-gray-400 hover:text-white"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative rounded-2xl overflow-hidden card-3d border-0"
              >
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-brand-violet/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#111] text-white flex items-center justify-center hover:scale-110 transition-transform">
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  {/* Top glowing line on hover */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2 md:line-clamp-none">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-md text-xs font-medium card-3d border-0 text-brand-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
