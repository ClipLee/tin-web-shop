const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin-projekt-lipski-s20901', `root`, `root`, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;