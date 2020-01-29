const express = require('express');
const userModel = require('../models/user')
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

