const express = require('express');
const router = express.Router();

const zamowieniaController = require('../controllers/zamowieniaController');

router.get('/', zamowieniaController.showZamowieniaList);
router.get('/add', zamowieniaController.showAddZamowieniaForm);
router.get('/edit/:zamId', zamowieniaController.showEditZamowieniaForm);
router.get('/details/:zamId', zamowieniaController.showZamowieniaDetails);
router.get('/delete/:zamId', zamowieniaController.deleteZamowienia);

module.exports = router;