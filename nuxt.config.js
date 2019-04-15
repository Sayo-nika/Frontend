import pkg from './package.json';
import {LoaderOptionsPlugin} from 'webpack';

// OAuth client IDs.
const oauth = {
  discord: process.env.SAYONIKA_DISCORD_CLIENTID || '523033929968648202',
  gitlab: process.env.SAYONIKA_GITLAB_CLIENTID || '0fe569725bd69ef467aa07d2d1748c68e018bb773bfa36215fb9f435d692445a',
  github: process.env.SAYONIKA_GITHUB_CLIENTID || '1bbb823cec3d3fbce34d',
  discordRedirect: encodeURIComponent(process.env.SAYONIKA_DISCORD_REDIRECT || 'https://sayonika.moe/callback/discord'),
  gitlabRedirect: encodeURIComponent(process.env.SAYONIKA_GITLAB_REDIRECT || 'https://sayonika.moe/callback/gitlab'),
  githubRedirect: encodeURIComponent(process.env.SAYONIKA_GITHUB_REDIRECT || 'https://sayonika.moe/callback/github')
};

export default {
  mode: 'universal',

  head: {
    title: 'Sayonika',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'The official DDMC Mod Catalog.'}
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/favicon.png'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,500,700'}
    ]
  },

  env: {
    oauth,
    recaptchaInvisibleKey: process.env.SAYONIKA_RECAPTCHA_INVISIBLE_SITE_KEY,
    recaptchaCheckboxKey: process.env.SAYONIKA_RECAPTCHA_CHECKBOX_SITE_KEY
  },

  loading: {color: '#FFA000'},

  router: {
    scrollBehavior() {
      return {x: 0, y: 0};
    }
  },

  css: [
    '~/assets/style/app.styl',
    '~/node_modules/@mdi/font/css/materialdesignicons.min.css'
  ],

  plugins: [
    '~/plugins/recaptcha.client',
    '~/plugins/routerHooks',
    '~/plugins/vuePlugins'
  ],

  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],

  // serverMiddleware: [
  //   {path: '/callback', handler: '~/middleware/server/callback'}
  // ],

  axios: {
    proxy: true,
    prefix: '/api/v1',
    debug: process.env.NODE_ENV !== 'production'
  },

  proxy: {
    '/api/': process.env.SAYONIKA_API_ORIGIN || 'http://localhost:4444/'
  },

  build: {
    extend(config, ctx) {
      if (ctx.isDev) config.devtool = '#eval-source-map';

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },

    plugins: [
      new LoaderOptionsPlugin({
        test: /\.styl$/,
        stylus: {
          preferPathResolver: 'webpack'
        }
      })
    ]
  }
};
