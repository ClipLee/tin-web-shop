const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Sprzet = sequelize.define('Sprzet', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Producent: {
        type: Sequelize.STRING,
        allowNull: false
    },
    id_producenta: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    Nazwa: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Cena: {
        type: Sequelize.DECIMAL(5,2),
        allowNull: false,
    },
    Data_premiery: {
        type: Sequelize. DATE,
        allowNull: true;
    },
    Wymiary_opakowania: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Sprzet;