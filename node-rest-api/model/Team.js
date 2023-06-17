const Sequelize = require('sequelize');
const db = require('../db');
const User = require('./User');

const Team = db.define('Team', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  uuid: {
    unique: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
  },
  teamName: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
  {
    timestamps: true,
    tableName: "teams",
  }
);

Team.hasMany(User, {
  foreignKey: "teamId",
  targetKey: "id",
});
module.exports = Team;