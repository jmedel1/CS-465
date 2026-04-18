const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');
const auth = require('../authentication');
const ctrlAuth = require('../controllers/auth');

router.get('/trips', ctrlTrips.tripsList);
router.get('/trips/:tripCode', ctrlTrips.tripsFindByCode);

router.post('/login', ctrlAuth.login);

router.post('/trips', auth, ctrlTrips.tripsAddTrip);
router.put('/trips/:tripCode', auth, ctrlTrips.tripsUpdateTrip);

module.exports = router;