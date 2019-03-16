export default ({app: {router, store}}) => {
  router.beforeEach((to, from, next) => {
    if (from.matched.length)  store.commit('setParentRoute', from.matched[0].components.default);

    next();
  });
};
