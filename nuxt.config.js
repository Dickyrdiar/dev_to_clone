export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'WorkFlow | collection of articles and videos about IT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', src: '/workflow.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Andika+New+Basic&display=swap',
      },
    ],

    script: [
      { src: 'http://vjs.zencdn.net/ie8/1.1/videojs-ie8.min.js' },
      { src: 'http://vjs.zencdn.net/5.19/video.js' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  target: 'static',

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'],
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
