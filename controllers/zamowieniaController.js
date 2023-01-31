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

exports.showEditZamowieniaForm = (req, res, next) => {
    res.render('pages/zamowienia/form-edit', {
        navLocation: 'zam'
    });
}

exports.deleteZamowienia = (req, res, next) => {
    res.render('pages/zamowienia/list-empty', {
        navLocation: 'zam'
    });
}

exports.showZamowieniaDetails = (req, res, next) => {
    res.render('pages/zamowienia/list-details', {
        navLocation: 'zam'
    });
}