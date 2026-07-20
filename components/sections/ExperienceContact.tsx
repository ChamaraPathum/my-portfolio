"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import {
  Send,
  MapPin,
  Calendar,
  Building2,
  CheckCircle,
  Mail,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

/* =====================================================
   EXPERIENCE - professional vertical timeline
===================================================== */
export function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-[#0f172a]/50">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full pointer-events-none opacity-8"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6">
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
            Work History
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#f1f5f9] mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-[#64748b] text-base max-w-xl leading-relaxed">
            A timeline of professional experience and growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-10 pl-16">
            {PORTFOLIO_DATA.experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.85rem] top-4 w-4 h-4 rounded-full bg-[#020817] border-2 border-indigo-500 flex items-center justify-center z-10">
                  {i === 0 && (
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 dot-pulse" />
                  )}
                </div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-heading font-bold text-[#f1f5f9] text-lg leading-snug">
                          {exp.role}
                        </h3>
                        {i === 0 && (
                          <span className="shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#64748b]">
                        <span className="flex items-center gap-1.5">
                          <Building2 size={13} className="text-indigo-400" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-indigo-400" />
                          Sri Lanka
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0 flex items-center gap-1.5 text-xs text-[#64748b] bg-[#1e293b] border border-white/8 px-3 py-1.5 rounded-xl">
                      <Calendar size={11} className="text-indigo-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#94a3b8] text-sm leading-relaxed border-l-2 border-indigo-500/30 pl-4">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   CONTACT - clean modern form
===================================================== */
export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name, email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setSubmitted(true);
      setName(""); setEmail(""); setMessage("");
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.7) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="section-tag mb-4 mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Get In Touch
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#f1f5f9] mb-4">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-[#64748b] text-base leading-relaxed max-w-lg mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Drop me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-10"
        >
          {/* Quick contact info */}
          <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-white/8">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                <Mail size={16} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-[#475569] text-[11px] uppercase tracking-wider font-medium">Email</p>
                <p className="text-[#f1f5f9] text-sm font-medium group-hover:text-indigo-300 transition-colors">
                  {PORTFOLIO_DATA.personal.email}
                </p>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <MapPin size={16} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-[#475569] text-[11px] uppercase tracking-wider font-medium">Location</p>
                <p className="text-[#f1f5f9] text-sm font-medium">{PORTFOLIO_DATA.personal.location}</p>
              </div>
            </div>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center py-8 gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <CheckCircle size={32} className="text-emerald-400" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#f1f5f9]">Message Sent!</h3>
              <p className="text-[#64748b] text-sm max-w-sm leading-relaxed">
                Thanks for reaching out, {name || "there"}! I&apos;ll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-[#94a3b8] text-sm font-medium" htmlFor="contact-name">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="input-field"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[#94a3b8] text-sm font-medium" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="input-field"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-[#94a3b8] text-sm font-medium" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or idea..."
                  className="input-field resize-none"
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="text-red-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  Something went wrong. Please try again.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
