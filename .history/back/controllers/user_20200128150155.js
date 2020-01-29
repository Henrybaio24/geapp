const express = require('express');
const userModel = require('../models/user')
const routerApi = express.Router();

routerApi.route('/ubication')
  .post((req, res) => {
    let user = new userModel(req.body)

    ubicaciones.save((err,resp) => {
      if(err){
        return res.json(err);
      }
      return res.send(true);
    })
  });


module.exports = routerApi;

