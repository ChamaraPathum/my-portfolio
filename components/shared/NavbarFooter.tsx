"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ExternalLink, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { PORTFOLIO_DATA } from "@/lib/data";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#020817]/90 backdrop-blur-xl border-b border-indigo-500/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-heading font-bold text-white text-sm shadow-[0_0_15px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-shadow duration-300">
            CP
          </div>
          <span className="font-heading font-semibold text-[#f1f5f9] text-sm tracking-wide hidden sm:block">
            Chamara<span className="text-indigo-400"> Pathum</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive
                    ? "text-indigo-300"
                    : "text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-white/5"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="btn-primary text-sm py-2 px-5 flex items-center gap-2"
          >
            <Mail size={14} />
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-[#94a3b8] hover:text-white hover:bg-white/10 transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-[#0f172a]/95 backdrop-blur-xl border-b border-indigo-500/10"
          >
            <div className="px-5 py-5 space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      isActive
                        ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                        : "text-[#94a3b8] hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-3">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full flex items-center justify-center gap-2 text-sm py-3"
                >
                  <Mail size={14} />
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0f172a] border-t border-indigo-500/10">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-heading font-bold text-white text-sm">
              CP
            </div>
            <div>
              <p className="font-heading font-semibold text-[#f1f5f9] text-sm">
                Chamara Pathum
              </p>
              <p className="text-[#64748b] text-xs mt-0.5">Full Stack Developer</p>
            </div>
          </div>

          {/* Center copyright */}
          <p className="text-[#64748b] text-sm">
            © {currentYear} Chamara Pathum. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.socials[0].url}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#64748b] hover:text-white hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socials[1].url}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#64748b] hover:text-white hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#64748b] hover:text-white hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
