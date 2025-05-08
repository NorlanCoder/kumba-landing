/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        terre: "#be996c",
        terre2: "#F2D971",
        terre3: "#9B2121",
        mygray: "#3D405B",
        heroBackground: "#F1EEE9",
      },
      fontFamily: {
        anek: ['AnekGurmukhi', 'sans-serif'],
        myriad: ['MyriadPro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
