/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#fee500",
        "primary-hover": "#fada0a",
        "primary-active": "#f2d00f",
      },
      minWidth: {
        400: "400px",
        600: "600px",
        800: "800px",
      },
      maxWidth: {
        750: "750px",
        1400: "1400px",
      },
      minHeight: {
        50: "50px",
      },
      width: {
        30: "30px",
        50: "50px",
        60: "60px",
        90: "90px",
        "75%": "75%",
      },
      height: {
        60: "60px",
        80: "80px",
      },
    },
  },
  plugins: [],
};
