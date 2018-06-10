import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  theme: {
    primary: colors.orange.base,
    secondary: colors.orange.darken2,
    accent: colors.deepPurple.accent2
  }
});
