import { ArrowRight, CheckCircle, Cpu, Wifi, Radio, Home, GitBranch, Thermometer } from 'lucide-react';
import { TRUST_SKILLS } from '../../utils/constants';
import ScrollReveal from '../common/ScrollReveal';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';

const Hero = () => {
  const trustIcons = {
    ESP32: Cpu,
    Arduino: GitBranch,
    IoT: Wifi,
    Sensors: Thermometer,
    Automation: Home,
    'Embedded Systems': Radio,
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24"
      aria-labelledby="hero-title"
    >
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <ScrollReveal delay={0.1} distance={15}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
                Available for new projects
              </span>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={0.2} distance={15}>
              <h1
                id="hero-title"
                className="font-heading font-bold text-display-xl text-text-primary mb-6 leading-tight"
              >
                Building Smart Hardware
                <br />
                <span className="gradient-text">That Connects the Physical World</span>
              </h1>
            </ScrollReveal>

            {/* Subheading */}
            <ScrollReveal delay={0.3} distance={15}>
              <p className="text-body-lg lg:text-body text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Professional ESP32, Arduino, and embedded systems development. Custom IoT solutions,
                smart home automation, sensor systems, PCB prototyping, and electronics troubleshooting.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={0.4} distance={15}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <Button
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
                  as={Link}
                  to="/order"
                >
                  Start a Project
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  as={Link}
                  to="/projects"
                >
                  View My Projects
                </Button>
              </div>
            </ScrollReveal>

            {/* Trust/Skills Row */}
            <ScrollReveal delay={0.5} distance={15}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4">
                {TRUST_SKILLS.map((skill, index) => {
                  const Icon = trustIcons[skill];
                  return (
                    <div
                      key={skill}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-elevated/50 border border-border/30"
                    >
                      <Icon className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                      <span className="font-heading font-medium text-body-sm text-text-primary">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Visual - ESP32 Board */}
          <ScrollReveal distance={15}>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* ESP32 Board SVG */}
              <div className="relative w-full h-full">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  aria-label="ESP32 development board illustration"
                  role="img"
                >
                  <defs>
                    <linearGradient id="boardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f5f2eb" />
                      <stop offset="100%" stopColor="#efeae0" />
                    </linearGradient>
                    <linearGradient id="pinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#d4c8b8" />
                      <stop offset="50%" stopColor="#c4b8a8" />
                      <stop offset="100%" stopColor="#d4c8b8" />
                    </linearGradient>
                  </defs>

                  {/* Board base */}
                  <rect x="20" y="20" width="360" height="360" rx="16" fill="url(#boardGradient)" stroke="#d4c8b8" strokeWidth="2" />

                  {/* USB connector */}
                  <rect x="20" y="170" width="16" height="60" rx="4" fill="#d4c8b8" stroke="#c4b8a8" strokeWidth="1" />
                  <rect x="24" y="185" width="8" height="30" rx="2" fill="#c9a84c" opacity="0.3" />

                  {/* ESP32 Chip */}
                  <rect x="150" y="150" width="100" height="100" rx="8" fill="#fdfbf7" stroke="#c9a84c" strokeWidth="1.5" />
                  <text x="200" y="195" textAnchor="middle" fill="#c9a84c" fontSize="14" fontWeight="bold" fontFamily="monospace">ESP32</text>
                  <text x="200" y="215" textAnchor="middle" fill="#8a8a8a" fontSize="10" fontFamily="monospace">WROVER</text>

                  {/* LED indicators */}
                  <circle cx="300" cy="80" r="8" fill="#c9a84c" opacity="0.8" />
                  <circle cx="330" cy="80" r="8" fill="#d4903e" opacity="0.8" />

                  {/* Pin headers - left */}
                  <g stroke="url(#pinGradient)" strokeWidth="2">
                    {Array.from({ length: 19 }, (_, i) => (
                      <line key={`left-${i}`} x1="40" y1={60 + i * 14} x2="70" y2={60 + i * 14} />
                    ))}
                  </g>

                  {/* Pin headers - right */}
                  <g stroke="url(#pinGradient)" strokeWidth="2">
                    {Array.from({ length: 19 }, (_, i) => (
                      <line key={`right-${i}`} x1="330" y1={60 + i * 14} x2="360" y2={60 + i * 14} />
                    ))}
                  </g>

                  {/* Pin labels - left */}
                  <g fontSize="8" fill="#8a8a8a" fontFamily="monospace" textAnchor="end">
                    {['3V3', 'EN', 'VP', 'VN', '34', '35', '32', '33', '25', '26', '27', '14', '12', '13', '15', '2', '0', '4', '16'].map((label, i) => (
                      <text key={label} x="38" y={64 + i * 14}>{label}</text>
                    ))}
                  </g>

                  {/* Pin labels - right */}
                  <g fontSize="8" fill="#8a8a8a" fontFamily="monospace" textAnchor="start">
                    {['GND', 'TX2', 'RX2', '5', '18', '19', '21', '22', '23', '25', '26', '27', '14', '12', '13', '15', '2', '0', '4'].map((label, i) => (
                      <text key={`r-${label}`} x="362" y={64 + i * 14}>{label}</text>
                    ))}
                  </g>

                  {/* Antenna area */}
                  <rect x="300" y="280" width="60" height="60" rx="8" fill="#fdfbf7" stroke="#c9a84c" strokeWidth="1" strokeDasharray="4,4" />
                  <text x="330" y="315" textAnchor="middle" fill="#c9a84c" fontSize="10" fontWeight="bold" fontFamily="monospace">ANT</text>

                  {/* Decorative circuit traces */}
                  <g stroke="#c9a84c" strokeWidth="0.5" opacity="0.15" strokeLinecap="round">
                    <path d="M40 300 Q100 280 150 300" />
                    <path d="M360 300 Q300 280 250 300" />
                    <path d="M150 100 Q150 130 150 150" />
                    <path d="M250 100 Q250 130 250 150" />
                  </g>
                </svg>
              </div>

              {/* Stats below board */}
              <div className="mt-10 grid grid-cols-3 gap-4 md:max-w-md mx-auto">
                {[
                  { label: 'Projects', value: '15+', icon: Cpu },
                  { label: 'Technologies', value: '25+', icon: Wifi },
                  { label: 'Happy Clients', value: '10+', icon: CheckCircle },
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
  );
};

export default Hero;
