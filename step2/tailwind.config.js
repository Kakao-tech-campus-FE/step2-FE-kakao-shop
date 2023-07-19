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
        "400": "400px",
      },
      maxWidth: {
        "750": "750px",
      },
      width: {
        "75": "75%",
        "90": "90px",
      },
    },
  },
  plugins: [],
}

