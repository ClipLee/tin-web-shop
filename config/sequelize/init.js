const sequelize = require('./sequelize');

const Sprzet = require('../../model/sequelize/Sprzet');
const Wysylka = require('../../model/sequelize/Wysylka');
const Sprzet_do_sprzedazy = require('../../model/sequelize/Sprzet_do_sprzedazy');

module.exports = () => {
    Sprzet.hasMany(Sprzet_do_sprzedazy, { as: 'sprzet_do_sprzedazy', foreignKey: { name: 'sprz_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Sprzet_do_sprzedazy.belongsTo(Sprzet, { as: 'sprzet', foreignKey: { name: 'sprz_id', allowNull: false } });
    Wysylka.hasMany(Sprzet_do_sprzedazy, { as: 'sprzet_do_sprzedazy', foreignKey: { name: 'wys_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Sprzet_do_sprzedazy.belongsTo(Wysylka, { as: 'wysylka', foreignKey: { name: 'wys_id', allowNull: false } });

    let allSprzs, allWyss;
    return sequelize
        .sync({ force: true })
        .then(() => {
            return Sprzet.findAll();
        })
        .then(sprzts => {
            if (!sprzts || sprzts.length == 0) {
                return Sprzet.bulkCreate([
                    { Producent: 'AMD', id_producenta: 'AMDID12345', Nazwa: 'RX 6800 XT', Cena: 5320.00, Data_premiery: '1999-02-02', Wymiary_opakowania: '26,7 × 12,0 cm' },
                    { Producent: 'AMD', id_producenta: 'AMDID12345', Nazwa: 'RX 5600', Cena: 1230.50, Data_premiery: '2002-03-05', Wymiary_opakowania: '13,5 × 19,0 cm' },
                    { Producent: 'Intel', id_producenta: 'i912430', Nazwa: 'i9-12900KF', Cena: 5320.99, Data_premiery: '2013-07-11', Wymiary_opakowania: '30,7 × 5,0 cm' },
                ])
                    .then(() => {
                        return Sprzet.findAll();
                    });
            } else {
                return sprzts;
            }
        })
        .then(sprzts => {
            allSprzs = sprzts;
            return Wysylka.findAll();
        })
        .then(wyss => {
            if (!wyss || wyss.length == 0) {
                return Wysylka.bulkCreate([
                    { Data_wysylki: '1999-02-02', Adres_docelowy: 'Żwirowa 12 04-123, Gniezno, Polska', Dane_odbiorcy: 'Andrzej Kowalski', Sposob_dostawy: 'Kurier' },
                    { Data_wysylki: '2002-03-05', Adres_docelowy: 'Walczykowa 6, 02-137, Słupsk, Polska', Dane_odbiorcy: 'Otylia Jedrzejczyk', Sposob_dostawy: 'Odbior osobisty' }
                ])
                    .then(() => {
                        return Sprzet.findAll();
                    });
            } else {
                return wyss;
            }
        })
        .then(depts => {
            allWyss = wyss;
            return Sprzet_do_sprzedazy.findAll();
        })
        .then(sprzdss => {
            if (!sprzdss || sprzdss.length == 0) {
                return Sprzet_do_sprzedazy.bulkCreate([
                    { sprz_id: allSprzs[0]._id, wys_id: allWyss[0]._id, Opakowanie_prezentowe: 1, Numer_seryjny: 'P124OASDX1' },
                    { sprz_id: allSprzs[1]._id, wys_id: allWyss[0]._id, Opakowanie_prezentowe: 0, Numer_seryjny: 'TX31230S9' },
                    { sprz_id: allSprzs[0]._id, wys_id: allWyss[1]._id, Opakowanie_prezentowe: 0, Numer_seryjny: 'CX124A451' }
                ]);
            } else {
                return sprzdss;
            }
        });
};