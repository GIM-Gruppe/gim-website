import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#6bb836', // for headers
        secondary: '#676662', // text color
        accent: '#6cb834',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
  function ({ addBase, theme }) {
    addBase({
      ':root': {
        '--color-primary': theme('colors.primary'),
        '--color-secondary': theme('colors.secondary'),
      },
    });
  },
};
