/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0d1b2a',
        'navy-light': '#1a3a5c',
        blue: {
          DEFAULT: '#1e5fa3',
          hover: '#154f8a',
          light: '#e8f0fb',
        },
        body: '#333333',
        muted: '#666666',
        light: '#cccccc',
        border: '#e0e0e0',
        'section-alt': '#f5f7fa',
        'dark-section': '#111827',
        footer: '#aaaaaa',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        sans: ['Source Sans 3', 'sans-serif'],
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '1.15', fontWeight: '700' }],
        'h2': ['32px', { lineHeight: '1.25', fontWeight: '700' }],
        'h3': ['22px', { lineHeight: '1.35', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.7' }],
        'small': ['13px', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '72px',
      },
      maxWidth: {
        '8xl': '1400px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 28px rgba(0,0,0,0.12)',
        'dropdown': '0 8px 24px rgba(0,0,0,0.12)',
        'btn': '0 4px 12px rgba(30,95,163,0.3)',
      },
      transitionDuration: {
        '200': '200ms',
        '250': '250ms',
        '350': '350ms',
      },
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-slide-up': 'fadeSlideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
