'use client';

import heroPortrait from '../../Adobe Express - file.png';
import Image from 'next/image';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import {
  Sparkles,
  ArrowUpRight,
  Mic,
  FileDown,
  Briefcase,
  Users,
  Globe2,
  Star,
  Send,
} from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '20+', label: 'Projects Completed', color: 'from-primary to-violet-glow' },
  { icon: Users, value: '2+', label: 'Years Experience', color: 'from-secondary to-tertiary' },
  { icon: Globe2, value: '15+', label: 'Clients Worldwide', color: 'from-primary to-violet-glow' },
  { icon: Star, value: '100%', label: 'Client Satisfaction', color: 'from-amber-500 to-yellow-400' },
];

const lines = [
  { text: 'AI Agents ', gradient: true },
  { text: 'Automations', gradient: true },
  { text: 'That Power Real', gradient: false },
  { text: 'Businesses.', gradient: false },
];

const TYPING_SPEED = 35; // ms per char
const LINE_PAUSE = 300;  // pause after each line
const JITTER_RANGE = 10; // +/- ms jitter

function useTypingAnimation(lines: { text: string }[], started: boolean) {
  // Flatten into one array of character positions
  const totalChars = lines.reduce((acc, l) => acc + l.text.length, 0);
  const [revealed, setRevealed] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!started) return;
    if (revealed >= totalChars) { setDone(true); return; }

    // Pause for LINE_PAUSE between lines
    let cumulative = 0;
    for (const l of lines) {
      if (revealed === cumulative + l.text.length) {
        const t = setTimeout(() => setRevealed((p) => p + 1), LINE_PAUSE);
        return () => clearTimeout(t);
      }
      cumulative += l.text.length;
    }

    const jitter = Math.random() * JITTER_RANGE - JITTER_RANGE / 2;
    const delay = TYPING_SPEED + jitter;
    const t = setTimeout(() => setRevealed((p) => p + 1), delay);
    return () => clearTimeout(t);
  }, [started, revealed, totalChars]);

  // Compute per-line revealed counts
  const lineCounts = useMemo(() => {
    let remaining = revealed;
    return lines.map((l) => {
      const count = Math.min(remaining, l.text.length);
      remaining = Math.max(0, remaining - l.text.length);
      return count;
    });
  }, [revealed]);

  const typingActive = started && !done;

  return { lineCounts, done, typingActive };
}

