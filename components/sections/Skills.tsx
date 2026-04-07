"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(PORTFOLIO_DATA.skills[0].category);
  const [prevTab, setPrevTab] = useState<string | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(terminalRef, { once: true, margin: "-80px" });

  const activeGroup = PORTFOLIO_DATA.skills.find(
    (s) => s.category === activeTab,
  );

  function handleTabChange(cat: string) {
    setPrevTab(activeTab);
    setActiveTab(cat);
  }

  return (
    <section id="skills" className="py-24 relative">
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
            My Skills
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
          ref={terminalRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.7)]"
        >
          {/* Terminal Chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a1a] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-xs font-mono text-gray-500 tracking-widest">
                ~/chamara/skills — zsh
              </span>
            </div>
            {/* Tab switcher styled as terminal breadcrumbs */}
            <div className="flex gap-1">
              {PORTFOLIO_DATA.skills.map((skillGroup) => {
                const Icon = skillGroup.icon;
                const isActive = activeTab === skillGroup.category;
                return (
                  <button
                    key={skillGroup.category}
                    onClick={() => handleTabChange(skillGroup.category)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 ${
                      isActive
                        ? "bg-[#28C840]/20 text-[#28C840] border border-[#28C840]/30"
                        : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    <Icon size={12} />
                    {skillGroup.category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Terminal Body */}
          <div className="bg-[#0d1117] p-6 font-mono text-sm min-h-[380px] relative">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#28C840]/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Command prompt line */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#28C840]">$</span>
              <span className="text-[#6E9FFF]">ls</span>
              <span className="text-white">-la</span>
              <span className="text-[#FEBC2E]">
                ./skills/{activeTab.toLowerCase().replace(/\s+/g, "-")}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-5 relative z-10"
              >
                {/* object header */}
                <p className="text-[#8b949e] text-xs mb-2">
                  <span className="text-[#28C840]">// </span>
                  {activeGroup?.items.length} skills found in{" "}
                  <span className="text-[#FF7B72]">{activeTab}</span>
                </p>

                <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
                  {activeGroup?.items.map((skill, index) => (
                    <SkillRow
                      key={`${activeTab}-${skill.name}`}
                      skill={skill}
                      index={index}
                      isInView={isInView}
                      tabChanged={activeTab}
                    />
                  ))}
                </div>

                {/* Closing brace */}
                <div className="pt-2 border-t border-white/5 flex items-center gap-2">
                  <span className="text-[#28C840]">›</span>
                  <span className="w-2 h-4 bg-[#28C840] animate-[blink_1s_step-end_infinite] inline-block" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillRow({
  skill,
  index,
  isInView,
  tabChanged,
}: {
  skill: { name: string; level: number };
  index: number;
  isInView: boolean;
  tabChanged: string;
}) {
  const [visible, setVisible] = useState(false);
  const [typedName, setTypedName] = useState("");
  const [barAnimated, setBarAnimated] = useState(false);

  useEffect(() => {
    setVisible(false);
    setTypedName("");
    setBarAnimated(false);

    if (!isInView) return;

    const baseDelay = 100 + index * 120;

    const showTimer = setTimeout(() => {
      setVisible(true);
      // Type name character by character
      let i = 0;
      const nameStr = skill.name;
      const typeInterval = setInterval(() => {
        i++;
        setTypedName(nameStr.slice(0, i));
        if (i >= nameStr.length) {
          clearInterval(typeInterval);
          setTimeout(() => setBarAnimated(true), 80);
        }
      }, 30);
    }, baseDelay);

    return () => clearTimeout(showTimer);
  }, [isInView, index, skill.name, tabChanged]);

  if (!visible) return <div className="h-10" />;

  const levelColor =
    skill.level >= 85 ? "#28C840" : skill.level >= 70 ? "#FEBC2E" : "#FF7B72";

  const barBlocks = Math.round((skill.level / 100) * 20);
  const emptyBlocks = 20 - barBlocks;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className="flex flex-col gap-1.5"
    >
      {/* Skill name as a const line */}
      <div className="flex items-center justify-between text-xs">
        <p>
          <span className="text-[#6E9FFF]">const</span>{" "}
          <span style={{ color: levelColor }}>{typedName}</span>
          {typedName.length < skill.name.length && (
            <span className="inline-block w-[2px] h-[0.8em] bg-white/70 animate-[blink_0.75s_step-end_infinite] align-middle ml-[1px]" />
          )}
          {typedName === skill.name && (
            <>
              <span className="text-white"> = </span>
              <span style={{ color: levelColor }}>{skill.level}</span>
              <span className="text-[#8b949e]">%;</span>
            </>
          )}
        </p>
      </div>

      {/* Progress bar as ASCII-style block bar */}
      <div className="flex items-center gap-2">
        <span className="text-[#28C840] text-xs">[</span>
        <div className="flex-1 flex gap-[2px]">
          {barAnimated ? (
            <>
              {Array.from({ length: barBlocks }).map((_, i) => (
                <motion.span
                  key={`f-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.1 }}
                  style={{ backgroundColor: levelColor }}
                  className="h-[6px] flex-1 rounded-[1px]"
                />
              ))}
              {Array.from({ length: emptyBlocks }).map((_, i) => (
                <span
                  key={`e-${i}`}
                  className="h-[6px] flex-1 rounded-[1px] bg-white/10"
                />
              ))}
            </>
          ) : (
            Array.from({ length: 20 }).map((_, i) => (
              <span
                key={`blank-${i}`}
                className="h-[6px] flex-1 rounded-[1px] bg-white/10"
              />
            ))
          )}
        </div>
        <span className="text-[#28C840] text-xs">]</span>
        <span className="text-xs" style={{ color: levelColor }}>
          {skill.level}%
        </span>
      </div>
    </motion.div>
  );
}
