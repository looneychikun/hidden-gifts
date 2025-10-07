import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/icon',
    'nuxt-auth-utils',
    '@nuxthub/core',
  ],

  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        routes: [{
          "pattern": "gifts.reenan.me",
          "custom_domain": true
        }],
        workers_dev: false
      }
    }
  },

  hub: {
    database: true
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-10-05',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    customCollections: [
      {
        prefix: 'gifts',
        dir: './app/assets/icons'
      }
    ]
  },

  runtimeConfig: {
    oauth: {
      auth0: {
        clientId: 'P6vQPsnLHlEv5E9D2Pig8lFSfK0SEjRT',
        domain: 'auth.reenan.me'
      }
    }
  },
})