'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Mic, X, Send } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');

  const handleChatSubmit = useCallback(() => {
    if (!chatInput.trim()) return;
    window.open(
      `mailto:${siteConfig.email}?subject=Portfolio Chat Inquiry&body=${encodeURIComponent(chatInput)}`
    );
    setChatInput('');
  }, [chatInput]);

  return (
    <div className="fixed bottom-5 right-4 sm:right-6 z-50 hidden md:flex flex-col items-end gap-3">
      {/* Voice panel */}
      <AnimatePresence>
        {voiceOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="glass-strong w-64 p-5 flex flex-col items-center"
          >
            <button type="button" onClick={() => setVoiceOpen(false)} className="self-end text-gray-400 hover:text-white -mt-1 -mr-1 transition-colors" aria-label="Close voice assistant">
              <X size={16} />
            </button>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow mb-4 relative">
              <motion.span
                animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-primary/40"
              />
              <Mic size={26} className="relative z-10" />
            </div>
            <div className="flex items-end gap-[3px] h-6 mb-3">
              {[8, 16, 10, 20, 12, 18, 9].map((h, i) => (
                <span
                  key={i}
                  className="w-[3px] bg-secondary rounded-full animate-pulse-slow"
                  style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center">Listening... say something to get started</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="glass-strong w-72 sm:w-80 p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <MessageCircle size={14} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">AI Chat Assistant</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
                  </div>
                </div>
              </div>
              <button type="button" onClick={() => setChatOpen(false)} className="text-gray-400 hover:text-white transition-colors" aria-label="Close chat assistant">
                <X size={16} />
              </button>
            </div>
            <div className="bg-white/[0.05] rounded-lg px-3 py-2 text-[11px] text-gray-300 mb-3">
              Hi! I&apos;m your AI assistant. How can I help you today?
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleChatSubmit(); }}
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary/50 transition-colors"
              />
              <button type="button" onClick={handleChatSubmit} className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0" aria-label="Send chat message">
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launchers */}
      <div className="flex gap-3">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={() => setVoiceOpen((v) => !v)}
          className="w-[52px] h-[52px] rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-card hover:border-secondary/40 transition-colors focus-visible:border-secondary/50"
          aria-label={voiceOpen ? 'Close voice assistant' : 'Open voice assistant'}
        >
          <Mic size={20} className="text-secondary" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          onClick={() => setChatOpen((v) => !v)}
          className="w-[52px] h-[52px] rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow focus-visible:ring-2 focus-visible:ring-violet-400/60"
          aria-label={chatOpen ? 'Close chat assistant' : 'Open chat assistant'}
        >
          <MessageCircle size={22} />
        </motion.button>
      </div>
    </div>
  );
}