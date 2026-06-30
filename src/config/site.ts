export const SITE = {
  name: 'sdl.hair',
  title: 'sdl.hair • Premium Brandable Domain for Hair & Beauty',
  description:
    'sdl.hair — A short, memorable, industry-specific .hair domain perfect for a luxury hair salon, hair care brand, extensions, or beauty destination in Scottsdale, Arizona\'s premier style market. Serious inquiries only.',
  url: 'https://sdl.hair',
  locale: 'en_US',
  email: 'sales@desertrich.com',
  location: 'Scottsdale, Arizona',
  lastUpdated: '2026-06-30',
} as const;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Acquisition Inquiry: sdl.hair')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring sdl.hair. Please share next steps and pricing.\n\nThank you,')}`;
