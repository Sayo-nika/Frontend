const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json(req.app.$data.mods);
});

router.get('/recent_releases', (req, res) => {
  let recent = req.app.$data.mods.filter(m => m.released) // Filter out any that haven't been released yet (null timestamp).
    .sort((a, b) => b.released - a.released) // Sort the remaining mods by release date, (most recent at top).
    .slice(0, 6);

  res.send(recent);
});

router.route('/:mod')
  .get((req, res) => {
    let mod = req.app.$data.mods.find(m => m.id === req.params.mod);

    if (mod) res.json(mod);
    else res.sendStatus(404);
  });

router.route('/:mod/authors')
  .get((req, res) => {
    let mod = req.app.$data.mods.find(m => m.id === req.params.mod);

    if (mod) {
      let authors = req.app.$data.users.filter(u => mod.authors.map(a => a.id).includes(u.id));
      res.json(authors);
    } else res.sendStatus(404);
  });

module.exports = router;
