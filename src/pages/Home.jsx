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
import { Cpu, Wifi, Radio, Home as HomeIcon, GitBranch, Thermometer } from 'lucide-react';

const trustIcons = {
  ESP32: Cpu,
  Arduino: GitBranch,
  IoT: Wifi,
  Sensors: Thermometer,
  Automation: HomeIcon,
  'Embedded Systems': Radio,
};

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
        className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24"
        aria-labelledby="hero-title"
      >
        <div className="section-container relative z-10 w-full max-w-full">
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
                  Building Smart Hardware
                  <br />
                  <span className="gradient-text">That Connects the Physical World</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.3} distance={15}>
                <p className="text-body-lg lg:text-body text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Professional ESP32, Arduino, and embedded systems development.
                  Custom IoT solutions, smart home automation, sensor systems, PCB prototyping,
                  and electronics troubleshooting.
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
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="relative w-full h-full">
                  <svg viewBox="0 0 400 400" className="w-full h-full" aria-label="ESP32 development board illustration" role="img">
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
                    <rect x="20" y="20" width="360" height="360" rx="16" fill="url(#boardGradient)" stroke="#d4c8b8" strokeWidth="2" />
                    <rect x="20" y="170" width="16" height="60" rx="4" fill="#d4c8b8" stroke="#c4b8a8" strokeWidth="1" />
                    <rect x="24" y="185" width="8" height="30" rx="2" fill="#c9a84c" opacity="0.3" />
                    <rect x="150" y="150" width="100" height="100" rx="8" fill="#fdfbf7" stroke="#c9a84c" strokeWidth="1.5" />
                    <text x="200" y="195" textAnchor="middle" fill="#c9a84c" fontSize="14" fontWeight="bold" fontFamily="monospace">ESP32</text>
                    <text x="200" y="215" textAnchor="middle" fill="#8a8a8a" fontSize="10" fontFamily="monospace">WROVER</text>
                    <circle cx="300" cy="80" r="8" fill="#c9a84c" opacity="0.8" />
                    <circle cx="330" cy="80" r="8" fill="#d4903e" opacity="0.8" />
                    <g stroke="url(#pinGradient)" strokeWidth="2">
                      {Array.from({ length: 19 }, (_, i) => <line key={`left-${i}`} x1="40" y1={60 + i * 14} x2="70" y2={60 + i * 14} />)}
                    </g>
                    <g stroke="url(#pinGradient)" strokeWidth="2">
                      {Array.from({ length: 19 }, (_, i) => <line key={`right-${i}`} x1="330" y1={60 + i * 14} x2="360" y2={60 + i * 14} />)}
                    </g>
                  </svg>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-4 md:max-w-md mx-auto">
                  {[
                    { label: 'Projects', value: '15+', icon: Cpu },
                    { label: 'Technologies', value: '25+', icon: Wifi },
                    { label: 'Happy Clients', value: '10+', icon: Radio },
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

      {/* Short Introduction / About Preview */}
      <section id="about-preview" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="about-preview-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10 w-full max-w-full">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
              About Me
            </motion.span>
            <h2 id="about-preview-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              Embedded Systems Developer
            </h2>
            <p className="text-body-lg text-text-secondary">
              {siteConfig.developer.bio}
            </p>
          </ScrollReveal>
          <ScrollReveal distance={20} delay={0.2} className="mt-8 text-center">
            <Button variant="primary" size="lg" as={Link} to="/about">
              Learn More About Me
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Short Services Preview */}
      <section id="services-preview" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="services-preview-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10 w-full max-w-full">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
              Services
            </motion.span>
            <h2 id="services-preview-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              What I Build
            </h2>
            <p className="text-body-lg text-text-secondary">
              End-to-end embedded systems development tailored to your requirements.
            </p>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
              {services.slice(0, 6).map((service, index) => (
                <StaggerItem key={service.id} delay={index * 0.05}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="group"
                  >
                    <GlassCard variant="elevated" hover padding="lg" border="accent" className="h-full flex flex-col">
                      <motion.div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${service.bgColor} ${service.borderColor} ${service.iconColor}`}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                        <service.icon className="w-6 h-6" aria-hidden="true" />
                      </motion.div>
                      <h3 className="font-heading font-bold text-heading-sm text-text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-body text-text-secondary mb-3 text-sm leading-relaxed">
                        {service.description.slice(0, 80)}...
                      </p>
                      <Button variant="outline" size="sm" className="w-full mt-auto" as={Link} to="/order">
                        Request Service
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

      {/* Short Projects Preview */}
      <section id="projects-preview" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="projects-preview-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10 w-full max-w-full">
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
              Selected Work
            </h2>
            <p className="text-body-lg text-text-secondary">
              Concept projects demonstrating ESP32, IoT, and embedded systems capabilities.
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
                    <GlassCard variant="elevated" hover padding="none" border="accent" className="h-full flex flex-col overflow-hidden">
                      <div className="relative aspect-video overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-bg-elevated to-bg-secondary" />
                        <div className="absolute inset-0 flex items-center justify-center relative z-10">
                          <svg className="w-24 h-24 text-border-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <path d="M8 3v14M16 3v14M2 9h20" />
                            <circle cx="12" cy="10" r="2" />
                          </svg>
                        </div>
                        {project.isConcept && (
                          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-caption font-medium">
                            Concept Project
                          </span>
                        )}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <span className="tag tag-primary">{project.category}</span>
                          <span className="text-caption text-text-muted">{project.year}</span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-heading font-bold text-heading-md text-text-primary mb-2">
                          {project.title}
                        </h3>
                        <p className="text-body text-text-secondary mb-3 text-sm line-clamp-2 flex-1">
                          {project.shortDescription}
                        </p>
                        <Button variant="primary" size="sm" className="w-full mt-auto" as={Link} to="/order">
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
            <Button variant="primary" size="lg" as={Link} to="/projects">
              View All Projects
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Short Process Preview */}
      <section id="process-preview" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="process-preview-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10 w-full max-w-full">
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
              Simple, Transparent Process
            </h2>
            <p className="text-body-lg text-text-secondary">
              From initial conversation to delivered project — clear steps, regular updates.
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
        <div className="section-container relative z-10 w-full max-w-full">
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
              {whyChooseMe.slice(0, 4).map((item, index) => (
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
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden="true">
                            {item.id === 'custom-solutions' && <><path d="M18 2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" /><path d="M2 18h4a2 2 0 0 0 2 2v4a2 2 0 0 0-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" /><path d="M2 2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" /><path d="M18 18h4a2 2 0 0 0 2 2v4a2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2v-4a2 2 0 0 0 2-2z" /></>}
                            {item.id === 'clean-code' && <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>}
                            {item.id === 'practical-engineering' && <><path d="M14.7 16.2 19 11.9a2 2 0 0 0-.6-2.2L5 2l-4 4 10 10a2 2 0 0 0 2.2-.6z" /><path d="M16 12h6a2 2 0 0 1 2 2v6" /></>}
                            {item.id === 'iot-connectivity' && <><path d="M12 20a10 10 0 1 1 0-20" /><path d="M12 2a1 1 0 0 1 1 1v4" /><path d="M12 19v4a1 1 0 0 1-1 1" /></>}
                            {item.id === 'hw-sw-integration' && <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6M9 12h6M9 15h6" /></>}
                            {item.id === 'clear-communication' && <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></>}
                            {item.id === 'testing-troubleshooting' && <><circle cx="12" cy="12" r="10" /><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
                          </svg>
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-heading-sm text-text-primary mb-2">{item.title}</h3>
                      <p className="text-body-sm text-text-secondary">{item.description.slice(0, 60)}...</p>
                    </GlassCard>
                  </motion.article>
                </StaggerItem>
              ))}
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
        <div className="section-container relative z-10 w-full max-w-full">
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
              {previewFAQs.map((faq, index) => (
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
                      aria-expanded={openFAQ === index}
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter') toggleFAQ(index); }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-heading font-semibold text-heading-md text-text-primary pr-4">
                          {faq.question}
                        </h3>
                        <motion.span
                          className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold"
                          animate={{ rotate: openFAQ === index ? 180 : 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </motion.span>
                      </div>
                      {openFAQ === index && (
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
              ))}
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
        <div className="section-container relative z-10 w-full max-w-full">
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
                Have an Electronics Idea?
              </h2>
              <p className="text-body-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's turn your idea into a working system. From prototype to production-ready hardware.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="xl"
                  rightIcon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                  as={Link}
                  to="/order"
                >
                  Start Your Project
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
