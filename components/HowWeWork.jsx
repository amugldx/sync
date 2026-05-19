"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { Search, PenTool, Video, Rocket, Sparkles } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Deep Business Analysis",
    desc: "Assess bottlenecks, opportunities, and growth potential through data.",
    icon: <Search className="w-7 h-7" />,
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    n: "02",
    title: "Custom Strategy Proposal",
    desc: "A tailor-made roadmap designed specifically for your business scale.",
    icon: <PenTool className="w-7 h-7" />,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    n: "03",
    title: "Collaborative Review",
    desc: "A strategic sync to align our direction with your vision and goals.",
    icon: <Video className="w-7 h-7" />,
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    n: "04",
    title: "Build & Operate Engine",
    desc: "Execution with precision, supported by measurable real-time KPIs.",
    icon: <Rocket className="w-7 h-7" />,
    gradient: "from-emerald-500 to-teal-500"
  },
];

export default function HowWeWork() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative bg-[#fcfcfd] py-32 overflow-hidden" id="HowWeWork">
      
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.05]" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            animate={{ d: [
              "M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ]}}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            fill="#3b82f6" 
          />
        </svg>
        <motion.div 
          animate={{ y: [-20, 20], rotate: [0, 10] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 right-[10%] opacity-10"
        >
          <Sparkles size={120} className="text-blue-600" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3 md:sticky md:top-32 h-fit">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-black tracking-[0.4em] uppercase text-blue-600 mb-4"
            >
              Process
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tighter">
              Engineering growth is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">science</span>.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We don&apos;t do guesswork. We build predictable, scalable systems designed to capture and convert.
            </p>
          </div>

          <div className="md:w-2/3 relative">
            <div className="absolute left-[19px] md:left-[23px] top-4 bottom-4 w-1 bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                style={{ scaleY }}
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-600 to-purple-600 origin-top h-full"
              />
            </div>

            <div className="space-y-24">
              {steps.map((s, i) => (
                <motion.div 
                  key={s.n}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-100px" }}
                  className="relative group"
                >
                  <div className="absolute -left-[41px] md:-left-[51px] top-0 flex items-center justify-center">
                    <motion.div 
                      whileInView={{ scale: [0, 1.2, 1] }}
                      className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center z-20 group-hover:border-blue-600 transition-colors duration-500"
                    >
                      <span className="text-xs font-black font-['Helvetica'] text-slate-900">{s.n}</span>
                    </motion.div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="relative">
                      <div className={`p-5 rounded-3xl bg-gradient-to-br ${s.gradient} text-white shadow-2xl relative z-10 group-hover:-rotate-12 transition-transform duration-500`}>
                        {s.icon}
                      </div>
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${s.gradient} blur-2xl opacity-20 group-hover:opacity-60 transition-opacity`} />
                    </div>

                    <div className="flex-1 mt-2">
                      <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
                        {s.desc}
                      </p>
                      
                      <div className="flex gap-4 mt-6">
                         <span className="h-[1px] w-8 bg-slate-300 self-center"></span>
                         <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">Phase {s.n} Completion</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}