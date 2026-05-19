"use client";
import React, { useEffect, useState, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Hero() {
  const [init, setInit] = useState(false);

  const containerRef = useRef(null);
  const parasRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -110]);

  /* -------- FIXED TIMING -------- */

  const { scrollYProgress: parasProgress } = useScroll({
    target: parasRef,
    offset: ["start 92%", "end 60%"],
  });

  const p1O = useTransform(parasProgress, [0, 0.12], [0, 1]);
  const p2O = useTransform(parasProgress, [0.18, 0.32], [0, 1]);
  const p3O = useTransform(parasProgress, [0.34, 0.48], [0, 1]);

  const p1Y = useTransform(parasProgress, [0, 0.12], [16, 0]);
  const p2Y = useTransform(parasProgress, [0.18, 0.32], [16, 0]);
  const p3Y = useTransform(parasProgress, [0.34, 0.48], [16, 0]);

  /* -------------------------------- */

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: false, mode: "grab" },
        },
        modes: {
          grab: {
            distance: 250,
            links: { opacity: 0.8 },
          },
        },
      },
      particles: {
        color: { value: "#0369a1" },
        links: {
          color: "#0369a1",
          distance: 130,
          enable: true,
          opacity: 0.6,
          width: 1.5,
        },
        move: { enable: true, speed: 0.8, outModes: { default: "out" } },
        number: { value: 400, density: { enable: true, area: 900 } },
        opacity: { value: { min: 0.3, max: 0.6 } },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <>
      <section
        ref={containerRef}
        className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-[#f0f9ff] px-4 pb-10 pt-[70px] sm:px-6 sm:pb-10 lg:px-8"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {init && (
          <Particles
            id="tsparticles"
            options={options}
            className="absolute inset-0 z-0"
          />
        )}

        {/* background overlay */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-sky-300/40" />

        {/* TOP CONTENT */}
        <motion.div
          style={{ y: yText }}
          className="relative z-10 w-full max-w-[1100px] px-5 pt-[10px] text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-[14px] inline-flex items-center gap-[10px] rounded-[20px] border border-sky-600/20 bg-white/80 px-6 py-[9px] text-[13px] font-bold text-sky-700 shadow-[0_10px_20px_rgba(0,0,0,0.05)] backdrop-blur-[10px]"
          >
            <span className="h-[10px] w-[10px] animate-pulse rounded-full bg-sky-500" />
            AI-Driven Growth Infrastructure
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-['Helvetica'] text-[clamp(1.5rem,5vw,4rem)] font-black leading-[1.2] tracking-[-0.04em] text-slate-900"
          >
            Growth fails when it isn’t <br />
            <span className="bg-[linear-gradient(90deg,#0284c7,#4f46e5,#9333ea)] bg-[length:200%_auto] bg-clip-text text-transparent [animation:shine-text_3s_linear_infinite] [text-shadow:0_10px_30px_rgba(2,132,199,0.2)]">
              designed to scale
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-[18px] text-[clamp(1rem,2vw,1.2rem)] font-medium leading-[1.6] text-slate-700"
          >
            Synchroyst replaces disconnected tactics with a
            <span className="font-bold text-sky-600"> unified growth system </span>
            <br />
            built for the next stage of scale.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div
          ref={parasRef}
          className="relative z-[12] mt-[34px] w-full px-5 sm:px-8 lg:px-[70px]"
        >
          <div className="mx-auto max-w-[1200px] border-t border-slate-900/10 pt-7">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">

              {/* Card 1 */}
              <motion.div
                style={{ opacity: p1O, y: p1Y }}
                className="group relative overflow-hidden rounded-[26px] border border-white/55 bg-white/38 p-6 shadow-[0_14px_35px_rgba(2,132,199,0.08)] backdrop-blur-[10px] transition-all duration-300 md:min-h-[190px]"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500" />
                <p className="text-[clamp(1rem,1.7vw,1.28rem)] font-medium leading-[1.7] text-slate-700">
                  In the early days, instinct works.
                  <br />
                  As customer volume grows, instinct breaks.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                style={{ opacity: p2O, y: p2Y }}
                className="group relative overflow-hidden rounded-[26px] border border-white/55 bg-white/38 p-6 shadow-[0_14px_35px_rgba(79,70,229,0.08)] backdrop-blur-[10px] transition-all duration-300 md:min-h-[190px]"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />
                <p className="text-[clamp(1rem,1.7vw,1.28rem)] font-medium leading-[1.7] text-slate-700">
                  Processes become reactive.
                  <br />
                  Teams become overloaded.
                  <br />
                  Decisions become fragmented.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                style={{ opacity: p3O, y: p3Y }}
                className="group relative overflow-hidden rounded-[26px] border border-white/55 bg-white/38 p-6 shadow-[0_14px_35px_rgba(14,165,233,0.08)] backdrop-blur-[10px] transition-all duration-300 md:min-h-[190px]"
              >
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500" />
                <p className="text-[clamp(1rem,1.7vw,1.28rem)] font-medium leading-[1.7] text-slate-700">
                  Without systems, growth becomes expensive, fragile,
                  <br />
                  and difficult to control.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes shine-text {
          to { background-position: 200% center; }
        }
      `}</style>
    </>
  );
}