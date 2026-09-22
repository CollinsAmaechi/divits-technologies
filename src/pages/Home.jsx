import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { whyChooseMe } from '../data/whyChooseMe';
import { faqItems } from '../data/faq';
import { siteConfig } from '../config/siteConfig';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import { Cpu, Wifi, Radio, Home as HomeIcon, GitBranch, Thermometer, Bug, Wrench, Network, Zap, Rocket, GraduationCap, Shield } from 'lucide-react';
import PillarIllustration from '../components/illustrations/PillarIllustrations';

const trustIcons = {
  ESP32: Cpu,
  Arduino: GitBranch,
  IoT: Wifi,
  Sensors: Thermometer,
  Automation: HomeIcon,
  'Embedded Systems': Radio,
};

// "What's stopping your project?" cards
const problemCards = [
  {
    icon: Bug,
    title: 'My code doesn\'t work',
    description: 'Firmware bugs, logic errors, or code that won\'t compile. I help you debug and get things working.',
    link: '/assist',
    linkLabel: 'Get help with my code',
    pillar: 'divits-assist',
    pillarLabel: 'DIVITS Assist',
    pillarColor: 'blue',
  },
  {
    icon: Wrench,
    title: 'My hardware isn\'t working',
    description: 'Circuit issues, broken connections, or hardware that won\'t power on. I help troubleshoot and fix it.',
    link: '/assist',
    linkLabel: 'Get help with my hardware',
    pillar: 'divits-assist',
    pillarLabel: 'DIVITS Assist',
    pillarColor: 'blue',
  },
  {
    icon: GraduationCap,
    title: 'I need help with a university/project build',
    description: 'Coursework, capstone projects, or thesis hardware. I help you understand and build what you need.',
    link: '/assist',
    linkLabel: 'Start a project request',
    pillar: 'divits-assist',
    pillarLabel: 'DIVITS Assist',
    pillarColor: 'blue',
  },
  {
    icon: Network,
    title: 'I need an IoT system',
    description: 'Connected devices, sensor networks, cloud dashboards, or remote monitoring. I design and build it.',
    link: '/iot',
    linkLabel: 'Start an IoT project',
    pillar: 'divits-iot',
    pillarLabel: 'DIVITS IoT',
    pillarColor: 'iot',
  },
  {
    icon: Zap,
    title: 'I want to automate something',
    description: 'Home automation, industrial control, or any system that needs to run on its own. I help make it real.',
    link: '/iot',
    linkLabel: 'Start an automation project',
    pillar: 'divits-iot',
    pillarLabel: 'DIVITS IoT',
    pillarColor: 'iot',
  },
  {
    icon: HomeIcon,
    title: 'I want a smart home',
    description: 'Smart lighting, climate control, security, and energy monitoring. Concepts and future installation services available.',
    link: '/home-automation',
    linkLabel: 'Explore smart home options',
    pillar: 'divits-home',
    pillarLabel: 'DIVITS Home',
    pillarColor: 'home',
  },
  {
    icon: Rocket,
    title: 'I have a project idea',
    description: 'You have an idea but don\'t know where to start. Let\'s talk through it and figure out the path together.',
    link: '/build',
    linkLabel: 'Tell us what you\'re working on',
    pillar: 'divits-build',
    pillarLabel: 'DIVITS Build',
    pillarColor: 'orange',
  },
];

