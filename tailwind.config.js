module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-gold': '#fee101',
        'light-silver': '#d7d7d7',
        'bronze': '#6a3805',
      },
      borderWidth: {
        '60': '60px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
