/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#16163f",
        pantone: "#b99756",
        "dark-pantone": "#72592b",
        "dark-navy": "#050529",
      },
      fontFamily: {
        "quick-sand": ["QuickSand"],
        "play-write": ["PlayWrite"],
        "dancing-script": ["dancing-script"],
      },
    },
  },
  plugins: [],
};
