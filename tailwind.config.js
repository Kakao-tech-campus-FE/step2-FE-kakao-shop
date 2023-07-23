/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'kakao': '#ffeb00',
        'kakao-blue': '#4684e9',
        'kakao-red': '#f94c4c'
      },
    },
  },
  plugins: [],
}
