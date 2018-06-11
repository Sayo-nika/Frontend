export const state = () => ({
  darkTheme: false
});

export const mutations = {
  enableDarkTheme(state) {
    state.darkTheme = true;
  },
  disableDarkTheme(state) {
    state.darkTheme = false;
  }
};
