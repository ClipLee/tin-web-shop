const express = require('express');
const router = express.Router();

const zamowieniaController = require('../controllers/zamowieniaController');

router.get('/', zamowieniaController.showZamowieniaList);

router.get('/add', zamowieniaController.showAddZamowieniaForm);
router.get('/details/:zamId', zamowieniaController.showZamowieniaDetails);

module.exports = router;