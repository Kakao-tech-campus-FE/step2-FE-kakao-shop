/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        yellow: "#ffe342",
        lightGray: "#fafafa",
      },
      width: {
        inner: "1280px",
        logo: "100px",
        kakaoTest: "120px",
        icon: "36px",
        before: "1px",
        input: "570px",
        inherit: "inherit",
        detailImage: "430px",
        cart: "870px",
      },
      height: {
        confirmButton: "38px",
        inherit: "inherit",
        cart: "632px",
      },
      fontSize: {
        errorMessage: "13px",
      },
    },
  },
  plugins: [],
};
