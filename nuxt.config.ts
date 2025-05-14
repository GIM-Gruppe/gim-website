import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/sanitizeImagePath.js"],

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
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
    locales: ['de'], // used in URL path prefix
    defaultLocale: 'de', // default locale of your project for Nuxt pages and routings
  },

  routeRules: {
    '/': { prerender: true }
  },

  site: {
    url: 'https://gim-gruppe.com',
    name: 'GIM Gruppe',
    description: 'Willkommen bei der GIM!',
  },

  content: {
    documentDriven: true
  },

  nitro: {
    output: {
      dir: 'docs',
      publicDir: 'docs'
    }
  },

  compatibilityDate: "2024-09-10"
});

