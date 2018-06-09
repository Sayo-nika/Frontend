module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Sayonika',
    meta: [
      {
        charset: 'utf-8'
      },
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
        href: '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons'
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#3B8070'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['vue-material'],
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
  plugins: [
    {
      src: '~/plugins/vue-material'
    }
  ],
  srcDir: 'src/',
  css: [
    {
      src: 'vue-material/dist/vue-material.min.css',
      lang: 'css'
    },
    {
      src: '~assets/theme.scss',
      lang: 'scss'
    },
    {
      src: '~assets/index.scss',
      lang: 'scss'
    }
  ]
};
