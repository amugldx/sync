'use client';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const socialLinks = [
	{ icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/synchroyst/' },
	{ icon: FaInstagram, href: 'https://www.instagram.com/synchroyst.pro' },
	{ icon: FaFacebookF, href: 'https://www.facebook.com/synchroyst.pro' },
	{
		icon: FaWhatsapp,
		href: 'https://api.whatsapp.com/send/?phone=923105198020&text&type=phone_number&app_absent=0',
	},
];

export default function Footer() {
	return (
		<footer className='relative overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#4338ca] to-[#0ea5e9] text-white'>
			{/* Background */}
			<div className='absolute inset-0'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
						backgroundSize: '64px 64px',
					}}
				/>

				<div className='absolute -left-[120px] -top-[100px] h-[380px] w-[380px] rounded-full bg-sky-500 opacity-60 blur-[120px]' />
				<div className='absolute -right-[150px] -top-[80px] h-[420px] w-[420px] rounded-full bg-violet-500 opacity-60 blur-[120px]' />
				<div className='absolute bottom-[-180px] left-[30%] h-[450px] w-[450px] rounded-full bg-blue-500 opacity-60 blur-[120px]' />
			</div>

			<div className='relative mx-auto w-[min(1100px,92vw)] py-[70px] pb-[30px]'>
				<div className='grid gap-10 md:grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr]'>
					{/* Brand */}
					<div>
						<h3 className='text-[20px] font-black'>Synchroyst</h3>
						<p className='mt-3 max-w-md leading-7 text-white/85'>
							Synchroyst builds AI-powered growth systems for businesses seeking automation,
							scalable marketing, and operational efficiency.
						</p>
					</div>

					{/* Company */}
					<div>
						<p className='text-[11px] font-black uppercase tracking-[0.3em] text-white/75'>
							Company
						</p>
						<p className='mt-2 text-white/85'>Headquartered: Lahore, Pakistan</p>
						<p className='mt-2 text-white/85'>Operating: Globally</p>
					</div>

					{/* Contact */}
					<div>
						<p className='text-[11px] font-black uppercase tracking-[0.3em] text-white/75'>
							Contact
						</p>

						<div className='mt-3 flex items-center gap-2.5 text-white/90'>
							<HiOutlineMail className='text-[18px] text-violet-200' />
							<span>hello@synchroyst.pro</span>
						</div>

						<div className='mt-3 flex items-center gap-2.5 text-white/90'>
							<HiOutlinePhone className='text-[18px] text-violet-200' />
							<span>+1 404 446 0269</span>
						</div>

						<div className='mt-5 flex flex-wrap gap-[14px]'>
							{socialLinks.map(({ icon: Icon, href }, index) => (
								<a
									key={index}
									href={href}
									className='flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[18px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:shadow-[0_15px_40px_rgba(168,85,247,0.4)]'>
									<Icon />
								</a>
							))}
						</div>
					</div>
				</div>

				<div className='mt-[50px] border-t border-white/20 pt-5 text-center text-sm text-white/80'>
					Headquartered in Lahore, Pakistan. Operating Globally. ©2026
				</div>
			</div>
		</footer>
	);
}
