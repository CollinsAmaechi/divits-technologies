import { forwardRef } from 'react';

const GlassCard = forwardRef(({
  children,
  className = '',
  variant = 'default',
  hover = true,
  padding = 'lg',
  border = true,
  glow = false,
  glowColor = 'gold',
  ...props
}, ref) => {
  const variants = {
    default: 'bg-bg-card/50 backdrop-blur-xl',
    elevated: 'bg-bg-elevated/60 backdrop-blur-xl',
    glass: 'bg-white/5 backdrop-blur-xl',
    dark: 'bg-bg-secondary/80 backdrop-blur-xl',
    transparent: 'bg-transparent',
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const borders = {
    true: 'border',
    false: '',
    subtle: 'border border-border/30',
    accent: 'border border-accent-gold/20',
    'accent-blue': 'border border-accent-blue/20',
    'accent-orange': 'border border-accent-orange/20',
    'accent-iot': 'border border-accent-iot/20',
    'accent-home': 'border border-accent-home/20',
  };

  const hoverStyles = hover
    ? 'transition-all duration-400 ease-expo hover:border-border/80 hover:shadow-glass-hover hover:-translate-y-1'
    : 'transition-all duration-200 ease-expo';

  const glowStyles = glow
    ? `shadow-glow-${glowColor}`
    : '';

  return (
    <div
      ref={ref}
      className={`
        ${variants[variant]}
        ${paddings[padding]}
        ${borders[border]}
        rounded-2xl
        ${hoverStyles}
        ${glowStyles}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
});

GlassCard.displayName = 'GlassCard';

export default GlassCard;