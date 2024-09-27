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

  // router: {
  //   base: '/gim-website/',
  //   mode: 'hash',
  // },

  compatibilityDate: "2024-09-10"
});