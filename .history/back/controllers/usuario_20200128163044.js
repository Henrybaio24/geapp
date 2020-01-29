const express = require('express');
const usuarioM = require('../models/usuario')
const routerApp = express.Router();

routerApp.route('/usuario')
  .post((req, res) => {
    let usuario = new usuarioModel(req.body)

    usuario.save((err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.send(true);
    })
  });


module.exports = routerApp;

