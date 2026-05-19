'use client';
import { useEffect, useMemo, useState } from 'react';
import AnalysisModal from './AnalysisModal';
import BookACallPopup from './BookACallPopup';

export default function Hero() {
	const [showModal, setShowModal] = useState(false);
	const [showCallPopup, setShowCallPopup] = useState(false);

	const words = useMemo(
		() => ['Get Customers', 'Serve customers and Operations', 'Retain your customers and Scale'],
		[],
	);

	const longestWord = useMemo(
		() => words.reduce((a, b) => (a.length > b.length ? a : b), ''),
		[words],
	);

	const typingSpeed = 55;
	const deletingSpeed = 35;
	const holdAfterTyped = 900;
	const holdAfterDeleted = 200;

	const [wordIndex, setWordIndex] = useState(0);
	const [text, setText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentWord = words[wordIndex];

		if (!isDeleting && text === currentWord) {
			const t = setTimeout(() => setIsDeleting(true), holdAfterTyped);
			return () => clearTimeout(t);
		}

		if (isDeleting && text === '') {
			const t = setTimeout(() => {
				setIsDeleting(false);
				setWordIndex(prev => (prev + 1) % words.length);
			}, holdAfterDeleted);
			return () => clearTimeout(t);
		}

		const nextText = isDeleting
			? currentWord.substring(0, text.length - 1)
			: currentWord.substring(0, text.length + 1);

		const t = setTimeout(() => setText(nextText), isDeleting ? deletingSpeed : typingSpeed);

		return () => clearTimeout(t);
	}, [text, isDeleting, wordIndex, words]);

	return (
		<>
			<section className='relative flex min-h-[68vh] w-full items-center overflow-hidden rounded-b-[20px] bg-gradient-to-br from-[#1e1b4b] via-[#4338ca] to-[#0ea5e9] px-4 py-6 sm:px-6 sm:py-8 md:rounded-b-[40px] md:px-10 md:py-10 lg:min-h-[92vh] lg:px-16 lg:py-16 xl:px-20'>
				<div className='pointer-events-none absolute inset-0 opacity-60'>
					<div className='absolute left-4 top-6 h-24 w-24 rounded-full bg-blue-400 blur-[90px] sm:left-10 sm:top-10 sm:h-32 sm:w-32 sm:blur-[120px]' />
					<div className='absolute bottom-6 right-4 h-36 w-36 rounded-full bg-purple-400 blur-[110px] sm:bottom-10 sm:right-10 sm:h-64 sm:w-64 sm:blur-[150px]' />
				</div>

				<div className='relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center'>
					<h1 className='max-w-[1200px] font-bold text-white'>
						{/* Mobile / tablet */}
						<div className='block lg:hidden'>
							<div className='text-3xl leading-[1.1] sm:text-4xl'>
								<span className='block whitespace-nowrap'>Synchroyst</span>
							</div>

							<div className='mt-2 text-xl font-semibold leading-[1.2] text-white/95 sm:text-1.5xl'>
								<span className='block'>Growth engine designed to</span>
							</div>

							<div className='relative mx-auto mt-2 h-[1.5em] w-full max-w-[30ch] overflow-visible text-2xl leading-[1.25] sm:text-3xl sm:leading-[1.25]'>
								<span className='invisible whitespace-nowrap'>{longestWord}</span>
								<span className='absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-[#7DD3FC] via-[#A78BFA] to-[#60A5FA] bg-clip-text pb-[0.08em] text-transparent drop-shadow-[0_6px_18px_rgba(125,211,252,0.35)]'>
									{text}
									<span className='ml-1 inline-block h-[1em] w-[2px] animate-pulse align-[-0.12em] bg-white/80' />
								</span>
							</div>
						</div>

						{/* Desktop / laptop */}
						<div className='hidden lg:flex lg:flex-col lg:items-center lg:justify-center'>
							<span className='whitespace-nowrap text-5xl leading-[1.05]'>Synchroyst</span>

							<div className='mt-3 flex items-baseline justify-center gap-3 text-[2.1rem] font-semibold leading-[1.15]'>
								<span className='whitespace-nowrap text-white/95'>Growth engine designed to</span>

								<span className='relative inline-block h-[1.45em] w-[24ch] overflow-visible text-left leading-[1.2]'>
									<span className='invisible whitespace-nowrap'>{longestWord}</span>
									<span className='absolute left-0 top-0 whitespace-nowrap bg-gradient-to-r from-[#7DD3FC] via-[#A78BFA] to-[#60A5FA] bg-clip-text pb-[0.08em] text-transparent drop-shadow-[0_6px_18px_rgba(125,211,252,0.35)]'>
										{text}
										<span className='ml-1 inline-block h-[1em] w-[2px] animate-pulse align-[-0.12em] bg-white/80' />
									</span>
								</span>
							</div>
						</div>
					</h1>

					<div className='mt-4 max-w-2xl px-1 text-sm leading-7 text-white/90 sm:mt-5 sm:text-base md:text-lg md:leading-relaxed'>
						<p>
							Unify your data and strategy to get high-value customers, leverage AI precision to
							serve at scale, and build the systems to retain your lead and dominate the market.
						</p>
					</div>

					<div className='mt-6 flex flex-wrap items-center justify-center gap-4 sm:mt-7 sm:gap-5'>
						<button
							type='button'
							onClick={() => setShowModal(true)}
							className='group relative overflow-hidden rounded-[14px] bg-gradient-to-br from-[#0f172a] to-[#334155] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(15,23,42,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(2,132,199,0.4)] sm:px-8 sm:py-4 sm:text-base'>
							<span className='relative z-10'>Run Your Free Analysis</span>
							<span className='pointer-events-none absolute left-[-60%] top-[-50%] h-[200%] w-[20%] rotate-[30deg] bg-white/30 animate-[btn-shine_3s_infinite]' />
						</button>

						<button
							type='button'
							onClick={() => setShowCallPopup(true)}
							className='group relative overflow-hidden rounded-[14px] bg-gradient-to-br from-[#0ea5e9] to-[#8b5cf6] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(139,92,246,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(14,165,233,0.4)] sm:px-8 sm:py-4 sm:text-base'>
							<span className='relative z-10'>Book Free Strategy Call</span>
							<span className='pointer-events-none absolute left-[-60%] top-[-50%] h-[200%] w-[20%] rotate-[30deg] bg-white/30 animate-[btn-shine_3s_infinite]' />
						</button>
					</div>
				</div>
			</section>

			{showModal && <AnalysisModal onClose={() => setShowModal(false)} />}
			{showCallPopup && <BookACallPopup onClose={() => setShowCallPopup(false)} />}

			<style>{`
        @keyframes btn-shine {
          0% { left: -60%; }
          20% { left: 120%; }
          100% { left: 120%; }
        }
      `}</style>
		</>
	);
}
