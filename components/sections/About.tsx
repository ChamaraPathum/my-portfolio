"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan">Me</span>
          </h2>
          <div className="h-1 w-20 bg-brand-violet rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square relative max-w-md mx-auto rounded-2xl overflow-hidden card-3d p-2 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-violet/20 to-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <div className="w-full h-full relative rounded-xl overflow-hidden">
                <Image 
                  src="/avatar.png"
                  alt="Chamara Pathum"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Details side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Hello, I'm {PORTFOLIO_DATA.personal.name}</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {PORTFOLIO_DATA.personal.bio}
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {PORTFOLIO_DATA.stats.map((stat, i) => (
                <motion.div 
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                  className="flex flex-col gap-1"
                >
                  <span className="text-3xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-sm text-brand-cyan uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              {PORTFOLIO_DATA.personal.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-violet/20 hover:border-brand-violet/50 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
