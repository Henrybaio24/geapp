const express = require('express');
const userModel = require('../models/user')
const routerApp = express.Router();

routerApp.route('/u')
  .post((req, res) => {
    let user = new userModel(req.body)

    user.save((err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.send(true);
    })
  });


module.exports = routerApp;

