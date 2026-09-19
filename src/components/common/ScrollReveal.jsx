import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({
  children,
  className = '',
  style = {},
  delay = 0,
  duration = 0.6,
  distance = 30,
  origin = 'bottom',
  easing = [0.16, 1, 0.3, 1],
  once = true,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  disabled = false,
}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || disabled) {
      setIsVisible(true);
      return;
    }

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [disabled, once, threshold, rootMargin]);

  const originMap = {
    bottom: { y: distance, x: 0 },
    top: { y: -distance, x: 0 },
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
  };

  const initial = isVisible ? undefined : {
    opacity: 0,
    ...originMap[origin],
  };

  const animate = isVisible ? {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay,
      duration,
      ease: easing,
    },
  } : undefined;

  return (
    <motion.div
      ref={elementRef}
      className={className}
      style={style}
      initial={initial}
      animate={animate}
    >
      {children}
    </motion.div>
  );
};

export { ScrollReveal };

export const StaggerContainer = ({
  children,
  className = '',
  style = {},
  staggerDelay = 0.1,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className = '',
  style = {},
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;