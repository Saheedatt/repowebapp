/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "xxs": ".5rem",
        "xs": ".75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "4xl": "2.25rem",
        "6xl": "4rem",
        "8xl": "6rem",
        
      },
      fontFamily: {
        shadows: ['"Shadows Into Light"', "cursive"],
        monteserrat: [ "Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};