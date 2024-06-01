const router = require('express').Router();
const userRoutes = require('./userRoutes');
router.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

router.use('/users', userRoutes);
module.exports = router;
