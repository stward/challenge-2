var express = require('express');
var Router = new express.Router();
var Animal = require('../model/goat');

Router.route('/view')
  .get(function(req, res) {
    Goat.find(function(err, animals) {
      if(err){
        console.log(err, "Error finding tasks");
      } else {
        res.render('view', {});
      }
    });
  })

Router.route('/form')
  .get(function(req, res){
    res.render('form')
  });



Router.route('/post')
.post(function(req, res) {
  // post new animal
});

module.exports = Router;
