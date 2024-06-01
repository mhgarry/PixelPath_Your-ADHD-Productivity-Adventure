const User = require('../models/User');
const bcrypt = require('bcrypt');

// User registration logic
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ user });
    console.log('User created');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
