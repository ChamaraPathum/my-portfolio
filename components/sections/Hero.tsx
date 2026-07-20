"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { PORTFOLIO_DATA } from "@/lib/data";

/* -- Typewriter hook -- */
function useTypewriter(words: string[]) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[idx];
    let timeout: NodeJS.Timeout;

    if (!deleting && text === full) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIdx((i) => (i + 1) % words.length);
      }, 500);
    } else {
      timeout = setTimeout(
        () =>
          setText((cur) =>
            deleting ? full.substring(0, cur.length - 1) : full.substring(0, cur.length + 1)
          ),
        deleting ? 50 : 95
      );
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, deleting, idx]);

  return text;
}

/* -- 3D Floating Cube -- */
function Cube3D({ size, duration, delay, colorClass }: {
  size: number; duration: number; delay: number; colorClass: string;
}) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{ width: size, height: size, perspective: 800 }}
    >
      <motion.div
        animate={{ rotateX: [0, 360], rotateY: [0, 360], rotateZ: [0, 180] }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
        style={{ width: "100%", height: "100%", transformStyle: "preserve-3d", position: "relative" }}
      >
        {/* 6 faces */}
        {[
          { transform: `translateZ(${size / 2}px)` },
          { transform: `translateZ(-${size / 2}px)` },
          { transform: `rotateY(90deg) translateZ(${size / 2}px)` },
          { transform: `rotateY(-90deg) translateZ(${size / 2}px)` },
          { transform: `rotateX(90deg) translateZ(${size / 2}px)` },
          { transform: `rotateX(-90deg) translateZ(${size / 2}px)` },
        ].map((face, i) => (
          <div
            key={i}
            className={`absolute inset-0 border ${colorClass} opacity-30 rounded-sm`}
            style={{ transform: face.transform }}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* -- Orbiting Ring -- */
function OrbitRing({ size, duration, delay, colorClass, tiltAxis }: {
  size: number; duration: number; delay: number; colorClass: string; tiltAxis: string;
}) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        transform: tiltAxis,
      }}
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
        className={`w-full h-full rounded-full border-2 ${colorClass} opacity-20`}
        style={{
          boxShadow: "0 0 10px currentColor",
          filter: "drop-shadow(0 0 6px currentColor)",
        }}
      />
    </div>
  );
}

/* -- Floating Particle Dots -- */
function Particles() {
  const dots = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-indigo-400"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [dot.opacity, dot.opacity * 0.3, dot.opacity],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}
    </div>
  );
}

/* -- Main Hero Component -- */
export default function Hero() {
  const roles = ["Full Stack Developer", "React Specialist", "Next.js Expert", "Mobile Developer"];
  const text = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#020817]"
    >
      {/* -- Background gradient blobs -- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary orb — top left */}
        <div
          className="orb-1 absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Secondary orb — bottom right */}
        <div
          className="orb-2 absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(167,139,250,0.7) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Mid orb — center right */}
        <div
          className="orb-3 absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.8) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      {/* -- Particle dots -- */}
      <Particles />

      {/* -- 3D Scene (right side on desktop) -- */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none hidden lg:flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {/* Large outer ring */}
        <OrbitRing
          size={400}
          duration={18}
          delay={0}
          colorClass="border-indigo-500"
          tiltAxis="rotateX(70deg)"
        />
        {/* Medium ring */}
        <OrbitRing
          size={280}
          duration={12}
          delay={2}
          colorClass="border-violet-400"
          tiltAxis="rotateY(70deg) rotateX(20deg)"
        />
        {/* Inner ring */}
        <OrbitRing
          size={180}
          duration={8}
          delay={1}
          colorClass="border-indigo-300"
          tiltAxis="rotateX(50deg) rotateZ(30deg)"
        />

        {/* Cubes */}
        <div className="absolute" style={{ top: "20%", right: "20%" }}>
          <Cube3D size={50} duration={20} delay={0} colorClass="border-indigo-400" />
        </div>
        <div className="absolute" style={{ bottom: "25%", right: "30%" }}>
          <Cube3D size={35} duration={15} delay={3} colorClass="border-violet-400" />
        </div>
        <div className="absolute" style={{ top: "35%", right: "15%" }}>
          <Cube3D size={25} duration={25} delay={6} colorClass="border-indigo-300" />
        </div>

        {/* Center glowing core */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-24 h-24 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(139,92,246,0.4) 50%, transparent 70%)",
            filter: "blur(8px)",
            boxShadow: "0 0 60px rgba(99,102,241,0.6), 0 0 120px rgba(99,102,241,0.2)",
          }}
        />
      </div>

      {/* -- Main Content -- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 pulse-badge">
              <span className="w-2 h-2 rounded-full bg-emerald-400 dot-pulse" />
              <span className="text-xs font-semibold text-indigo-300 tracking-wide">
                Available for new opportunities
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="font-heading font-bold leading-none tracking-tight mb-5">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f1f5f9]">
                Hi, I&apos;m
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl gradient-text-warm mt-1">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#94a3b8]">
              I&apos;m a{" "}
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">
              {text}
              <span
                className="inline-block w-[3px] h-7 md:h-8 bg-indigo-400 ml-1 align-middle rounded-full"
                style={{ animation: "blink 1s step-end infinite" }}
              />
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg text-[#64748b] leading-relaxed mb-10 max-w-2xl"
          >
            {PORTFOLIO_DATA.personal.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View My Work
              <ArrowRight size={16} />
            </a>

            <a
              href="/Chamara Pathum - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={16} />
              Download CV
            </a>

            {/* Social quick links */}
            <div className="flex items-center gap-3 ml-2">
              <a
                href={PORTFOLIO_DATA.personal.socials[0].url}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#64748b] hover:text-white hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-200"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socials[1].url}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#64748b] hover:text-white hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-16 flex flex-wrap gap-8"
          >
            {PORTFOLIO_DATA.stats.map((stat) => (
              <div key={stat.id} className="flex flex-col">
                <span className="text-3xl font-heading font-bold gradient-text leading-none">
                  {stat.value}
                </span>
                <span className="text-xs text-[#64748b] mt-1 tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* -- Scroll indicator -- */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#475569] hover:text-indigo-400 transition-colors duration-200 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
