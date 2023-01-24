const express = require('express');
const router = express.Router();

const wysylkaController = require('../controllers/wysylkaController');

router.get('/', wysylkaController.showWysylkaList);
router.get('/add', wysylkaController.showAddWysylkaForm);
router.get('/details/:wysId', wysylkaController.showWysylkaDetails);

module.exports = router;