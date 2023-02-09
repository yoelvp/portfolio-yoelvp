/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1A1A1A',
        'dark-variant': '#262626',
        white: '#F0E7DB',
        'white-varint': '#d6d0ca',
        gray: '#656565',
        red: '#fe094e',
        'red-variant': '#e00946'
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
}
