import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/sanitizeImagePath.js"],

  app: {
    head: {
      script: [
        // 1) Inline the partner-ID snippet
        {
          hid: 'linkedin-partner-init',
          // ⚠️ this is sanitized on SSR, then applied via el.textContent
          textContent: `
            _linkedin_partner_id = "7175042";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `
        },
        // 2) Then load the external Insight script async
        {
          src: 'https://snap.licdn.com/li.lms-analytics/insight.min.js',
          async: true
        }
      ],
      noscript: [
        {
          hid: 'linkedin-noscript',
          // noscript only allows `textContent` for children
          textContent: `<img height="1" width="1" style="display:none" alt=""
            src="https://px.ads.linkedin.com/collect/?pid=7175042&fmt=gif" />`
        }
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

