import Vue from 'vue';
import {VueReCaptcha} from 'vue-recaptcha-v3';

export default ({app: {$env}}) => {
  Vue.use(VueReCaptcha, {
    siteKey: $env.recaptchaInvisibleKey,
    loaderOptions: {autoHideBadge: true}
  });
};
