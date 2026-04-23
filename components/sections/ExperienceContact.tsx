"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PORTFOLIO_DATA } from "@/lib/data";
import {
  Send,
  Terminal,
  GitBranch,
  MapPin,
  Calendar,
  Building2,
  CheckCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { log } from "console";

/* ─────────────────────────────────────────
   MY JOURNEY — terminal git log style
───────────────────────────────────────── */
export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
            My Journey
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
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.7)]"
        >
          {/* Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="ml-3 text-xs font-mono text-gray-500 tracking-widest">
              ~/chamara — git log --oneline
            </span>
            <span className="ml-auto flex items-center gap-1.5 text-xs font-mono text-[#28C840]">
              <GitBranch size={11} />
              main
            </span>
          </div>

          {/* Body */}
          <div className="bg-[#0d1117] p-6 font-mono text-sm">
            {/* git log header */}
            <div className="text-[#8b949e] text-xs mb-6 space-y-0.5">
              <p>
                <span className="text-[#6E9FFF]">Author:</span> Chamara Pathum
                &lt;chamara@dev.lk&gt;
              </p>
              <p>
                <span className="text-[#6E9FFF]">Branch:</span>{" "}
                <span className="text-[#28C840]">main</span>
              </p>
            </div>

            {/* Commits */}
            <div className="space-y-0">
              {PORTFOLIO_DATA.experience.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.3, duration: 0.5 }}
                  className="relative"
                >
                  {/* Git graph line */}
                  <div className="flex items-stretch gap-4">
                    {/* Graph column */}
                    <div className="flex flex-col items-center w-6 shrink-0">
                      <div
                        className="w-3 h-3 rounded-full border-2 border-[#28C840] bg-[#0d1117] z-10 mt-1 shrink-0"
                        style={{ boxShadow: "0 0 8px rgba(40,200,64,0.5)" }}
                      />
                      {i < PORTFOLIO_DATA.experience.length - 1 && (
                        <div className="w-[2px] flex-1 bg-gradient-to-b from-[#28C840]/50 to-[#28C840]/10 mt-1" />
                      )}
                    </div>

                    {/* Commit content */}
                    <div
                      className={`pb-8 flex-1 ${i === PORTFOLIO_DATA.experience.length - 1 ? "pb-2" : ""}`}
                    >
                      {/* Commit hash + date */}
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="text-[#FEBC2E] text-xs">
                          {`commit ${exp.id.replace("exp-", "a3f")}b9c`}
                        </span>
                        <span className="text-[#8b949e] text-xs flex items-center gap-1">
                          <Calendar size={10} />
                          {exp.period}
                        </span>
                      </div>

                      {/* Card */}
                      <div className="bg-[#161b22] border border-white/5 rounded-xl p-5 hover:border-[#28C840]/20 transition-colors duration-300">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-white font-bold text-base">
                              {exp.role}
                            </h3>
                            <div className="flex items-center gap-1.5 text-[#8b949e] text-xs mt-1">
                              <Building2 size={11} />
                              <span>{exp.company}</span>
                              <span className="mx-1">·</span>
                              <MapPin size={11} />
                              <span>Sri Lanka</span>
                            </div>
                          </div>
                          <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono bg-[#28C840]/10 text-[#28C840] border border-[#28C840]/20">
                            {i === 0
                              ? "HEAD"
                              : `v${PORTFOLIO_DATA.experience.length - i}.0`}
                          </span>
                        </div>

                        {/* Description as git commit body */}
                        <div className="border-l-2 border-[#28C840]/30 pl-3">
                          <p className="text-[#28C840] text-[10px] mb-1">
                            /** commit message */
                          </p>
                          <p className="text-[#8b949e] text-xs leading-5">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* End cursor */}
            <div className="flex items-center gap-2 mt-2 pl-10">
              <span className="text-[#28C840]">›</span>
              <span className="w-[6px] h-3 bg-[#28C840] animate-[blink_1s_step-end_infinite] inline-block" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CONTACT — terminal interactive form
