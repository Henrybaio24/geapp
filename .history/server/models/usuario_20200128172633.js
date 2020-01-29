const mongoose = require('mongoose');

const { Schema } = mongoose;

const usuario = new Schema(
  {
    user: {type: String},
    fecha: {type: Date},
    ubicacion: {type: String}
  }
);

module.exports = mongoose.model('usuarios', usuario);