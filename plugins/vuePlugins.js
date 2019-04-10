import Vue from 'vue';
import Vuetify from 'vuetify';
import AsyncComputed from 'vue-async-computed';
import SocialSharing from 'vue-social-sharing';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: '#E84444',
    accent: '#FFA000',
    secondary: '#F13131',
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
});

Vue.use(AsyncComputed);
Vue.use(SocialSharing);
