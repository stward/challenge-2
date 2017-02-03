var mongoose = require('mongoose');
var Scooma = mongoose.Schema;

var AnimalSchema = new Schema({
  // I will have Name Species and Color
});

module.exports = mongoose.model('Animal', AnimalSchema);
