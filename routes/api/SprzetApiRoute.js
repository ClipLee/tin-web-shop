const express = require('express');
const router = express.Router();

const sprzApiController = require('../../api/SprzetAPI');

router.get('/', sprzApiController.getSprzet);
router.get('/:sprzId', sprzApiController.getSprzetById);
router.post('/', sprzApiController.creSprzetst);
router.put('/:sprzId', isAuth, sprzApiController.updSprzetst);
router.delete('/:sprzId', isAuth, sprzApiController.delSprzetst);

module.exports = router;