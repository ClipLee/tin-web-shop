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

exports.showEditSprzetForm = (req, res, next) => {
    res.render('pages/sprzet/form-sprz-edit', {
        navLocation: 'sprz'
    });
}

exports.showSprzetDetails = (req, res, next) => {
    res.render('pages/sprzet/list-sprz-details', {
        navLocation: 'sprz'
    });
}

exports.deleteSprzet = (req, res, next) => {
    res.render('pages/sprzet/list-sprz-empty', {
        navLocation: 'sprz'
    });
}