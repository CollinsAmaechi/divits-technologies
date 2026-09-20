import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { services } from '../data/services';
import { siteConfig } from '../config/siteConfig';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import { Wrench, Cpu, HardDrive, Radio, CircuitBoard, Settings, Layers, Box } from 'lucide-react';

const buildServices = [
  { icon: Cpu, title: 'ESP32 Development', desc: 'Custom firmware for ESP32 variants — ESP-IDF, FreeRTOS, Wi-Fi, Bluetooth.' },
  { icon: HardDrive, title: 'Arduino Development', desc: 'Uno, Nano, Mega, Due projects. Libraries, sensor integration, real-time control.' },
  { icon: CircuitBoard, title: 'PCB Design', desc: 'Schematic capture, PCB layout, component selection, fabrication coordination.' },
  { icon: Radio, title: 'Custom Hardware', desc: 'From concept to prototype. Enclosure design, thermal management, compliance prep.' },
  { icon: Settings, title: 'Embedded Programming', desc: 'C/C++ firmware, memory optimization, drivers, bootloaders, safety-critical code.' },
  { icon: Layers, title: 'Software + Hardware', desc: 'Full-stack embedded development — from circuit to code to cloud.' },
];

const Build = () => {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24 overflow-hidden" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-orange/5 via-transparent to-transparent" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal delay={0.1} distance={15}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-caption font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent-orange" aria-hidden="true" />
                  DIVITS Build
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.2} distance={15}>
                <h1 id="hero-title" className="font-heading font-bold text-display-xl text-text-primary mb-6 leading-tight">
                  Build something real.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.3} distance={15}>
                <p className="text-body-lg lg:text-body text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Custom software and hardware projects. Arduino, ESP32, embedded systems,
                  prototypes — from concept to working build.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4} distance={15}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                  <Button
                    size="lg"
                    variant="primary"
                    rightIcon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                    as={Link}
                    to="/order?pillar=build"
                  >
                    Start a Build Request
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    as={Link}
                    to="/services"
                  >
                    View All Services
                  </Button>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.5} distance={15}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4">
                  {['ESP32', 'Arduino', 'PCB Design', 'Custom Hardware', 'Embedded C++'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-elevated/50 border border-border/30">
                      <span className="w-2 h-2 rounded-full bg-accent-orange" aria-hidden="true" />
                      <span className="font-heading font-medium text-body-sm text-text-primary">{skill}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal distance={15}>
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-accent-orange/10 to-accent-orange/5 border border-accent-orange/20 flex items-center justify-center">
                  <Wrench className="w-24 h-24 text-accent-orange/40" aria-hidden="true" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section id="build-services" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="build-services-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-orange" aria-hidden="true" />
              What We Build
            </motion.span>
            <h2 id="build-services-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              From concept to working build
            </h2>
            <p className="text-body-lg text-text-secondary">
              Custom software and hardware projects. If you can describe it, we can build it.
            </p>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {buildServices.map((item, index) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title} delay={index * 0.05}>
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      className="group"
                    >
                      <GlassCard variant="elevated" hover padding="lg" border="accent" className="h-full">
                        <div className="w-12 h-12 rounded-xl bg-accent-orange/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-accent-orange" aria-hidden="true" />
                        </div>
                        <h3 className="font-heading font-bold text-heading-md text-text-primary mb-2">{item.title}</h3>
                        <p className="text-body text-text-secondary leading-relaxed">{item.desc}</p>
                      </GlassCard>
                    </motion.article>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal distance={20} delay={0.3} className="mt-16 text-center">
            <p className="text-body-lg text-text-secondary mb-6">
              Have a specific build in mind? Start a request and we will match it to the right service.
            </p>
            <Button variant="primary" size="lg" as={Link} to="/order?pillar=build">
              Start a Build Request
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Build Process */}
      <section id="build-process" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="build-process-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-orange" aria-hidden="true" />
              How A Build Works
            </motion.span>
            <h2 id="build-process-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              Discovery to delivery
            </h2>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { step: '01', title: 'Discover', desc: 'We talk through requirements, constraints, and timeline.' },
                { step: '02', title: 'Design', desc: 'Architecture, component selection, schematics, and roadmap.' },
                { step: '03', title: 'Build', desc: 'Firmware, PCB fabrication, integration, and testing.' },
                { step: '04', title: 'Deliver', desc: 'Working hardware, source code, documentation, 30-day support.' },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent-orange/10 flex items-center justify-center text-accent-orange font-heading font-bold text-heading-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-heading font-bold text-heading-sm text-text-primary mb-2">{item.title}</h3>
                    <p className="text-body-sm text-text-secondary">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 lg:p-16 rounded-3xl bg-gradient-to-br from-accent-orange/10 via-bg-elevated/50 to-bg-card/50 border border-accent-orange/20 backdrop-blur-xl"
            >
              <h2 className="font-heading font-bold text-display-md text-text-primary mb-4">
                Ready to build?
              </h2>
              <p className="text-body-lg text-text-secondary mb-8">
                Tell us what you want to build and we will get back to you with a plan and estimate.
              </p>
              <Button variant="primary" size="lg" as={Link} to="/order?pillar=build">
                Start a Build Request
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Build;
