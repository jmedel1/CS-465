const express = require('express');
const router = express.Router();
const travelerController = require('../controllers/travelerController');

router.get('/', travelerController.renderHomePage);
router.get('/travel', travelerController.renderTravelPage);

module.exports = router;