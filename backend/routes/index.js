const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

module.exports = router;
