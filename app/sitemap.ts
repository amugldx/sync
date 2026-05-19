import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://synchroyst.pro';

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		// Since this is a landing page structure, we only have one main route right now.
		// Additional routes (e.g., /about, /contact) would be added here in the future.
	];
}
