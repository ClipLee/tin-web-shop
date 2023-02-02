const express = require('express');
const router = express.Router();

const sprzApiController = require('../../api/SprzetAPI');

router.get('/', sprzApiController.getSprzet);
router.get('/:sprzId', sprzApiController.getSprzetById);
router.post('/', sprzApiController.createSprzet);
router.put('/:sprzId', sprzApiController.updateSprzet);
router.delete('/:sprzId', sprzApiController.deleteSprzet);

module.exports = router;