const Home = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const previewFAQs = faqItems.slice(0, 3);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24 overflow-hidden pillar-gold-overlay grid-pattern-animated"
        aria-labelledby="hero-title"
      >
        {/* Reference image background */}
        <img
          src="/images/divits/Home.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          aria-hidden="true"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/60 via-bg-primary/40 to-bg-primary/70" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(201,168,76,0.1),transparent_60%)]" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal delay={0.1} distance={15}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
                  Available for new projects
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.2} distance={15}>
                <h1 id="hero-title" className="font-heading font-bold text-display-xl text-text-primary mb-6 leading-tight">
                  Build. Debug. Learn.
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.3} distance={15}>
                <p className="text-body-lg lg:text-body text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Whether it is a bug, a broken circuit, a university project, or an IoT system —
                  tell us what you are working on and we will help you get it running.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4} distance={15}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                  <Button
                    size="lg"
                    rightIcon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                    as={Link}
                    to="/order"
                  >
                    Tell us what you are working on
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    as={Link}
                    to="/services"
                  >
                    View Our Services
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.5} distance={15}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4">
                  {['ESP32', 'Arduino', 'IoT', 'Sensors', 'Automation', 'Embedded Systems'].map((skill) => {
                    const Icon = trustIcons[skill];
                    return (
                      <div key={skill} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-elevated/50 border border-border/30">
                        <Icon className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                        <span className="font-heading font-medium text-body-sm text-text-primary">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal distance={15}>
              <div className="relative aspect-square max-w-md mx-auto animate-float-subtle">
                <div className="relative w-full h-full">
                  <svg viewBox="0 0 400 400" className="w-full h-full" aria-label="ESP32 development board illustration with circuits and technology elements" role="img">
                    <defs>
                      <linearGradient id="heroBoardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f5f2eb" />
                        <stop offset="100%" stopColor="#efeae0" />
                      </linearGradient>
                      <linearGradient id="heroPinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#d4c8b8" />
                        <stop offset="50%" stopColor="#c4b8a8" />
                        <stop offset="100%" stopColor="#d4c8b8" />
                      </linearGradient>
                      <linearGradient id="heroGoldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c9a84c" />
                        <stop offset="100%" stopColor="#d4a537" />
                      </linearGradient>
                      <radialGradient id="heroBoardGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
                      </radialGradient>
                      <filter id="heroGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <filter id="heroSoftGlow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Background glow */}
                    <circle cx="200" cy="200" r="180" fill="url(#heroBoardGlow)" />

                    {/* Outer decorative ring */}
                    <circle cx="200" cy="200" r="185" fill="none" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" />
                    <circle cx="200" cy="200" r="190" fill="none" stroke="#c9a84c" strokeWidth="0.3" opacity="0.15" />

                    {/* Background: subtle house silhouette */}
                    <path d="M80 340 L80 300 L150 270 L220 300 L220 340 Z" fill="#c9a84c" opacity="0.06" />
                    <rect x="180" y="300" width="30" height="40" rx="2" fill="#c9a84c" opacity="0.05" />
                    {/* Background: tiny network node indicators */}
                    <circle cx="60" cy="200" r="4" fill="#c9a84c" opacity="0.08" />
                    <circle cx="340" cy="200" r="4" fill="#c9a84c" opacity="0.08" />
                    <circle cx="200" cy="350" r="4" fill="#c9a84c" opacity="0.08" />

                    {/* Main board - larger and more detailed */}
                    <rect x="15" y="15" width="370" height="370" rx="18" fill="url(#heroBoardGradient)" stroke="#c9a84c" strokeWidth="2.5" filter="url(#heroGlow)" />
                    <rect x="15" y="15" width="370" height="370" rx="18" fill="none" stroke="#c9a84c" strokeWidth="0.5" opacity="0.4" strokeDasharray="4 4" />

                    {/* PCB trace pattern on board */}
                    <g opacity="0.15" stroke="#c9a84c" strokeWidth="0.5">
                      <line x1="60" y1="50" x2="120" y2="50" />
                      <line x1="120" y1="50" x2="120" y2="100" />
                      <line x1="120" y1="100" x2="200" y2="100" />
                      <line x1="200" y1="100" x2="200" y2="60" />
                      <line x1="200" y1="60" x2="280" y2="60" />
                      <line x1="280" y1="60" x2="280" y2="120" />
                      <line x1="280" y1="120" x2="340" y2="120" />
                      <line x1="240" y1="50" x2="240" y2="130" />
                      <line x1="160" y1="140" x2="240" y2="140" />
                      <line x1="240" y1="140" x2="240" y2="200" />
                      <line x1="60" y1="320" x2="140" y2="320" />
                      <line x1="140" y1="320" x2="140" y2="260" />
                      <line x1="60" y1="260" x2="100" y2="260" />
                      <line x1="300" y1="280" x2="360" y2="280" />
                      <line x1="360" y1="280" x2="360" y2="340" />
                      <line x1="300" y1="340" x2="300" y2="280" />
                    </g>

                    {/* Second ESP32 board (smaller, offset) */}
                    <rect x="280" y="20" width="100" height="70" rx="6" fill="#faf8f3" stroke="#c9a84c" strokeWidth="1.5" opacity="0.9" />
                    <rect x="285" y="25" width="90" height="25" rx="3" fill="#c9a84c" opacity="0.15" />
                    <text x="330" y="42" textAnchor="middle" fill="#c9a84c" fontSize="8" fontWeight="bold" fontFamily="monospace">ESP32</text>
                    <text x="330" y="53" textAnchor="middle" fill="#8a8a8a" fontSize="6" fontFamily="monospace">MINI</text>
                    {/* Small pins */}
                    <g stroke="#c9a84c" strokeWidth="0.8" opacity="0.6">
                      <line x1="275" y1="35" x2="280" y2="35" />
                      <line x1="275" y1="42" x2="280" y2="42" />
                      <line x1="385" y1="35" x2="380" y2="35" />
                      <line x1="385" y1="42" x2="380" y2="42" />
                      <line x1="275" y1="50" x2="280" y2="50" />
                      <line x1="275" y1="57" x2="280" y2="57" />
                      <line x1="385" y1="50" x2="380" y2="50" />
                      <line x1="385" y1="57" x2="380" y2="57" />
                    </g>
                    {/* Tiny circuit traces to second board */}
                    <path d="M280 55 L270 55 L270 300" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
                    <path d="M380 55 L390 55 L390 300" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
                    <circle cx="390" cy="300" r="3" fill="#c9a84c" opacity="0.3" />
                    <circle cx="270" cy="300" r="3" fill="#c9a84c" opacity="0.3" />

                    {/* Main chip label */}
                    <rect x="130" y="150" width="140" height="100" rx="10" fill="#fdfbf7" stroke="#c9a84c" strokeWidth="2" filter="url(#heroSoftGlow)" />
                    <rect x="135" y="155" width="130" height="90" rx="7" fill="#c9a84c" opacity="0.04" />
                    <text x="200" y="188" textAnchor="middle" fill="#c9a84c" fontSize="18" fontWeight="bold" fontFamily="monospace">ESP32</text>
                    <text x="200" y="210" textAnchor="middle" fill="#c9a84c" fontSize="10" fontFamily="monospace" opacity="0.8">WROVER</text>
                    <text x="200" y="226" textAnchor="middle" fill="#8a8a8a" fontSize="7" fontFamily="monospace">Dual-Core Processor</text>

                    {/* WiFi symbol */}
                    <g transform="translate(320, 60)" filter="url(#heroGlow)">
                      <path d="M0 8 Q8 0 16 8" stroke="#c9a84c" strokeWidth="1.5" fill="none" opacity="0.8" />
                      <path d="M2 12 Q10 2 18 12" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.5" />
                      <path d="M4 16 Q10 6 16 16" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.3" />
                      <circle cx="8" cy="6" r="1.5" fill="#c9a84c" />
                    </g>

                    {/* Bluetooth symbol */}
                    <g transform="translate(55, 230)" opacity="0.7">
                      <path d="M5 5 L10 14 L5 11 L8 14 Z" fill="#c9a84c" />
                      <path d="M15 5 L10 14 L15 11 L12 14 Z" fill="#c9a84c" opacity="0.6" />
                    </g>

                    {/* Mesh network nodes */}
                    <circle cx="250" cy="20" r="3" fill="#c9a84c" opacity="0.5">
                      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="50" cy="40" r="2.5" fill="#c9a84c" opacity="0.4">
                      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="360" cy="30" r="2" fill="#c9a84c" opacity="0.3">
                      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="40" cy="200" r="2.5" fill="#c9a84c" opacity="0.4">
                      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="370" cy="250" r="2" fill="#c9a84c" opacity="0.35">
                      <animate attributeName="opacity" values="0.35;0.65;0.35" dur="3.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="60" cy="340" r="2.5" fill="#c9a84c" opacity="0.4">
                      <animate attributeName="opacity" values="0.4;0.65;0.4" dur="2.2s" repeatCount="indefinite" />
                    </circle>

                    {/* Mesh connection lines */}
                    <g stroke="#c9a84c" strokeWidth="0.5" opacity="0.15" strokeDasharray="3 3">
                      <line x1="200" y1="60" x2="250" y2="20" />
                      <line x1="200" y1="60" x2="50" y2="40" />
                      <line x1="200" y1="60" x2="360" y2="30" />
                      <line x1="200" y1="340" x2="40" y2="200" />
                      <line x1="200" y1="340" x2="370" y2="250" />
                      <line x1="200" y1="340" x2="60" y2="340" />
                    </g>

                    {/* WiFi signal arcs */}
                    <path d="M310 55 Q320 45 330 55" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.4" />
                    <path d="M305 50 Q320 35 335 50" stroke="#c9a84c" strokeWidth="0.8" fill="none" opacity="0.25" />
                    <circle cx="320" cy="48" r="1.5" fill="#c9a84c" opacity="0.6">
                      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
                    </circle>

                    {/* Circuit traces from main board */}
                    <g stroke="#c9a84c" strokeWidth="1" opacity="0.4">
                      <line x1="100" y1="50" x2="100" y2="140" />
                      <line x1="100" y1="50" x2="60" y2="50" />
                      <line x1="300" y1="50" x2="300" y2="140" />
                      <line x1="300" y1="50" x2="340" y2="50" />
                      <line x1="100" y1="350" x2="100" y2="280" />
                      <line x1="100" y1="350" x2="60" y2="350" />
                      <line x1="300" y1="350" x2="300" y2="280" />
                      <line x1="300" y1="350" x2="340" y2="350" />
                    </g>

                    {/* Pin headers - left side */}
                    <g stroke="url(#heroPinGradient)" strokeWidth="1.5">
                      {Array.from({ length: 19 }, (_, i) => <line key={`hero-left-${i}`} x1="40" y1={55 + i * 16} x2="70" y2={55 + i * 16} />)}
                    </g>
                    {/* Pin headers - right side */}
                    <g stroke="url(#heroPinGradient)" strokeWidth="1.5">
                      {Array.from({ length: 19 }, (_, i) => <line key={`hero-right-${i}`} x1="330" y1={55 + i * 16} x2="360" y2={55 + i * 16} />)}
                    </g>

                    {/* Pin dots with gold accent */}
                    <g fill="#c9a84c">
                      {Array.from({ length: 19 }, (_, i) => (
                        <circle key={`hero-pin-left-${i}`} cx="40" cy={55 + i * 16} r="1.5" opacity={i % 2 === 0 ? 0.8 : 0.4} />
                      ))}
                      {Array.from({ length: 19 }, (_, i) => (
                        <circle key={`hero-pin-right-${i}`} cx="360" cy={55 + i * 16} r="1.5" opacity={i % 2 !== 0 ? 0.8 : 0.4} />
                      ))}
                    </g>

                    {/* USB-C port */}
                    <rect x="185" y="15" width="30" height="8" rx="3" fill="#c9a84c" opacity="0.3" stroke="#c9a84c" strokeWidth="1" />
                    <rect x="190" y="12" width="20" height="4" rx="2" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.5" />

                    {/* Voltage regulator */}
                    <rect x="250" y="280" width="40" height="20" rx="4" fill="#c9a84c" opacity="0.08" stroke="#c9a84c" strokeWidth="1" />
                    <text x="270" y="294" textAnchor="middle" fill="#c9a84c" fontSize="5" fontFamily="monospace" opacity="0.6">AMS</text>

                    {/* Smart lock near USB-C */}
                    <g transform="translate(215, 20)">
                      <rect x="0" y="0" width="20" height="26" rx="4" fill="#c9a84c" opacity="0.08" stroke="#c9a84c" strokeWidth="1.2" />
                      <circle cx="10" cy="18" r="5" fill="#c9a84c" opacity="0.1" stroke="#c9a84c" strokeWidth="1" />
                      <rect x="8" y="4" width="4" height="4" rx="1" fill="#c9a84c" opacity="0.15" />
                    </g>

                    {/* Crystal oscillator */}
                    <rect x="230" y="155" width="20" height="12" rx="2" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.5" />
                    <line x1="230" y1="161" x2="250" y2="161" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" />
                    <line x1="230" y1="155" x2="230" y2="167" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" />
                    <line x1="250" y1="155" x2="250" y2="167" stroke="#c9a84c" strokeWidth="0.5" opacity="0.3" />

                    {/* LED indicators */}
                    <circle cx="80" cy="340" r="3" fill="#c9a84c" opacity="0.8">
                      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="320" cy="340" r="3" fill="#d4903e" opacity="0.6">
                      <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite" />
                    </circle>

                    {/* Power connector icon */}
                    <rect x="60" y="235" width="12" height="18" rx="2" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.5" />
                    <line x1="66" y1="240" x2="66" y2="248" stroke="#c9a84c" strokeWidth="1" opacity="0.5" />
                    <line x1="62" y1="244" x2="70" y2="244" stroke="#c9a84c" strokeWidth="1" opacity="0.5" />

                    {/* Thermostat */}
                    <g transform="translate(45, 285)">
                      <circle cx="8" cy="8" r="8" fill="#c9a84c" opacity="0.08" stroke="#c9a84c" strokeWidth="1" />
                      <circle cx="8" cy="8" r="3" fill="#c9a84c" opacity="0.2" />
                      <line x1="8" y1="4" x2="8" y2="1" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" />
                      <line x1="8" y1="13" x2="8" y2="16" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" />
                    </g>

                    {/* Sensor node */}
                    <g transform="translate(365, 280)">
                      <circle cx="8" cy="8" r="6" fill="#c9a84c" opacity="0.08" stroke="#c9a84c" strokeWidth="1" />
                      <circle cx="8" cy="8" r="2.5" fill="#c9a84c" opacity="0.3" />
                      <line x1="8" y1="5" x2="8" y2="2" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round" />
                      <line x1="8" y1="11" x2="8" y2="14" stroke="#c9a84c" strokeWidth="0.8" strokeLinecap="round" />
                    </g>

                    {/* Corner accents - small gold diamonds */}
                    <polygon points="30,30 34,26 38,30 34,34" fill="#c9a84c" opacity="0.4" />
                    <polygon points="362,30 366,26 370,30 366,34" fill="#c9a84c" opacity="0.4" />
                    <polygon points="30,370 34,366 38,370 34,374" fill="#c9a84c" opacity="0.4" />
                    <polygon points="362,370 366,366 370,370 366,374" fill="#c9a84c" opacity="0.4" />

                    {/* Decorative floating particles */}
                    <circle cx="60" cy="100" r="2" fill="#c9a84c" opacity="0.5">
                      <animate attributeName="opacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="340" cy="120" r="1.5" fill="#c9a84c" opacity="0.4">
                      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="150" cy="40" r="1.5" fill="#d4a537" opacity="0.3">
                      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="250" cy="380" r="2" fill="#c9a84c" opacity="0.4">
                      <animate attributeName="opacity" values="0.4;0.15;0.4" dur="2.8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="360" cy="250" r="1.5" fill="#d4a537" opacity="0.3">
                      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="40" cy="200" r="1" fill="#c9a84c" opacity="0.3">
                      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="4.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="370" cy="160" r="1.5" fill="#c9a84c" opacity="0.4">
                      <animate attributeName="opacity" values="0.4;0.15;0.4" dur="3.7s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="120" cy="370" r="1.5" fill="#d4a537" opacity="0.3">
                      <animate attributeName="opacity" values="0.3;0.1;0.3" dur="5s" repeatCount="indefinite" />
                    </circle>

                    {/* Subtle grid overlay on board */}
                    <g opacity="0.04" stroke="#c9a84c" strokeWidth="0.3">
                      {Array.from({ length: 20 }, (_, i) => (
                        <line key={`vgrid-${i}`} x1={30 + i * 17} y1="15" x2={30 + i * 17} y2="385" />
                      ))}
                      {Array.from({ length: 20 }, (_, i) => (
                        <line key={`hgrid-${i}`} x1="15" y1={30 + i * 18} x2="385" y2={30 + i * 18} />
                      ))}
                    </g>
                  </svg>
                </div>

                {/* Decorative accent dots around the illustration */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border border-accent-gold/20 rounded-full animate-float" style={{ animationDelay: '0s' }} aria-hidden="true" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border border-accent-gold/15 rounded-full animate-float" style={{ animationDelay: '2s' }} aria-hidden="true" />
                <div className="absolute top-1/2 -left-6 w-3 h-3 bg-accent-gold/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-accent-gold/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} aria-hidden="true" />

                <div className="mt-10 grid grid-cols-3 gap-4 md:max-w-md mx-auto">
                  {[
                    { label: 'Services', value: '4', icon: Cpu },
                    { label: 'Project Types', value: '11', icon: Wifi },
                    { label: 'Concepts Built', value: '3', icon: Radio },
                  ].map((stat, index) => (
                    <ScrollReveal key={stat.label} delay={0.6 + index * 0.1} distance={15}>
                      <div className="text-center p-4 rounded-2xl bg-bg-elevated/50 border border-border/30">
                        <stat.icon className="w-5 h-5 text-accent-gold mx-auto mb-2" aria-hidden="true" />
                        <div className="font-heading font-bold text-heading-md text-text-primary gradient-text-gold">
                          {stat.value}
                        </div>
                        <div className="text-caption text-text-secondary">{stat.label}</div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What's Stopping Your Project? */}
      <section id="problems" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="problems-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16 relative">
            <div className="inline-flex items-center gap-2 mb-3" aria-hidden="true">
              <span className="w-1 h-6 rounded-full bg-accent-blue" />
              <span className="w-1 h-4 rounded-full bg-accent-gold" />
              <span className="w-1 h-6 rounded-full bg-accent-orange" />
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
              DIVITS Technologies
            </motion.span>
            <h2 id="problems-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              What's stopping your project?
            </h2>
            <p className="text-body-lg text-text-secondary">
              Every project starts with a problem. Choose the area that matches yours and let us help you move forward.
            </p>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {problemCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <StaggerItem key={card.title} delay={index * 0.05}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      className="group"
                    >
                      <GlassCard
                        variant="elevated"
                        hover
                        padding="lg"
                        border="accent"
                        className="h-full flex flex-col"
                      >
                        <div className={`w-14 h-14 rounded-2xl bg-accent-${card.pillarColor}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`w-7 h-7 text-accent-${card.pillarColor}`} aria-hidden="true" />
                        </div>
                        <h3 className="font-heading font-bold text-heading-md text-text-primary mb-3">
                          {card.title}
                        </h3>
                        <p className="text-body text-text-secondary mb-6 flex-1 leading-relaxed">
                          {card.description}
                        </p>
                        <Button variant="outline" size="sm" className="w-full mt-auto" as={Link} to={card.link}>
                          {card.linkLabel}
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Button>
                      </GlassCard>
                    </motion.article>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal distance={20} delay={0.3} className="mt-16 text-center">
            <p className="text-body-lg text-text-secondary mb-6">
              Not sure which area fits? You can describe your project in general terms and we will match it to the right service.
            </p>
            <Button variant="primary" size="lg" as={Link} to="/order">
              Start a project request
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Honest Stats */}
      <section id="stats" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="stats-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16 relative">
            <div className="inline-flex items-center gap-2 mb-3" aria-hidden="true">
              <span className="w-1 h-6 rounded-full bg-accent-gold" />
              <span className="w-1 h-4 rounded-full bg-accent-amber" />
              <span className="w-1 h-6 rounded-full bg-accent-gold" />
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
              Where We Stand
            </motion.span>
            <h2 id="stats-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              Honest numbers
            </h2>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center p-8 rounded-2xl bg-bg-elevated/50 border border-border/30">
                <div className="font-heading font-bold text-display-sm text-text-primary gradient-text-gold">
                  00
                </div>
                <div className="font-heading font-bold text-display-sm text-text-primary gradient-text-gold">
                  Nigerian Smart Homes Automated
                </div>
                <div className="text-body-sm text-accent-gold mt-2 font-medium">Be the first.</div>
                <p className="text-body-sm text-text-secondary mt-1">Smart-home automation is a future-facing service. We are building this capability.</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-bg-elevated/50 border border-border/30">
                <div className="font-heading font-bold text-display-sm text-text-primary gradient-text-gold">
                  3
                </div>
                <div className="text-body-sm text-accent-gold mt-2 font-medium">Concept / Demo Projects</div>
                <p className="text-body-sm text-text-secondary mt-1">Working prototypes that demonstrate what is possible. Each is a learning project, not a deployed client system.</p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-bg-elevated/50 border border-border/30">
                <div className="font-heading font-bold text-display-sm text-text-primary gradient-text-gold">
                  9
                </div>
                <div className="text-body-sm text-accent-gold mt-2 font-medium">Frequently Asked Questions</div>
                <p className="text-body-sm text-text-secondary mt-1">Answers to common questions about ESP32, Arduino, IoT, troubleshooting, and more.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Short Services Preview */}
      <section id="services-preview" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="services-preview-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <img src="/images/divits/electronics-background.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.04]" aria-hidden="true" loading="lazy" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
              DIVITS Services
            </motion.span>
            <h2 id="services-preview-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              Four pillars to help you
            </h2>
            <p className="text-body-lg text-text-secondary">
              From debugging a single line of code to building a complete IoT system — we cover the full stack.
            </p>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
              {[
                { name: 'DIVITS Assist', desc: 'Coding, debugging, university projects, and electronics troubleshooting', color: 'blue' },
                { name: 'DIVITS Build', desc: 'Custom software and hardware projects, prototypes, and technical builds', color: 'orange' },
                { name: 'DIVITS IoT', desc: 'IoT systems, connected devices, MQTT, automation, and monitoring', color: 'iot' },
                { name: 'DIVITS Home', desc: 'Smart-home automation concepts and future installation services', color: 'home' },
              ].map((pillar, index) => (
                <StaggerItem key={pillar.name} delay={index * 0.05}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="group"
                  >
                    <GlassCard variant="elevated" hover padding="lg" border="accent" className="h-full flex flex-col">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-accent-${pillar.color}/10`}>
                        <div className={`w-8 h-8 rounded-xl bg-accent-${pillar.color}/20 flex items-center justify-center`}>
                          <span className="font-heading font-bold text-accent-${pillar.color} text-body-sm">{index + 1}</span>
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-heading-md text-text-primary mb-2">
                        {pillar.name}
                      </h3>
                      <p className="text-body text-text-secondary mb-4 text-sm leading-relaxed flex-1">
                        {pillar.desc}
                      </p>
                      <Button variant="outline" size="sm" className="w-full mt-auto" as={Link} to="/services">
                        Explore {pillar.name}
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Button>
                    </GlassCard>
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal distance={20} delay={0.3} className="mt-8 text-center">
            <Button variant="primary" size="lg" as={Link} to="/services">
              View All Services
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Visual Showcase: ESP32 + IoT */}
      <section id="visual-showcase" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="visual-showcase-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <img src="/images/divits/electronics-background.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.03]" aria-hidden="true" loading="lazy" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-iot/10 border border-accent-iot/20 text-accent-iot text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-iot" aria-hidden="true" />
              Embedded & IoT
            </motion.span>
            <h2 id="visual-showcase-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              From chip to cloud
            </h2>
            <p className="text-body-lg text-text-secondary">
              ESP32 development, sensor networks, and IoT systems — built to work in the real world.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal distance={40} className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-accent-iot/20 shadow-lg shadow-accent-iot/10">
                <img src="/images/divits/home-esp32.jpg" alt="ESP32 development" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-iot/20 to-transparent" aria-hidden="true" />
              </div>
            </ScrollReveal>
            <ScrollReveal distance={40} delay={0.1}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-iot/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-iot" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 3v14M16 3v14M2 9h20" /></svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-heading-lg text-text-primary mb-1">ESP32 & Embedded</h3>
                    <p className="text-body text-text-secondary">Custom firmware, FreeRTOS, Wi-Fi, Bluetooth, BLE — from prototype to production.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-heading-lg text-text-primary mb-1">IoT Systems</h3>
                    <p className="text-body text-text-secondary">MQTT, sensor networks, cloud dashboards, and remote monitoring.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-orange/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-accent-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-heading-lg text-text-primary mb-1">Wireless Protocols</h3>
                    <p className="text-body text-text-secondary">Wi-Fi, Bluetooth/BLE, ESP-NOW, LoRaWAN, Zigbee, Matter/Thread.</p>
                  </div>
                </div>
                <Button variant="primary" size="lg" as={Link} to="/iot">
                  Explore IoT Services
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Short Projects Preview */}
      <section id="projects-preview" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="projects-preview-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
              Projects
            </motion.span>
            <h2 id="projects-preview-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              Concept / Demo Projects
            </h2>
            <p className="text-body-lg text-text-secondary">
              These are demonstration projects built to prove concepts and explore technology. They are not deployed client systems.
            </p>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {projects.map((project, index) => (
                <StaggerItem key={project.id} delay={index * 0.1}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="group"
                  >
                    <GlassCard
                      variant="elevated"
                      hover={true}
                      padding="none"
                      border="accent"
                      className="h-full flex flex-col overflow-hidden"
                      glow={index % 3 === 0}
                      glowColor={index % 3 === 0 ? 'gold' : index % 3 === 1 ? 'amber' : 'yellow'}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={
                            project.id === 'iot-power-distribution' ? '/images/divits/projects-pcb.jpg' :
                            project.id === 'esp32-sensor-system' ? '/images/divits/projects-robotics.jpg' :
                            '/images/divits/Projects.jpg'
                          }
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary/60 via-bg-primary/30 to-bg-primary/20" aria-hidden="true" />
                        <div className="absolute top-4 right-4 z-10">
                          <svg className="w-10 h-10 text-border-light/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <path d="M8 3v14M16 3v14M2 9h20" />
                            <circle cx="12" cy="10" r="2" />
                          </svg>
                        </div>
                        {project.isConcept && (
                          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-caption font-medium">
                            {project.conceptLabel}
                          </span>
                        )}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <span className="tag tag-primary">{project.category}</span>
                          <span className="text-caption text-text-muted">{project.year}</span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-heading font-bold text-heading-lg text-text-primary mb-2">
                          {project.title}
                        </h3>
                        <p className="text-body text-text-secondary mb-3 text-sm line-clamp-3 flex-1">
                          {project.shortDescription}
                        </p>
                        <Button variant="primary" size="sm" className="w-full mt-auto" as={Link} to={`/order?project=${project.id}`}>
                          Request Similar Project
                        </Button>
                      </div>
                    </GlassCard>
                  </motion.article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal distance={20} delay={0.3} className="mt-8 text-center">
            <p className="text-body-lg text-text-secondary mb-6">
              Want to build something of your own? Let us help.
            </p>
            <Button variant="primary" size="lg" as={Link} to="/order">
              Request a Project
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Short Process Preview */}
      <section id="process-preview" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="process-preview-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
              How I Work
            </motion.span>
            <h2 id="process-preview-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              Simple, transparent process
            </h2>
            <p className="text-body-lg text-text-secondary">
              From initial conversation to delivered project — clear steps, regular updates, no surprises.
            </p>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {['Discovery', 'Design', 'Development', 'Delivery'].map((step, index) => {
                const stepIcons = ['message-square', 'layout', 'code', 'package'];
                const IconComponent = ({ viewBox: V, ...props }) => (
                  <svg viewBox={V} fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" {...props} aria-hidden="true">
                    {index === 0 && <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />}
                    {index === 1 && <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></>}
                    {index === 2 && <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>}
                    {index === 3 && <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /></>}
                  </svg>
                );
                return (
                  <ScrollReveal key={step} distance={30} delay={index * 0.05}>
                    <div className="text-center p-6 rounded-2xl bg-bg-elevated/50 border border-border/30">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-gold to-accent-amber flex items-center justify-center text-bg-primary font-heading font-bold text-heading-lg mx-auto mb-4">
                        {index + 1}
                      </div>
                      <h3 className="font-heading font-bold text-heading-sm text-text-primary mb-2">{step}</h3>
                      <p className="text-body-sm text-text-secondary">
                        {['Conversation and requirements', 'Architecture and design', 'Firmware and testing', 'Delivery and support'][index]}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal distance={20} delay={0.3} className="mt-8 text-center">
            <Button variant="primary" size="lg" as={Link} to="/process">
              See Full Process
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Me Preview */}
      <section id="why-choose-me-preview" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="why-choose-me-preview-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
              Why Work With Me
            </motion.span>
            <h2 id="why-choose-me-preview-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              The Difference
            </h2>
            <p className="text-body-lg text-text-secondary">
              Not just code — complete embedded systems solutions delivered with engineering rigor.
            </p>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {whyChooseMe.slice(0, 4).map((item, index) => {
                const IconMap = {
                  'help-when-stuck': Bug,
                  'custom-solutions': 'puzzle',
                  'clean-code': 'code',
                  'hw-sw-integration': 'cpu',
                };
                const IconComp = item.id === 'help-when-stuck' ? Bug : null;
                return (
                  <StaggerItem key={item.id} delay={index * 0.08}>
                    <motion.article
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      className="group"
                    >
                      <GlassCard variant="elevated" hover padding="lg" border="accent" className="h-full">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bgColor} ${item.iconColor}`}>
                            {IconComp && <IconComp className="w-5 h-5" aria-hidden="true" />}
                            {!IconComp && (
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
                                {item.id === 'custom-solutions' && <><path d="M18 2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" /><path d="M2 18h4a2 2 0 0 0 2 2v4a2 2 0 0 0-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" /><path d="M2 2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /><path d="M18 18h4a2 2 0 0 0 2 2v4a2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2v-4a2 2 0 0 0 2-2z" /></>}
                                {item.id === 'clean-code' && <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>}
                                {item.id === 'hw-sw-integration' && <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6M9 12h6M9 15h6" /></>}
                              </svg>
                            )}
                          </div>
                        </div>
                        <h3 className="font-heading font-bold text-heading-sm text-text-primary mb-2">{item.title}</h3>
                        <p className="text-body-sm text-text-secondary">{item.description.slice(0, 60)}...</p>
                      </GlassCard>
                    </motion.article>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal distance={20} delay={0.3} className="mt-8 text-center">
            <Button variant="primary" size="lg" as={Link} to="/about">
              See Why Choose Me
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Preview */}
      <section id="faq-preview" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="faq-preview-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
              Frequently Asked
            </motion.span>
            <h2 id="faq-preview-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              Questions & Answers
            </h2>
            <p className="text-body-lg text-text-secondary">
              Common questions about my services, process, and capabilities.
            </p>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <StaggerContainer staggerDelay={0.08} className="max-w-3xl mx-auto space-y-4 mb-12">
              {previewFAQs.map((faq, index) => {
                const isOpen = openFAQ === index;
                return (
                  <StaggerItem key={faq.id} delay={index * 0.05}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className="p-6 rounded-2xl bg-bg-elevated/50 border border-border/30 hover:border-accent-gold/30 transition-all duration-300 cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                        role="button"
                        aria-expanded={isOpen}
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter') toggleFAQ(index); }}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="font-heading font-semibold text-heading-md text-text-primary pr-4 text-balance">
                            {faq.question}
                          </h3>
                          <motion.div
                            className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold"
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                          >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </motion.div>
                        </div>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-4 pt-4 border-t border-border/30"
                          >
                            <p className="text-body text-text-secondary leading-relaxed">{faq.answer}</p>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal distance={20} delay={0.2} className="mt-12 text-center">
            <Link to="/faq" className="btn-secondary inline-flex items-center gap-2">
              View All Questions
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(201,168,76,0.06)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 lg:p-16 rounded-3xl bg-gradient-to-br from-bg-elevated/50 to-bg-card/50 border border-accent-gold/20 backdrop-blur-xl shadow-glass"
            >
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-accent-gold/50 rounded-tl-2xl pointer-events-none" aria-hidden="true" />
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-accent-gold/50 rounded-tr-2xl pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-accent-gold/50 rounded-bl-2xl pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-accent-gold/50 rounded-br-2xl pointer-events-none" aria-hidden="true" />
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
                Ready to Build?
              </motion.span>
              <h2 className="font-heading font-bold text-display-md lg:text-display-lg text-text-primary mb-6 gradient-text">
                Have an electronics idea?
              </h2>
              <p className="text-body-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
                Tell us what you are trying to build or fix. We will review the requirements and get back to you with questions, clarifications, and a fair price estimate.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="xl"
                  rightIcon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                  as={Link}
                  to="/order"
                >
                  Start a project request
                </Button>
                <Button
                  variant="secondary"
                  size="xl"
                  onClick={() => window.open('https://wa.me/+' + siteConfig.contact.whatsapp.number.replace(/[^0-9]/g, '') + '?text=' + encodeURIComponent(siteConfig.contact.whatsapp.message), '_blank', 'noopener,noreferrer')}
                >
                  Chat on WhatsApp
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </Button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-center gap-6 text-text-muted"
              >
                <div className="flex items-center gap-2 text-caption">
                  <svg className="w-4 h-4 text-accent-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-2 text-caption">
                  <svg className="w-4 h-4 text-accent-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  <span>Transparent pricing & timeline</span>
                </div>
                <div className="flex items-center gap-2 text-caption">
                  <svg className="w-4 h-4 text-accent-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  <span>30-day post-delivery support</span>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Home;
