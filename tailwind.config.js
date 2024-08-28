/** @type {import('tailwindcss').Config} */
//const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        // primary: colors.blue,
        night: {
          50: '#e4e4eb',
          100: '#bbbace',
          200: '#8f8ead',
          300: '#66658c',
          400: '#4b4777',
          500: '#302a62',
          600: '#2b245b',
          700: '#241c51',
          800: '#1c1445',
          900: '#130030',
        },
      },
    },
  },
  plugins: [],
};
