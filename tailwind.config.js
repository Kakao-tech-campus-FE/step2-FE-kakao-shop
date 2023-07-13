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
        kakaoTest: "120px",
        icon: "36px",
        before: "1px",
        input: "570px",
      },
      height: {
        confirmButton: "38px",
      },
      fontSize: {
        errorMessage: "13px",
      },
    },
  },
  plugins: [],
};
