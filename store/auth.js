export const state = () => ({
  token: null,
  user: null
});

export const mutations = {
  // TODO: auth logic when we get to it
  setToken(state, token) {
    state.token = token;
  },
  setUser(state, user) {
    state.user = user;
  }
};

export const actions = {
  async processFromCache({commit}, {app: {$axios, $cookies}, req}) {
    if (req.headers.cookie) {
      const token = $cookies.get('token');

      if (token) {
        try {
          commit('setToken', token);
          $axios.setToken(token);

          const user = await $axios.$get('/users/@me');
          commit('setUser', user);
        } catch {
          $axios.setToken(null);
          $cookies.remove('token');
        }
      }
    }
  }
};
