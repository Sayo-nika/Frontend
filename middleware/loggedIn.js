export default function({store, redirect, route}) {
  const to = route.path || '/';

  if (!store.state.auth.loggedIn) return redirect(`/login?to=${to}`);
}