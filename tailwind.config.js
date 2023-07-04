/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        yellow: "#ffe342",
      },
      width: {
        logo: "100px",
        icon: "36px",
        before: "1px",
      },
    },
  },
  plugins: [],
};
