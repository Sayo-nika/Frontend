export const state = () => ({
  parentRoute: null
});

export const mutations = {
  setParentRoute(state, route) {
    state.parentRoute = route;
  }
};

export const actions = {
  async nuxtServerInit({dispatch}, ctx) {
    await dispatch('auth/processFromCache', ctx);
  }
};
