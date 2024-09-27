// nuxt.config.js
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/gim-website/' : '/',
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
    base: process.env.NODE_ENV === 'production' ? '/gim-website/' : '/', // Ensure this is being set properly
    mode: 'hash', // Consider switching to 'history' mode unless you need hash-based routing
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV === 'production' ? '/gim-website/' : '/',
    },
  },

  generate: {
    dir: 'docs', // Set the output directory for generated files
  },

  compatibilityDate: "2024-09-10"
});
