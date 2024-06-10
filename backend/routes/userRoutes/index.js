const express = require('express');
const { register, login } = require('../../controllers/userController');
const authenticate = require('../../middleware/authenticate');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Example of a protected route
router.get('/profile', authenticate, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.userId },
    select: { id: true, email: true, name: true },
  });
  res.json(user);
});

router.get('/', (req, res) => {
  res.json({ message: 'User routes index' });
});

module.exports = router;
