import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { processSteps, processHighlights } from '../../data/process';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';



const stepIcons = {
  'message-square': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  'layout': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  ),
  'code': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  'package': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
};

const Process = () => {
  return (
    <section
      id="process"
      className="relative py-20 lg:py-32 overflow-hidden"
      aria-labelledby="process-title"
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
            How I Work
          </motion.span>
          <h2 id="process-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
            Simple, Transparent Process
          </h2>
          <p className="text-body-lg text-text-secondary">
            From initial conversation to delivered project — clear steps, regular updates, no surprises.
          </p>
        </ScrollReveal>

        {/* Process Steps */}
        <ScrollReveal distance={30} delay={0.1}>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-gold/30 via-accent-gold/10 to-accent-gold/30 -translate-x-1/2" aria-hidden="true" />

            <StaggerContainer staggerDelay={0.15} className="space-y-8 lg:space-y-16">
              {processSteps.map((step, index) => (
                <StaggerItem key={step.id} delay={index * 0.1}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    className="relative lg:relative"
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                      {/* Step Number & Icon */}
                      <div className="flex flex-col items-center lg:items-center lg:w-24 lg:flex-shrink-0 relative z-10">
                        <motion.div
                          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-gold to-accent-amber flex items-center justify-center text-bg-primary font-heading font-bold text-heading-lg mb-4"
                         
                          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                          {step.number}
                        </motion.div>

                        {/* Vertical dots for mobile */}
                        <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-accent-gold/30 to-transparent mx-auto" aria-hidden="true" />
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 text-center lg:text-left">
                        <GlassCard variant="elevated" hover={true} padding="lg" border="accent" className="w-full">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold ${index % 2 === 0 ? 'mr-auto' : 'ml-auto lg:mr-0'}`}>
                              {stepIcons[step.icon]}
                            </div>
                            <div>
                              <span className="tag tag-primary">{step.shortTitle}</span>
                            </div>
                          </div>

                          <h3 className="font-heading font-bold text-heading-lg text-text-primary mb-3">
                            {step.title}
                          </h3>
                          <p className="text-body text-text-secondary mb-5">
                            {step.description}
                          </p>

                          {/* Details */}
                          <div className="grid sm:grid-cols-2 gap-4 mb-5">
                            <div>
                              <h4 className="font-heading font-medium text-body-sm text-text-secondary mb-2">What I Do</h4>
                              <ul className="space-y-1.5" role="list">
                                {step.details.map((detail, detailIndex) => (
                                  <motion.li
                                    key={detail}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + detailIndex * 0.05 }}
                                    className="flex items-center gap-2 text-body-sm text-text-secondary"
                                  >
                                    <svg className="w-3.5 h-3.5 text-accent-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                      <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                    {detail}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-heading font-medium text-body-sm text-text-secondary mb-2">Deliverables</h4>
                              <ul className="space-y-1.5" role="list">
                                {step.deliverables.map((deliverable, deliverableIndex) => (
                                  <motion.li
                                    key={deliverable}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + deliverableIndex * 0.05 }}
                                    className="flex items-center gap-2 text-body-sm text-accent-gold"
                                  >
                                    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                      <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                    {deliverable}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </GlassCard>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>

        {/* Highlights */}
        <ScrollReveal distance={30} delay={0.3} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {processHighlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-bg-elevated/50 border border-border/30"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <span className="text-body-sm text-text-secondary">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal distance={20} delay={0.4} className="mt-16 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Process;