import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Youtube, Instagram, Mail, MessageSquare, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS, SOCIAL_LINKS_CONFIG } from '../../utils/constants';
import { siteConfig } from '../../config/siteConfig';
import { formatWhatsAppLink, formatEmailLink } from '../../utils/helpers';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import Button from '../ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = SOCIAL_LINKS_CONFIG
    .map(social => ({
      ...social,
      url: siteConfig.social[social.key],
    }))
    .filter(social => social.url && social.url !== `https://github.com/[YOUR_GITHUB]`);

  return (
    <footer className="relative bg-bg-secondary border-t border-border/30" role="contentinfo">
      {/* Background glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-amber/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />

      <div className="section-container relative py-20 lg:py-28">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <StaggerContainer staggerDelay={0.1} className="lg:col-span-1">
            <StaggerItem delay={0}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-gold to-accent-amber flex items-center justify-center relative overflow-hidden">
                  <svg className="w-7 h-7 text-bg-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 3v14M16 3v14M2 9h20" />
                    <circle cx="12" cy="10" r="2" />
                  </svg>
                </div>
                <span className="font-heading font-bold text-heading-lg text-text-primary">
                  {siteConfig.business.name}
                </span>
              </motion.div>
            </StaggerItem>

            <StaggerItem delay={0.1}>
              <p className="text-body text-text-secondary mb-6 leading-relaxed">
                {siteConfig.business.description}
              </p>
            </StaggerItem>

            <StaggerItem delay={0.2}>
              <div className="flex items-center gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.key}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="p-2 rounded-xl text-text-muted hover:text-accent-gold hover:bg-accent-gold/10 transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon === 'github' && <Github className="w-5 h-5" aria-hidden="true" />}
                    {social.icon === 'linkedin' && <Linkedin className="w-5 h-5" aria-hidden="true" />}
                    {social.icon === 'twitter' && <Twitter className="w-5 h-5" aria-hidden="true" />}
                    {social.icon === 'youtube' && <Youtube className="w-5 h-5" aria-hidden="true" />}
                    {social.icon === 'instagram' && <Instagram className="w-5 h-5" aria-hidden="true" />}
                  </motion.a>
                ))}
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Services Column */}
          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem>
              <h3 className="font-heading font-semibold text-heading-md text-text-primary mb-4">Services</h3>
              <nav aria-label="Services">
                <ul className="space-y-3">
                  {FOOTER_LINKS.services.map((link, index) => (
                    <StaggerItem key={link.label} delay={index * 0.05}>
                      <li>
                        <Link
                          to={link.href}
                          className="text-body-sm text-text-secondary hover:text-accent-gold transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </nav>
            </StaggerItem>
          </StaggerContainer>

          {/* Company Column */}
          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem>
              <h3 className="font-heading font-semibold text-heading-md text-text-primary mb-4">Company</h3>
              <nav aria-label="Company">
                <ul className="space-y-3">
                  {FOOTER_LINKS.company.map((link, index) => (
                    <StaggerItem key={link.label} delay={index * 0.05}>
                      <li>
                        <Link
                          to={link.href}
                          className="text-body-sm text-text-secondary hover:text-accent-gold transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </nav>
            </StaggerItem>
          </StaggerContainer>

          {/* Resources Column */}
          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem>
              <h3 className="font-heading font-semibold text-heading-md text-text-primary mb-4">Resources</h3>
              <nav aria-label="Resources">
                <ul className="space-y-3">
                  {FOOTER_LINKS.resources.map((link, index) => (
                    <StaggerItem key={link.label} delay={index * 0.05}>
                      <li>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-body-sm transition-colors ${
                              link.comingSoon
                                ? 'text-text-muted cursor-default'
                                : 'text-text-secondary hover:text-accent-gold'
                            }`}
                            aria-disabled={link.comingSoon}
                          >
                            {link.label}
                            {link.comingSoon && <span className="ml-2 text-caption text-text-muted">(Soon)</span>}
                          </a>
                        ) : (
                          <Link
                            to={link.href}
                            className={`text-body-sm transition-colors ${
                              link.comingSoon
                                ? 'text-text-muted cursor-default'
                                : 'text-text-secondary hover:text-accent-gold'
                            }`}
                            aria-disabled={link.comingSoon}
                          >
                            {link.label}
                            {link.comingSoon && <span className="ml-2 text-caption text-text-muted">(Soon)</span>}
                          </Link>
                        )}
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </nav>
            </StaggerItem>
          </StaggerContainer>

          {/* Contact Column */}
          <StaggerContainer staggerDelay={0.1}>
            <StaggerItem>
              <h3 className="font-heading font-semibold text-heading-md text-text-primary mb-4">Contact</h3>
              <address className="not-italic space-y-4">
                <a
                  href={formatEmailLink(siteConfig.contact.email)}
                  className="flex items-center gap-3 text-body-sm text-text-secondary hover:text-accent-gold transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-gold/20 transition-colors">
                    <Mail className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                  </div>
                  <span>{siteConfig.contact.email}</span>
                </a>

                <a
                  href={formatWhatsAppLink(siteConfig.contact.whatsapp.number, siteConfig.contact.whatsapp.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-body-sm text-text-secondary hover:text-accent-gold transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-gold/20 transition-colors">
                    <MessageSquare className="w-4 h-4 text-accent-gold" aria-hidden="true" />
                  </div>
                  <span>{siteConfig.contact.whatsapp.displayNumber}</span>
                </a>

                <div className="flex items-center gap-3 text-body-sm text-text-muted">
                  <div className="w-8 h-8 rounded-lg bg-bg-card flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span>{siteConfig.business.location.city}, {siteConfig.business.location.country}</span>
                </div>

                <div className="flex items-center gap-3 text-body-sm text-text-muted">
                  <div className="w-8 h-8 rounded-lg bg-bg-card flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span>{siteConfig.contact.businessHours}</span>
                </div>

                <div className="flex items-center gap-3 text-body-sm text-text-muted">
                  <div className="w-8 h-8 rounded-lg bg-bg-card flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <span>{siteConfig.business.location.timezone}</span>
                </div>
              </address>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-body-sm text-text-muted text-center md:text-left">
              © {currentYear} {siteConfig.business.name}. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-caption text-text-muted">
              {FOOTER_LINKS.legal.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`transition-colors ${link.comingSoon ? 'cursor-default' : 'hover:text-accent-gold'}`}
                  aria-disabled={link.comingSoon}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hidden md:inline-flex"
            >
              Back to top
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;