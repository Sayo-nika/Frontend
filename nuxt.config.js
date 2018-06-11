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
  plugins: [
    {src: '~/plugins/vuetify'},
    {src: '~/plugins/localStorage', ssr: false}
  ],
  css: [
    '~/assets/styl/index.styl'
  ]
};
