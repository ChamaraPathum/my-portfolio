"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(PORTFOLIO_DATA.skills[0].category);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-brand-cyan rounded-full" />
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {PORTFOLIO_DATA.skills.map((skillGroup) => {
            const isActive = activeTab === skillGroup.category;
            const Icon = skillGroup.icon;
            return (
              <button
                key={skillGroup.category}
                onClick={() => setActiveTab(skillGroup.category)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 text-sm md:text-base font-medium",
                  isActive 
                    ? "btn-3d text-white font-bold" 
                    : "card-3d text-gray-400 hover:text-white"
                )}
              >
                <Icon size={18} className={isActive ? "text-white" : ""} />
                {skillGroup.category}
              </button>
            );
          })}
        </div>

        {/* Skill Bars */}
        <div className="min-h-[300px] card-3d p-8 rounded-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-x-12 gap-y-8 relative z-10"
            >
              {PORTFOLIO_DATA.skills
                .find((s) => s.category === activeTab)
                ?.items.map((skill, index) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-brand-cyan">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-violet to-brand-cyan shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                      />
                    </div>
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
