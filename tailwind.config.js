const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    safelist: [/^text/, /^p/, /^bg/]
  },
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.red,
        tertiary: colors.yellow,
        gray: colors.warmGray
      },
      fontFamily: {
        mono: ["Roboto Mono", "mono"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
