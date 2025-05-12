import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */

const { addDynamicIconSelectors } = require('@iconify/tailwind');
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
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',   // 16px on xs
        sm: '1.5rem',      // 24px on sm+
        lg: '2.5rem',      // 40px on lg+
      },
    },
    screens: {
      sm: '640px',  // → “mobile” up to 639px
      md: '768px',  // → small tablet
      lg: '1024px', // → desktop
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#6bb836', // for headers
        secondary: '#676662', // text color
        accent: '#6cb834',
      },
      fontSize: {
        base: '1rem',    // 16px
        lg: '1.125rem',  // 18px
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), addDynamicIconSelectors()],
  function ({ addBase, theme }) {
    addBase({
      ':root': {
        '--color-primary': theme('colors.primary'),
        '--color-secondary': theme('colors.secondary'),
      },
    });
  },
};
