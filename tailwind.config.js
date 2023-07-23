/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        outFlat: '0.8rem 0.8rem 1.4rem #c8d0e7, -0.2rem -0.2rem 1.8rem #ffffff',
      },
      borderRadius: {
        card: '50px',
      },
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
