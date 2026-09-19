import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, SOCIAL_LINKS_CONFIG } from '../../utils/constants';
import { siteConfig } from '../../config/siteConfig';
import Button from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const [headerRef, isVisible] = useScrollReveal({ triggerOnce: true });

  return (
    <header
      ref={headerRef}
      className={`
        fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-expo
        ${isScrolled
          ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-border/50 shadow-glass'
          : 'bg-transparent'
        }
      `}
      role="banner"
    >
      <nav className="section-container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-gold to-accent-amber flex items-center justify-center">
              <svg
                className="w-6 h-6 text-bg-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 3v14M16 3v14M2 9h20" />
                <circle cx="12" cy="10" r="2" />
              </svg>
            </div>
            <span className="font-heading font-bold text-text-primary text-sm sm:text-heading-lg truncate">
              {siteConfig.business.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                to={link.href}
                className={`
                  px-4 py-2.5 rounded-xl text-body-sm font-medium text-text-secondary
                  hover:text-accent-gold hover:bg-accent-gold/10
                  transition-all duration-200 ease-expo
                  relative overflow-hidden
                `}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-gold"
                  style={{ transform: 'scaleX(0)', transformOrigin: 'left' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scaleX(1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scaleX(0)'}
                />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" as={Link} to="/contact">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden overflow-hidden border-t border-border/30 bg-bg-primary/95 backdrop-blur-xl"
          >
            <div className="py-6 space-y-2">
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="w-full px-4 py-3.5 rounded-xl text-left text-body font-medium text-text-secondary hover:text-accent-gold hover:bg-accent-gold/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/30 flex flex-col gap-3">
                <Button variant="secondary" className="w-full" as={Link} to="/contact">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
