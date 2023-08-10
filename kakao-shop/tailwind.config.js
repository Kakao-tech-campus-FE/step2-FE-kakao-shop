/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "kakao-yellow": "#FEE500",
        "kakao-blue": "#007aff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
