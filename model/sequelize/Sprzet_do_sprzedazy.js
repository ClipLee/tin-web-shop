const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Sprzet_do_sprzedazy = sequelize.define('Sprzet_do_sprzedazy', {
    id_sprzet_do_sprzedazy: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Opakowanie_prezentowe: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    Numer_seryjny: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sprz_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    wys_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Sprzet_do_sprzedazy;