const mongoose = require('mongoose');

const { Schema } = mongoose;

const usua = new Schema(
  {
    fecha: {type: Date},
    ubicacion: {type: String},
    user: {type: String}
  }
);

module.exports = mongoose.model('ubicaciones', ubicacionModel);