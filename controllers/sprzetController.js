const { Router } = require("express");

exports.showSprzetList = (req, res, next) => {
    res.render('pages/sprzet/sprzet', {
        navLocation: 'sprz'
    }); //generowanie widoku na podstawie wybranego szablonu
}

exports.showAddSprzetForm = (req, res, next) => {
    res.render('pages/sprzet/form-sprz', {
        navLocation: 'sprz'
    });
}

exports.showSprzetDetails = (req, res, next) => {
    res.render('pages/sprzet/list-sprz-details', {
        navLocation: 'sprz'
    });
}