import { themes } from './assets/vThemes'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: '3001', // default: localhost
  },
  head: {
    titleTemplate: '%s - Cambodia Food Review',
    title: 'Home',
    htmlAttrs: {
      lang: 'en',
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: '',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/global.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '~/googleanalytics/module.js',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  //   [
  //     '@nuxtjs/google-adsense',
  //     {
  //       id: 'ca-pub-2309187828170787',
  //     },
  //   ],
  // ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultTheme: 'myCustomTheme',
    theme: {
      dark: false,
      themes,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
