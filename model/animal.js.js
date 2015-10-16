var mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
	//ANIMAL SHOULD HAVE TYPE AND NAME
});

mongoose.model('Animal', animalSchema);