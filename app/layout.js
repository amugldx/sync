import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	metadataBase: new URL('https://synchroyst.pro'),
	title: {
		default: 'Synchroyst | AI Growth Infrastructure - Automation Systems - Revenue Scaling',
		template: '%s | Synchroyst',
	},
	description:
		'Synchroyst builds AI-powered growth systems for businesses seeking automation, scalable marketing, and operational efficiency.',
	keywords: [
		'Synchroyst',
		'AI Growth Infrastructure',
		'AI Automation',
		'Revenue Scaling',
		'Business Growth',
		'Marketing Solutions',
		'Enterprise Growth',
		'Sales Optimization',
		'Digital Architecture',
		'Customer Support Automation',
	],
	authors: [{ name: 'Synchroyst' }],
	creator: 'Synchroyst',
	publisher: 'Synchroyst',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: 'Synchroyst | Enterprise-Grade Growth Engine',
		description:
			'Synchroyst provides enterprise-grade growth engines for growing businesses. Unlock scalable, sustainable growth today.',
		url: 'https://synchroyst.pro',
		siteName: 'Synchroyst',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Synchroyst | Enterprise-Grade Growth Engine',
		description:
			'Synchroyst provides enterprise-grade growth engines for growing businesses. Unlock scalable, sustainable growth today.',
		creator: '@synchroyst',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			className={`relative ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
			suppressHydrationWarning>
			<body
				className='relative min-h-full flex flex-col'
				suppressHydrationWarning>
				{children}
			</body>
		</html>
	);
}
