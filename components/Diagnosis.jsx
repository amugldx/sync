"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Zap, Activity, ShieldAlert, Binary } from "lucide-react"; 

const diagnostics = [
  { text: "Marketing works in isolation", icon: <Cpu size={24} />, color: "from-blue-600 to-cyan-500", glow: "group-hover:shadow-blue-500/40" },
  { text: "Support reacts instead converting", icon: <Zap size={24} />, color: "from-purple-600 to-pink-500", glow: "group-hover:shadow-purple-500/40" },
  { text: "Automation is missing or messy", icon: <Activity size={24} />, color: "from-emerald-600 to-teal-500", glow: "group-hover:shadow-emerald-500/40" },
  { text: "Retention is an afterthought", icon: <ShieldAlert size={24} />, color: "from-orange-600 to-red-500", glow: "group-hover:shadow-orange-500/40" },
];
export default function Diagnosis() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-[#F1F5F9] py-24 overflow-hidden font-sans">
      
      <div className="absolute inset-0 pointer-events-none" 
           style={{ 
             backgroundImage: `
               radial-gradient(circle at 2px 2px, #CBD5E1 2px, transparent 0),
               linear-gradient(to right, #E2E8F0 1px, transparent 1px),
               linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)
             `, 
             backgroundSize: '40px 40px' 
           }} />

      {/* Floating Animated Shape  */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-96 h-96 border-[1px] border-blue-200/50 rounded-full flex items-center justify-center opacity-30"
      >
        <div className="w-64 h-64 border-[1px] border-dashed border-blue-400/30 rounded-full" />
      </motion.div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                className="flex items-center gap-2 mb-4"
              >
                <p className="text-[12px] tracking-[0.3em] uppercase font-black text-blue-600/70">
                  AI Diagnosis Engine
                </p>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-4xl font-['Panchang'] font-black text-slate-900 leading-[0.9] tracking-tighter"
              >
                Fragmented growth is <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                   silent killer of scale.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-slate-600 text-lg max-w-xl font-medium leading-relaxed"
              >
                We analyze your entire ecosystem to find the leaks that effort alone can&apos;t fix.
              </motion.p>
            </div>

            {/* Right side stats/quote */}
            <div className="md:text-right flex flex-col md:items-end">
              <div className="inline-flex flex-col gap-2">
                <p className="text-slate-900 text-2xl font-bold">
                  &quot;Growth without a system is just expensive chaos.&quot;
                </p>
                <div className="flex items-center gap-3 justify-end md:justify-end">
                  <span className="h-[2px] w-8 bg-blue-600"></span>
                  <p className="text-slate-500 font-mono text-sm tracking-tighter">SYSTEMS_AUDIT_REQUIRED: 100%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Diagnostics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative z-10">
            {diagnostics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 ${item.glow} transition-opacity duration-500 blur-xl`} />
                <div className="relative h-full bg-white/80 backdrop-blur-sm border border-slate-200/60 p-6 rounded-2xl hover:border-slate-300 transition-colors shadow-sm">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg leading-snug">
                    {item.text}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[120px] pointer-events-none" />
        </div>
      </div>
        
      <style jsx>{`
        @import url('https://api.fontshare.com/v2/css?f[]=panchang@800,700,500&display=swap');
      `}</style>
    </section>
  );
}