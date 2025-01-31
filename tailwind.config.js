/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // "Gabarito":["Gabarito","sans-serif"]
        gabarito: ["Gabarito", "sans-serif"], // Primary font
      },
    },
    colors: {
      yellow: "#FFC506",
      red: "#C5261F",
      brown: "#BB6400",
      white: "#ffffff",
      black: "#000000",
      'yellow-opacity': 'rgba(255, 197, 6, 0.4)'
    },
    screens: {
      xs: "0px",
      sm: "600px",
      // => @media (min-width: 640px) { ... }

      md: "900px",
      // => @media (min-width: 768px) { ... }

      lg: "1200px",
      // => @media (min-width: 1024px) { ... }

      xl: "1580px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
