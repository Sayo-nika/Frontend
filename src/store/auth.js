export const state = () => ({
  authed: false
});

export const mutations = {
  // TODO: auth logic when we get to it
  auth(state) {
    state.authed = true;
  },
  unauth(state) {
    state.authed = false;
  }
};
