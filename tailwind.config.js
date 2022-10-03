/** @type {import('tailwindcss').Config} */

const colors = {
  wa: '#7CD16F',
  white: '#fff',
  black: '#000',
  primary: '#2D72CB',
  success: '#5CB85C',
  danger: '#D9534F',
  warning: '#FFC124',
  secondary: '#828283',
  smoke: '#DBDBDB'
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: { colors },
  },
  plugins: [],
}
