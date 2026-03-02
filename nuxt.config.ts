import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/sanitizeImagePath.js"],

  app: {
    head: {
      script: [
        // 1) Inline setup
        {
          children: `
            _linkedin_partner_id = "7175042";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `,
          type: 'text/javascript'
        },
        // 2) External loader
        {
          src: 'https://snap.licdn.com/li.lms-analytics/insight.min.js',
          async: true,
          type: 'text/javascript'
        },
        {
          src: "https://umami.gim.at-gim.cloud:3000/script.js",
          defer: true,
          "data-website-id": "675fbe79-a183-44a7-b1e9-f77549d9be12"
        }
      ],
      noscript: [
        // 3) Fallback for users with JS disabled
        {
          children: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=7175042&fmt=gif" />`
        }
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
    },
     prerender: {
      failOnError: false
    }
  },

  compatibilityDate: "2024-09-10"
});

