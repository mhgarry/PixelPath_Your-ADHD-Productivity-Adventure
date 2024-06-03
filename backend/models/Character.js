const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/database');

const Character = sequelize.define('Character', {
  data: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

module.exports = Character;
