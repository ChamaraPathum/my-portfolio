"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background-dark/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-xl font-heading font-bold text-white tracking-tighter">
          Chamara<span className="text-brand-cyan">.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-violet transition-all text-white"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-background-dark border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
        >
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-brand-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-6 py-3 text-center rounded-full bg-brand-violet text-white font-medium block"
          >
            Let's Talk
          </a>
        </motion.div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-white/10 relative z-10 bg-background-dark">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Chamara Pathum. All rights reserved.
        </p>
        <div className="flex gap-4 items-center">
          <a href="#" className="text-gray-500 hover:text-brand-cyan transition-colors text-sm">Twitter</a>
          <a href="#" className="text-gray-500 hover:text-brand-cyan transition-colors text-sm">GitHub</a>
          <a href="#" className="text-gray-500 hover:text-brand-cyan transition-colors text-sm">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
