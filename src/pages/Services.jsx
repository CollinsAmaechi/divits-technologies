import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { servicePillars, services } from '../data/services';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const pillarConfig = {
  amber: {
    bg: 'bg-accent-amber/5',
    border: 'border-accent-amber/20',
    hoverBorder: 'hover:border-accent-amber/50',
    iconBg: 'bg-accent-amber/10',
    iconColor: 'text-accent-amber',
    glowColor: 'amber',
    badgeClass: 'bg-accent-amber/10 border-accent-amber/20 text-accent-amber',
    btnVariant: 'outline',
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
  },
  iot: {
    bg: 'bg-accent-iotBg',
    border: 'border-accent-iot/20',
    hoverBorder: 'hover:border-accent-iot/50',
    iconBg: 'bg-accent-iot/10',
    iconColor: 'text-accent-iot',
    glowColor: 'gold',
    badgeClass: 'bg-accent-iotBg border-accent-iot/20 text-accent-iot',
    btnVariant: 'outline',
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
  },
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
                            <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--tw-accent-gold)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            {service.title}
                          </li>
                        ))}
                      </ul>
                      <Button variant={config.btnVariant} className="w-full mt-auto" as={Link} to={`/order?pillar=${pillar.id.split('-')[1]}`}>
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
              const config = pillarConfig[service.pillar === 'divits-assist' ? 'amber' : service.pillar === 'divits-build' ? 'orange' : service.pillar === 'divits-iot' ? 'iot' : 'home'];
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
                      <div className={`w-10 h-10 rounded-xl ${service.bgColor} ${service.borderColor} ${service.iconColor} flex items-center justify-center mb-4`}>
                        <service.icon className="w-5 h-5" aria-hidden="true" />
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
