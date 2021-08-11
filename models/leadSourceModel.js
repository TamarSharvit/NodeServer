var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var leadSourceSchema = new Schema({
	'leadName' : String,
	'code' : Number
});

module.exports = mongoose.model('leadSource', leadSourceSchema);
