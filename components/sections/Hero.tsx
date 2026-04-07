"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "I am a Full Stack Developer";
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000); // pause at end
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => setIsDeleting(false), 800); // pause at start
    } else {
      timeout = setTimeout(
        () => {
          setText((current) =>
            isDeleting
              ? fullText.substring(0, current.length - 1)
              : fullText.substring(0, current.length + 1),
          );
        },
        isDeleting ? 50 : 100,
      ); // writing speed vs deleting speed
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Atmospheric Underglow */}
      <motion.div
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-brand-violet/20 blur-[150px] -z-10 mix-blend-screen pointer-events-none"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.5, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-1/4 w-[50vw] h-[50vw] rounded-full bg-brand-cyan/20 blur-[150px] -z-10 mix-blend-screen pointer-events-none"
      />

      <div className="max-w-6xl w-full mx-auto px-6 flex flex-col items-center justify-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex items-center justify-center space-x-2 badge-glass px-4 py-2 rounded-full border border-white/10 glass"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm tracking-wide text-gray-300">
            Available for Work
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 mb-6 tracking-tight leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Chamara Pathum
        </motion.h1>

        <div className="h-10 md:h-12 flex items-center justify-center mb-8 relative w-full">
          {/* Using CSS blink animation on the border cursor */}
          <p className="text-xl md:text-2xl font-mono text-brand-cyan/90 border-r-2 border-brand-cyan pr-1 animate-[blink_0.75s_step-end_infinite]">
            {text}
            <span className="opacity-0">|</span> {/* spacing hack */}
          </p>
        </div>

        <motion.p
          className="max-w-xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Bridging the gap between stunning visual design and robust backend
          architecture. Let's build something extraordinary.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#projects"
            className="btn-3d px-10 py-4 rounded-xl text-white font-bold tracking-wide flex items-center gap-2 relative overflow-hidden group"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#"
            className="card-3d px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2 group"
          >
            <span className="group-hover:text-brand-accent transition-colors">
              Download CV
            </span>
            <Download
              size={18}
              className="group-hover:text-brand-accent transition-colors"
            />
          </a>
        </motion.div>

        {/* 3D Isometric Floating Elements */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden -z-10"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] left-[15%] w-30 h-35 border border-white/60 rounded-xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 border border-white/60 rounded-xl"
              style={{ transform: "translateZ(80px)" }}
            />
            <div
              className="absolute inset-0 border border-white/60 rounded-xl"
              style={{ transform: "translateZ(-80px)" }}
            />
          </motion.div>
          <motion.div
            animate={{
              rotateX: [360, 0],
              rotateY: [0, 360],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[20%] right-[15%] w-32 h-32 border border-brand-violet/20 rounded-xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 border border-brand-violet/20 rounded-xl"
              style={{ transform: "translateZ(64px)" }}
            />
            <div
              className="absolute inset-0 border border-brand-violet/20 rounded-xl"
              style={{ transform: "translateZ(-64px)" }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
