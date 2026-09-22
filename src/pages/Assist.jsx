import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { services } from '../data/services';
import { siteConfig } from '../config/siteConfig';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import { Bug, Code, Wrench, GraduationCap, Wifi, HardDrive, Terminal, Search } from 'lucide-react';
import PillarIllustration from '../components/illustrations/PillarIllustrations';

const assistServices = [
  { icon: Code, title: 'Code Debugging', desc: 'Firmware bugs, logic errors, compilation failures. We find and fix what is not working.' },
  { icon: HardDrive, title: 'Arduino/ESP32 Help', desc: 'Boards that will not respond, sensors that will not read, code that will not upload.' },
  { icon: Wrench, title: 'Electronics Troubleshooting', desc: 'Circuit issues, broken connections, power problems. We trace the fault and fix it.' },
  { icon: GraduationCap, title: 'University/Project Assistance', desc: 'Coursework, capstone projects, thesis hardware. We help you understand and build.' },
  { icon: Terminal, title: 'Python/C++/JavaScript Help', desc: 'Script errors, program logic, integration issues. We help you get code running.' },
  { icon: Search, title: 'Technical Explanations', desc: 'Confused about how something works? We explain it clearly, in plain language.' },
];

const Assist = () => {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24 overflow-hidden pillar-blue-overlay grid-pattern" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.08),transparent_50%)]" aria-hidden="true" />
        <img src="/images/divits/Assist.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" aria-hidden="true" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 via-transparent to-transparent" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal delay={0.1} distance={15}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-caption font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent-blue" aria-hidden="true" />
                  DIVITS Assist
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.2} distance={15}>
                <h1 id="hero-title" className="font-heading font-bold text-display-xl text-text-primary mb-3 leading-tight">
                  DIVITS Assist
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.25} distance={15}>
                <p className="font-heading font-bold text-heading-lg text-accent-gold mb-6 leading-tight">
                  We've got you covered
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3} distance={15}>
                <p className="text-body-lg lg:text-body text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Whether it is a bug, a broken circuit, or a project that will not compile —
                  we help you figure out what is going wrong and get things running.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4} distance={15}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                  <Button
                    size="lg"
                    variant="primary"
                    rightIcon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>}
                    as={Link}
                    to="/order?pillar=assist"
                  >
                    Get Help With My Project
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
                  {['Code Debugging', 'ESP32', 'Arduino', 'Troubleshooting', 'University Projects'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-elevated/50 border border-border/30">
                      <span className="w-2 h-2 rounded-full bg-accent-blue" aria-hidden="true" />
                      <span className="font-heading font-medium text-body-sm text-text-primary">{skill}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal distance={15}>
              <div className="relative aspect-square max-w-md mx-auto animate-float">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-accent-blue/15 to-accent-blue/5 border border-accent-blue/20 shadow-lg shadow-accent-blue/10 flex items-center justify-center backdrop-blur-sm">
                  <PillarIllustration pillarId="assist" color="#2563eb" size={240} />
                </div>
                <div className="absolute inset-0 rounded-3xl border border-accent-blue/10 -z-10" aria-hidden="true" />
                <div className="absolute -inset-4 rounded-3xl border border-accent-blue/5 -z-10" aria-hidden="true" />
                {/* Golden accent line and badge at bottom of illustration */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
                  <span className="px-3 py-0.5 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-caption font-heading font-medium">
                    SUPPORT
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visual Split: Coding & Circuit */}
      <section id="assist-visual" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="assist-visual-title">
        <div className="absolute inset-0" aria-hidden="true" />
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <ScrollReveal distance={40} className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-accent-blue/20 shadow-lg shadow-accent-blue/10">
                <img src="/images/divits/Code-asssit.jpg" alt="Code debugging and development" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/20 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-blue/20 border border-accent-blue/30 text-accent-blue text-caption font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" aria-hidden="true" />
                    Code Debugging
                  </span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal distance={40} delay={0.1}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-accent-blue/20 shadow-lg shadow-accent-blue/10">
                <img src="/images/divits/about-circuit.jpg" alt="Electronics troubleshooting" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/20 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-blue/20 border border-accent-blue/30 text-accent-blue text-caption font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" aria-hidden="true" />
                    Electronics Troubleshooting
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Can Help With */}
      <section id="assist-services" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="assist-services-title">
        <div className="absolute inset-0" aria-hidden="true" />
        {/* Decorative accent elements */}
        <div className="absolute top-0 left-1/4 w-px h-20 bg-accent-blue/30" aria-hidden="true" />
        <div className="absolute top-16 right-1/4 w-3 h-3 rounded-full bg-accent-blue/20" aria-hidden="true" />
        <div className="absolute bottom-0 right-1/3 w-px h-16 bg-accent-blue/20" aria-hidden="true" />
        <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-accent-blue/15" aria-hidden="true" />
        <div className="section-container relative z-10">
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-16" aria-hidden="true">
            <div className="w-12 h-px bg-accent-blue/30" />
            <div className="w-2 h-2 rounded-full bg-accent-blue/50" />
            <div className="w-12 h-px bg-accent-blue/30" />
          </div>
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-blue" aria-hidden="true" />
              What We Can Help With
            </motion.span>
            <h2 id="assist-services-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              Technical problems, solved
            </h2>
            <p className="text-body-lg text-text-secondary">
              If it involves code, circuits, or embedded systems, we help you understand and fix it.
            </p>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {assistServices.map((item, index) => {
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
                        <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-accent-blue" aria-hidden="true" />
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
              Something else not listed? Describe your project and we will figure out the right approach.
            </p>
            <Button variant="primary" size="lg" as={Link} to="/order?pillar=assist">
              Get Help With My Project
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* How Assistance Works */}
      <section id="assist-process" className="relative py-20 lg:py-32 overflow-hidden" aria-labelledby="assist-process-title">
        <div className="absolute inset-0" aria-hidden="true" />
        {/* Decorative accent elements */}
        <div className="absolute top-0 right-1/4 w-px h-16 bg-accent-blue/30" aria-hidden="true" />
        <div className="absolute top-16 left-1/3 w-2 h-2 rounded-full bg-accent-blue/20" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/4 w-px h-12 bg-accent-blue/20" aria-hidden="true" />
        <div className="section-container relative z-10">
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-16" aria-hidden="true">
            <div className="w-12 h-px bg-accent-blue/30" />
            <div className="w-2 h-2 rounded-full bg-accent-blue/50" />
            <div className="w-12 h-px bg-accent-blue/30" />
          </div>
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-caption font-medium mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-accent-blue" aria-hidden="true" />
              How It Works
            </motion.span>
            <h2 id="assist-process-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
              Simple, transparent help
            </h2>
          </ScrollReveal>

          <ScrollReveal distance={30} delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { step: '01', title: 'Tell Us', desc: 'Describe the problem, what you are working on, and what is not working.' },
                { step: '02', title: 'We Diagnose', desc: 'We identify the root cause and explain what is going wrong.' },
                { step: '03', title: 'We Fix It', desc: 'We debug, repair, or guide you through the solution.' },
                { step: '04', title: 'You Learn', desc: 'You understand what happened and how to avoid it next time.' },
              ].map((item, index) => (
                <ScrollReveal key={item.step} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue font-heading font-bold text-heading-lg mx-auto mb-4">
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
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        {/* Decorative accent elements */}
        <div className="absolute top-0 left-1/3 w-px h-12 bg-accent-blue/20" aria-hidden="true" />
        <div className="absolute top-16 right-1/4 w-2 h-2 rounded-full bg-accent-blue/15" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/2 w-px h-16 bg-accent-blue/20" aria-hidden="true" />
        <div className="section-container relative z-10">
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-16" aria-hidden="true">
            <div className="w-12 h-px bg-accent-blue/30" />
            <div className="w-2 h-2 rounded-full bg-accent-blue/50" />
            <div className="w-12 h-px bg-accent-blue/30" />
          </div>
          <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 lg:p-16 rounded-3xl bg-gradient-to-br from-accent-blue/10 via-bg-elevated/50 to-bg-card/50 border border-accent-blue/20 backdrop-blur-xl"
            >
              <h2 className="font-heading font-bold text-display-md text-text-primary mb-4">
                Still stuck?
              </h2>
              <p className="text-body-lg text-text-secondary mb-8">
                Tell us what is not working and we will help you get back on track.
              </p>
              <Button variant="primary" size="lg" as={Link} to="/order?pillar=assist">
                Get Help With My Project
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Assist;
