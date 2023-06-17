const { Sequelize } = require('sequelize');
const config = require("./config")

const db = new Sequelize( config.DB_NAME, config.DB_USER,  config.DB_PASS, {
    host:  config.DB_HOST,
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;