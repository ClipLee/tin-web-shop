const { Router } = require("express");

exports.showWysylkaList = (req, res, next) => {
    res.render('pages/wysylka/list-wys', {
        navLocation: 'wys'
    });
}

exports.showAddWysylkaForm = (req, res, next) => {
    res.render('pages/wysylka/form-wys', {
        navLocation: 'wys'
    });
}

exports.showWysylkaDetails = (req, res, next) => {
    res.render('pages/wysylka/list-wys-details', {
        navLocation: 'wys'
    });
}

