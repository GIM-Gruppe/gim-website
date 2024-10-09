// nuxt.config.js
import { defineNuxtConfig } from 'nuxt/config'

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`); // This will log the current environment mode

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/sanitizeImagePath.js"],

  app: {
    buildAssetsDir: '/static/'
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "nuxt-icon",
    '@nuxt/content'
  ],

  routeRules: {
    '/': { prerender: true }
  },

  router: {
    // base: process.env.NODE_ENV === 'production' ? '/gim-website/' : '/', // Ensure this is being set properly
    // mode: 'hash', // Consider switching to 'history' mode unless you need hash-based routing
  },

  runtimeConfig: {
    public: {
      // baseURL: process.env.NODE_ENV === 'production' ? '/gim-website/' : '/',
    },
  },

  compatibilityDate: "2024-09-10"
});
