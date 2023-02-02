const Sprzet = require("../../model/sequelize/Sprzet");
const Wysylka = require("../../model/sequelize/Wysylka");
const Sprzet_do_sprzedarzy = require("../../model/sequelize/Sprzed_do_sprzedazy");

exports.getSprzets = () => {
    return Sprzet.findAll();
};

exports.getSprzetById = (sprzId) => {
    return Sprzet.findByPk(sprzId,
        {
            include: [{
                model: Wysylka,
                as: 'wysylka',
                include: [{
                    model: Sprzet_do_sprzedarzy,
                    as: 'sprzet_do_sprzedarzy'
                }]
            }]
        });
};

exports.createSprzet = (newSprzData) => {
    return Sprzet.create({
        Producent: newSprzData.Producent,
        id_producenta: newSprzData.id_producenta,
        Nazwa: newSprzData.Nazwa,
        Cena: newSprzData.Cena,
        Data_premiery: newSprzData.Data_premiery,
        Wymiary_opakowania: newSprzData.Wymiary_opakowania
    });
};

exports.updateSprzet = (sprzId, sprzData) => {
    const Producent = sprzData.Producent;
    const id_producenta = SprzData.id_producenta;
    const Nazwa = sprzData.Nazwa;
    const Cena = sprzData.Cena;
    const Data_premiery = sprzData.Data_premiery;
    const Wymiary_opakowania = sprzData.Wymiary_opakowania;
    return Sprzet.update(sprzData, { where: { id: sprzId } });
};

exports.deleteSprzet = (sprzId) => {
    return Sprzet.destroy({
        where: { id: sprzId }
    });
};
