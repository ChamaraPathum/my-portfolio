"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, GitBranch, Wifi } from "lucide-react";

export default function Hero() {
  // ── Typewriter / role cycler ─────────────────────────────────
  const roles = [
    "Full Stack Developer",
    "UI/UX Engineer",
    "React Specialist",
    "Next.js Expert",
  ];
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIdx];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
      }, 600);
    } else {
      timeout = setTimeout(
        () =>
          setText((cur) =>
            isDeleting
              ? fullText.substring(0, cur.length - 1)
              : fullText.substring(0, cur.length + 1),
          ),
        isDeleting ? 45 : 90,
      );
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, roleIdx]);

  // ── Boot sequence lines ──────────────────────────────────────
  const bootLines = [
    { delay: 0.3, text: "Initializing portfolio...", color: "#8b949e" },
    {
      delay: 0.7,
      text: "Loading modules: [react] [next] [ts]",
      color: "#8b949e",
    },
    { delay: 1.1, text: "✓ All systems operational", color: "#28C840" },
    { delay: 1.4, text: "✓ Available for new opportunities", color: "#28C840" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0d1117]"
    >
      {/* ── Terminal chrome bar — spans full width ── */}
      <div className="flex items-center justify-between px-6 py-3 bg-[#1a1a1a] border-b border-white/10 shrink-0 z-20">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          {/* <span className="w-3 h-3 rounded-full bg-[#28C840]" /> */}
          <span className="ml-4 text-xs font-mono text-gray-500 tracking-widest">
            ~/chamara/portfolio — zsh
          </span>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono text-[#8b949e]">
          <span className="flex items-center gap-1.5">
            <Wifi size={10} className="text-[#28C840]" />
            <span className="text-[#28C840]">online</span>
          </span>
          <span className="flex items-center gap-1.5">
            <GitBranch size={10} className="text-[#FEBC2E]" />
            <span className="text-[#FEBC2E]">main</span>
            <span className="text-[#3d3d3d]">·</span>
            <span className="text-[#28C840]">✓ clean</span>
          </span>
        </div>
      </div>

      {/* ── Full-section terminal body ── */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* ── Atmospheric Underglow (unchanged) ── */}
        <motion.div
          animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-brand-violet/20 blur-[150px] pointer-events-none mix-blend-screen"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.5, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] rounded-full bg-brand-cyan/20 blur-[150px] pointer-events-none mix-blend-screen"
        />

        {/* ── 3D Floating Elements (unchanged, now inside terminal body) ── */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          {/* Upper-left white box */}
          <motion.div
            animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] left-[15%] w-30 h-35 border border-[#FEBC2E]/30 rounded-xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 border border-[#FF5F57]/30 rounded-xl"
              style={{ transform: "translateZ(80px)" }}
            />
            <div
              className="absolute inset-0 border border-[#28C840]/30 rounded-xl"
              style={{ transform: "translateZ(-80px)" }}
            />
          </motion.div>

          {/* Lower-right violet box */}
          <motion.div
            animate={{ rotateX: [360, 0], rotateY: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[20%] right-[15%] w-32 h-32 border border-brand-violet/30 rounded-xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 border border-brand-violet/30 rounded-xl"
              style={{ transform: "translateZ(64px)" }}
            />
            <div
              className="absolute inset-0 border border-brand-violet/30 rounded-xl"
              style={{ transform: "translateZ(-64px)" }}
            />
          </motion.div>
        </div>

        {/* ── Scanline overlay (subtle CRT effect) ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 4px)",
          }}
        />

        {/* ── Terminal content ── */}
        <div className="relative z-10 max-w-4xl w-full mx-auto px-6 py-16 font-mono">
          {/* Boot lines */}
          <div className="space-y-1 mb-10">
            {bootLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: line.delay, duration: 0.4 }}
                className="text-xs flex items-center gap-2"
              >
                <span className="text-[#28C840]">$</span>
                <span style={{ color: line.color }}>{line.text}</span>
              </motion.p>
            ))}
          </div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="mb-3"
          >
            <p className="text-xs text-[#8b949e] mb-2">
              <span className="text-[#6E9FFF]">const</span>{" "}
              <span className="text-[#79D8A4]">name</span>{" "}
              <span className="text-white">=</span>
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold
             text-transparent bg-clip-text
             bg-gradient-to-r from-[#dbc8c8] via-[#E5E5E5] to-[#9CA3AF]
             tracking-tight leading-none pl-6"
            >
              Chamara Pathum
            </h1>
          </motion.div>

          {/* Role — typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.4 }}
            className="mb-8 pl-6"
          >
            <p className="text-xs text-[#8b949e] mb-1">
              <span className="text-[#6E9FFF]">const</span>{" "}
              <span className="text-[#79D8A4]">role</span>{" "}
              <span className="text-white">=</span>
            </p>
            <div className="flex items-center gap-0.5 pl-4">
              <span className="text-[#FF7B72] text-2xl md:text-3xl">
                &quot;
              </span>
              <span className="text-[#FF7B72] text-2xl md:text-3xl">
                {text}
              </span>
              <span className="inline-block w-[3px] h-7 md:h-9 bg-[#28C840] animate-[blink_0.75s_step-end_infinite] ml-0.5" />
              <span className="text-[#FF7B72] text-2xl md:text-3xl">
                &quot;
              </span>
              <span className="text-white text-2xl">;</span>
            </div>
          </motion.div>

          {/* Bio — JSDoc comment */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.5 }}
            className="mb-10 border-l-2 border-[#28C840]/25 pl-5 ml-4 max-w-xl"
          >
            <p className="text-[#28C840] text-xs">/**</p>
            <p className="text-[#8b949e] text-sm leading-6 my-1">
              * Bridging the gap between stunning visual design and robust
              backend architecture. Let&apos;s build something extraordinary.
            </p>
            <p className="text-[#28C840] text-xs">*/</p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#projects"
              className="group relative flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold
                         bg-[#28C840]/10 text-[#28C840] border border-[#28C840]/25
                         hover:bg-[#28C840]/20 hover:shadow-[0_0_28px_rgba(40,200,64,0.2)]
                         transition-all duration-200 overflow-hidden w-fit"
            >
              <span className="text-[#28C840]/50 shrink-0">$</span>
              <span>explore_projects()</span>
              <div className="absolute inset-0 bg-[#28C840]/8 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>

            <a
              href="#projects"
              // className="group flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold
              //            bg-white/[0.04] text-[#8b949e] border border-white/8
              //            hover:text-white hover:bg-white/[0.08] hover:border-white/15
              //            transition-all duration-200 w-fit"

              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold
             bg-white/[0.04] text-[#8b949e] border border-white/8
             pointer-events-none opacity-50 cursor-not-allowed
             transition-all duration-200 w-fit"
            >
              <span className="text-[#6E9FFF]/50 shrink-0">$</span>
              <span>download_cv()</span>
              <Download
                size={14}
                className="group-hover:text-white transition-colors"
              />
            </a>
          </motion.div>

          {/* Bottom cursor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.9 }}
            className="flex items-center gap-1.5 mt-8"
          >
            <span className="text-[#28C840] text-sm">›</span>
            <span className="w-[9px] h-[18px] bg-[#28C840] animate-[blink_1s_step-end_infinite] inline-block rounded-[1px]" />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
      >
        <span className="text-[10px] font-mono tracking-widest text-[#8b949e]">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-[#28C840]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
