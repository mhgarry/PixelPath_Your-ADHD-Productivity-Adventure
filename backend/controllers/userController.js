const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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

// user login logic
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.status(200).json({ token, message: 'User logged in' });
      console.log('User logged in');
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