───────────────────────────────────────── */
export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "send_message()" | "submitting..." | "success"
  >("send_message()");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting...");

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: name,
          email: email,
          message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setStatus("success");
      setSubmitted(true);

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("FAILED...", error);
    } finally {
      setStatus("send_message()");
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-black/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
            Let&apos;s Talk
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.7)]"
        >
          {/* Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="ml-3 text-xs font-mono text-gray-500 tracking-widest flex items-center gap-1.5">
              <Terminal size={11} />
              ~/chamara — send-message
            </span>
          </div>

          {/* Body */}
          <div className="bg-[#0d1117] p-6 font-mono text-sm">
            {submitted ? (
              /* Success output */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-2"
              >
                <p className="text-[#28C840]">✓ Message sent successfully!</p>
                <p className="text-[#8b949e] text-xs">
                  Status: <span className="text-[#FEBC2E]">200 OK</span>
                </p>
                <p className="text-[#8b949e] text-xs">
                  Response:{" "}
                  <span className="text-[#FF7B72]">
                    &quot;Thanks for reaching out! I&apos;ll be in touch
                    soon.&quot;
                  </span>
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-[#28C840]">›</span>
                  <span className="w-[6px] h-3 bg-[#28C840] animate-[blink_1s_step-end_infinite] inline-block" />
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Intro comment */}
                <p className="text-[#8b949e] text-xs">
                  <span className="text-[#28C840]">// </span>
                  Have a project in mind? Fill in the fields below and hit send.
                </p>

                {/* Name field */}
                <TerminalField
                  varName="sender_name"
                  varColor="#79D8A4"
                  isFocused={focused === "name"}
                  hasValue={name.length > 0}
                  valueColor="#FF7B72"
                >
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder='"Your Name"'
                    className="flex-1 bg-transparent outline-none text-[#FF7B72] placeholder:text-[#3d3d3d] caret-[#28C840]"
                  />
                </TerminalField>

                {/* Email field */}
                <TerminalField
                  varName="sender_email"
                  varColor="#79D8A4"
                  isFocused={focused === "email"}
                  hasValue={email.length > 0}
                  valueColor="#FF7B72"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder='"your@email.com"'
                    className="flex-1 bg-transparent outline-none text-[#FF7B72] placeholder:text-[#3d3d3d] caret-[#28C840]"
                  />
                </TerminalField>

                {/* Message field */}
                <div>
                  <p className="text-xs mb-1">
                    <span className="text-[#6E9FFF]">const</span>{" "}
                    <span className="text-[#79D8A4]">message</span>{" "}
                    <span className="text-white">= `</span>
                  </p>
                  <div
                    className={`ml-4 border rounded-lg px-3 py-2 transition-colors duration-200 bg-[#161b22] ${
                      focused === "message"
                        ? "border-[#28C840]/50"
                        : "border-white/5"
                    }`}
                  >
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell me about your project or idea..."
                      className="w-full bg-transparent outline-none text-[#8b949e] placeholder:text-[#3d3d3d] resize-none caret-[#28C840] leading-6 text-xs"
                    />
                  </div>
                  <p className="text-xs mt-1 text-white">`;</p>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5" />

                {/* Submit */}
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[#8b949e] text-xs">
                    <span className="text-[#28C840]">$</span>{" "}
                    <span className="text-[#6E9FFF]">node</span>{" "}
                    <span className="text-white">send-message.js</span>
                  </p>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-mono text-sm font-bold
                                bg-[#28C840]/15 text-[#28C840] border border-[#28C840]/30
                                hover:bg-[#28C840]/25 hover:shadow-[0_0_20px_rgba(40,200,64,0.2)]
                                transition-all duration-200 group"
                  >
                    <span>{status}</span>
                    {status === "send_message()" && (
                      <Send
                        size={14}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Helper: wraps an input as a `const varName = <input>` line */
function TerminalField({
  varName,
  varColor,
  isFocused,
  hasValue,
  valueColor,
  children,
}: {
  varName: string;
  varColor: string;
  isFocused: boolean;
  hasValue: boolean;
  valueColor: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex items-center gap-2 border rounded-lg px-3 py-2 transition-colors duration-200 bg-[#161b22] ${
        isFocused ? "border-[#28C840]/50" : "border-white/5"
      }`}
    >
      <span className="text-[#6E9FFF] text-xs shrink-0">const</span>
      <span style={{ color: varColor }} className="text-xs shrink-0">
        {varName}
      </span>
      <span className="text-white text-xs shrink-0">=</span>
      {children}
      <span className="text-white text-xs shrink-0">;</span>
    </div>
  );
}
