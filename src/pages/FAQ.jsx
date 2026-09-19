import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/common/ScrollReveal';
import { faqItems } from '../data/faq';
import GlassCard from '../components/ui/GlassCard';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-20 lg:py-32 overflow-hidden"
      aria-labelledby="faq-title"
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
            Frequently Asked
          </motion.span>
          <h2 id="faq-title" className="font-heading font-bold text-display-md text-text-primary mb-4 gradient-text">
            Questions & Answers
          </h2>
          <p className="text-body-lg text-text-secondary">
            Common questions about my services, process, and capabilities.
          </p>
        </ScrollReveal>

        <ScrollReveal distance={30} delay={0.1}>
          <StaggerContainer staggerDelay={0.08} className="max-w-4xl mx-auto">
            {faqItems.map((faq, index) => (
              <StaggerItem key={faq.id} delay={index * 0.05}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlassCard
                    variant="elevated"
                    padding="none"
                    border={openIndex === index ? 'accent' : true}
                    className="overflow-hidden transition-all duration-300"
                  >
                    <motion.button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 lg:px-8 lg:py-6 flex items-center justify-between gap-4 text-left"
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <span className="font-heading font-semibold text-heading-md text-text-primary pr-12 text-balance">
                        {faq.question}
                      </span>
                      <motion.div
                        className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold"
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                        <ChevronDown className="w-5 h-5" aria-hidden="true" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          id={`faq-answer-${index}`}
                          role="region"
                          aria-labelledby={`faq-question-${index}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 lg:px-8 lg:pb-8 border-t border-border/30">
                            <motion.p
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-body text-text-secondary leading-relaxed"
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </GlassCard>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </ScrollReveal>

        <ScrollReveal distance={20} delay={0.2} className="mt-16 text-center">
          <p className="text-body-lg text-text-secondary mb-6">
            Didn't find your answer? Let's chat about your specific project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-medium text-body-sm text-accent-gold border-2 border-accent-gold hover:bg-accent-gold/10 hover:shadow-glow-gold transition-all duration-300"
          >
            Ask a Question
            <ChevronDown className="w-5 h-5" aria-hidden="true" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQPage;
