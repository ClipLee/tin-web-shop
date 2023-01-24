const { Router } = require("express");

exports.showWysylkaList = (req, res, next) => {
    res.render('pages/sprzet/list-wys', {});
}

exports.showAddWysylkaForm = (req, res, next) => {
    res.render('pages/sprzet/form-wys', {});
}

exports.showWysylkaDetails = (req, res, next) => {
    res.render('pages/sprzet/list-wys-details', {});
}

