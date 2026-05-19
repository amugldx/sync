"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Globe, Zap, Repeat, Activity } from "lucide-react";

export default function SystemDiagram() {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 20%"],
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [18, -10]);
  const yRight = useTransform(scrollYProgress, [0, 1], [24, -12]);

  const items = [
    {
      id: 1,
      icon: Globe,
      title: "1. Acquire",
      desc: "Attract and qualify the right customers automatically using AI-driven funnels.",
      accent: "text-blue-500",
      hoverBg: "group-hover:bg-blue-500",
      borderGlow: "hover:border-blue-500/30",
    },
    {
      id: 2,
      icon: Zap,
      title: "2. Operate",
      desc: "AI agents and human precision work together to serve and convert leads 24/7.",
      accent: "text-violet-500",
      hoverBg: "group-hover:bg-violet-500",
      borderGlow: "hover:border-violet-500/30",
    },
    {
      id: 3,
      icon: Repeat,
      title: "3. Retain",
      desc: "Automated feedback loops and loyalty systems turn users into long-term growth.",
      accent: "text-cyan-500",
      hoverBg: "group-hover:bg-cyan-500",
      borderGlow: "hover:border-cyan-500/30",
    },
    {
      id: 4,
      icon: Activity,
      title: "4. Scale",
      desc: "Real-time analytics and predictive modeling ensure your business never stops growing.",
      accent: "text-indigo-500",
      hoverBg: "group-hover:bg-indigo-500",
      borderGlow: "hover:border-indigo-500/30",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={ref}
      id="System"
      className="relative overflow-hidden bg-[#05040a] py-24 sm:py-28 lg:py-32"
    >
      {/* Static background only */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_45%_40%,rgba(59,130,246,0.10),transparent_60%),radial-gradient(900px_circle_at_70%_65%,rgba(139,92,246,0.08),transparent_62%),radial-gradient(900px_circle_at_50%_110%,rgba(0,0,0,0.55),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:px-8">
        {/* LEFT */}
        <motion.div
          style={reduce ? undefined : { y: yLeft }}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          className="max-w-[720px]"
        >
          <h2 className="mb-5 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl lg:text-5xl">
           Why We Don’t Sell Packages
          </h2>

          <p className="mb-4 max-w-[720px] text-base leading-8 text-white/75">
           Standard solutions don’t create mature growth. No two businesses have the same constraints, customers, or goals.
          </p>

          <p className="max-w-[720px] text-base leading-8 text-white/75">
           Synchroyst analyzes first. Then activates only what strengthens your engine. Nothing unnecessary runs.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          style={reduce ? undefined : { y: yRight }}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className={`group rounded-[18px] border border-white/10 bg-white/[0.06] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 ${item.borderGlow} hover:shadow-[0_28px_80px_rgba(0,0,0,0.48)]`}
              >
                <div
                  className={`mb-[18px] grid h-[60px] w-[60px] place-items-center rounded-[18px] border border-white/10 bg-white/[0.06] transition-all duration-300 ${item.hoverBg} group-hover:-translate-y-[2px] group-hover:scale-[1.04]`}
                >
                  <Icon
                    className={`h-7 w-7 ${item.accent} transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-[1.06] group-hover:text-white`}
                  />
                </div>

                <h3 className="mb-[10px] text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="max-w-[360px] text-sm leading-7 text-white/80">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}