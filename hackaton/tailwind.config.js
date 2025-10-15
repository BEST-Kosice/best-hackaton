/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
    './landing/templates/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
        },
      },
    },
  },
  safelist: [
    'bg-[#981a36]'
  ],
  plugins: [],
}
