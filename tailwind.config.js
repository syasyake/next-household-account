module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
 theme: {
   extend: {},
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["cupcake", "dark"],
  }
}