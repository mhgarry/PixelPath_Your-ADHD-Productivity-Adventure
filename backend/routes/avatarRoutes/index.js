// routes/avatarRoutes/index.js
const router = require('express').Router();
const avatarController = require('../../controllers/avatarController');
const authenticateUser = require('../../middleware/authenticate');

router.post('/save', authenticateUser, avatarController.save);

module.exports = router;
