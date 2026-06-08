/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FCFAF7',
        peach: {
          50: '#FFE3D6',
          100: '#FFD7C6',
          200: '#FFC6AE',
        },
        cream: {
          50: '#F7F3ED',
          100: '#FCFAF7',
          200: '#EFE7DA',
          300: '#E5DAC9',
        },
        beige: {
          100: '#EFE7DA',
          200: '#E3D6C3',
          300: '#D5C2A9',
          400: '#BFA986',
        },
        gold: {
          100: '#F6ECD9',
          200: '#E8D4B0',
          300: '#D9BC87',
          400: '#C9A46A',
          500: '#B28A4D',
          600: '#94713D',
        },
        charcoal: {
          400: '#786E64',
          500: '#5D544B',
          600: '#463D35',
          700: '#362F29',
          800: '#2B2621',
          900: '#1C1713',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.25em',
      },
    },
  },
  plugins: [],
};
