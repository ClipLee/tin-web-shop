const express = require('express');
const router = express.Router();

const wysylkaController = require('../controllers/wysylkaController');

router.get('/', wysylkaController.showWysylkaList);

router.get('/add', wysylkaController.showAddWysylkaForm);
router.get('/details/:wysId', wysylkaController.showWysylkaDetails);

router.get('/', function (req, res, next) {
    res.render('pages/wysylka/list-wys', { navLocation: 'wys' });
});

module.exports = router;