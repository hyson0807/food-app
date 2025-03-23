/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        bg: '#1d1a16',
        primary: '#3F3C38',
        secondary: '#FF725E',
        third: '#B24130',
      }
    },
  },
  plugins: [],
}

