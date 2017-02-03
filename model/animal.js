var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimalSchema = new Schema({
  // I will have Name Species and Color
  name:    String,
  species: String,
  color:   String
});

module.exports = mongoose.model('Animal', AnimalSchema);
