const express = require('express');
const bodyParser = require('body-parser');
const ruote = require('../2. Sistem Blog dengan REST API/routes/routeArtikel');
const middleware = require('./middleware/errorhandle');

require('dotenv').config;

const app = express();
const port = process.env.PORT || 3000;

//lib body
app.use(bodyParser.json());

//route
app.use('/Artikel', route);

//middleware
app.use(middleware);

//start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});