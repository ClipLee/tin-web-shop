const Sequelize = require('sequelize');

const Sprzet = require("../../model/sequelize/Sprzet");
const Wysylka = require("../../model/sequelize/Wysylka");
const Sprzet_do_sprzedarzy = require("../../model/sequelize/Sprzed_do_sprzedazy");

exports.getSprzetyDoSprzedazy = () => {
    return Sprzet_do_sprzedarzy.findAll({
        include: [
            {
                nodel: Sprzet,
                as: 'sprzet'
            },
            {
                model: Wysylka,
                as: 'wysylka'
            }
        ]
    });
};

exports.getSprzet_do_sprzedarzyById = (Sprzet_do_sprzedarzyId) => {
    return Sprzet_do_sprzedarzy.findByPk(Sprzet_do_sprzedarzyId, {
        include: [
            {
                nodel: Sprzet,
                as: 'sprzet'
            },
            {
                model: Wysylka,
                as: 'wysylka'
            }
        ]
    });
};

exports.createSprzet_do_sprzedarzy = (data) => {
    console.log(JSON.stringify(data));

    return Sprzet_do_sprzedarzy.create({
        sprz_id: data.sprz_id,
        wys_id: data.wys_id,
        Opakowanie_prezentowe: data.Opakowanie_prezentowe,
        Numer_seryjny: data.Numer_seryjny
    });
};

exports.updateSprzet_do_sprzedarzy = (Sprzet_do_sprzedarzyId, data) => {
    return Sprzet_do_sprzedarzy.update(data, { where: { id: Sprzet_do_sprzedarzyId } });
}

exports.deleteSprzet_do_sprzedarzy = (Sprzet_do_sprzedarzyId) => {
    return Sprzet_do_sprzedarzy.destroy({
        where: { id: Sprzet_do_sprzedarzyId}
    });
}

exports.deleteManySprzet_do_sprzedarzys = (Sprzet_do_sprzedarzyIds) => {
    return Sprzet_do_sprzedarzy.find({ id:{ [Sequelize.Op.in]: Sprzet_do_sprzedarzyIds}})
}