/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '200': '50rem',
        '280': '70rem',
      } 
    },
  },
  plugins: [],
}

