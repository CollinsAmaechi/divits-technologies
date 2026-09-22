/**
 * Site Configuration
 * Edit this file to customize your business information, contact details, and SEO metadata
 */

export const siteConfig = {
  // Business Information
  business: {
    name: 'DIVITS Technologies',
    tagline: 'Build. Debug. Learn.',
    description: 'We help people solve technology and project problems — coding, debugging, university projects, Arduino, ESP32, electronics, IoT, automation, and custom software and hardware builds.',
    founded: '2026',
    location: {
      city: 'Lagos',
      country: 'Nigeria',
      timezone: 'WAT',
    },
  },

  // Developer/Personal Information
  developer: {
    name: 'Amaechi Collins Ekene',
    title: 'Embedded Systems Developer',
    bio: 'I help people solve technology and project problems. Whether it is a bug, a university project, a custom ESP32 build, or an IoT system, I work with you to get things working.',
    avatar: '/avatar.svg', // Replace with your photo in public/
    skills: [
      'ESP32', 'Arduino', 'C/C++', 'Python',
      'PCB Design', 'KiCad', 'Eagle',
      'FreeRTOS', 'MQTT', 'HTTP/REST',
      'Wi-Fi', 'Bluetooth', 'LoRa',
      'Sensors', 'Actuators', 'Displays',
      'Git', 'CI/CD', 'Testing',
    ],
  },

  // Contact Information
  contact: {
    email: 'amaechicollins70@gmail.com',
    whatsapp: {
      number: '2348148058672', // Format: 15551234567 (country code + number, no + or spaces)
      displayNumber: '+234 814 805 8672', // Human-readable format
      message: 'Hi! I\'m interested in discussing a custom ESP32/Arduino project.',
    },
    phone: '08156410325',
    address: '',
    businessHours: 'Mon-Fri: 9AM-5PM WAT',
    responseTime: 'Usually responds within 24 hours',
  },

  // Social Links
  social: {
    github: 'https://github.com/[YOUR_GITHUB]',
    linkedin: 'https://linkedin.com/in/[YOUR_LINKEDIN]',
    twitter: 'https://twitter.com/[YOUR_TWITTER]',
    youtube: 'https://youtube.com/@[YOUR_YOUTUBE]',
    instagram: 'https://instagram.com/[YOUR_INSTAGRAM]',
  },

  // SEO & Metadata
  seo: {
    siteName: 'DIVITS Technologies',
    siteUrl: 'https://[YOUR_DOMAIN].com',
    defaultTitle: 'DIVITS Technologies | ESP32, Arduino & Embedded Systems',
    defaultDescription: 'Professional ESP32, Arduino, and embedded systems development. Custom IoT solutions, smart home automation, sensor systems, PCB prototyping, and electronics troubleshooting.',
    defaultImage: '/og-image.png',
    twitterHandle: '@[YOUR_TWITTER_HANDLE]',
    keywords: [
      'ESP32', 'Arduino', 'IoT', 'embedded systems', 'electronics development',
      'smart home automation', 'PCB design', 'sensor systems', 'firmware development',
      'custom hardware', 'prototyping', 'electronics troubleshooting'
    ],
  },

  // DIVITS Service Pillars
  pillars: {
    assist: {
      id: 'divits-assist',
      name: 'DIVITS Assist',
      description: 'Coding, debugging, university and project assistance, electronics troubleshooting and technical guidance.',
      color: 'blue',
      hex: '#2563eb',
      icon: 'help',
    },
    build: {
      id: 'divits-build',
      name: 'DIVITS Build',
      description: 'Custom software and hardware projects, Arduino and ESP32 systems, prototypes and technical builds.',
      color: 'orange',
      hex: '#d4903e',
      icon: 'hammer',
    },
    iot: {
      id: 'divits-iot',
      name: 'DIVITS IoT',
      description: 'IoT systems, connected devices, MQTT, automation, monitoring and remote control.',
      color: 'iot',
      hex: '#2d8f6f',
      icon: 'network',
    },
    home: {
      id: 'divits-home',
      name: 'DIVITS Home',
      description: 'Smart-home automation concepts and future installation services — lighting, fans, AC, sockets, power monitoring, generator/inverter integration and other Nigerian-home use cases.',
      color: 'home',
      hex: '#e05545',
      icon: 'home',
    },
  },

  // Brand identity
  brand: {
    color: 'gold',
    hex: '#c9a84c',
    name: 'DIVITS Technologies',
  },

  // Form Configuration
  // Formspree endpoint for order submissions
  form: {
    endpoint: 'https://formspree.io/f/xeaoeaad',
    enableFileUpload: true,
    maxFileSize: 10 * 1024 * 1024, // 10MB
    allowedFileTypes: ['.pdf', '.png', '.jpg', '.jpeg', '.zip', '.rar', '.ino', '.cpp', '.h', '.c'],
  },

  // Analytics (optional)
  analytics: {
    googleAnalyticsId: '[GA_MEASUREMENT_ID]', // G-XXXXXXXXXX
    plausibleDomain: '[YOUR_DOMAIN].com', // If using Plausible
    umamiWebsiteId: '[YOUR_UMAMI_WEBSITE_ID]', // If using Umami
  },

  // Features toggles
  features: {
    enableWhatsAppButton: true,
    enableScrollAnimations: true,
    enableParticleBackground: true,
    enableProjectFiltering: false, // For future expansion
    showPricing: false, // Set to true if you want to display pricing
  },

  // Project settings
  projects: {
    itemsPerPage: 6,
    showConceptLabel: true,
    conceptLabelText: 'Concept Project',
  },
};

export default siteConfig;