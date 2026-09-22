import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { servicePillars, services } from '../data/services';
import { siteConfig } from '../config/siteConfig';
import PillarIllustration from '../components/illustrations/PillarIllustrations';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const pillarConfig = {
  blue: {
    bg: 'bg-accent-blue/5',
    border: 'border-accent-blue/20',
    hoverBorder: 'hover:border-accent-blue/50',
    iconBg: 'bg-accent-blue/10',
    iconColor: 'text-accent-blue',
    glowColor: 'blue',
    badgeClass: 'bg-accent-blue/10 border-accent-blue/20 text-accent-blue',
    btnVariant: 'outline',
    hex: '#2563eb',
  },
  orange: {
    bg: 'bg-accent-orange/5',
    border: 'border-accent-orange/20',
    hoverBorder: 'hover:border-accent-orange/50',
    iconBg: 'bg-accent-orange/10',
    iconColor: 'text-accent-orange',
    glowColor: 'yellow',
    badgeClass: 'bg-accent-orange/10 border-accent-orange/20 text-accent-orange',
    btnVariant: 'outline',
    hex: '#d4903e',
  },
  home: {
    bg: 'bg-accent-homeBg',
    border: 'border-accent-home/20',
    hoverBorder: 'hover:border-accent-home/50',
    iconBg: 'bg-accent-home/10',
    iconColor: 'text-accent-home',
    glowColor: 'amber',
    badgeClass: 'bg-accent-homeBg border-accent-home/20 text-accent-home',
    btnVariant: 'outline',
    hex: '#e05545',
  },
  iot: {
    bg: 'bg-accent-iotBg',
    border: 'border-accent-iot/20',
    hoverBorder: 'hover:border-accent-iot/50',
    iconBg: 'bg-accent-iot/10',
    iconColor: 'text-accent-iot',
    glowColor: 'iot',
    badgeClass: 'bg-accent-iotBg border-accent-iot/20 text-accent-iot',
    btnVariant: 'outline',
    hex: '#2d8f6f',
  },
  gold: {
    bg: 'bg-accent-gold/5',
    border: 'border-accent-gold/20',
    hoverBorder: 'hover:border-accent-gold/50',
    iconBg: 'bg-accent-gold/10',
    iconColor: 'text-accent-gold',
    glowColor: 'gold',
    badgeClass: 'bg-accent-gold/10 border-accent-gold/20 text-accent-gold',
    btnVariant: 'outline',
    hex: '#c9a84c',
  },
};

const pillarLabel = (pillarId) => {
  const pillar = Object.values(siteConfig.pillars).find((p) => p.id === pillarId);
  return pillar ? pillar.name : pillarId;
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 lg:py-32 overflow-hidden"
      aria-labelledby="services-title"
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
            DIVITS Services
          </motion.span>
          <h2 id="services-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
            Four pillars to help you
          </h2>
          <p className="text-body-lg text-text-secondary">
            From debugging a single line of code to building a complete IoT system —
            we cover the full stack of embedded systems and technology services.
          </p>
        </ScrollReveal>

        <ScrollReveal distance={30} delay={0.1}>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {servicePillars.map((pillar, index) => {
              const config = pillarConfig[pillar.color];
              const pillarServices = services.filter((s) => s.pillar === pillar.id);
              return (
                <StaggerItem key={pillar.id} delay={index * 0.08}>
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="group"
                  >
                    <GlassCard
                      variant="elevated"
                      hover
                      padding="xl"
                      border="accent"
                      className={`h-full flex flex-col ${config.hoverBorder}`}
                    >
                      <div className="relative h-32 flex items-center justify-center mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        <PillarIllustration
                          pillarId={pillar.id === 'divits-assist' ? 'assist' : pillar.id === 'divits-build' ? 'build' : pillar.id === 'divits-iot' ? 'iot' : 'home'}
                          color={config.hex}
                          size={120}
                        />
                      </div>
                      <div className={`w-14 h-14 rounded-2xl ${config.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                        <span className={`font-heading font-bold ${config.iconColor} text-display-sm`}>
                          {index + 1}
                        </span>
                      </div>
                      <h3 className={`font-heading font-bold text-heading-lg ${config.iconColor} mb-3`}>
                        {pillar.name}
                      </h3>
                      <p className="text-body text-text-secondary mb-6 leading-relaxed flex-1">
                        {pillar.description}
                      </p>
                      <ul className="space-y-2 mb-6" aria-label={`${pillar.name} services`}>
                        {pillarServices.map((service) => (
                          <li key={service.id} className="flex items-center gap-2 text-body-sm text-text-secondary">
                            <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            {service.title}
                          </li>
                        ))}
                      </ul>
                      <Button variant={config.btnVariant} className="w-full mt-auto" as={Link} to={`/${pillar.id === 'divits-assist' ? 'assist' : pillar.id === 'divits-build' ? 'build' : pillar.id === 'divits-iot' ? 'iot' : 'home-automation'}`}>
                        Browse {pillar.name}
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Button>
                    </GlassCard>
                  </motion.article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </ScrollReveal>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 my-16" aria-hidden="true">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-accent-gold" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-accent-orange/30 to-transparent" />
        </div>

        <ScrollReveal distance={20} delay={0.3} className="mt-16 text-center">
          <p className="text-body-lg text-text-secondary mb-6">
            Looking for a specific service? Browse the full list below.
          </p>
          <Button variant="primary" size="lg" as={Link} to="/order">
            Request a Project
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Button>
        </ScrollReveal>

        {/* Individual Services Grid */}
        <ScrollReveal distance={30} delay={0.1} className="mt-20">
          <h3 className="font-heading font-bold text-display-sm text-text-primary mb-8 text-center">
            All Services
          </h3>
          <StaggerContainer staggerDelay={0.05} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const config = pillarConfig[service.pillar === 'divits-assist' ? 'blue' : service.pillar === 'divits-build' ? 'orange' : service.pillar === 'divits-iot' ? 'iot' : 'home'];
              return (
                <StaggerItem key={service.id} delay={index * 0.03}>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="group"
                  >
                    <GlassCard
                      variant="elevated"
                      hover
                      padding="lg"
                      border="accent"
                      className={`h-full flex flex-col ${config.hoverBorder}`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-xl ${service.bgColor} ${service.borderColor} ${service.iconColor} flex items-center justify-center`}>
                          <service.icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: config.hex }}
                            aria-hidden="true"
                          />
                          <span className={`text-caption font-medium ${config.iconColor}`}>
                            {pillarLabel(service.pillar)}
                          </span>
                        </div>
                      </div>
                      <h4 className="font-heading font-bold text-heading-md text-text-primary mb-2">
                        {service.title}
                      </h4>
                      <p className="text-body text-text-secondary mb-4 text-sm leading-relaxed flex-1">
                        {service.description.slice(0, 100)}...
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4" aria-label={`${service.title} technologies`}>
                        {service.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="tag text-caption">{tech}</span>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full mt-auto" as={Link} to={`/order?service=${service.id}`}>
                        Request This Service
                      </Button>
                    </GlassCard>
                  </motion.article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
