"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/lib/data";

// Hook: types out a string character by character after a delay
function useTypewriter(
  text: string,
  speed = 30,
  startDelay = 0,
  enabled = false,
) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const delayTimer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(delayTimer);
  }, [text, speed, startDelay, enabled]);

  return { displayed, done };
}

// A single terminal line that types itself out
function TerminalLine({
  children,
  delay,
  isInView,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  isInView: boolean;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [isInView, delay]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : {}}
      transition={{ duration: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// A line that types out its plain text content
function TypewriterLine({
  text,
  delay,
  speed = 28,
  isInView,
  renderFn,
}: {
  text: string;
  delay: number;
  speed?: number;
  isInView: boolean;
  renderFn: (typed: string, done: boolean) => React.ReactNode;
}) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [isInView, delay]);

  const { displayed, done } = useTypewriter(text, speed, 0, started);
  return <>{renderFn(displayed, done)}</>;
}

export default function About() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(terminalRef, { once: true, margin: "-100px" });

  const name = PORTFOLIO_DATA.personal.name;
  const bio = PORTFOLIO_DATA.personal.bio;
  const stats = PORTFOLIO_DATA.stats;
  const socials = PORTFOLIO_DATA.personal.socials;

  // Calculate cumulative timings for sequential typing
  const LINE_SPEED = 30;
  const LINE_GAP = 100; // ms gap between lines starting

  const t0 = 200; // "const developer = ..."
  const line0Dur = name.length * LINE_SPEED + LINE_GAP;

  const t1 = t0 + line0Dur; // "/** About me */"
  const commentHeaderDur = 16 * LINE_SPEED + LINE_GAP;

  const t2 = t1 + commentHeaderDur; // bio text
  const bioDur = bio.length * 18 + LINE_GAP;

  // Stats lines
  const statTimes = stats.map((stat, i) => {
    const statText = `${stat.label.toLowerCase().replace(/\s+/g, "_")} = ${stat.value};`;
    const prevDur =
      i === 0
        ? bioDur
        : stats.slice(0, i).reduce((acc, s) => {
            return (
              acc +
              (`${s.label.toLowerCase().replace(/\s+/g, "_")} = ${s.value};`
                .length *
                LINE_SPEED +
                LINE_GAP)
            );
          }, LINE_GAP);
    return { stat, text: statText, t: t2 + prevDur };
  });

  const lastStatEnd =
    statTimes.length > 0
      ? statTimes[statTimes.length - 1].t +
        statTimes[statTimes.length - 1].text.length * LINE_SPEED +
        LINE_GAP
      : t2 + bioDur;

  const tSocials = lastStatEnd;

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
            About Me
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
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <div className="w-full h-full relative rounded-xl overflow-hidden">
                <Image
                  src="/my-image.jpeg"
                  alt="Chamara Pathum"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Terminal Details side */}
          <motion.div
            ref={terminalRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Terminal Window */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
              {/* Terminal Chrome / Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-xs font-mono text-gray-500 tracking-widest">
                  ~/chamara/portfolio — zsh
                </span>
              </div>

              {/* Terminal Body */}
              <div className="bg-[#0d1117] p-6 font-mono text-sm leading-7 min-h-[320px]">
                {/* Line 1: const developer = "Name"; */}
                <TypewriterLine
                  text={`const developer = "${name}";`}
                  delay={t0}
                  speed={LINE_SPEED}
                  isInView={isInView}
                  renderFn={(typed, done) => (
                    <p>
                      <span className="text-[#6E9FFF]">
                        {typed.startsWith("const")
                          ? "const"
                          : typed.slice(0, Math.min(typed.length, 5))}
                      </span>
                      {typed.length > 5 && (
                        <>
                          {" "}
                          <span className="text-[#79D8A4]">
                            {typed.slice(6, Math.min(typed.length, 15))}
                          </span>
                        </>
                      )}
                      {typed.length > 15 && (
                        <span className="text-white">
                          {typed.slice(15, Math.min(typed.length, 18))}
                        </span>
                      )}
                      {typed.length > 18 && (
                        <span className="text-[#FF7B72]">
                          {typed.slice(18, typed.length - (done ? 1 : 0))}
                        </span>
                      )}
                      {done && <span className="text-white">;</span>}
                      {!done && (
                        <span className="inline-block w-[2px] h-[1em] bg-white/80 animate-[blink_0.75s_step-end_infinite] align-middle ml-[1px]" />
                      )}
                    </p>
                  )}
                />

                {/* Comment block: bio */}
                <TerminalLine
                  delay={t1}
                  isInView={isInView}
                  className="mt-4 border-l-2 border-[#28C840]/40 pl-4"
                >
                  <TypewriterLine
                    text="/** About me */"
                    delay={t1}
                    speed={LINE_SPEED}
                    isInView={isInView}
                    renderFn={(typed, done) => (
                      <p className="text-[#28C840] text-xs mb-1">
                        {typed}
                        {!done && (
                          <span className="inline-block w-[2px] h-[0.8em] bg-[#28C840] animate-[blink_0.75s_step-end_infinite] align-middle ml-[1px]" />
                        )}
                      </p>
                    )}
                  />
                  <TypewriterLine
                    text={bio}
                    delay={t2}
                    speed={18}
                    isInView={isInView}
                    renderFn={(typed, done) => (
                      <p className="text-[#8b949e] text-xs leading-5">
                        {typed}
                        {!done && typed.length > 0 && (
                          <span className="inline-block w-[2px] h-[0.8em] bg-[#8b949e] animate-[blink_0.75s_step-end_infinite] align-middle ml-[1px]" />
                        )}
                      </p>
                    )}
                  />
                </TerminalLine>

                {/* Stats as const declarations */}
                <div className="mt-4 space-y-1">
                  {statTimes.map(({ stat, text, t }) => (
                    <TypewriterLine
                      key={stat.id}
                      text={text}
                      delay={t}
                      speed={LINE_SPEED}
                      isInView={isInView}
                      renderFn={(typed, done) => {
                        const varName = stat.label
                          .toLowerCase()
                          .replace(/\s+/g, "_");
                        const prefix = `const ${varName} = `;
                        return (
                          <p>
                            {typed.length > 0 && (
                              <span className="text-[#6E9FFF]">const</span>
                            )}
                            {typed.length > 6 && (
                              <span className="text-[#79D8A4]">
                                {" "}
                                {typed.slice(
                                  6,
                                  Math.min(typed.length, prefix.length - 3),
                                )}
                              </span>
                            )}
                            {typed.length >= prefix.length - 2 && (
                              <span className="text-white"> = </span>
                            )}
                            {typed.length > prefix.length && (
                              <span className="text-[#FEBC2E]">
                                {typed.slice(
                                  prefix.length,
                                  typed.length - (done ? 1 : 0),
                                )}
                              </span>
                            )}
                            {done && <span className="text-white">;</span>}
                            {!done && typed.length > 0 && (
                              <span className="inline-block w-[2px] h-[1em] bg-white/80 animate-[blink_0.75s_step-end_infinite] align-middle ml-[1px]" />
                            )}
                          </p>
                        );
                      }}
                    />
                  ))}
                </div>

                {/* Divider */}
                <TerminalLine delay={tSocials - 50} isInView={isInView}>
                  <div className="my-5 border-t border-white/5" />
                </TerminalLine>

                {/* Social links */}
                <div className="space-y-1 mb-4">
                  {socials.map((social, i) => {
                    const Icon = social.icon;
                    const urlText = social.url.replace("https://", "");
                    return (
                      <TypewriterLine
                        key={social.id}
                        text={`$ open ${urlText}`}
                        delay={
                          tSocials +
                          i *
                            (`$ open ${urlText}`.length * LINE_SPEED + LINE_GAP)
                        }
                        speed={LINE_SPEED}
                        isInView={isInView}
                        renderFn={(typed, done) => (
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 group w-fit"
                          >
                            <span className="text-[#28C840]">$</span>
                            <span className="text-[#8b949e] group-hover:text-white transition-colors flex items-center gap-2">
                              <Icon size={14} />
                              <span className="text-xs group-hover:text-[#28C840] transition-colors">
                                {typed.slice(2)}
                                {!done && (
                                  <span className="inline-block w-[2px] h-[0.8em] bg-[#8b949e] animate-[blink_0.75s_step-end_infinite] align-middle ml-[1px]" />
                                )}
                              </span>
                            </span>
                          </a>
                        )}
                      />
                    );
                  })}
                </div>

                {/* Blinking cursor at end */}
                <p className="flex items-center gap-1 mt-2">
                  <span className="text-[#28C840]">›</span>
                  <span className="w-2 h-4 bg-[#28C840] animate-[blink_1s_step-end_infinite] inline-block ml-1" />
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
