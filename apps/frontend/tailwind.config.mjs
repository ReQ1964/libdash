import tailwindcssRadixColors from 'tailwindcss-radix-colors';

/** @type {import("tailwindcss").Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  plugins: [tailwindcssRadixColors],
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
      },
      animation: {
        slideOutFromLeft:
          'slideOutFromLeft 0.2s cubic-bezier(0.42, 0, 0.58, 1)', // starts fast, slows down
        slideInToLeft: 'slideInToLeft 0.2s cubic-bezier(0.42, 0, 0.58, 1)', // starts fast, slows down
      },
    },
  },
};
