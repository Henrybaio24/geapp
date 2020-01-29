const express = require('express');
const userModel = require('../models/user')
const router = express.Router();

router.route('/ubication')
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

