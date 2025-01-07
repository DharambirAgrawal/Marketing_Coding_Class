import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.APP_URL+"",
      lastModified:  new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: ['https://example.com/image.jpg'],
    },
  ]
}