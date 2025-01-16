/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dDark: "#242526",
        white: "#fff",
        backgroundcolor: "#e6e5ef",
        primarycolor500: "#252043",
        primarycolor400: "#322c53",
        primarycolor300: "#413b67",
        accentcolor400: "#fbd042de",
        accentcolor500: "#fcc71a",
        accentcolor700: "#d3a40a",
        accentextracolor500: "#4d447c",
        successcolor500: "#469c36",
        warncolor500: "#db5656",
        textcolordark: "#42464d",
      },
    },
  },
  plugins: [],
};
