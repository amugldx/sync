import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	const baseUrl = 'https://synchroyst.pro';

	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/'], // Disallowing bots from hitting internal APIs unnecessarily
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
