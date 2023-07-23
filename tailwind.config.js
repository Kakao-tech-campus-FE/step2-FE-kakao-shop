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
        convex: 'inset .2rem .2rem 1rem rgba(255,255,255,0.44), inset -.2rem -.2rem 1rem rgba(0,0,0,0.44)',
        convexWhite: 'inset .2rem .2rem 1rem rgba(255,255,255,0.44), inset -.2rem -.2rem 1rem rgba(200, 208, 231, 1)',
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
