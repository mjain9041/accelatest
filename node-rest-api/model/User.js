const Sequelize = require('sequelize');
const db = require('../db');
const config = require("../config")

const User = db.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  teamId: {
    type: Sequelize.SMALLINT,
    allowNull: false
  },
  role: {
    type: Sequelize.ENUM(config.role.developer, config.role.tester),
    allowNull: false
  }
},
  {
    timestamps: true,
    tableName: "users",
  }
);

module.exports = User;