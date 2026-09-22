import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { services } from '../data/services';
import { siteConfig } from '../config/siteConfig';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import { Home, Lightbulb, Fan, Wind, Thermometer, Power, Shield, Wifi, Zap } from 'lucide-react';
import PillarIllustration from '../components/illustrations/PillarIllustrations';

const homeAutomationItems = [
  { icon: Lightbulb, title: 'Lighting Control', desc: 'Automated lighting schedules, dimming, color temperature, and scene presets for Nigerian homes.' },
  { icon: Fan, title: 'Fan Control', desc: 'Automated fan control based on temperature, humidity, or schedule.' },
  { icon: Thermometer, title: 'Climate Management', desc: 'AC and heating automation with temperature sensors, scheduling, and zone control.' },
  { icon: Power, title: 'Power Monitoring', desc: 'Track energy usage per circuit, monitor consumption patterns, and identify waste.' },
  { icon: Shield, title: 'Security & Monitoring', desc: 'Cameras, motion sensors, entry monitoring, and alerts — all controllable from your phone.' },
  { icon: Zap, title: 'Generator/Inverter Integration', desc: 'Automatic generator backup switching, inverter monitoring, and power source management.' },
  { icon: Wifi, title: 'Remote Access', desc: 'Control and monitor your home from anywhere via phone, tablet, or web browser.' },
];

