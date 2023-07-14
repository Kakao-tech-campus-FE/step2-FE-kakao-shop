/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pointPupple: '#A50FFF',
        middleGray: '#979797',
        subGray: '#F0F0F0',
        subRed: '#dc3232',
      },
      spacing: {
        header: '100px',
      },
      maxWidth: {
        container: '1080px',
      },
    },
  },
  plugins: [],
};
