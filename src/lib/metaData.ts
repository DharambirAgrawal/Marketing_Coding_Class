import { Metadata } from "next";
import { APP_NAME,ABOUT,OGimages,DEVELOPER } from "./data";




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
      { name: DEVELOPER.name, url: DEVELOPER.link },
    ],
    creator: DEVELOPER.name,
    publisher: DEVELOPER.name,
  
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
      title: `${APP_NAME} - Classes`,
      description: ABOUT,
      url: process.env.APP_URL,
      siteName: APP_NAME,
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
      default: `${APP_NAME} - Classes`,
      template: `%s | ${APP_NAME}`,
    },
    description:
      ABOUT,
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
      title: `${APP_NAME} - Learn to code`,
      description: ABOUT,
      images: ['/images/ogimages/og-800x600.png'],
      creator: `@${APP_NAME}`,
      site: '@${APP_NAME}',
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      other: {
        me: ['your-social-profile-url'],
      },
    },
  };
  