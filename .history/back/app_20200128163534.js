const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connect('mongodb://localhost/');
const port = process.env.PORT || 3000;
const rutas = require('./controllers/usuario');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/server', rutas);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})
