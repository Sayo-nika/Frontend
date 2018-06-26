module.exports = {
  head: {
    title: 'Sayonika',
    meta: [
      {charset: 'utf-8'},
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Mod database thing for DDLC'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons'
      }
    ]
  },
  loading: {color: '#3B8070'},

  build: {
    vendor: ['~/plugins/vuetify'],
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },

  srcDir: 'src/',
  css: [
    '~/assets/styl/index.styl'
  ],

  plugins: [
    '~/plugins/vuetify',
    '~/plugins/logging',
    {src: '~/plugins/localStorage', ssr: false}
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    prefix: '/api/v1',
    proxy: true,
    debug: process.env.NODE_ENV !== 'production'
  },
  proxy: {
    '/api/':
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3001'
        : process.env.SAYONIKA_API_ORIGIN
  }
};
