export default ({$axios, isDev}) => {
  if (isDev) {
    $axios.onError(err => console.log(err.stack));
  }
};
