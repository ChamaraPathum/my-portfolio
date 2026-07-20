"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

const LEVEL_COLORS: Record<string, { bar: string; text: string; glow: string }> = {
  high:   { bar: "bg-indigo-500", text: "text-indigo-400", glow: "shadow-[0_0_10px_rgba(99,102,241,0.5)]" },
  medium: { bar: "bg-violet-500", text: "text-violet-400", glow: "shadow-[0_0_10px_rgba(167,139,250,0.5)]" },
  low:    { bar: "bg-slate-500",  text: "text-slate-400",  glow: "" },
};

function getLevelColor(level: number) {
  if (level >= 85) return LEVEL_COLORS.high;
  if (level >= 70) return LEVEL_COLORS.medium;
  return LEVEL_COLORS.low;
}

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const col = getLevelColor(level);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#cbd5e1] text-sm font-medium">{name}</span>
        <span className={`text-xs font-bold ${col.text}`}>{level}%</span>
      </div>
      <div className="h-1.5 bg-[#1e293b] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.06, ease: "easeOut" }}
          className={`h-full rounded-full ${col.bar} ${col.glow} relative`}
        >
          {/* Shimmer on bar */}
          <div className="absolute inset-0 shimmer rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(PORTFOLIO_DATA.skills[0].category);

  const activeGroup = PORTFOLIO_DATA.skills.find((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#0f172a]/50">
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.7) 0%, transparent 70%)",
          filter: "blur(70px)",
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
            Technical Skills
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#f1f5f9] mb-4">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-[#64748b] text-base max-w-xl leading-relaxed">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {PORTFOLIO_DATA.skills.map((skillGroup) => {
            const Icon = skillGroup.icon;
            const isActive = activeTab === skillGroup.category;
            return (
              <button
                key={skillGroup.category}
                onClick={() => setActiveTab(skillGroup.category)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/35 shadow-[0_0_20px_rgba(99,102,241,0.15)]"
                    : "text-[#64748b] border border-white/8 hover:text-[#f1f5f9] hover:bg-white/5 hover:border-white/15"
                }`}
              >
                <Icon size={15} />
                {skillGroup.category}
              </button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {activeGroup?.items.map((skill, i) => (
                <SkillBar key={`${activeTab}-${skill.name}`} name={skill.name} level={skill.level} index={i} />
              ))}
            </div>

            {/* Chip tags at the bottom */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-[#475569] text-xs uppercase tracking-wider font-medium mb-3">Also proficient in</p>
              <div className="flex flex-wrap gap-2">
                {["REST APIs", "Prisma ORM", "JWT Auth", "CI/CD", "Agile", "VS Code", "Postman"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-[#1e293b] border border-white/8 text-[#94a3b8] text-xs font-medium hover:border-indigo-500/30 hover:text-indigo-300 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
