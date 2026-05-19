"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Building2, Workflow } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-20% 0px -35% 0px",
  });

  return (
    <section
      ref={ref}
      id="AboutUs"
      className="relative overflow-hidden bg-white py-[110px]"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(148,163,184,0.28) 1px, transparent 0),
            linear-gradient(to right, rgba(226,232,240,0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226,232,240,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-140px] top-[-160px] z-[1] h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-180px] right-[-160px] z-[1] h-[520px] w-[520px] rounded-full bg-purple-500/20 blur-[120px]"
      />

      <div className="relative z-[2] mx-auto w-[min(1180px,92vw)]">
        {/* Top row */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="max-w-[760px]"
        >
          <motion.div
            variants={fadeUp}
            className="mb-[18px] flex items-center gap-[10px]"
          >
            <span className="h-[10px] w-[10px] rounded-full bg-sky-500 shadow-[0_10px_30px_rgba(168,85,247,0.25)]" />
            <span className="text-[12px] font-extrabold tracking-[0.32em] text-slate-900/60">
              WHO WE ARE
            </span>
            <span className="ml-[6px] h-px flex-1 bg-gradient-to-r from-slate-900/20 to-transparent" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="m-0 text-[clamp(2.2rem,2.6vw,3.8rem)] font-extrabold leading-[1.03] tracking-[-0.05em] text-[#0b1220]"
          >
            Enterprise-trained teams,
            <br />
            <span className="bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              focused on growing businesses
            </span>
          </motion.h2>
        </motion.div>

        {/* Content grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1, delayChildren: 0.08 },
            },
          }}
          className="mt-11 grid items-start gap-[18px] lg:grid-cols-[1.25fr_0.75fr]"
        >
          {/* Left */}
          <motion.div
            variants={fadeUp}
            className="rounded-[26px] bg-white/70 p-[26px] pb-[22px] shadow-[0_26px_80px_rgba(2,6,23,0.10),inset_0_0_0_1px_rgba(255,255,255,0.75)] backdrop-blur-[14px]"
          >
            <p className="mb-4 text-[17px] leading-[1.85] text-slate-900/70">
              The teams behind <b className="text-slate-900/90">Synchroyst</b>{" "}
              have worked inside and alongside some of the most demanding
              organizations in the world environments where growth systems must
              operate at massive scale.
            </p>

            <p className="mb-4 text-[17px] leading-[1.85] text-slate-900/70">
              Our people have been trained under{" "}
              <b className="text-slate-900/90">Fortune 500</b>,{" "}
              <b className="text-slate-900/90">Fortune 100</b>, and{" "}
              <b className="text-slate-900/90">Fortune 1-level</b> companies,
              where systems are designed before they are deployed, and failure
              is costly and unacceptable.
            </p>

            <div className="relative mt-4 overflow-hidden rounded-[18px] bg-[radial-gradient(900px_circle_at_20%_0%,rgba(59,130,246,0.14),transparent_55%),radial-gradient(900px_circle_at_80%_100%,rgba(168,85,247,0.12),transparent_55%)] px-[18px] pb-4 pt-[18px]">
              <div className="absolute left-[10px] top-[6px] text-[46px] font-black leading-none text-slate-900/10">
                “
              </div>
              <p className="m-0 pl-[14px] text-[18px] font-extrabold text-slate-900/90">
                We are bringing that same operating discipline without
                enterprise overhead to businesses that are ready to grow
                properly.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <div className="flex items-start gap-3 rounded-[26px] bg-white/70 px-[18px] py-[18px] shadow-[0_26px_80px_rgba(2,6,23,0.10),inset_0_0_0_1px_rgba(255,255,255,0.75)] backdrop-blur-[14px] transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_34px_100px_rgba(2,6,23,0.12),inset_0_0_0_1px_rgba(255,255,255,0.75)] motion-reduce:hover:translate-y-0">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[14px] bg-slate-900/5 text-slate-900/80">
                <Building2 size={18} />
              </div>
              <div>
                <h4 className="m-0 text-[16px] font-black tracking-[-0.02em] text-slate-900/90">
                  Enterprise discipline
                </h4>
                <p className="mt-1.5 text-[14px] font-semibold leading-[1.55] text-slate-900/65">
                  Process, standards, and instrumentation that scale.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-[26px] bg-white/70 px-[18px] py-[18px] shadow-[0_26px_80px_rgba(2,6,23,0.10),inset_0_0_0_1px_rgba(255,255,255,0.75)] backdrop-blur-[14px] transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_34px_100px_rgba(2,6,23,0.12),inset_0_0_0_1px_rgba(255,255,255,0.75)] motion-reduce:hover:translate-y-0">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[14px] bg-slate-900/5 text-slate-900/80">
                <Workflow size={18} />
              </div>
              <div>
                <h4 className="m-0 text-[16px] font-black tracking-[-0.02em] text-slate-900/90">
                  Systems over tactics
                </h4>
                <p className="mt-1.5 text-[14px] font-semibold leading-[1.55] text-slate-900/65">
                  Unified workflows that remove fragmentation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-[26px] bg-white/70 px-[18px] py-[18px] shadow-[0_26px_80px_rgba(2,6,23,0.10),inset_0_0_0_1px_rgba(255,255,255,0.75)] backdrop-blur-[14px] transition duration-300 hover:-translate-y-[2px] hover:shadow-[0_34px_100px_rgba(2,6,23,0.12),inset_0_0_0_1px_rgba(255,255,255,0.75)] motion-reduce:hover:translate-y-0">
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[14px] bg-slate-900/5 text-slate-900/80">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="m-0 text-[16px] font-black tracking-[-0.02em] text-slate-900/90">
                  Built to be reliable
                </h4>
                <p className="mt-1.5 text-[14px] font-semibold leading-[1.55] text-slate-900/65">
                  Designed before deployment—so growth doesn’t break.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}