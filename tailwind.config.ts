import defaultTheme from "tailwindcss/defaultTheme";
import { addDynamicIconSelectors } from "@iconify/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",   // 16px on xs
        sm: "1.5rem",      // 24px on sm+
        lg: "2.5rem",      // 40px on lg+
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        heading: ["Montserrat", ...defaultTheme.fontFamily.sans],
        body: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // barrierefreundlicheres Grün mit ausreichendem Kontrast zu Weiß
        primary: "#63A930",
        secondary: "#676662",
        accent: "#6BB836", // nur für Deko, nicht als Text auf weiß
      },
      fontSize: {
        base: "1rem",    // 16px
        lg: "1.125rem",  // 18px
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    addDynamicIconSelectors(),

    // eigenes Plugin für :root-Variablen & Basis-Styles
    function ({ addBase, theme }) {
      const bodyFont = theme("fontFamily.body");

      addBase({
        ":root": {
          "--color-primary": theme("colors.primary"),
          "--color-secondary": theme("colors.secondary"),
        },
        body: {
          fontFamily: Array.isArray(bodyFont) ? bodyFont.join(", ") : (bodyFont as string),
          color: theme("colors.secondary"),
          backgroundColor: "#ffffff",
        },
        "a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible": {
          outline: `2px solid ${theme("colors.primary")}`,
          outlineOffset: "2px",
        },
      });
    },
  ],
};

export default config;
