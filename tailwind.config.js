/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Nunito', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#FF4F3B',
        secondary: '#FEBF00',
        accent: '#E0035D',
      },
    },
  },
  plugins: [],
});

