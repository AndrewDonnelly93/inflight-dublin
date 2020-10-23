const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const cors = require('cors');

const flightRoutes = require('./routes/fligth-routes');

const app = express();

app.use(cors());

mongoose.connect(keys.mongoURI,  {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('mongoDB connected'))
    .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/flights', flightRoutes);

module.exports = app;
