import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/sanitizeImagePath.js"],

  app: {
    head: {
      script: [
        {
          // Inline-Part des Insight-Tags
          hid: 'linkedin-insight-inline',
          type: 'text/javascript',
          textContent: `
            _linkedin_partner_id = "DEINE_PARTNER_ID";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `,
          tagPosition: 'bodyClose',
        },
        {
          // Externer Loader
          hid: 'linkedin-insight-loader',
          src: 'https://snap.licdn.com/li.lms-analytics/insight.min.js',
          async: true,
          tagPosition: 'bodyClose',
        },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
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

