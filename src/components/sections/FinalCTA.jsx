import { motion } from 'framer-motion';
import { ScrollReveal } from '../common/ScrollReveal';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';


import { CheckCircle } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { formatWhatsAppLink } from '../../utils/helpers';

const FinalCTA = () => {
  return (
    <section
      id="final-cta"
      className="relative py-20 lg:py-32 overflow-hidden"
      aria-labelledby="final-cta-title"
    >
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
      </div>

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(201, 168, 76, 0.06)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />

      <div className="section-container relative z-10">
        <ScrollReveal distance={30} className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-8 lg:p-16 rounded-3xl bg-gradient-to-br from-bg-elevated/50 to-bg-card/50 border border-accent-gold/20 backdrop-blur-xl shadow-glass"
          >
            {/* Decorative corner accents */}
            <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-accent-gold/50 rounded-tl-2xl" aria-hidden="true" />
            <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-accent-gold/50 rounded-tr-2xl" aria-hidden="true" />
            <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-accent-gold/50 rounded-bl-2xl" aria-hidden="true" />
            <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-accent-gold/50 rounded-br-2xl" aria-hidden="true" />

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-caption font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" aria-hidden="true" />
              Ready to Build?
            </motion.span>

            <h2 id="final-cta-title" className="font-heading font-bold text-display-md lg:text-display-lg text-text-primary mb-6 gradient-text">
              Have an Electronics Idea?
            </h2>

            <p className="text-body-lg lg:text-body text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's turn your idea into a working system. From prototype to production-ready hardware,
              I'll help you build custom embedded solutions that connect the physical world.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="xl"
                rightIcon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                }
                as={Link}
                to="/order"
              >
                Start Your Project
              </Button>

              <Button
                variant="secondary"
                size="xl"
                onClick={() => window.open(formatWhatsAppLink(siteConfig.contact.whatsapp.number, siteConfig.contact.whatsapp.message), '_blank', 'noopener,noreferrer')}
              >
                Chat on WhatsApp
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </Button>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-center gap-6 text-text-muted"
            >
              <div className="flex items-center gap-2 text-caption">
                <CheckCircle className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center gap-2 text-caption">
                <CheckCircle className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                <span>Transparent pricing & timeline</span>
              </div>
              <div className="flex items-center gap-2 text-caption">
                <CheckCircle className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                <span>30-day post-delivery support</span>
              </div>
              <div className="flex items-center gap-2 text-caption">
                <CheckCircle className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                <span>Full source code ownership</span>
              </div>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTA;