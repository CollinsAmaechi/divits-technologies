import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { services } from '../data/services';
import { siteConfig } from '../config/siteConfig';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

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
            Services
          </motion.span>
          <h2 id="services-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
            What I Build
          </h2>
          <p className="text-body-lg text-text-secondary">
            End-to-end embedded systems development — from bare-metal firmware to cloud-connected IoT products.
            Each service is tailored to your specific requirements.
          </p>
        </ScrollReveal>

        <ScrollReveal distance={30} delay={0.1}>
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <StaggerItem key={service.id} delay={index * 0.05}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="group"
                >
                  <GlassCard
                    variant="elevated"
                    hover={true}
                    padding="lg"
                    border="accent"
                    className="h-full flex flex-col"
                    glow={index % 3 === 0}
                    glowColor={index % 3 === 0 ? 'gold' : index % 3 === 1 ? 'amber' : 'yellow'}
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.bgColor} ${service.borderColor} ${service.iconColor}`}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <service.icon className="w-7 h-7" aria-hidden="true" />
                    </motion.div>

                    <div className="flex-1 flex flex-col">
                      <h3 className="font-heading font-bold text-heading-md text-text-primary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-body text-text-secondary mb-6 flex-1 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6" aria-label={`${service.title} features`}>
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + featureIndex * 0.05 }}
                            className="flex items-center gap-2 text-body-sm text-text-secondary"
                          >
                            <svg className="w-4 h-4 text-accent-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-6" aria-label={`${service.title} technologies`}>
                        {service.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + techIndex * 0.03 }}
                            className="tag tag-primary"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        className="w-full mt-auto"
                        as={Link}
                        to={`/order?service=${service.id}`}
                      >
                        Request This Service
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </div>
                  </GlassCard>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        <ScrollReveal distance={20} delay={0.3} className="mt-16 text-center">
          <p className="text-body-lg text-text-secondary mb-6">
            Don't see exactly what you need? Every project is unique — let's discuss your specific requirements.
          </p>
          <Button
            variant="primary"
            size="lg"
            as={Link}
            to="/order"
          >
            Request a Project
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
