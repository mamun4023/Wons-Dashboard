/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3A36DB",
          dark: "#605CFF",
          transparent: "rgba(96, 92, 255, 0.3)",
        },
        secondary: {
          light: "#FF69B4",
          dark: "#FF69B4",
          transparent: "rgba(255, 105, 180, 0.3)",
        },
        info: {
          light: "#03A89E",
          dark: "#2FE6A7",
          transparent: "rgba(47, 230, 167, 0.3)",
        },
        text: {
          light: "#788B9A",
          dark: "#06152B",
          disable: "#CFD9E0",
        },
        surface: {
          light: {
            neutral: "#FFFFFF",
            bg: "#F1F4FA",
            border: "#DDDDE8",
          },
          dark: {
            neutral: "#FFFFFF",
            bg: "#222131",
            grey: "#39394B",
            border: "#454A56",
          },
        },
      },
      fontFamily: {
        regular: ["sans-regular"],
        medium: ["sans-medium"],
        bold: ["sans-bold"],
      },
    },
  },
  plugins: [],
};
