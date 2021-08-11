var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var modelsSchema = new Schema({
	'yearOfLearning' : String,
	'branch' : String,
	'morning/evening' : String
});

module.exports = mongoose.model('models', modelsSchema);
