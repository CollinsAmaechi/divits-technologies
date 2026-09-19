import { siteConfig } from '../config/siteConfig';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/process', label: 'Process' },
  { href: '/about', label: 'About' },
  { href: '/order', label: 'Order' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

export const PROJECT_TYPES = [
  { value: 'esp32', label: 'ESP32 Development' },
  { value: 'arduino', label: 'Arduino Development' },
  { value: 'iot', label: 'IoT System' },
  { value: 'smart-home', label: 'Smart Home Automation' },
  { value: 'sensor', label: 'Sensor/Monitoring System' },
  { value: 'power-control', label: 'Relay/Power Control' },
  { value: 'embedded', label: 'Embedded Programming' },
  { value: 'wifi-bluetooth', label: 'Wi-Fi/Bluetooth Project' },
  { value: 'pcb', label: 'PCB/Electronics Prototyping' },
  { value: 'custom', label: 'Custom Hardware Project' },
  { value: 'troubleshooting', label: 'Troubleshooting/Debugging' },
  { value: 'other', label: 'Other' },
];

export const BUDGET_RANGES = [
  { value: 'under-500', label: 'Under $500' },
  { value: '500-1000', label: '$500 - $1,000' },
  { value: '1000-2500', label: '$1,000 - $2,500' },
  { value: '2500-5000', label: '$2,500 - $5,000' },
  { value: '5000-10000', label: '$5,000 - $10,000' },
  { value: '10000+', label: '$10,000+' },
  { value: 'discuss', label: 'Let\'s discuss' },
];

export const TIMELINES = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-2-weeks', label: '1-2 weeks' },
  { value: '1-month', label: '1 month' },
  { value: '2-3-months', label: '2-3 months' },
  { value: '3-6-months', label: '3-6 months' },
  { value: '6+months', label: '6+ months' },
  { value: 'flexible', label: 'Flexible' },
];

export const TRUST_SKILLS = [
  'ESP32',
  'Arduino',
  'IoT',
  'Sensors',
  'Automation',
  'Embedded Systems',
];

export const SOCIAL_LINKS_CONFIG = [
  { key: 'github', label: 'GitHub', icon: 'github' },
  { key: 'linkedin', label: 'LinkedIn', icon: 'linkedin' },
  { key: 'twitter', label: 'Twitter', icon: 'twitter' },
  { key: 'youtube', label: 'YouTube', icon: 'youtube' },
  { key: 'instagram', label: 'Instagram', icon: 'instagram' },
];

export const FOOTER_LINKS = {
  services: [
    { label: 'ESP32 Development', href: '/services' },
    { label: 'Arduino Development', href: '/services' },
    { label: 'IoT Systems', href: '/services' },
    { label: 'Smart Home Automation', href: '/services' },
    { label: 'Sensor Systems', href: '/services' },
    { label: 'Custom Hardware', href: '/services' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Process', href: '/process' },
    { label: 'Why Choose Me', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'FAQ', href: '/faq' },
    { label: 'GitHub', href: siteConfig.social.github, external: true },
    { label: 'Blog', href: '#', external: true, comingSoon: true },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#', comingSoon: true },
    { label: 'Terms of Service', href: '#', comingSoon: true },
  ],
};

export const ANIMATION_DELAYS = [
  0, 100, 200, 300, 400, 500, 600, 700, 800,
];

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};