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
        card: "#24262c",
      },
    },
  },
  plugins: [],
};