function Cursor({ visible }: { visible: boolean }) {
  return (
    <span
      className="inline-block w-[3px] h-[1.05em] bg-violet-glow ml-[1px] align-middle rounded-sm"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.1s',
      }}
    >
      <span
        className="absolute inset-0 bg-violet-glow rounded-sm"
        style={{
          animation: 'blink 1.2s ease-in-out infinite',
        }}
      />
    </span>
  );
}

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);
  const [showHex, setShowHex] = useState(false);
  const [showHexGlow, setShowHexGlow] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { lineCounts, done: typingDone, typingActive } = useTypingAnimation(lines, typingStarted);

  useEffect(() => {
    const t1 = setTimeout(() => setTypingStarted(true), 500);
    const t2 = setTimeout(() => setShowHex(true), 900);
    const t3 = setTimeout(() => setShowHexGlow(true), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  useEffect(() => {
    if (typingDone) {
      const t = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(t);
    }
  }, [typingDone]);

  const handleMouse = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const typed = lineCounts;

  return (
    <section
      id="home"
      className="flex items-center justify-start sm:justify-center min-h-[100svh] sm:min-h-0 pt-12 sm:pt-24 pb-6 sm:pb-16 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(168,85,247,0.18),transparent_36%),radial-gradient(circle_at_72%_28%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_40%_80%,rgba(109,40,217,0.12),transparent_26%)]"
          animate={{ opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="absolute inset-0 opacity-0 animate-grid-fade [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:4rem_4rem] [mask-image:radial-gradient(circle_at_center,black_35%,transparent_82%)]"
          aria-hidden
        />
        <motion.div
          aria-hidden
          animate={{ x: [0, 24, 0], y: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-[18%] h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      <div className="container-custom z-10">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-4 sm:gap-6 xl:gap-14 items-center">
          {/* Left Content */}
          <div className="order-1 lg:order-1 max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-2 glass px-4 py-1.5 mb-2.5 text-xs font-medium text-gray-300 max-w-full"
            >
              <Sparkles size={13} className="text-violet-glow shrink-0" />
              <span className="truncate sm:whitespace-normal">AI Engineer &bull; AI Agent Developer &bull; Automation Expert</span>
            </motion.div>

            {/* Heading — fixed height to prevent layout shift */}
            <div
              className="text-[clamp(1.75rem,7.5vw,3.7rem)] leading-[1.08] sm:text-[3.7rem] sm:leading-[1.02] lg:text-[4.1rem] lg:leading-[1.01] font-display font-bold mb-2.5 tracking-[-0.015em]"
              style={{ minHeight: 'clamp(5rem, 30vw, 14rem)' }}
            >
              {lines.map((line, i) => {
                const visible = typed[i];
                const isLast = i === lines.length - 1;
                const showCursor = isLast && typingActive;

                return (
                  <div key={i} className={line.gradient && typingDone ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#6366F1] via-[#3B82F6] to-[#A855F7] bg-[length:250%_100%] animate-gradient-shift' : line.gradient ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#6366F1] via-[#3B82F6] to-[#A855F7] bg-[length:250%_100%]' : ''}>
                    <span>{line.text.slice(0, visible)}</span>
                    {showCursor && (
                      <span className="relative inline-flex">
                        <Cursor visible={true} />
                      </span>
                    )}
                  </div>
                );
              })}
              {/* Cursor on first blank line when nothing typed yet */}
              {typed[0] === 0 && typingActive && (
                <span className="relative inline-flex -ml-0.5">
                  <Cursor visible={true} />
                </span>
              )}
            </div>

            {/* Paragraph */}
            <p className="text-gray-400 text-[0.9rem] sm:text-[1.05rem] mb-3 sm:mb-7 max-w-lg leading-[1.62] min-h-[1.62rem]">
              {typingDone && showContent ? (
                "I design and develop AI solutions that automate tasks, enhance customer experience and drive real business growth."
              ) : ''}
            </p>

            {/* Buttons */}
            {showContent && (
              <div className="flex flex-wrap items-center gap-2 sm:gap-3.5 mb-2.5 sm:mb-10">
                <motion.a
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
                  href="#projects"
                  className="btn-primary group"
                  whileHover={{ y: -4, boxShadow: '0 0 50px rgba(139,92,246,0.35)' }}
                >
                  View My Work <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  href="#contact"
                  className="btn-secondary"
                  whileHover={{ y: -4, boxShadow: '0 0 30px rgba(139,92,246,0.2)' }}
                >
                  Hire Me <Send size={15} />
                </motion.a>
                <motion.button
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  type="button"
                  className="hidden sm:flex items-center gap-3 pl-5 pr-2 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all focus-visible:border-secondary/60"
                  whileHover={{ y: -4 }}
                >
                  <span className="flex items-end gap-[3px] h-4">
                    {[6, 12, 8, 14, 7].map((h, i) => (
                      <span key={i} className="w-[3px] bg-secondary/70 rounded-full animate-pulse-slow" style={{ height: `${h}px`, animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </span>
                  <span className="text-sm text-gray-300">Voice Assistant</span>
                  <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow-sm">
                    <Mic size={15} />
                  </span>
                </motion.button>
                <motion.a
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  href="/resume.pdf"
                  className="hidden sm:inline-flex btn-secondary !border-transparent !bg-transparent hover:!bg-white/5 !px-3"
                  whileHover={{ y: -4 }}
                >
                  <FileDown size={16} /> Resume
                </motion.a>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                  animate={showContent ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                  className="glass px-4 py-4 gpu"
                  whileHover={{ y: -3, boxShadow: '0 0 40px rgba(139,92,246,0.25)' }}
                >
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-glow-sm`}>
                    <s.icon size={16} />
                  </div>
                  <div className="font-display font-bold text-xl text-white">{s.value}</div>
                  <div className="text-[11px] text-gray-400 leading-tight mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex justify-center lg:justify-end order-2 lg:order-2 mt-2 sm:mt-0 lg:-mt-8"
          >
            <div className="relative w-[min(70vw,18rem)] h-[min(76vw,21rem)] sm:w-[22rem] sm:h-[28rem] lg:w-[24rem] lg:h-[30rem]">
              {/* Ambient glow */}
              <motion.div
                className="absolute -inset-12 rounded-[3rem] bg-[radial-gradient(ellipse_at_50%_40%,rgba(157,77,255,0.30)_0%,rgba(122,63,255,0.12)_25%,transparent_55%)] blur-[80px] pointer-events-none"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="absolute inset-0">
                <motion.div
                  className="absolute -inset-[8%] z-0"
                  initial={{ opacity: 0, scale: 0.92, filter: 'blur(6px)' }}
                  animate={showHex ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <svg className="w-full h-full pointer-events-none drop-shadow-[0_0_60px_rgba(157,77,255,0.40)]" viewBox="0 0 300 420" fill="none" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <linearGradient id="h1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#9D4DFF" /><stop offset="50%" stopColor="#B366FF" /><stop offset="100%" stopColor="#7A3FFF" /></linearGradient>
                      <linearGradient id="h2" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#7A3FFF" /><stop offset="50%" stopColor="#C77DFF" /><stop offset="100%" stopColor="#9D4DFF" /></linearGradient>
                      <linearGradient id="h3" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#C77DFF" /><stop offset="50%" stopColor="#9D4DFF" /><stop offset="100%" stopColor="#7A3FFF" /></linearGradient>
                      <filter id="glowOuter"><feGaussianBlur stdDeviation="6" result="b1" /><feGaussianBlur stdDeviation="3" result="b2" /><feMerge><feMergeNode in="b1" /><feMergeNode in="b2" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                      <filter id="glowBright"><feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                    </defs>
                    <path d="M150 10 L280 98 L280 322 L150 410 L20 322 L20 98 Z" stroke="url(#h1)" strokeWidth="2" strokeLinejoin="round" fill="rgba(157,77,255,0.08)" />
                    <path d="M150 36 L260 108 L260 312 L150 384 L40 312 L40 108 Z" stroke="url(#h2)" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(179,102,255,0.05)" />
                    <path d="M150 62 L240 118 L240 302 L150 358 L60 302 L60 118 Z" stroke="url(#h3)" strokeWidth="1.2" strokeLinejoin="round" fill="rgba(199,125,255,0.03)" />
                    {showHexGlow && (
                      <>
                        <path d="M150 10 L280 98 L280 322 L150 410 L20 322 L20 98 Z" stroke="#B366FF" strokeWidth="8" strokeLinejoin="round" fill="none" filter="url(#glowOuter)" strokeDasharray="300 3300" className="animate-hex-flow" opacity="0.6" />
                        <path d="M150 36 L260 108 L260 312 L150 384 L40 312 L40 108 Z" stroke="#C77DFF" strokeWidth="6" strokeLinejoin="round" fill="none" filter="url(#glowOuter)" strokeDasharray="250 2550" className="animate-hex-flow-reverse" opacity="0.5" style={{ animationDelay: '0.5s' }} />
                        <path d="M150 62 L240 118 L240 302 L150 358 L60 302 L60 118 Z" stroke="#9D4DFF" strokeWidth="5" strokeLinejoin="round" fill="none" filter="url(#glowOuter)" strokeDasharray="200 2100" className="animate-hex-flow" opacity="0.4" style={{ animationDelay: '1.0s' }} />
                        <path d="M150 10 L280 98 L280 322 L150 410 L20 322 L20 98 Z" stroke="#C77DFF" strokeWidth="3" strokeLinejoin="round" fill="none" filter="url(#glowBright)" strokeDasharray="300 3300" className="animate-hex-flow" />
                        <path d="M150 36 L260 108 L260 312 L150 384 L40 312 L40 108 Z" stroke="#B366FF" strokeWidth="2.5" strokeLinejoin="round" fill="none" strokeDasharray="250 2550" className="animate-hex-flow-reverse" style={{ animationDelay: '0.5s' }} />
                        <path d="M150 62 L240 118 L240 302 L150 358 L60 302 L60 118 Z" stroke="#9D4DFF" strokeWidth="2" strokeLinejoin="round" fill="none" opacity="0.8" strokeDasharray="200 2100" className="animate-hex-flow" style={{ animationDelay: '1.0s' }} />
                      </>
                    )}
                  </svg>
                </motion.div>
                <div className="absolute inset-[12%] z-[2]">
                  <div className="relative w-full h-full translate-y-[12%]">
                    {!imageFailed ? (
                      <Image
                        src={heroPortrait}
                        alt="Portrait of Muhammad Tanzeel Ur Rehman, AI Engineer"
                        fill
                        priority
                        sizes="(max-width: 1024px) 68vw, 24rem"
                        className="object-contain object-center scale-[1.05] brightness-[1.02] contrast-[1.03]"
                        onError={() => setImageFailed(true)}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-dark">
                        <div className="text-center px-6">
                          <div className="mx-auto w-24 h-24 rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-sm flex items-center justify-center text-sm uppercase tracking-[0.35em] text-white/80">Photo</div>
                          <p className="mt-4 text-sm text-gray-300">Add your photo at <span className="text-violet-glow">public/hero-photo.jpg</span></p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Particles */}
              <div className="absolute left-[8%] top-[15%] w-[2px] h-[2px] rounded-full bg-[#C77DFF] opacity-40 animate-particle-float hidden sm:block gpu" />
              <div className="absolute right-[12%] top-[25%] w-[2px] h-[2px] rounded-full bg-[#9D4DFF] opacity-30 animate-particle-float hidden sm:block gpu" style={{ animationDelay: '2s' }} />
              <div className="absolute left-[15%] top-[55%] w-[2px] h-[2px] rounded-full bg-[#B366FF] opacity-35 animate-particle-float hidden sm:block gpu" style={{ animationDelay: '4s' }} />
              <div className="absolute right-[8%] top-[70%] w-[2px] h-[2px] rounded-full bg-[#7A3FFF] opacity-30 animate-particle-float hidden sm:block gpu" style={{ animationDelay: '6s' }} />
              {/* HUD dots */}
              <div className="absolute -left-2 top-[35%] w-1 h-1 rounded-full bg-[#C77DFF] opacity-40 hidden sm:block" />
              <div className="absolute -right-2 top-[55%] w-1 h-1 rounded-full bg-[#9D4DFF] opacity-30 hidden sm:block" />
              <div className="absolute left-[18%] -bottom-2 w-1 h-1 rounded-full bg-[#B366FF] opacity-35 hidden sm:block" />
              <div className="absolute right-[22%] -top-1 w-[3px] h-[3px] rounded-full bg-[#7A3FFF] opacity-25 hidden sm:block" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}