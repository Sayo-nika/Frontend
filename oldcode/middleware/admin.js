export default function({store, redirect, route}) {
  if (!store.state.auth.user) return redirect(`/login?to=${route.path}`);
  else if (!store.state.auth.user.moderator && !store.state.auth.user.developer)
    // TOOD: redircect to a 403 error page
    return redirect('/');
}
