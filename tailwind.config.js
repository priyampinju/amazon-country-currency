/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbg: "#131921",
        graybg: "#e6e6e6",
        linkblue: "#007185",
        discountred: "#CC0C39",
      },
    },
  },
  plugins: [],
};
