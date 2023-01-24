const { Router } = require("express");

exports.showWysylkaList = (req, res, next) => {
    res.render('pages/wysylka/list-wys', {});
}

exports.showAddWysylkaForm = (req, res, next) => {
    res.render('pages/wysylka/form-wys', {});
}

exports.showWysylkaDetails = (req, res, next) => {
    res.render('pages/wysylka/list-wys-details', {});
}

