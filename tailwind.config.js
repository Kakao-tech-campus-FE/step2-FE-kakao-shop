/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-kakao": "#ffea00",
        "blue-kakao": "#4684e9",
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
