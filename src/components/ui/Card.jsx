import { forwardRef } from 'react';

const Card = forwardRef(({
  children,
  className = '',
  variant = 'default',
  hover = false,
  padding = 'lg',
  ...props
}, ref) => {
  const variants = {
    default: 'bg-bg-card/50 backdrop-blur-xl border border-border/50 shadow-glass',
    elevated: 'bg-bg-elevated/60 backdrop-blur-xl border border-border/30 shadow-glass',
    glass: 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-glass',
    transparent: 'bg-transparent border border-border/30',
  };

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const hoverStyles = hover
    ? 'transition-all duration-400 ease-expo hover:border-border/80 hover:shadow-glass-hover hover:-translate-y-1'
    : '';

  return (
    <div
      ref={ref}
      className={`${variants[variant]} ${paddings[padding]} rounded-2xl ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export const CardHeader = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`mb-6 ${className}`} {...props}>
    {children}
  </div>
));

CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef(({ children, className = '', ...props }, ref) => (
  <h3 ref={ref} className={`font-heading font-bold text-heading-md text-text-primary ${className}`} {...props}>
    {children}
  </h3>
));

CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef(({ children, className = '', ...props }, ref) => (
  <p ref={ref} className={`mt-2 text-body text-text-secondary ${className}`} {...props}>
    {children}
  </p>
));

CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    {children}
  </div>
));

CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`mt-6 pt-6 border-t border-border/30 flex items-center gap-4 ${className}`} {...props}>
    {children}
  </div>
));

CardFooter.displayName = 'CardFooter';

export default Card;