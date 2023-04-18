/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        regular: ["sans-regular"],
        medium: ["sans-medium"],
        bold: ["sans-bold"],
      },
    },
  },
  plugins: [],
};
