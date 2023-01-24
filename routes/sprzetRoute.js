const express = require('express');
const router = express.Router();

const sprzetController = require('../controllers/sprzetController');

router.get('/', sprzetController.showSprzetList);
router.get('/add', sprzetController.showAddSprzetForm);
router.get('/details/:sprzId', sprzetController.showSprzetDetails);

module.exports = router;