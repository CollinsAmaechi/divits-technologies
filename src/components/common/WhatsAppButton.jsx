import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { formatWhatsAppLink } from '../../utils/helpers';
import { siteConfig } from '../../config/siteConfig';

const WhatsAppButton = ({
  className = '',
  showTooltip = true,
  position = 'bottom-right',
  customMessage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const whatsappUrl = formatWhatsAppLink(
    siteConfig.contact.whatsapp.number,
    customMessage || siteConfig.contact.whatsapp.message
  );

  const positions = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6',
  };

  const tooltipPositions = {
    'bottom-right': 'right-0 bottom-full mb-4',
    'bottom-left': 'left-0 bottom-full mb-4',
    'top-right': 'right-0 top-full mt-4',
    'top-left': 'left-0 top-full mt-4',
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(siteConfig.contact.whatsapp.displayNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`fixed z-50 ${positions[position]} ${className}`}>
      {showTooltip && isOpen && (
        <div
          className={`
            absolute ${tooltipPositions[position]}
            w-72 bg-bg-elevated border border-border/50 rounded-2xl p-4 shadow-glass
            backdrop-blur-xl
          `}
          role="tooltip"
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-accent-gold" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-heading font-medium text-body-sm text-text-primary">
                Chat on WhatsApp
              </p>
              <p className="text-caption text-text-secondary mt-1">
                Usually replies within {siteConfig.contact.responseTime.toLowerCase()}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={handleCopyNumber}
                  className="btn-ghost text-caption px-3 py-1.5 flex items-center gap-1.5"
                  aria-label="Copy WhatsApp number"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <span className="font-mono text-body-sm">{siteConfig.contact.whatsapp.displayNumber}</span>
                      <span className="text-text-muted">Click to copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-text-muted hover:text-text-primary hover:bg-bg-card transition-colors"
              aria-label="Close tooltip"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => { e.preventDefault(); window.open(whatsappUrl, '_blank', 'noopener,noreferrer'); }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`
          relative flex items-center gap-2 px-5 py-3.5 rounded-xl font-heading font-medium text-body-sm text-white bg-accent-gold
          hover:bg-accent-amber hover:scale-105 active:scale-100
          transition-all duration-200 ease-expo
        `}
        aria-label="Open WhatsApp chat"
      >
        <MessageSquare className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
