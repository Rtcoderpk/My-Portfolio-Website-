import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://ranatanzeel.dev', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://ranatanzeel.dev/#what-i-build', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://ranatanzeel.dev/#projects', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://ranatanzeel.dev/#about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://ranatanzeel.dev/#contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];
}