import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        primary: "#FAFAFAE5",
        secondary: "#F3F3F7",
        light: "#DCD9D9",
        button: "#FA7C54",
        small: "#F7F7FA",
        quote: "#FA7C54E5",
        ellipse: "#8A317C",
      },
      colors: {
        primary: "#4D4D4D",
        small: "#ABABAB",
        side: "#8A8A8A",
        light: "#F3F3F7",
      },
      spacing: {
        8.5: "35px",
        9.5: "38px",
        17: "70px",
        18: "72px",
        42: "167px",
      },
      boxShadow: {
        custom: "0 0 20px 0 rgba(0,0,0,0.25)",
        low: "0 0 4px 0 rgba(0,0,0,0.25)",
      },
      container: {
        center: true,
      },
      width: {
        secondary: "565px",
        side: "306px",
        small: "120px",
        carousel: "500px",
      },
      borderRadius: {
        sidebar: "10px",
        "4xl": "33px",
        "5xl": "40px",
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            transform: "translateX(-30px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "100",
          },
        },
      },
    },
  },
  plugins: [],
};
