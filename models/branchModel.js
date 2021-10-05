var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var branchSchema = new Schema({
	'name' : String,
	'code' : Number
});

module.exports = mongoose.model('branch', branchSchema);
