import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/sanitizeImagePath.js"],

  app: {
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["nuxt-icon", '@nuxt/content', '@nuxtjs/i18n', '@nuxtjs/seo'],

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    strategy: 'prefix_except_default',
    locales: ['en', 'de'], // used in URL path prefix
    defaultLocale: 'de', // default locale of your project for Nuxt pages and routings
  },

  routeRules: {
    '/': { prerender: true }
  },

  site: {
    url: 'https://gim-gruppe.com',
    name: 'GIM Gruppe',
    description: 'Willkommen bei der GIM!',
    indexable: false,
  },

  content: {
    documentDriven: true
  },

  generate: {
    dir: '/docs/',
  },
  compatibilityDate: "2024-09-10"
});

