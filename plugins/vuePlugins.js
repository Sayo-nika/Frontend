import Vue from 'vue';
import Vuetify from 'vuetify';
import AsyncComputed from 'vue-async-computed';
import SocialSharing from 'vue-social-sharing';

import theme from '~/utils/theme';
import Todo from '~/components/Todo.vue';

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme
});

Vue.use(AsyncComputed, {
  useRawError: true,
  errorHandler(err, vm, stack) {
    console.error(err);
    console.error(vm);
    console.error(stack);
  }
});

Vue.use(SocialSharing);
Vue.component('s-todo', Todo);
