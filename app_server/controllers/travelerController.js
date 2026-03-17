const trips = require('../data/trips.json');

// Home Page
const renderHomePage = (req, res) => {
  res.render('index', {
    title: 'Travlr Getaways',
    trips: trips
  });
};

// Travel Page
const renderTravelPage = (req, res) => {
  res.render('travel', {
    title: 'Travel',
    trips: trips
  });
};

module.exports = {
  renderHomePage,
  renderTravelPage
};