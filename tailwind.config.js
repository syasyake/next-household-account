module.exports = {
  content: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/components/*/*/*.{js,ts,jsx,tsx}'
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