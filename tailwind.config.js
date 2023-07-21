/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        colors: {
            'kakao-yellow': '#FFE342',
            'kakao-coral-blue': '#634bff',
            'kakao-coral-red': '#f75555',
            'kakao-coral-green': '#2ded8e',
            'kakao-dark-gray': '#444444',
            'light-gray-900': '#f5f5f5',
            'light-gray-800': '#ebebeb',
            'light-gray-700': '#d6d6d6',
        },
        extend: {
            width: {
                '128' : '32rem',
                '144' : '36rem',
                '160' : '40rem',
                '176' : '44rem',
                '192' : '48rem',
                '208' : '52rem',
                '224' : '56rem',
                '240' : '60rem',
            }
        },
    },
    plugins: [],
}