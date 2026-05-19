'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AnalysisForm from './AnalysisForm';

export default function AnalysisModal({ onClose }) {
	useEffect(() => {
		const handleKeyDown = e => {
			if (e.key === 'Escape') onClose?.();
		};

		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow || 'auto';
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [onClose]);

	return (
		<div
			role='dialog'
			aria-modal='true'
			onMouseDown={e => e.target === e.currentTarget && onClose?.()}
			className='fixed inset-0 z-[99999] overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-[10px] sm:p-6'>
			<div 
				className='flex min-h-full items-center justify-center'
				onMouseDown={e => e.target === e.currentTarget && onClose?.()}
			>
				<motion.div
					initial={{ opacity: 0, y: 18, scale: 0.985 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					exit={{ opacity: 0, y: 18, scale: 0.985 }}
					transition={{ duration: 0.22, ease: 'easeOut' }}
					onMouseDown={e => e.stopPropagation()}
					className='w-full max-w-[720px] overflow-hidden rounded-[22px] border border-slate-400/30 bg-white shadow-[0_45px_160px_rgba(2,6,23,0.55)]'>
					{/* Top bar */}
					<div className='flex h-14 items-center justify-between border-b border-slate-400/20 bg-white px-4 py-2 rounded-t-[22px]'>
						<div className='flex items-center gap-2.5'>
							<span className='h-2 w-2 rounded-full bg-purple-500/70 shadow-[0_0_0_4px_rgba(168,85,247,0.16)]' />
							<span className='text-[13px] font-extrabold text-slate-900/70'>Run analysis</span>
						</div>

						<button
							type='button'
							aria-label='Close'
							onClick={onClose}
							className='grid h-10 w-10 place-items-center rounded-[14px] border border-slate-400/30 bg-white text-slate-900/70 transition-all duration-200 hover:-translate-y-[1px] hover:border-purple-500/35 hover:shadow-[0_12px_30px_rgba(2,6,23,0.10)] active:scale-[0.98]'>
							<svg
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill='none'>
								<path
									d='M6 6l12 12M18 6L6 18'
									stroke='currentColor'
									strokeWidth='2.4'
									strokeLinecap='round'
								/>
							</svg>
						</button>
					</div>

					{/* Body */}
					<div className='relative'>
						<AnalysisForm
							compact
							onComplete={onClose}
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
