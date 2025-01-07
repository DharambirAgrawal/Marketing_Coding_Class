import type { MetadataRoute } from 'next';
import { ABOUT,APP_NAME,CATEGORIES, ICONS } from '@/lib/data';
export default async function manifest(): Promise<MetadataRoute.Manifest> {
  

  return {
    // Basic Information
    name: `${APP_NAME} - Classes`,
    short_name: APP_NAME,
    description:ABOUT,

    // Start and Scope Configuration
    start_url: '/',
    scope: '/',
    id: '/',

    // Display and Theme Settings
    display: 'standalone',
    display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
    orientation: 'any',
    background_color: '#ffffff',
    theme_color: '#004aad', // Assuming a blue theme, adjust to match your brand color

    // Icons Configuration
    icons:ICONS,

  

    // Additional Properties
    categories:CATEGORIES,
    dir: 'ltr',
    lang: 'en',
    prefer_related_applications: false,
  
  };
}