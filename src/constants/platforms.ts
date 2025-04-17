import { Platform } from '../types';
// Import directly from Lucide React instead of SVG files
// These icons will be imported in the components that need them

export const platforms: Platform[] = [
  {
    id: 'twitter',
    name: 'Twitter',
    icon: 'twitter' // Will be used with lucide icons
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'facebook'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: 'linkedin'
  },
  // Add more platforms as needed
];