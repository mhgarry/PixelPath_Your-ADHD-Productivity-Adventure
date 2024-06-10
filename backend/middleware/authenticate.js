// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const authenticate = (req, res, next) => {
//   const token = req.header('Authorization').replace('Bearer ', '');
//   if (!token) {
//     return res.status(401).json({
//       message: 'You must be looged in to perform this action',
//     });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next(); // continue to the next middleware
//   } catch (error) {
//     res.status(401).json({
//       message: 'You must be logged in to perform this action',
//     });
//   }
// };

// module.exports = authenticate;
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({
      message: 'You must be logged in to perform this action',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      message: 'You must be logged in to perform this action',
    });
  }
};

module.exports = authenticate;
