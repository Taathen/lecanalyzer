/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        "-100": "-1",
      },
      colors: {
        gtblue: "#1e3a8a80",
        gtred: "#7f1d1d80",
      },
    },
  },
  plugins: [],
};
