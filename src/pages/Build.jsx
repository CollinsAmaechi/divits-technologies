import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { services } from '../data/services';
import { siteConfig } from '../config/siteConfig';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import { Wrench, Cpu, HardDrive, Radio, CircuitBoard, Settings, Layers, Box } from 'lucide-react';
import PillarIllustration from '../components/illustrations/PillarIllustrations';

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
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24 overflow-hidden pillar-orange-overlay grid-pattern" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-orange/5 via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,144,62,0.08),transparent_50%)]" aria-hidden="true" />
        <img src="/images/divits/Build.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" aria-hidden="true" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-orange/10 via-transparent to-transparent" aria-hidden="true" />
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
                <h1 id="hero-title" className="font-heading font-bold text-display-xl text-text-primary mb-3 leading-tight">
                  DIVITS Build
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.25} distance={15}>
                <p className="font-heading font-bold text-heading-lg text-accent-orange mb-6 leading-tight">
                  Turn ideas into working builds
                </p>
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
              <div className="relative aspect-square max-w-md mx-auto animate-float">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-accent-orange/15 to-accent-orange/5 border border-accent-orange/20 shadow-lg shadow-accent-orange/10 flex items-center justify-center backdrop-blur-sm">
                  <PillarIllustration pillarId="build" color="#d4903e" size={240} />
                </div>
                <div className="absolute inset-0 rounded-3xl border border-accent-orange/10 -z-10" aria-hidden="true" />
                <div className="absolute -inset-4 rounded-3xl border border-accent-orange/5 -z-10" aria-hidden="true" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Hardware Showcase */}
      <section id="build-hardware" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="build-hardware-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <img src="/images/divits/Build_Hardware.avif" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.03]" aria-hidden="true" loading="lazy" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal distance={40} className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-accent-orange/20 shadow-lg shadow-accent-orange/10">
                <img src="/images/divits/Build_Hardware.avif" alt="Custom hardware build" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-orange/20 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-caption font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" aria-hidden="true" />
                    Custom Hardware
                  </span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal distance={40} delay={0.1}>
              <div>
                <ScrollReveal distance={30} className="text-center lg:text-left mb-8">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-caption font-medium mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent-orange" aria-hidden="true" />
                    Hardware Showcase
                  </span>
                  <h2 id="build-hardware-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
                    From concept to physical build
                  </h2>
                  <p className="text-body-lg text-text-secondary">
                    Custom hardware, PCB design, and prototyping. Every build is engineered to work reliably.
                  </p>
                </ScrollReveal>
                <ScrollReveal distance={30} delay={0.2}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-accent-orange/5 border border-accent-orange/20">
                      <h4 className="font-heading font-semibold text-heading-sm text-accent-orange mb-1">PCB Design</h4>
                      <p className="text-body-sm text-text-secondary">Schematic capture to fabrication</p>
                    </div>
                    <div className="p-4 rounded-xl bg-accent-orange/5 border border-accent-orange/20">
                      <h4 className="font-heading font-semibold text-heading-sm text-accent-orange mb-1">Enclosure Design</h4>
                      <p className="text-body-sm text-text-secondary">3D printed and CNC machined</p>
                    </div>
                    <div className="p-4 rounded-xl bg-accent-orange/5 border border-accent-orange/20">
                      <h4 className="font-heading font-semibold text-heading-sm text-accent-orange mb-1">Thermal Mgmt</h4>
                      <p className="text-body-sm text-text-secondary">Proper heat dissipation</p>
                    </div>
                    <div className="p-4 rounded-xl bg-accent-orange/5 border border-accent-orange/20">
                      <h4 className="font-heading font-semibold text-heading-sm text-accent-orange mb-1">Compliance</h4>
                      <p className="text-body-sm text-text-secondary">EMC/EMI readiness</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section id="build-services" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="build-services-title">
        <div className="absolute inset-0" aria-hidden="true" />
        {/* Decorative accent elements */}
        <div className="absolute top-0 left-1/4 w-px h-20 bg-accent-orange/30" aria-hidden="true" />
        <div className="absolute top-16 right-1/4 w-3 h-3 rounded-full bg-accent-orange/20" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/3 w-px h-16 bg-accent-orange/20" aria-hidden="true" />
        <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-accent-orange/15" aria-hidden="true" />
        <div className="section-container relative z-10">
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-16" aria-hidden="true">
            <div className="w-12 h-px bg-accent-orange/30" />
            <div className="w-2 h-2 rounded-full bg-accent-orange/50" />
            <div className="w-12 h-px bg-accent-orange/30" />
          </div>
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

      {/* PCB & Workbench */}
      <section id="build-pcb-workbench" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="build-pcb-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <img src="/images/divits/build-pcb.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.03]" aria-hidden="true" loading="lazy" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-orange" aria-hidden="true" />
              PCB & Prototyping
            </motion.span>
            <h2 id="build-pcb-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              Precision at the bench
            </h2>
            <p className="text-body-lg text-text-secondary">
              From PCB layout to soldering — every detail matters in the prototyping process.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal distance={40} className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-accent-orange/20 shadow-lg shadow-accent-orange/10">
                <img src="/images/divits/build-pcb.jpg" alt="PCB prototyping" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-orange/20 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-caption font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" aria-hidden="true" />
                    PCB Design & Fabrication
                  </span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal distance={40} delay={0.1}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-accent-orange/20 shadow-lg shadow-accent-orange/10">
                <img src="/images/divits/build-workbench.jpg" alt="Workbench prototyping" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-orange/20 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-orange/20 border border-accent-orange/30 text-accent-orange text-caption font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" aria-hidden="true" />
                    Workbench & Assembly
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section id="build-process" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="build-process-title">
        <div className="absolute inset-0" aria-hidden="true" />
        {/* Decorative accent elements */}
        <div className="absolute top-0 right-1/4 w-px h-16 bg-accent-orange/30" aria-hidden="true" />
        <div className="absolute top-16 left-1/3 w-2 h-2 rounded-full bg-accent-orange/20" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/4 w-px h-12 bg-accent-orange/20" aria-hidden="true" />
        <div className="section-container relative z-10">
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-16" aria-hidden="true">
            <div className="w-12 h-px bg-accent-orange/30" />
            <div className="w-2 h-2 rounded-full bg-accent-orange/50" />
            <div className="w-12 h-px bg-accent-orange/30" />
          </div>
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
        {/* Decorative accent elements */}
        <div className="absolute top-0 left-1/3 w-px h-12 bg-accent-orange/20" aria-hidden="true" />
        <div className="absolute top-16 right-1/4 w-2 h-2 rounded-full bg-accent-orange/15" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/2 w-px h-16 bg-accent-orange/20" aria-hidden="true" />
        <div className="section-container relative z-10">
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-16" aria-hidden="true">
            <div className="w-12 h-px bg-accent-orange/30" />
            <div className="w-2 h-2 rounded-full bg-accent-orange/50" />
            <div className="w-12 h-px bg-accent-orange/30" />
          </div>
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
