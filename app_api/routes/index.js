const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');

// GET all trips
router.get('/trips', ctrlTrips.tripsList);

// GET one trip by code
router.get('/trips/:tripCode', ctrlTrips.tripsFindByCode);

module.exports = router;