export const state = () => ({});

export const mutations = {};

export const actions = {
  async nuxtServerInit({dispatch}, ctx) {
    await dispatch('auth/processFromCache', ctx);
  }
};
