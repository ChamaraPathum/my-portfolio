"use client";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import { Send } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan">Journey</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-8 gap-12 flex flex-col">
          {PORTFOLIO_DATA.experience.map((exp, i) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[45px] top-1 w-6 h-6 rounded-full bg-background border-4 border-brand-violet shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
              <div className="card-3d p-6 rounded-2xl border-0">
                <span className="text-brand-cyan text-sm font-mono mb-2 block">{exp.period}</span>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                <p className="text-gray-500 leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-black/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan">Talk</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">Have a project in mind or just want to say hi? I'm always open to discussing new opportunities or collaborations.</p>
        </motion.div>

        <div className="card-3d border-0 p-8 md:p-12 rounded-3xl relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-cyan/10 blur-[80px] rounded-full pointer-events-none" />
          <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! (Form simulation)"); }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 font-medium">Name</label>
                <input 
                  type="text" 
                  required
                  className="bg-black/30 shadow-inner border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400 font-medium">Email</label>
                <input 
                  type="email" 
                  required
                  className="bg-black/30 shadow-inner border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400 font-medium">Message</label>
              <textarea 
                required
                rows={5}
                className="bg-black/30 shadow-inner border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button 
              type="submit"
              className="btn-3d mt-4 px-10 py-4 rounded-xl text-white font-bold tracking-wide flex items-center justify-center gap-2 group w-full md:w-auto md:ml-auto"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
