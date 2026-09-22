import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { skillCategories } from '../data/skills';
import PillarIllustration from '../components/illustrations/PillarIllustrations';
import { siteConfig } from '../config/siteConfig';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Cpu, Code, Wifi, HardDrive, Settings, Zap, Layers, Award, Target, Thermometer, Monitor, Terminal, Shield, Globe, Radio, Battery, Sliders, Search, Bug, Package, FileText, RotateCw } from 'lucide-react';

const skillIcons = {
  cpu: Cpu,
  wifi: Wifi,
  sensor: Thermometer,
  code: Code,
  'hard-drive': HardDrive,
  settings: Settings,
  zap: Zap,
  layers: Layers,
  terminal: Terminal,
  shield: Shield,
  globe: Wifi,
  radio: Radio,
  home: Layers,
  battery: Battery,
  monitor: Monitor,
  rotate: Settings,
  layout: Layers,
  'git-branch': Code,
  'refresh-cw': Settings,
  'check-circle': Award,
  search: Search,
  bug: Bug,
  package: Package,
  'file-text': FileText,
  sliders: Sliders,
};

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="absolute inset-0 radial-glow" aria-hidden="true" />
      <div className="section-container relative z-10">

        {/* Hero Section: VISUAL|TEXT composition with About.jpg */}
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
          <h2 id="about-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
            Embedded Systems Developer
          </h2>
        </ScrollReveal>

        {/* About.jpg as a prominent visual section element */}
        <ScrollReveal distance={40} className="flex justify-center mb-12">
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-accent-gold/20 shadow-lg shadow-accent-gold/10">
              <img
                src="/images/divits/About.jpg"
                alt="About DIVITS Technologies"
                className="w-full object-cover aspect-[16/10]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-gold/10 via-transparent to-transparent" aria-hidden="true" />
            </div>
            <div className="absolute inset-0 rounded-3xl border border-accent-gold/30 pointer-events-none" aria-hidden="true" />
          </div>
        </ScrollReveal>

        <p className="text-body-lg text-text-secondary text-center max-w-2xl mx-auto mb-16">
          {siteConfig.developer.bio}
        </p>

        {/* About Illustration with float animation */}
        <ScrollReveal distance={30} className="flex justify-center mb-16">
          <motion.div
            className="w-64 h-64 opacity-90 animate-float"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <PillarIllustration pillarId="about" color="#c9a84c" />
          </motion.div>
        </ScrollReveal>

        {/* What I Do Section - scroll-reveal animation */}
        <ScrollReveal distance={30} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-accent-gold" aria-hidden="true" />
              <h3 className="font-heading font-semibold text-heading-lg text-text-primary">
                What I Do
              </h3>
              <div className="w-10 h-[2px] bg-accent-gold" aria-hidden="true" />
            </div>
            <div className="prose prose-invert max-w-none text-text-secondary space-y-4">
              <p>
                I help people solve technology and project problems. Whether it is a bug, a broken circuit,
                a university project, or a complete IoT system — I work with you to get things running.
              </p>
              <p>
                My approach combines practical engineering with clean software practices. Every project
                receives the same attention to detail — proper power management, robust communication
                protocols, thorough documentation, and code that is maintainable long after delivery.
              </p>
              <p>
                From a single line of code that will not compile to a multi-node sensor network,
                I deliver solutions that work reliably in the real world.
              </p>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Main Grid: TEXT|VISUAL and VISUAL|TEXT alternation */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column: Skills + Experience (TEXT dominant) */}
          <div className="space-y-8">

            {/* Technical Skills with stagger scroll-reveal */}
            <ScrollReveal distance={30} delay={0.1}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-heading font-semibold text-heading-lg text-text-primary mb-6 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-accent-gold" aria-hidden="true" />
                  Technical Skills
                </h3>
                <div className="space-y-8">
                  {skillCategories.map((category, catIndex) => (
                    <StaggerContainer key={category.category} staggerDelay={0.05} delay={0.1}>
                      <h4 className="font-heading font-medium text-heading-sm text-text-secondary mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-accent-gold/10 flex items-center justify-center border border-accent-gold/20">
                          <Cpu className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                        </span>
                        {category.category}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, index) => (
                          <StaggerItem key={skill.name} delay={index * 0.03}>
                            <motion.button
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              className="group relative px-4 py-2.5 rounded-xl bg-bg-elevated/50 border border-accent-gold/20 backdrop-blur-xl hover:border-accent-gold/50 hover:bg-accent-gold/5 hover:shadow-md hover:shadow-accent-gold/10 transition-all duration-300"
                            >
                              <span className="font-medium text-body-sm text-text-primary group-hover:text-accent-gold transition-colors">{skill.name}</span>
                              <motion.div
                                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent-gold to-accent-amber rounded-full"
                                initial={{ scaleX: 0 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                              />
                            </motion.button>
                          </StaggerItem>
                        ))}
                      </div>
                    </StaggerContainer>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Honest Experience Section with scroll-reveal */}
            <ScrollReveal distance={30} delay={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="p-6 rounded-2xl bg-accent-gold/5 border border-accent-gold/20">
                  <h4 className="font-heading font-semibold text-heading-md text-text-primary mb-1 flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent-gold" aria-hidden="true" />
                    Experience & Availability
                  </h4>
                  <div className="w-12 h-[2px] bg-gradient-to-r from-accent-gold to-accent-amber my-4 rounded-full" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-xl bg-bg-elevated/50 border border-accent-gold/10 hover:border-accent-gold/30 transition-colors">
                      <div className="font-heading font-bold text-heading-md text-text-primary">3</div>
                      <div className="text-body-sm text-text-secondary">Concept / Demo Projects Built</div>
                    </div>
                    <div className="p-4 rounded-xl bg-bg-elevated/50 border border-accent-gold/10 hover:border-accent-gold/30 transition-colors">
                      <div className="font-heading font-bold text-heading-md text-text-primary">9</div>
                      <div className="text-body-sm text-text-secondary">Common Questions Answered</div>
                    </div>
                    <div className="p-4 rounded-xl bg-bg-elevated/50 border border-accent-gold/10 hover:border-accent-gold/30 transition-colors">
                      <div className="font-heading font-bold text-heading-md text-accent-gold">00</div>
                      <div className="text-body-sm font-medium text-accent-gold">Nigerian Smart Homes Automated</div>
                      <div className="text-body-sm text-text-muted">Be the first.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-bg-elevated/50 border border-accent-gold/10 hover:border-accent-gold/30 transition-colors">
                      <div className="font-heading font-bold text-heading-md text-text-primary">4</div>
                      <div className="text-body-sm text-text-secondary">Service Pillars</div>
                    </div>
                  </div>
                  <p className="text-body-sm text-text-muted mt-4">
                    All statistics reflect existing project data and concept work. We do not claim numbers that are not supported by our actual project portfolio.
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right Column: Stats + Features (VISUAL dominant) */}
          <div className="space-y-8">

            {/* Experience Stats with scroll-reveal animation */}
            <ScrollReveal distance={30} delay={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-heading font-semibold text-heading-lg text-text-primary mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent-gold" aria-hidden="true" />
                  At a Glance
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '3', label: 'Concept / Demo Projects', icon: Award },
                    { value: '24', label: 'Skills Tracked', icon: Code },
                    { value: '9', label: 'FAQ Items', icon: Wifi },
                    { value: '4', label: 'Service Pillars', icon: Target },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="p-6 rounded-2xl bg-bg-elevated/50 border border-accent-gold/20 backdrop-blur-xl text-center hover:border-accent-gold/40 hover:shadow-md hover:shadow-accent-gold/5 transition-all duration-300"
                    >
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center mx-auto mb-4 border border-accent-gold/10"
                      >
                        <stat.icon className="w-6 h-6 text-accent-gold" aria-hidden="true" />
                      </motion.div>
                      <div className="font-heading font-bold text-display-sm text-text-primary gradient-text-gold">
                        {stat.value}
                      </div>
                      <div className="text-body-sm text-text-secondary mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Feature Cards with scroll-reveal */}
            <ScrollReveal distance={30} delay={0.2}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                {[
                  {
                    icon: Award,
                    color: 'text-accent-gold',
                    bg: 'bg-accent-gold/10',
                    border: 'border-accent-gold/20',
                    title: 'Clean Code Standards',
                    desc: 'Consistent formatting, comprehensive comments, modular architecture, and full version control history.',
                  },
                  {
                    icon: Target,
                    color: 'text-accent-amber',
                    bg: 'bg-accent-amber/10',
                    border: 'border-accent-amber/20',
                    title: 'Practical Engineering',
                    desc: 'Designs that work in production — proper derating, thermal management, EMI considerations, and fail-safes.',
                  },
                  {
                    icon: Code,
                    color: 'text-accent-amber',
                    bg: 'bg-accent-amber/10',
                    border: 'border-accent-amber/20',
                    title: 'Full-Stack Embedded',
                    desc: 'From schematic capture and PCB layout to firmware, cloud integration, and dashboard development.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`flex items-start gap-4 p-5 rounded-2xl bg-bg-elevated/30 border ${item.border} hover:border-accent-gold/40 hover:bg-accent-gold/5 transition-all duration-300`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.bg} border border-accent-gold/10`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-heading-sm text-text-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-body-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>

            {/* CTA Button with scroll-reveal */}
            <ScrollReveal distance={20} delay={0.3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto border border-accent-gold/30 hover:border-accent-gold/50 hover:shadow-lg hover:shadow-accent-gold/10"
                  as={Link}
                  to="/order"
                >
                  Let's Work Together
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
