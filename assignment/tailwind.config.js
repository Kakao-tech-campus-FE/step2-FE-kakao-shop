/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#F7E600',
          500: '#YourOtherShadeOfYellow',
        },
      },
    },
  },
  plugins: [],
};
