const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    allownull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allownull: false,
  },
  email: {
    type: DataTypes.STRING,
    allownull: false,
    unique: true,
  },
  experience: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  level: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

module.exports = User;
