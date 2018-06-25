const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
  // TODO: implement pagination and ranges, that'll be for later tho.
  res.json(req.app.$data.users);
});

router.route('/:user')
  .get((req, res) => {
    let user = req.app.$data.users.find(u => u.id === req.params.user);

    if (user) res.json(user);
    else res.sendStatus(404);
  })
  .delete((req, res) => {
    let users = req.app.$data.users;
    let user = users.find(u => u.id === req.params.user);

    if (user) {
      let simple = {id: user.id, username: user.username};

      users.splice(users.findIndex(u => u.id === req.params.user), 1);
      res.json(simple);
    } else res.sendStatus(404);
  });

router.route('/:user/mods')
  .get((req, res) => {
    let user = req.app.$data.users.find(u => u.id === req.params.user);

    if (user) {
      let userMods = Object.values(user.mods).reduce((m, v) => m.concat(v));
      let mods = req.app.$data.mods.filter(v => userMods.includes(v.id));

      res.json(mods);
    } else res.sendStatus(404);
  });

module.exports = router;
