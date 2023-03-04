const { filterTokensByType } = require('./token-to-tailwind-plugin/fns');
const plugin = require('tailwindcss/plugin');
const tokens = require('./token-to-tailwind-plugin/output/global.json');

const colors = filterTokensByType('color', tokens);
const typography = filterTokensByType('typography', tokens);
const borderRadius = filterTokensByType('borderRadius', tokens);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      fontSize: typography,
      borderRadius,
    },
  },
  plugins: [],
};
