/** Functions/variables common between the routes and stuff. */

export function redirect(res, to, status=302) {
  res.writeHead(status, {Location: to});
  res.end();
}

export function wrapRouterPromise(func) {
  return function(req, res, next) {
    func(req, res).then(() => {
      if (!res.headersSent) next();
    }).catch(next);
  };
}

export const secrets = {
  discord: process.env.SAYONIKA_DISCORD_SECRET,
  gitlab: process.env.SAYONIKA_GITLAB_SECRET,
  github: process.env.SAYONIKA_GITHUB_SECRET
};
