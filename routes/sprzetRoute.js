const express = require('express');
const router = express.Router();

const sprzetController = require('../controllers/sprzetController');

router.get('/', sprzetController.showSprzetList);
router.get('/add', sprzetController.showAddSprzetForm);
router.get('/edit/:sprzId', sprzetController.showEditSprzetForm);
router.get('/details/:sprzId', sprzetController.showSprzetDetails);
router.get('/delete/:sprzId', sprzetController.deleteSprzet);


module.exports = router;