const express = require('express');
const userModel = require('../models/user')
const routerApp = express.Router();

routerApp.route('/usuario')
  .post((req, res) => {
    let user = new usuarioModel(req.body)

    user.save((err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.send(true);
    })
  });


module.exports = routerApp;

