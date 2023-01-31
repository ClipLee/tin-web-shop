const express = require('express');
const router = express.Router();

const wysylkaController = require('../controllers/wysylkaController');

router.get('/', wysylkaController.showWysylkaList);
router.get('/add', wysylkaController.showAddWysylkaForm);
router.get('/edit/:wysId', wysylkaController.showEditWysylkaForm);
router.get('/details/:wysId', wysylkaController.showWysylkaDetails);
router.get('/delete/:wysId', wysylkaController.showDeleteWysylkaForm);

module.exports = router;