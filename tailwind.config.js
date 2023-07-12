/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pointPupple: '#A50FFF',
        subGray: '#F0F0F0',
        subRed: '#dc3232',
      },
      spacing: {
        header: '100px',
      },
    },
  },
  plugins: [],
};
