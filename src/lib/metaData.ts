import { Metadata } from "next";
import { APP_NAME,ABOUT } from "./data";


const OGimages = [
    {
      url: `${process.env.APP_URL}/ogimages/og-800x600.png`, // Must be an absolute URL
      width: 800,
      height: 600,
      alt: 'Pathgurus | Inspiring Ideas Everyday',
    },
    {
      url: `${process.env.APP_URL}/ogimages/og-1800x1600.png`, // Must be an absolute URL
      width: 1800,
      height: 1600,
      alt: 'Pathgurus | Inspiring Ideas Everyday',
    },
    {
      url: `${process.env.APP_URL}/ogimages/og-1800x1600.png`, // Must be an absolute URL
      width: 1800,
      height: 1600,
      alt: 'Pathgurus | Inspiring Ideas Everyday',
    },
  ];

const baseMetadata: Partial<Metadata> = {
    metadataBase: new URL(process.env.APP_URL + ''), // Updated to match your domain
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    authors: [
      { name: 'Dharambir Agrawal', url: process.env.APP_URL + '' },
    ],
    creator: 'Dharambir Agrawal',
    publisher: 'Dharambir Agrawal',
  
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
    openGraph: {
      title: 'Pathgurus - Learn Online',
      description: 'Pathgurus is a comprehensive platform for learning online.',
      url: process.env.APP_URL,
      siteName: 'Pathgurus',
      images: OGimages,
      videos: [
        {
          url: `${process.env.APP_URL}/ogimages/1920x1080.png`, // Must be an absolute URL
          width: 1920,
          height: 1080,
        },
      ],
  
      locale: 'en_US',
      type: 'website',
    },
  };
  
  // Landing page metadata
  export const landingPageMetadata: Metadata = {
    ...baseMetadata,
    title: {
      default: 'Pathgurus - Learn Online',
      template: '%s | Pathgurus',
    },
    description:
      'Pathgurus is a comprehensive platform for learning and teaching online. Join our community of educators and learners to expand your knowledge and skills.',
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'en-GB': '/en-GB',
      },
    },
    keywords: ['',''],
    twitter: {
      card: 'summary_large_image',
      title: 'Pathgurus - Learn and Teach Online',
      description: 'Transform your learning journey with Pathgurus',
      images: ['/images/ogimages/og-800x600.png'],
      creator: '@pathgurus',
      site: '@pathgurus',
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      other: {
        me: ['your-social-profile-url'],
      },
    },
  };
  