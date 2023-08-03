/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        kakao: "#ffe342",
        lightgray: "rgb(51, 51, 51)",
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadein: "fadein 0.3s ease-in",
      },
    },
  },
  plugins: [],
};
