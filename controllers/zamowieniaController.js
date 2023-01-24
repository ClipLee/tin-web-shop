const { Router } = require("express");

exports.showZamowieniaList = (req, res, next) => {
    res.render('pages/zamowienia/list', {
        navLocation: 'zam'
    });
}

exports.showAddZamowieniaForm = (req, res, next) => {
    res.render('pages/zamowienia/form', {
        navLocation: 'zam'
    });
}

exports.showZamowieniaDetails = (req, res, next) => {
    res.render('pages/zamowienia/list-details', {
        navLocation: 'zam'
    });
}

