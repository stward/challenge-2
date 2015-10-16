var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }))


router.route('/')

/* GET All Blogs */
  .get(function(req, res) {
    mongoose.model('Animal').find({}, function(err, animals){
      if(err){
        //DO SOMETHING
      } else {
        //DO SOMETHING WITH THE RESPONSE
      }
    });
  })

  .post(function(req, res){

    //save the request variables

    mongoose.model('Animal').create({
      //Use the variables
    }, function(err, animal){
      if(err){
        //DO SOMETHING
      } else{
        //DO SOMETHING WITH THE RESPONSE
      }
    });
  });

module.exports = router;