const HomeAutomation = () => {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24 overflow-hidden pillar-home-overlay grid-pattern" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-home/5 via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(224,85,69,0.08),transparent_50%)]" aria-hidden="true" />
        <img src="/images/divits/smart-home.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" aria-hidden="true" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-home/10 via-transparent to-transparent" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal delay={0.1} distance={15}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-homeBg border border-accent-home/20 text-accent-home text-caption font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent-home" aria-hidden="true" />
                  DIVITS Home
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.2} distance={15}>
                <h1 id="hero-title" className="font-heading font-bold text-display-xl text-text-primary mb-3 leading-tight">
                  DIVITS Home
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.25} distance={15}>
                <p className="font-heading font-bold text-heading-lg text-accent-home mb-6 leading-tight">
                  Nigerian homes, reimagined
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3} distance={15}>
                <p className="text-body-lg lg:text-body text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Smart-home automation concepts and future installation services — lighting,
                  fans, AC, sockets, water pumps, power monitoring, generator/inverter integration
                  and more, tailored for Nigerian homes.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4} distance={15}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                  <Button
                    size="lg"
                    variant="primary"
                    rightIcon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                    as={Link}
                    to="/order?pillar=home"
                  >
                    Plan My Smart Home
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
                  {[
                    <div key="concept" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-homeBg border border-accent-home/20">
                      <span className="w-2 h-2 rounded-full bg-accent-home" aria-hidden="true" />
                      <span className="font-heading font-medium text-body-sm text-accent-home">Concept & Prototype</span>
                    </div>,
                    <div key="future" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-elevated/50 border border-border/30">
                      <span className="w-2 h-2 rounded-full bg-accent-amber" aria-hidden="true" />
                      <span className="font-heading font-medium text-body-sm text-text-primary">Future Installations</span>
                    </div>,
                  ].map((el) => el)}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal distance={15}>
              <div className="relative aspect-square max-w-md mx-auto animate-float">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-accent-home/15 to-accent-home/5 border border-accent-home/20 shadow-lg shadow-accent-home/10 flex items-center justify-center backdrop-blur-sm">
                  <PillarIllustration pillarId="home" color="#e05545" size={240} />
                </div>
                <div className="absolute inset-0 rounded-3xl border border-accent-home/10 -z-10" aria-hidden="true" />
                <div className="absolute -inset-4 rounded-3xl border border-accent-home/5 -z-10" aria-hidden="true" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Smart Home Visual */}
      <section id="home-visual" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="home-visual-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <img src="/images/divits/smart-home.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.03]" aria-hidden="true" loading="lazy" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal distance={40} className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-accent-home/20 shadow-lg shadow-accent-home/10">
                <img src="/images/divits/smart-home.jpg" alt="Smart home automation" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-home/20 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-home/20 border border-accent-home/30 text-accent-home text-caption font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-home" aria-hidden="true" />
                    Smart Home Concept
                  </span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal distance={40} delay={0.1}>
              <div>
                <ScrollReveal distance={30} className="text-center lg:text-left mb-8">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-homeBg border border-accent-home/20 text-accent-home text-caption font-medium mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent-home" aria-hidden="true" />
                    Visual Preview
                  </span>
                  <h2 id="home-visual-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
                    Your home, reimagined
                  </h2>
                  <p className="text-body-lg text-text-secondary">
                    Smart-home automation concepts tailored for Nigerian homes — from lighting and climate to generator integration.
                  </p>
                </ScrollReveal>
                <ScrollReveal distance={30} delay={0.2}>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-accent-home/5 border border-accent-home/10">
                    <svg className="w-6 h-6 text-accent-home flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 3v14M16 3v14M2 9h20" /></svg>
                    <div>
                      <p className="font-heading font-semibold text-body text-text-primary">Concept & Prototype</p>
                      <p className="text-body-sm text-text-secondary">Available now</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section id="home-disclaimer" className="relative py-12 lg:py-16 overflow-hidden" aria-labelledby="home-disclaimer-title">
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto">
            <div className="p-6 lg:p-8 rounded-2xl bg-accent-homeBg border border-accent-home/20">
              <h2 id="home-disclaimer-title" className="font-heading font-bold text-heading-lg text-text-primary mb-3">
                A note about what we offer
              </h2>
              <p className="text-body text-text-secondary mb-3">
                DIVITS Home currently offers <strong>smart-home automation concepts, prototypes, and simulations</strong>.
                We design and demonstrate what a Nigerian smart home can look like.
              </p>
              <p className="text-body text-text-secondary">
                Full installation services are planned for the future. We do not currently claim to have
                completed smart-home installations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Offer */}
      <section id="home-services" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="home-services-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-homeBg border border-accent-home/20 text-accent-home text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-home" aria-hidden="true" />
              What We Offer
            </motion.span>
            <h2 id="home-services-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              Smart-home concepts for Nigerian living
            </h2>
            <p className="text-body-lg text-text-secondary">
              From lighting to generator integration — we design automation systems tailored to how Nigerian homes actually work.
            </p>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {homeAutomationItems.map((item, index) => {
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
                        <div className="w-12 h-12 rounded-xl bg-accent-homeBg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-accent-home" aria-hidden="true" />
                        </div>
                        <h3 className="font-heading font-bold text-heading-md text-text-primary mb-2">{item.title}</h3>
                        <p className="text-body text-text-secondary leading-relaxed">{item.desc}</p>
                        <span className="inline-flex items-center gap-1 mt-4 text-caption text-accent-home font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-home" aria-hidden="true" />
                          Concept / Prototype
                        </span>
                      </GlassCard>
                    </motion.article>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </ScrollReveal>

          <ScrollReveal distance={20} delay={0.3} className="mt-16 text-center">
            <p className="text-body-lg text-text-secondary mb-6">
              Want to plan a smart home for yours? Start a project request and we will design the right system for you.
            </p>
            <Button variant="primary" size="lg" as={Link} to="/order?pillar=home">
              Plan My Smart Home
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Status Labels */}
      <section id="home-status" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="home-status-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-homeBg border border-accent-home/20 text-accent-home text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-home" aria-hidden="true" />
              Project Status
            </motion.span>
            <h2 id="home-status-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              What is available now
            </h2>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { status: 'Concept / Prototype', available: 'Now', color: 'home' },
                { status: 'Simulation / Design', available: 'Now', color: 'home' },
                { status: 'Full Installation', available: 'Future', color: 'amber' },
              ].map((item, index) => (
                <StaggerItem key={item.status} delay={index * 0.08}>
                  <div className={`p-6 rounded-2xl border text-center ${item.color === 'home' ? 'bg-accent-homeBg border-accent-home/20' : 'bg-accent-amber/10 border-accent-amber/20'}`}>
                    <h3 className="font-heading font-bold text-heading-md text-text-primary mb-2">{item.status}</h3>
                    <p className={`font-heading font-bold text-caption ${item.color === 'home' ? 'text-accent-home' : 'text-accent-amber'}`}>
                      {item.available}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-home/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        <div className="section-container relative z-10">
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 lg:p-16 rounded-3xl bg-gradient-to-br from-accent-home/10 via-bg-elevated/50 to-bg-card/50 border border-accent-home/20 backdrop-blur-xl"
            >
              <h2 className="font-heading font-bold text-display-md text-text-primary mb-4">
                Plan your smart home?
              </h2>
              <p className="text-body-lg text-text-secondary mb-8">
                Tell us what you want to automate — lighting, climate, security, power — and we will design the right concept for your home.
              </p>
              <Button variant="primary" size="lg" as={Link} to="/order?pillar=home">
                Plan My Smart Home
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default HomeAutomation;
