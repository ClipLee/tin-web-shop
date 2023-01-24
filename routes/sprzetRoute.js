const express = require('express');
const router = express.Router();

const sprzetController = require('../controllers/sprzetController');

router.get('/', sprzetController.showSprzetList);

router.get('/add', sprzetController.showAddSprzetForm);
router.get('/details/:sprzId', sprzetController.showSprzetDetails);

router.get('/', function (req, res, next) {
    res.render('pages/sprzet/sprzet', { navLocation: 'sprz' });
});

module.exports = router; //eksportuje obiekt routera, do uzycia w innych czesciach aplikacji