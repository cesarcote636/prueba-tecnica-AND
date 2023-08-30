/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'blue2': "#004884",
        'blue3': "#3366CC",
        'pink2': "#F42F63",
        'gray2': "#F2F7FD",
        'gray3': "#4B4B4B",
        'gray4': "#707070",
      }
    },
  },
  plugins: [],
}

