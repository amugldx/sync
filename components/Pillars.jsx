"use client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Zap,
  BarChart3,
  Sparkles,
} from "lucide-react";

const pillars = [
  {
    title: "Get Customers",
    icon: <Target className="h-7 w-7" />,
    desc: "We design marketing systems that don't just attract attention — they convert it.",
    caps: [
      "SEO & Organic",
      "Branding",
      "Digital Marketing",
      "Paid Media",
      "Lead Capture",
      "Funnels",
    ],
    outcome: "Predictable lead flow aligned with goals.",
    gradient: "from-blue-500 via-cyan-400 to-blue-600",
    shadow: "shadow-blue-500/30",
  },
  {
    title: "Serve And Manage",
    icon: <Zap className="h-7 w-7" />,
    desc: "We replace chaos with intelligent automation and structured customer.",
    caps: [
      "AI Automation",
      "CRM Setup",
      "Workflow",
      "AI Support",
      "Operations Efficiency",
    ],
    outcome: "Faster responses & consistent experience.",
    gradient: "from-purple-600 via-pink-500 to-purple-800",
    shadow: "shadow-purple-500/30",
  },
  {
    title: "Retain And Scale",
    icon: <BarChart3 className="h-8 w-8" />,
    desc: "Growth compounds when customers stay, engage, and return consistently.",
    caps: [
      "CX Optimization",
      "Lifecycle Flows",
      "Feedback Systems",
      "Retention",
      "Analytics",
    ],
    outcome: "Higher retention & long-term revenue.",
    gradient: "from-emerald-500 via-teal-400 to-emerald-700",
    shadow: "shadow-emerald-500/30",
  },
];

function PillarCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group relative [perspective:1500px]"
    >
      <div
        className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${p.gradient} opacity-25 blur-[4px] transition-opacity duration-500 group-hover:opacity-70`}
      />

      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/30 bg-white/30 p-6 shadow-xl backdrop-blur-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8">
        <div className="absolute -right-20 -top-20 h-36 w-36 rounded-full bg-gradient-to-br from-white/30 to-transparent blur-3xl transition-transform duration-700 group-hover:scale-110" />

        <div className="relative z-10 mb-6 flex items-start justify-between">
          <div
            className={`rounded-3xl bg-gradient-to-br ${p.gradient} p-4 text-white shadow-2xl transition-transform duration-300 group-hover:scale-105 sm:p-5 ${p.shadow}`}
          >
            {p.icon}
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white">
            <ArrowUpRight size={20} />
          </div>
        </div>

        <h3 className="relative z-10 mb-4 font-['Helvetica'] text-2xl font-bold leading-tight text-slate-900 sm:text-[28px]">
          {p.title}
        </h3>

        <p className="relative z-10 mb-5 text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
          {p.desc}
        </p>

        <div className="relative z-10 mb-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className={`h-1 w-5 rounded-full bg-gradient-to-r ${p.gradient}`} />
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Capabilities
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {p.caps.map((c) => (
              <span
                key={c}
                className="rounded-xl border border-slate-200/60 bg-white/50 px-3 py-1.5 text-[11px] font-bold text-slate-600 transition-colors duration-300 group-hover:bg-white"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-auto overflow-hidden rounded-2xl bg-slate-700/95 p-5 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02] sm:p-6">
          <div className={`absolute right-0 top-0 h-28 w-28 bg-gradient-to-br ${p.gradient} opacity-25 blur-[35px]`} />

          <div className="mb-2 flex items-center gap-2">
            <Sparkles size={14} className="text-white/50" />
            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">
              Primary Outcome
            </p>
          </div>

          <p className="relative text-sm font-semibold leading-snug tracking-wide text-white sm:text-base">
            {p.outcome}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pillars() {
  return (
    <section className="relative overflow-hidden bg-[#f0f4f8] py-20 font-sans [perspective:1000px] sm:py-24 lg:py-28">
      <motion.div
        animate={{ y: [0, -40, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-5%] top-[-10%] h-[700px] w-[700px] rounded-full bg-blue-900/20 blur-[120px] mix-blend-multiply"
      />

      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[-10%] right-[-5%] h-[700px] w-[700px] rounded-full bg-purple-400/20 blur-[120px] mix-blend-multiply"
      />

      <motion.div
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[15%] top-[20%] h-[400px] w-[400px] rounded-full bg-emerald-300/10 blur-[100px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-5xl sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-4 sm:mb-8"
          >
            <div className="h-px w-10 bg-slate-400 sm:w-12" />
            <p className="text-[11px] font-black uppercase tracking-[0.35em] text-slate-600 sm:text-[12px] sm:tracking-[0.5em]">
              The Synchroyst Growth Engine
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Helvetica'] text-[2rem] font-black leading-[1.02] tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl"
          >
            <span className="block">Synchronize</span>
            <span className="mt-1 block bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 bg-clip-text text-[1.85rem] italic leading-[1.02] text-transparent sm:mt-0 sm:text-5xl lg:text-6xl">
              Scale &amp; Growth
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex flex-col items-start gap-6 sm:mt-7 md:flex-row md:items-start md:gap-10"
          >
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-slate-500 sm:text-xl">
              Isolated tools are expensive. One{" "}
              <span className="border-b-2 border-blue-500/20 font-bold text-slate-900">
                unified system
              </span>{" "}
              is inevitable.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pillars.map((p, i) => (
            <PillarCard p={p} i={i} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}