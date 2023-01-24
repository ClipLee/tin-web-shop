const { Router } = require("express");

exports.showZamowieniaList = (req, res, next) => {
    res.render('pages/zamowienia/list', {});
}

exports.showAddZamowieniaForm = (req, res, next) => {
    res.render('pages/zamowienia/form', {});
}

exports.showZamowieniaDetails = (req, res, next) => {
    res.render('pages/zamowienia/list-details', {});
}

