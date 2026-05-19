"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, CheckCircle2, Zap, Rocket } from "lucide-react";
export default function Intro({ onFinish }) {
  const [canSkip, setCanSkip] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("init"); // init -> ready -> message
  useEffect(() => {
    const t1 = setTimeout(() => setCanSkip(true), 1000);
    const start = Date.now();
    const timer = setInterval(() => {
      const p = Math.min(100, Math.floor(((Date.now() - start) / 2800) * 100));
      setProgress(p);
      if (p >= 100) {
        clearInterval(timer);
        setPhase("ready");
        setTimeout(() => setPhase("message"), 800);
        setTimeout(() => onFinish(), 3000);
      }
    }, 40);

    return () => {
      clearTimeout(t1);
      clearInterval(timer);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#05040a] overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-sky-500/10 blur-[80px] rounded-full" />

      <div className="w-[min(520px,92vw)] text-center relative z-10">
        
        {/* Animated Icon Container */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mx-auto mb-10 h-28 w-28 relative flex items-center justify-center"
        >
          {/* Outer Rotating Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-500/30 animate-[spin_10s_linear_infinite]" />
          
          {/* Inner Pulsing Circle */}
          <div className="absolute h-20 w-20 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-600/20 blur-xl animate-pulse" />
          
          <div className="relative h-20 w-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl">
            {phase === "init" && <Cpu className="w-10 h-10 text-sky-400 animate-pulse" />}
            {phase === "ready" && <Zap className="w-10 h-10 text-yellow-400" />}
            {phase === "message" && <Rocket className="w-10 h-10 text-purple-400" />}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {phase === "init" && (
            <motion.div 
              key="init"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h3 className="text-white font-bold tracking-widest uppercase text-sm">System Initialization</h3>
                <p className="text-sky-400/60 text-xs font-mono">Loading Synchroyst Core...</p>
              </div>

              {/* Advanced Progress Bar */}
              <div className="relative">
                <div className="h-[4px] w-full rounded-full bg-white/5 overflow-hidden border border-white/5">
                  <motion.div
                    className="h-full bg-gradient-to-r from-sky-500 via-blue-500 to-purple-600"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                {/* Glow effect on progress */}
                <div 
                  className="absolute top-0 h-[4px] bg-sky-400 blur-sm transition-all"
                  style={{ width: `${progress}%` }}
                />
                <span className="absolute -bottom-6 right-0 text-[10px] font-mono text-white/30">{progress}%</span>
              </div>
            </motion.div>
          )}

          {phase === "ready" && (
            <motion.div 
              key="ready"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-2"
            >
              <CheckCircle2 className="w-6 h-6 text-green-400 mb-2" />
              <p className="text-white font-bold tracking-widest uppercase">Engine Ready</p>
              <p className="text-white/40 text-xs italic">Syncing creative nodes...</p>
            </motion.div>
          )}

          {phase === "message" && (
            <motion.div 
              key="message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <h2 className="text-4xl font-black text-white tracking-tighter">
                Welcome to <span className="bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">Synchroyst</span>
              </h2>
              <p className="text-white/50 text-sm tracking-wide">
                Your next stage of growth starts now.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}