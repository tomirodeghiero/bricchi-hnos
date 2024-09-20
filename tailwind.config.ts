/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          100: "#FAF3EA",
          200: "#FCF8F3",
        },
        green: {
          100: "#F1F8F4",
          400: "#7EB693",
          700: "#28b63e",
          900: "#274C5B",
        },
        slate: {
          100: "#ECECEC",
          200: "#FCFCFC",
          300: "#EAF1EA",
          400: "#E0E0E0",
          800: "#2A3243",
        },
        stone: {
          300: "#4D5053",
          500: "#3A3A3A",
          700: "#333333",
          900: "#1D1D1D",
        },
        gray: {
          100: "#FAFAFA",
          200: "#F8F8F8",
          300: "#EEEEEE",
          400: "#D4D4D4",
          500: "#9F9F9F",
          600: "#898989",
          700: "#707070",
          800: "#525C60",
          900: "#292F37"
        },
        yellow: {
          300: "#F7C35F",
          400: "#f9b015",
          600: "#B88E2F",
        },
        rose: {
          300: "#F9F1E7",
        },
        red: {
          200: "#F28A8A",
          400: "#F28C8C",
          500: "#E62128",
          700: "#BF0426",
        }
      },
      width: {
        custom: "100vw",
      },
      height: {
        custom: "7.5rem",
      },
      borderRadius: {
        custom: "50%",
      },
    },
  },
  plugins: [],
};
