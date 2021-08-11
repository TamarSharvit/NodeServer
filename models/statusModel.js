var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var statusSchema = new Schema({
	'statusName' : String,
	'code' : Number
});

module.exports = mongoose.model('status', statusSchema);
