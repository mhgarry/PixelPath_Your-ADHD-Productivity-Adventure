const router = require('express').Router();
const userRoutes = require('./userRoutes');
const characterRoutes = require('./characterRoutes');

router.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);
module.exports = router;
