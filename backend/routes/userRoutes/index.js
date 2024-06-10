const express = require('express');
const router = express.Router();
const { register, login } = require('../../controllers/userController');

router.post('/register', register);
router.post('/login', login);

router.get('/', (req, res) => {
  res.json({ message: 'User routes index' });
});

module.exports = router;
