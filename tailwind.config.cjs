// const colors = require('tailwind/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{svelte,vue,js,ts}'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        primary: {
          "darker": "#282c34",
          "medium": "#363b46",
          "lighter": "#424855",
          "light": "#4d5564"
        },

        secondary: {
          "darker": "#0c7d56",
          "medium": "#12b67f",
          "light": "#14c889",
        },
        text: "#fff",
        danger: '#ef4444',
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  variants: {},
  plugins: [],
};