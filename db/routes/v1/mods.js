const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json(req.app.$data.mods);
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
