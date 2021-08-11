var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var personalInformationSchema = new Schema({
	'lastName' : String,
	'firstName' : String,
	'id' : String,
	'sex' : String,
	'hebrowDateOfBirth' : Date,
	'foreignDateOfBirth' : Date,
	'phone' : String,
	'anotherPhone' : String,
	'email' : String,
	'address' : String,
	'city' : String,
	'leadSource' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'leadSource'
	},
	'note' : String,
	'dateOfEntry' : Date,
	'secretary' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'users'
	}
});

module.exports = mongoose.model('personalInformation', personalInformationSchema);
