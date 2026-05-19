"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Target, Cpu, Database, Activity, MessageSquare, RefreshCw, BarChart3, Search, Star, } from "lucide-react";

const getIcon = (name) => {
  const props = { className: "w-5 h-5" };

  if (name.includes("SEO")) return <Search {...props} />;
  if (name.includes("Paid")) return <Target {...props} />;
  if (name.includes("Lead")) return <Cpu {...props} />;
  if (name.includes("CRM")) return <Database {...props} />;
  if (name.includes("Workflow")) return <RefreshCw {...props} />;
  if (name.includes("Support")) return <MessageSquare {...props} />;
  if (name.includes("Lifecycle")) return <Activity {...props} />;
  if (name.includes("Retention")) return <Shield {...props} />;
  if (name.includes("Analytics")) return <BarChart3 {...props} />;

  return <Star {...props} />;
};

export default function Modules() {
  const base = useMemo(
    () => [
      { name: "SEO / Visibility", on: true, desc: "Organic search dominance.", dir: "right" },
      { name: "Paid Acquisition", on: false, desc: "High-intent lead traffic.", dir: "bottom" },
      { name: "Lead Capture AI", on: true, desc: "Smart qualification bots.", dir: "left" },
      { name: "CRM + Integrations", on: true, desc: "Unified data ecosystem.", dir: "right" },
      { name: "Workflow Automation", on: true, desc: "Zero-effort operations.", dir: "top" },
      { name: "Customer Support (AI + Human)", on: false, desc: "24/7 hybrid response.", dir: "left" },
      { name: "Lifecycle Follow-ups", on: true, desc: "Nurturing automated loops.", dir: "right" },
      { name: "Retention + LTV Optimization", on: false, desc: "Customer loyalty engine.", dir: "top" },
      { name: "Analytics + Performance", on: true, desc: "Real-time growth metrics.", dir: "left" },
    ],
    []
  );

  const [mods, setMods] = useState(base);

  const toggle = (idx) => {
    setMods((m) => m.map((x, i) => (i === idx ? { ...x, on: !x.on } : x)));
  };

  const getVariant = (dir) => ({
    hidden: {
      opacity: 0,
      x: dir === "left" ? -250 : dir === "right" ? 250 : 0,
      y: dir === "top" ? -250 : dir === "bottom" ? 250 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  });

  return (
    <section className="relative overflow-hidden bg-[#05040a] py-32" id="Modules">
      <div className="mx-auto relative z-10 w-[min(1200px,92vw)] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-blue-400"
            >
              Adaptive Intelligence
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold leading-none tracking-tighter text-white md:text-6xl"
            >
              Precision Engineering. <br />
              <span className="font-['Helvetica'] text-3xl text-white/30 md:text-5xl">
                Zero Waste.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden text-right md:block"
          >
            <div className="text-5xl font-black tabular-nums text-white">
              {mods.filter((m) => m.on).length}/{mods.length}
            </div>
            <p className="text-xs uppercase tracking-widest text-white">Modules Active</p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {mods.map((m, idx) => (
            <motion.button
              key={m.name}
              onClick={() => toggle(idx)}
              variants={getVariant(m.dir)}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex flex-col items-start overflow-hidden rounded-[1rem] border p-8 text-left transition-all duration-500 ${m.on
                ? "border-blue-500/40 bg-[#0a0c14]/80 shadow-[0_20px_50px_rgba(59,130,246,0.1)] backdrop-blur-md"
                : "border-white/5 bg-white/[0.01] opacity-60 grayscale hover:border-white/20 hover:grayscale-0"
                }`}
            >
              {m.on && (
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 bg-blue-600/20 blur-[60px]" />
              )}

              <div
                className={`mb-6 rounded-2xl p-4 transition-all duration-500 ${m.on ? "bg-blue-600 text-white" : "bg-white/5 text-white/40"
                  }`}
              >
                {getIcon(m.name)}
              </div>

              <div className="w-full flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <p
                    className={`text-lg font-bold tracking-tight transition-colors duration-500 ${m.on ? "text-white" : "text-white/40"
                      }`}
                  >
                    {m.name}
                  </p>
                  <div
                    className={`h-1.5 w-1.5 rounded-full ${m.on ? "animate-pulse bg-blue-400" : "bg-white/10"
                      }`}
                  />
                </div>

                <p className="mb-8 text-sm leading-relaxed text-white/30">{m.desc}</p>
              </div>

              <div className="mt-auto flex items-center gap-3">
                <div
                  className={`relative h-5 w-10 rounded-full transition-all duration-500 ${m.on ? "bg-blue-600" : "bg-white/10"
                    }`}
                >
                  <motion.div
                    animate={{ x: m.on ? 22 : 2 }}
                    className="absolute top-1 h-3 w-3 rounded-full bg-white shadow-lg"
                  />
                </div>

                <span
                  className={`text-[10px] font-black tracking-widest transition-colors ${m.on ? "text-blue-400" : "text-white/20"
                    }`}
                >
                  {m.on ? "SYSTEM_ACTIVE" : "STANDBY"}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}