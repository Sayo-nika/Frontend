export const state = () => ({
  loggedIn: false
});

export const mutations = {
  // TODO: auth logic when we get to it
  login(state) {
    state.loggedIn = true;
  },
  logout(state) {
    state.loggedIn = false;
  }
};