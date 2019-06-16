import Vue from 'vue';

// Stupid workaround for error with breakpoints when hydrating from SSR.
// See: https://github.com/vuetifyjs/vuetify/issues/3436

Vue.prototype.$breakpoint = new Vue({
  data() {
    return {
      isMounted: false,
      default: {
        xs: true,
        xsOnly: true,
        xsAndUp: false,
        sm: true,
        smOnly: true,
        smAndDown: true,
        smAndUp: false,
        md: false,
        mdOnly: false,
        mdAndDown: false,
        mdAndUp: false,
        lg: false,
        lgOnly: false,
        lgAndDown: false,
        lgAndUp: false,
        xl: false,
        xlOnly: false,
        xlAndDown: false
      }
    };
  },
  methods: {
    is(breakpoint) {
      return this.isMounted ? this.$vuetify.breakpoint[breakpoint] : this.$data.default[breakpoint];
    }
  }
});

export default async ({app}) => {
  if (!app.mixins) app.mixins = [];

  app.mixins.push({
    mounted() {
      this.$breakpoint.$data.isMounted = true;
    }
  });
};
