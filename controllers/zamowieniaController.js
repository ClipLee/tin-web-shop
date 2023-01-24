const { Router } = require("express");

exports.showZamowieniaList = (req, res, next) => {
    res.render('pages/sprzet/list', {});
}

exports.showAddZamowieniaForm = (req, res, next) => {
    res.render('pages/sprzet/form', {});
}

exports.showZamowieniaDetails = (req, res, next) => {
    res.render('pages/sprzet/list-details', {});
}

