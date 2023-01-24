const express = require('express');
const router = express.Router();

const sprzetControler = require('../controllers/sprzetController');

router.get('/', sprzetControler.showSprzetList);

router.get('/add', sprzetController.showAddSprzetForm);
router.get('/details/:sprzId', sprzetControler.showSprzetDetails);

module.exports = router; //eksportuje obiekt routera, do uzycia w innych czesciach aplikacji