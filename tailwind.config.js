/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme colors - warm professional palette
        bg: {
          primary: '#ffffff',           // Pure white
          secondary: '#fdfbf7',         // Warm white / ivory
          elevated: '#faf8f3',          // Very light cream
          card: '#f5f2eb',              // Light cream
        },
        accent: {
          gold: '#c9a84c',              // Brand gold
          amber: '#d4a537',             // Soft gold/amber
          yellow: '#e8c547',            // Soft yellow
          blue: '#2563eb',              // Electric blue (DIVITS Assist)
          orange: '#d4903e',            // Warm orange (DIVITS Build)
          iot: '#2d8f6f',               // Green/teal (DIVITS IoT)
          iotLight: '#34a87d',          // Lighter green/teal
          iotBg: '#eaf5ef',             // Very light green/teal bg
          home: '#e05545',              // Coral/red-orange (DIVITS Home)
          homeLight: '#f06b5b',         // Lighter coral
          homeBg: '#fdeae8',            // Very light coral bg
        },
        text: {
          primary: '#1a1a1a',           // Near black (warm)
          secondary: '#5c5c5c',         // Muted warm gray
          muted: '#8a8a8a',             // Light warm gray
        },
        border: {
          DEFAULT: '#e5e0d5',           // Warm light border
          light: '#efeae0',             // Very light warm border
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.25' }],
        'heading-lg': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.3' }],
        'heading-md': ['clamp(1.125rem, 2vw, 1.375rem)', { lineHeight: '1.35' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
        'glass-hover': '0 12px 40px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #fdfbf7 0%, #f5f2eb 50%, #efeae0 100%)',
      },
      animation: {
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(15px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          'from': { opacity: '0', transform: 'translateY(-10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.97)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}