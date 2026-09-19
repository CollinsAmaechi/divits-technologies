import { forwardRef } from 'react';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  as,
  ...props
}, ref) => {
  const Component = as || 'button';
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-heading font-medium
    transition-all duration-300 ease-expo
    disabled:opacity-50 disabled:cursor-not-allowed
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary
  `;

  const variants = {
    primary: `
      px-6 py-3.5 rounded-xl text-body-sm text-bg-primary bg-accent-gold
      hover:bg-accent-amber hover:shadow-glow-gold active:scale-[0.98]
      ${disabled || loading ? 'hover:shadow-none hover:bg-accent-gold' : ''}
    `,
    secondary: `
      px-6 py-3.5 rounded-xl text-body-sm text-text-primary bg-bg-elevated border border-border/50
      hover:bg-bg-card hover:border-accent-gold/50 hover:shadow-lg hover:shadow-accent-gold/10 active:scale-[0.98]
      ${disabled || loading ? 'hover:shadow-none hover:bg-bg-elevated hover:border-border/50' : ''}
    `,
    ghost: `
      px-4 py-2.5 rounded-lg text-body-sm text-text-secondary
      hover:text-accent-gold hover:bg-accent-gold/10 active:scale-[0.98]
      ${disabled || loading ? 'hover:bg-transparent hover:text-text-secondary' : ''}
    `,
    outline: `
      px-6 py-3.5 rounded-xl text-body-sm text-accent-gold border-2 border-accent-gold bg-transparent
      hover:bg-accent-gold/10 hover:shadow-glow-gold active:scale-[0.98]
      ${disabled || loading ? 'hover:bg-transparent hover:shadow-none' : ''}
    `,
  };

  const sizes = {
    sm: 'px-3 py-2 text-caption gap-1.5',
    md: 'px-6 py-3.5 text-body-sm gap-2',
    lg: 'px-8 py-4 text-body gap-2.5',
    xl: 'px-10 py-5 text-body-lg gap-3',
  };

  const width = fullWidth ? 'w-full' : '';

  return (
    <Component
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        <>
          {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
          {children}
          {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
        </>
      )}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;