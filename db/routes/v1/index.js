const {Router} = require('express');
const router = Router();

router.use('/users', require('./users'));
router.use('/mods', require('./mods'));

router.get('/', (req, res) => {
  res.json({
    v: 1
  });
});

module.exports = router;