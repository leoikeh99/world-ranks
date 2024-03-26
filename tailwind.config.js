/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro", "sans-serif"],
      },
      screens: {
        xs: "550px",
        xxs: "350px",
      },
    },
  },
  plugins: [],
};
