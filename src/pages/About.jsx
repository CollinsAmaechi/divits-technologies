import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { skillCategories } from '../data/skills';
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
            About Me
          </motion.span>
          <h2 id="about-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
            Embedded Systems Developer
          </h2>
          <p className="text-body-lg text-text-secondary">
            {siteConfig.developer.bio}
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <ScrollReveal distance={30} delay={0.1}>
              <div className="space-y-6">
                <h3 className="font-heading font-semibold text-heading-lg text-text-primary">
                  What I Do
                </h3>
                <div className="prose prose-invert max-w-none text-text-secondary">
                  <p className="mb-4">
                    I specialize in building custom embedded systems and IoT solutions using ESP32, Arduino,
                    and modern electronics. From concept to production-ready prototype, I handle the complete
                    development cycle: hardware design, firmware development, cloud integration, and testing.
                  </p>
                  <p className="mb-4">
                    My approach combines practical engineering with clean software practices. Every project
                    receives the same attention to detail — proper power management, robust communication
                    protocols, thorough documentation, and code that's maintainable long after delivery.
                  </p>
                  <p>
                    Whether you need a simple sensor node, a complex mesh network, or a custom PCB with
                    firmware, I deliver solutions that work reliably in the real world.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal distance={30} delay={0.2}>
              <h3 className="font-heading font-semibold text-heading-lg text-text-primary mb-6">
                Technical Skills
              </h3>
              <div className="space-y-8">
                {skillCategories.map((category, catIndex) => (
                  <StaggerContainer key={category.category} staggerDelay={0.05} delay={0.1}>
                    <h4 className="font-heading font-medium text-heading-sm text-text-secondary mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-xl bg-accent-gold/10 flex items-center justify-center">
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
                            className="group relative px-4 py-2.5 rounded-xl bg-bg-elevated/50 border border-border/30 backdrop-blur-xl hover:border-accent-gold/50 hover:bg-accent-gold/5 transition-all duration-300"
                          >
                            <span className="font-medium text-body-sm text-text-primary">{skill.name}</span>
                            <motion.div
                              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent-gold to-accent-amber"
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
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            <ScrollReveal distance={30} delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '15+', label: 'Projects Delivered', icon: Award },
                  { value: '25+', label: 'Technologies', icon: Code },
                  { value: '5+', label: 'IoT Protocols', icon: Wifi },
                  { value: '100%', label: 'Client Satisfaction', icon: Target },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="p-6 rounded-2xl bg-bg-elevated/50 border border-border/30 backdrop-blur-xl text-center hover:border-accent-gold/30 transition-colors"
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center mx-auto mb-4"
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
            </ScrollReveal>

            <ScrollReveal distance={30} delay={0.2}>
              <div className="space-y-4">
                {[
                  {
                    icon: Award,
                    color: 'text-accent-gold',
                    bg: 'bg-accent-gold/10',
                    title: 'Clean Code Standards',
                    desc: 'Consistent formatting, comprehensive comments, modular architecture, and full version control history.',
                  },
                  {
                    icon: Target,
                    color: 'text-accent-amber',
                    bg: 'bg-accent-amber/10',
                    title: 'Practical Engineering',
                    desc: 'Designs that work in production — proper derating, thermal management, EMI considerations, and fail-safes.',
                  },
                  {
                    icon: Code,
                    color: 'text-accent-yellow',
                    bg: 'bg-accent-yellow/10',
                    title: 'Full-Stack Embedded',
                    desc: 'From schematic capture and PCB layout to firmware, cloud integration, and dashboard development.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-bg-elevated/30 border border-border/30 hover:border-border/50 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.bg} ${item.color}`}>
                      <item.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-heading-sm text-text-primary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-body-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal distance={20} delay={0.3}>
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                as={Link}
                to="/order"
              >
                Let's Work Together
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
