/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "yellow-kakao": "#ffe342",
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
