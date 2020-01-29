const mongoose = require('mongoose');

const { Schema } = mongoose;

const usuario = new Schema(
  {
    fecha: {type: Date},
    ubicacion: {type: String},
    user: {type: String}
  }
);

module.exports = mongoose.model('ubicaciones', ubicacionModel);