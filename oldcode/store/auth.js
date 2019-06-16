export const state = () => ({
  token: null,
  user: null
});

export const mutations = {
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
          commit('setUser', user.result);
        } catch (err) {
          // FIXME: this triggers sometimes but page loads fine more or less. need to figure it out eventually
          // maybe its a 429 idk
          console.warn('HEY, OVER HERE!!', err);
          // $axios.setToken(null);
          // $cookies.remove('token');
        }
      }
    }
  }
};
