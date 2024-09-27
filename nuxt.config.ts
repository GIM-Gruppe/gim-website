// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],

  app: {
    baseURL: '/gim-website/', // This ensures the assets' URLs are correctly prefixed
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
    base: process.env.NODE_ENV === 'production' ? '/gim-website/' : '/',
    mode: 'hash',
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV === 'production' ? '/gim-website/' : '/',
    },
  },

  compatibilityDate: "2024-09-10"
});