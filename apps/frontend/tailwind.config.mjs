import tailwindcssRadixColors from 'tailwindcss-radix-colors';
import tailwindcssRadix from 'tailwindcss-radix';

/** @type {import("tailwindcss").Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  plugins: [tailwindcssRadixColors, tailwindcssRadix],
  theme: {
    extend: {
      keyframes: {
        slideOutFromLeft: {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        slideInToLeft: {
          from: {
            transform: 'translateX(0%)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        },
        slideDown: {
          '0%': { height: '0' },
          '100%': { height: `var(--radix-accordion-content-height)` },
        },
        slideUp: {
          '0%': {
            height: `var(--radix-accordion-content-height)`,
          },
          '100%': {
            height: '0',
          },
        },
        arrowRotate: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(180deg)',
          },
        },
      },
      animation: {
        slideOutFromLeft:
          'slideOutFromLeft 0.2s cubic-bezier(0.42, 0, 0.58, 1)',
        slideInToLeft: 'slideInToLeft 0.2s cubic-bezier(0.42, 0, 0.58, 1)',
        slideDown: 'slideDown 0.2s cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 0.2s cubic-bezier(0.87, 0, 0.13, 1)',
        arrowRotate: 'arrowRotate 0.2s (0.87, 0, 0.13, 1)',
      },
    },
  },
};
