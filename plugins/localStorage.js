function persistStore(key, paths, store) {
  let savedState = localStorage.getItem(key);

  if (savedState) {
    // Restore the state in localStorage if it exists.
    savedState = JSON.parse(savedState);
    store.replaceState(Object.assign({}, store.state, savedState));
  }

  store.subscribe((mut, state) => {
    let savePaths = !paths.length ? state : paths.reduce((m, v) =>
      Object.assign(m, {[v]: state[v]}), {}); // Reduces the save state to what paths we want to persist.
    localStorage.setItem(key, JSON.stringify(savePaths));
  });
}

export default ({store, isHMR}) => {
  if (isHMR) return; // Stops the persistance thing from being reapplied when HMR happens.

  persistStore('sayonika', [
    'auth'
  ], store);
};
