import { MetadataRoute } from 'next';

const BASE = 'https://htdss.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                         changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/about-us`,           changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/founders`,           changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/events`,             changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/11th-conference`,    changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/10th-conference`,    changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE}/activities`,         changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/gallery`,            changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/webinar`,            changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/contact-us`,         changeFrequency: 'yearly',  priority: 0.6 },
  ];
}
