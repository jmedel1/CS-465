const express = require('express');
const path = require('path');
const hbs = require('hbs');
const travelerRoutes = require('./app_server/routes');

require('./app_server/models/db');

const app = express();
const PORT = 3000;

// Set views folder
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Set view engine
app.set('view engine', 'hbs');

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', travelerRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});