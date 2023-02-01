const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Wysylka = sequelize.define('Department', {
    id_wysylka:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Data_wysylki: {
        type: Sequelize.DATE,
        allowNull: true
    },
    Adres_docelowy: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Dane_odbiorcy: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Sposob_dostawy: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Wysylka;