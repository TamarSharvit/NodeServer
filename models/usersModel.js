var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usersSchema = new Schema({
	'id' : String,
	'firstName' : String,
	'lastName' : String,
	'email' : String,
	'password' : String,
	'phone' : String,
	'addres' : String,
	'employeeManager' : String
});

module.exports = mongoose.model('users', usersSchema);
