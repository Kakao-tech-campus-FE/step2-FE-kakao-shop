/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      borderWidth: {
        2: "2px",
        3: "3px",
      },
    },
  },
  plugins: [],
};
