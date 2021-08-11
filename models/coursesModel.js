var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var coursesSchema = new Schema({
	'name' : String,
	'price' : Number
});

module.exports = mongoose.model('courses', coursesSchema);
