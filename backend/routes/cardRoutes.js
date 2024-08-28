const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.post('/cards', cardController.createCard);
router.get('/cards', cardController.getAllCards);
router.get('/cards/:title', cardController.getCardByTitle);

module.exports = router;