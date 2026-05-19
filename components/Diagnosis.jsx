'use client';
import { motion } from 'framer-motion';
import { Activity, Cpu, ShieldAlert, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const diagnostics = [
	{
		text: 'Marketing works in isolation',
		icon: <Cpu size={24} />,
		color: 'from-blue-600 to-cyan-500',
		glow: 'group-hover:shadow-blue-500/40',
	},
	{
		text: 'Support reacts instead converting',
		icon: <Zap size={24} />,
		color: 'from-purple-600 to-pink-500',
		glow: 'group-hover:shadow-purple-500/40',
	},
	{
		text: 'Automation is missing or messy',
		icon: <Activity size={24} />,
		color: 'from-emerald-600 to-teal-500',
		glow: 'group-hover:shadow-emerald-500/40',
	},
	{
		text: 'Retention is an afterthought',
		icon: <ShieldAlert size={24} />,
		color: 'from-orange-600 to-red-500',
		glow: 'group-hover:shadow-orange-500/40',
	},
];
export default function Diagnosis() {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
			threshold: 0.3,
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);

	return (
		<section
			ref={ref}
			className='relative min-h-screen flex items-center bg-[#F1F5F9] py-24 overflow-hidden font-sans'>
			<div
				className='absolute inset-0 pointer-events-none'
				style={{
					backgroundImage: `
               radial-gradient(circle at 2px 2px, #CBD5E1 2px, transparent 0),
               linear-gradient(to right, #E2E8F0 1px, transparent 1px),
               linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)
             `,
					backgroundSize: '40px 40px',
				}}
			/>

			{/* Floating Animated Shape  */}
			<motion.div
				animate={{ rotate: 360 }}
				transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
				className='absolute -top-20 -right-20 w-96 h-96 border-[1px] border-blue-200/50 rounded-full flex items-center justify-center opacity-30'>
				<div className='w-64 h-64 border-[1px] border-dashed border-blue-400/30 rounded-full' />
			</motion.div>
			<div className='container mx-auto px-6 relative z-10'>
				<div className='max-w-6xl mx-auto'>
					{/* Header Section */}
					<div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16'>
						<div className='max-w-2xl'>
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={inView ? { opacity: 1, x: 0 } : {}}
								className='flex items-center gap-2 mb-4'>
								<p className='text-[12px] tracking-[0.3em] uppercase font-black text-blue-600/70'>
									AI Diagnosis Engine
								</p>
							</motion.div>

							<motion.h2
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								className="text-4xl md:text-4xl font-['Panchang'] font-black text-slate-900 leading-[0.9] tracking-tighter">
								Fragmented growth is <br />
								<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'>
									silent killer of scale.
								</span>
							</motion.h2>
						</div>
						<motion.p
							initial={{ opacity: 0 }}
							animate={inView ? { opacity: 1 } : {}}
							className='text-slate-500 font-medium md:max-w-xs text-sm border-l-2 border-slate-300 pl-4'>
							We analyze your entire ecosystem to find the leaks that effort alone can't fix.
						</motion.p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
						{diagnostics.map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 40 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: i * 0.1, type: 'spring' }}
								className={`group relative bg-white/70 backdrop-blur-xl border border-white p-8 rounded-[1rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 flex flex-col items-start ${item.glow}`}>
								<div
									className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
									{item.icon}
								</div>
								<h4 className='text-slate-800 font-bold text-lg leading-tight mb-4 group-hover:text-blue-700 transition-colors'>
									{item.text}
								</h4>
								<div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/40 to-transparent pointer-events-none' />
							</motion.div>
						))}
					</div>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ delay: 0.8 }}
						className='mt-14 relative group'>
						<div className='absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-30 group-hover:opacity-30 transition duration-1000'></div>
						<div className='relative bg-white border border-white p-10 rounded-[1rem] shadow-xl flex flex-col md:flex-row items-center gap-8'>
							<div className='w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-blue-400 shrink-0 shadow-2xl'>
								<Activity size={32} />
							</div>
							<div className='space-y-2'>
								<p className='text-slate-900 text-2xl font-bold'>
									"Growth without a system is just expensive chaos."
								</p>
								<div className='flex items-center gap-3'>
									<span className='h-[2px] w-8 bg-blue-600'></span>
									<p className='text-slate-500 font-mono text-sm tracking-tighter'>
										SYSTEMS_AUDIT_REQUIRED: 100%
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
			<div className='absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none' />
			<div className='absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[120px] pointer-events-none' />

			<style jsx>{`
				@import url('https://api.fontshare.com/v2/css?f[]=panchang@800,700,500&display=swap');
			`}</style>
		</section>
	);
}
