/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#1C1D22",
        hover: "#2b2c2f",
        info: "#222327",
        mainPart: "#2a2b2f",
        textGray: "#949597",
        cardSection: "#24262c",
        bgCard: "#292b31",
        bgTime: "#36373d",
        expense: "#ff7979",
        income: "#78d700",
      },
    },
  },
  plugins: [],
};
