/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: '0.875rem',
        paragraph: '1rem',
        xl: '1.25rem',
        xxl: '2rem',
      },
      boxShadow: {
        innerFlat: 'inset .2rem .2rem .5rem #c8d0e7, inset -.2rem -.2rem .5rem #FFFFFF',
        outFlat: '0.8rem 0.3rem 1.0rem #c8d0e7, -0.2rem -0.2rem 1.8rem #ffffff',
        outFlatSm: '0.1rem 0.1rem 0.1rem #c8d0e7, -0.1rem -0.1rem 0.1rem #ffffff',
        convex: 'inset .2rem .2rem 1rem rgba(255,255,255,0.44), inset -.2rem -.2rem 1rem rgba(0,0,0,0.44)',
        convexWhite: 'inset .2rem .2rem 1rem rgba(255,255,255,0.44), inset -.2rem -.2rem 1rem rgba(200, 208, 231, 1)',
      },
      dropShadow: {
        outFlatWhite: [
          '0px 0px 5px white',
          '5px -5px 5px rgba(255, 255, 255, 0.8)',
          '-5px 5px 5px rgba(200, 208, 231, 0.5)',
          '-10px 10px 5px rgba(149, 164, 208, 0.5)',
        ],
      },
      borderRadius: {
        card: '50px',
      },
      colors: {
        pointPupple: '#A50FFF',
        middleGray: '#979797',
        subGray: '#F0F0F0',
        subRed: '#dc3232',
        subOrange: '#f05800',
      },
      fontFamily: {
        exo: ['"Exo 2"', 'system-ui', 'sans-serif'],
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
