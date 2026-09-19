import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { whyChooseMe, differentiators } from '../../data/whyChooseMe';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';
import { Link } from 'react-router-dom';



const whyIcons = {
  puzzle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M18 2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" />
      <path d="M2 18h4a2 2 0 0 0 2 2v4a2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2v-4a2 2 0 0 0 2-2z" />
      <path d="M2 2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path d="M18 18h4a2 2 0 0 0 2 2v4a2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2v-4a2 2 0 0 0 2-2z" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M14.7 16.2 19 11.9a2 2 0 0 0-.6-2.2L5 2l-4 4 10 10a2 2 0 0 0 2.2-.6z" />
      <path d="M16 12h6a2 2 0 0 1 2 2v6" />
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M12 20a10 10 0 1 1 0-20" />
      <path d="M12 2a1 1 0 0 1 1 1v4" />
      <path d="M12 19v4a1 1 0 0 1-1 1" />
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6M9 12h6M9 15h6" />
    </svg>
  ),
  'message-square': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  'check-circle': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
};

const WhyChooseMe = () => {
  return (
    <section
      id="why-choose-me"
      className="relative py-20 lg:py-32 overflow-hidden"
      aria-labelledby="why-choose-me-title"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
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
          <h2 id="why-choose-me-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
            The Difference
          </h2>
          <p className="text-body-lg text-text-secondary">
            Not just code — complete embedded systems solutions delivered with engineering rigor and clear communication.
          </p>
        </ScrollReveal>

        {/* Why Choose Me Cards */}
        <ScrollReveal distance={30} delay={0.1}>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {whyChooseMe.map((item, index) => (
              <StaggerItem key={item.id} delay={index * 0.08}>
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
                    className="h-full"
                    glow={index % 3 === 0}
                    glowColor={item.iconColor.replace('text-', '').replace('-', '')}
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bgColor} ${item.iconColor}`}>
                        {whyIcons[item.icon]}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag tag-primary">{item.highlight}</span>
                    </div>

                    <h3 className="font-heading font-bold text-heading-md text-text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-body text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </GlassCard>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        {/* Differentiators */}
        <ScrollReveal distance={30} delay={0.2}>
          <h3 className="font-heading font-semibold text-heading-lg text-text-primary text-center mb-10">
            What Sets Me Apart
          </h3>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentiators.map((diff, index) => (
              <StaggerItem key={diff.title} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-bg-elevated/50 border border-border/30 hover:border-accent-gold/30 transition-colors"
                >
                  <h4 className="font-heading font-semibold text-heading-md text-text-primary mb-2">
                    {diff.title}
                  </h4>
                  <p className="text-body text-text-secondary">{diff.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal distance={20} delay={0.3} className="mt-16 text-center">
          <Button
            variant="primary"
            size="lg"
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
    </section>
  );
};

export default WhyChooseMe;