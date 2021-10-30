// const colors = require('tailwind/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{svelte,vue,js,ts}'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        primary: "#282c34",
        secondary: "#12b67f",
        text: "#fff",
        danger: '#e3342f',
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