/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#800000",
          light: "#a04d4d",
          dark: "#4d0000",
        },
        orange: {
          DEFAULT: "#ff7f50",
          light: "#ffb380",
          dark: "#cc6633",
        },
      },
    },
  },
  plugins: [],
};
plugins: [require("tailwindcss-animate")]
