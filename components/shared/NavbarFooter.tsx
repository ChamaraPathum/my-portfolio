"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, Terminal, X, Menu, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const links = [
    { name: "About",      href: "#about",      cmd: "cd ./about" },
    { name: "Skills",     href: "#skills",     cmd: "ls ./skills" },
    { name: "Projects",   href: "#projects",   cmd: "ls ./projects" },
    { name: "Experience", href: "#experience", cmd: "git log" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onHero = !scrolled;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        onHero
          ? "bg-[#1a1a1a] border-b border-white/10"
          : "bg-[#0d1117]/95 backdrop-blur-md border-b border-white/5"
      )}
    >
      {/* Single bar — h-14 always */}
      <div className="h-14 px-5 flex items-center justify-between gap-3">

        {/* LEFT: traffic lights (hero only) + logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            className={cn(
              "flex items-center gap-1.5 transition-all duration-300 overflow-hidden",
              onHero ? "w-auto opacity-100" : "w-0 opacity-0"
            )}
          >
            <span className="w-3 h-3 rounded-full bg-[#FF5F57] shrink-0" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E] shrink-0" />
            <span className="w-3 h-3 rounded-full bg-[#28C840] shrink-0" />
          </div>

          <a href="#hero" className="flex items-center gap-1.5 group">
            <Terminal size={14} className="text-[#28C840]" />
            <span className="font-mono text-xs">
              <span className="text-[#28C949]">~</span>
              <span className="text-[#8b949e]">/</span>
              <span className="text-white font-bold">chamara</span>
              <span className="text-[#8b949e]">.</span>
              <span className="text-[#6E9FFF]">dev</span>
              <span className="text-[#28C840] animate-[blink_1s_step-end_infinite]">_</span>
            </span>
          </a>
        </div>

        {/* CENTER: Desktop nav links */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs transition-all duration-200",
                  isActive
                    ? "bg-[#28C840]/10 text-[#28C840] border border-[#28C840]/20"
                    : "text-[#8b949e] hover:text-white hover:bg-white/5"
                )}
              >
                <span className={cn(isActive ? "text-[#28C840]" : "text-[#6E9FFF]")}>$</span>
                <span>{link.cmd}</span>
                {isActive && <ChevronRight size={10} className="text-[#28C840]" />}
              </a>
            );
          })}
        </div>

        {/* RIGHT: CTA + status */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Branch status */}
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#8b949e]">
            <GitBranch size={11} className="text-[#FEBC2E]" />
            <span className="text-[#FEBC2E]">main</span>
            <span className="text-[#3d3d3d] mx-0.5">·</span>
            <span className="text-[#28C840]">✓</span>
          </div>

          <a
            href="#contact"
            className={cn(
              "flex items-center gap-1.5 px-4 py-1.5 rounded-lg font-mono text-xs font-bold border transition-all duration-200",
              activeSection === "contact"
                ? "bg-[#28C840]/20 text-[#28C840] border-[#28C840]/40"
                : "bg-[#28C840]/10 text-[#28C840] border-[#28C840]/20 hover:bg-[#28C840]/20 hover:shadow-[0_0_14px_rgba(40,200,64,0.2)]"
            )}
          >
            <span>$</span>
            <span>send_message()</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#8b949e] hover:text-white transition-colors p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#0d1117] border-b border-white/5 shadow-2xl"
          >
            <div className="flex items-center gap-2 px-5 py-2 bg-[#1a1a1a] border-b border-white/5">
              <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
              <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
              <span className="w-2 h-2 rounded-full bg-[#28C840]" />
              <span className="ml-2 text-[10px] font-mono text-[#8b949e]">~/chamara — menu</span>
            </div>

            <div className="px-5 py-4 font-mono text-sm space-y-1">
              <p className="text-[#8b949e] text-xs mb-3">
                <span className="text-[#28C840]">$</span> ls ./navigation
              </p>

              {links.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#8b949e] hover:text-white hover:bg-white/5 transition-all group"
                >
                  <span className="text-[#6E9FFF] text-xs">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[#28C840] text-xs">$</span>
                  <span className="text-xs">{link.cmd}</span>
                  <ChevronRight size={10} className="ml-auto opacity-0 group-hover:opacity-100 text-[#28C840] transition-opacity" />
                </a>
              ))}

              <div className="pt-3 border-t border-white/5">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-bold font-mono
                             bg-[#28C840]/10 text-[#28C840] border border-[#28C840]/20 hover:bg-[#28C840]/20 transition-all"
                >
                  <span>$</span>
                  <span>send_message()</span>
                </a>
              </div>

              <div className="flex items-center gap-1.5 pt-2 pb-1">
                <span className="text-[#28C840] text-xs">›</span>
                <span className="w-[6px] h-3 bg-[#28C840] animate-[blink_1s_step-end_infinite] inline-block" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#0d1117] border-t border-white/5">
      <div className="flex items-center gap-2 px-6 py-2 bg-[#1a1a1a] border-b border-white/5">
        <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <span className="w-2 h-2 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-[10px] font-mono text-[#8b949e]">~/chamara — zsh — EOF</span>
        <span className="ml-auto flex items-center gap-1.5 text-[10px] font-mono">
          <GitBranch size={10} className="text-[#FEBC2E]" />
          <span className="text-[#FEBC2E]">main</span>
        </span>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
        <p className="text-[#8b949e]">
          <span className="text-[#28C840]">©</span>{" "}
          <span className="text-white">{new Date().getFullYear()}</span>{" "}
          <span className="text-[#6E9FFF]">Chamara Pathum</span>
          <span className="text-[#8b949e]">. All rights reserved.</span>
        </p>
        <div className="flex gap-4 items-center text-[#8b949e]">
          {["twitter", "github", "linkedin"].map((platform) => (
            <a
              key={platform}
              href="#"
              className="hover:text-[#28C840] transition-colors flex items-center gap-1"
            >
              <span className="text-[#6E9FFF]">$</span>
              <span>{platform}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
