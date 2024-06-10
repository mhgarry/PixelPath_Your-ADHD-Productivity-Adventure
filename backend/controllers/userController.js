// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
// require('dotenv').config();

// const register = async (req, res) => {
//   const { email, name, password } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await prisma.user.create({
//       data: {
//         email,
//         name,
//         password: hashedPassword,
//       },
//     });
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(400).json({ error: 'User registration failed' });
//   }
// };

// // const login = async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     const user = await prisma.user.findUnique({ where: { email } });
// //     if (!user) {
// //       return res.status(404).json({ error: 'User not found' });
// //     }

// //     const isPasswordValid = await bcrypt.compare(password, user.password);
// //     if (!isPasswordValid) {
// //       return res.status(401).json({ error: 'Invalid password' });
// //     }

// //     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
// //       expiresIn: '1h',
// //     });

// //     res.json({ token });
// //   } catch (error) {
// //     res.status(500).json({ error: 'Login failed' });
// //   }
// // };

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await prisma.user.findUnique({ where: { email } });
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }
//     const isValidPassword = await bcrypt.compare(password, user.password);
//     if (!isValidPassword) {
//       return res.status(401).json({ error: 'Invalid password ' });
//     }
//     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     await prisma.user.update({
//       where: { email },
//       data: {
//         token,
//       },
//     });

//     res.json({ message: 'Login successful', token });
//   } catch (error) {
//     res.status(500).json({ error: 'Login failed' });
//   }
// };

// module.exports = {
//   register,
//   login,
// };
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const register = async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'User registration failed' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    await prisma.user.update({
      where: { email },
      data: { token },
    });

    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

module.exports = {
  register,
  login,
};
