/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      translate: {
        translateSlidePrev: "calc(1030px * 2)",
        translateSlideCurrnetAndNext: "-1030px",
      },
    },
  },
  plugins: [],
};
