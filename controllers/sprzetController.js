const { Router } = require("express");

exports.showSprzetList = (req, res, next) => {
    res.render('pages/sprzet/sprzet', {}); //generowanie widoku na podstawie wybranego szablonu
}

exports.showAddSprzetForm = (req, res, next) => {
    res.render('pages/sprzet/form-sprz', {});
}

exports.showSprzetDetails = (req, res, next) => {
    res.render('pages/sprzet/list-sprz-details', {});
}

