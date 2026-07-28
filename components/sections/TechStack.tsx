'use client';

import { motion } from 'framer-motion';
import { Brain, Layers3, Boxes, Database, Code2, Server, Container, Cloud } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useInView } from '@/components/useInView';

const nodes = [
  { icon: Layers3, title: 'LLMs', sub: 'OpenAI, Claude, Gemini, Llama', core: true },
  { icon: Boxes, title: 'AI Frameworks', sub: 'LangChain, LangGraph, CrewAI', core: true, badge: '+MCP' },
  { icon: Database, title: 'RAG & Vector DB', sub: 'FAISS, ChromaDB, Pinecone', core: true },
  { icon: Server, title: 'Backend', sub: 'FastAPI, Django, REST API design', core: false },
  { icon: Cloud, title: 'Cloud', sub: 'AWS, Render, Vercel, Railway', core: false },
  { icon: Container, title: 'DevOps', sub: 'Docker, Linux, GH Actions', core: false },
  { icon: Code2, title: 'Languages', sub: 'Python, SQL, R, JavaScript', core: false },
];

const RADIUS = 42;
const ANGLES = nodes.map((_, i) => (-90 + (360 / nodes.length) * i));

function getPos(index: number) {
  const angle = ANGLES[index] * (Math.PI / 180);
  return { x: 50 + RADIUS * Math.cos(angle), y: 50 + RADIUS * Math.sin(angle), angle: ANGLES[index] };
}

const points = nodes.map((n, i) => ({ ...n, ...getPos(i) }));

function MobileLayout({ points: pts }: { points: typeof points }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="flex flex-col gap-3 px-2">
      <div className="flex flex-col items-center justify-center py-6">
        <div className="relative flex items-center justify-center mb-2">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-violet-glow to-secondary flex items-center justify-center shadow-glow-lg relative">
            <div className="absolute inset-1 rounded-full bg-dark/40 backdrop-blur-sm flex items-center justify-center">
              <Brain size={22} className="text-white" />
            </div>
          </div>
        </div>
        <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-violet-glow/80">Core AI Expertise</span>
      </div>
      {pts.map((node, i) => (
        <motion.div
          key={node.title}
          initial={inView ? { opacity: 0, y: 16 } : false}
          animate={inView ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.4, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
          className={`flex items-center gap-3 p-3 rounded-xl ${node.core ? 'glass-strong border border-violet-glow/15' : 'glass'}`}
        >
          <div className={`w-9 h-9 rounded-lg shrink-0 flex items-center justify-center ${node.core ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20' : 'bg-white/[0.06] border border-white/10'}`}>
            <node.icon size={16} className={node.core ? 'text-violet-glow' : 'text-secondary'} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-xs font-semibold text-white">{node.title}</div>
            <div className="text-[11px] text-gray-300 mt-0.5">{node.sub}{node.badge ? ` | ${node.badge}` : ''}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function TechStack() {
  const [isMobile, setIsMobile] = useState(false);
  const { ref: headerRef, inView: headerIn } = useInView();
  const { ref: diagramRef, inView: diagramIn } = useInView();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section id="ai-ecosystem" className="section-pad relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-14 items-center">
          <div ref={headerRef}>
            {headerIn && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="eyebrow">AI Ecosystem</span>
                <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-display font-bold mt-3 mb-5 leading-tight">
                  <span className="text-white">The Technology Behind My </span>
                  <span className="glow-text">AI Solutions</span>
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-md">
                  An ecosystem of modern tools and technologies working together to build powerful AI applications.
                </p>
              </motion.div>
            )}
          </div>

          <div ref={diagramRef}>
            {isMobile ? (
              <MobileLayout points={points} />
            ) : (
              <div className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[600px] aspect-square mx-auto">
                {/* Center hub */}
                <motion.div
                  initial={diagramIn ? { opacity: 0, scale: 0.85 } : false}
                  animate={diagramIn ? { opacity: 1, scale: 1 } : false}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute z-10 flex flex-col items-center justify-center"
                  style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  <div className="absolute w-[200%] h-[200%] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.25)_0%,transparent_55%)] pointer-events-none" />
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-primary via-violet-glow to-secondary flex items-center justify-center shadow-glow-lg relative">
                    <div className="absolute inset-1 rounded-full bg-dark/40 backdrop-blur-sm flex items-center justify-center">
                      <Brain size={26} className="text-white sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
                    </div>
                  </div>
                  <span className="mt-2 text-[10px] sm:text-xs font-mono tracking-[0.15em] uppercase text-violet-glow/80 whitespace-nowrap">Core AI Expertise</span>
                </motion.div>

                {points.map((node, i) => (
                  <motion.div
                    key={node.title}
                    initial={diagramIn ? { opacity: 0, scale: 0.8 } : false}
                    animate={diagramIn ? { opacity: 1, scale: 1 } : false}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                    whileHover={{ scale: 1.06 }}
                    className={`absolute z-10 flex flex-col items-center text-center gap-1.5 gpu ${
                      node.core
                        ? 'w-[95px] sm:w-[130px] lg:w-[150px] p-2.5 sm:p-3 lg:p-3.5 glass-strong border border-violet-glow/15 shadow-glow-sm'
                        : 'w-[85px] sm:w-[115px] lg:w-[135px] p-2 sm:p-2.5 lg:p-3 glass-strong'
                    }`}
                    style={{ top: `${node.y}%`, left: `${node.x}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      node.core ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20' : 'bg-white/[0.06] border border-white/10'
                    }`}>
                      <node.icon size={13} className={`sm:w-[15px] sm:h-[15px] ${node.core ? 'text-violet-glow' : 'text-secondary'}`} />
                    </div>
                    <div className="min-w-0 flex flex-col items-center min-h-[2.8rem] sm:min-h-[3.2rem] justify-center">
                      <div className="flex items-center gap-1.5 flex-wrap justify-center">
                        <span className={`font-semibold leading-tight text-[11px] sm:text-xs text-white`}>{node.title}</span>
                        {node.badge && (
                          <span className="text-[8px] sm:text-[9px] font-mono text-violet-glow/70 bg-violet-glow/10 px-1.5 py-[1px] rounded leading-tight">{node.badge}</span>
                        )}
                      </div>
                      <div className="hidden sm:block text-[10px] lg:text-[11px] text-gray-300 leading-tight mt-0.5">{node.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}