var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var reportingSchema = new Schema({
	'reportDetails' : String,
	'kindOfReport' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'kindOfReport'
	},
	'reportStatus' : String,
	'dateToTreatment' : Date,
	'dateOfEnter' : Date,
	'secretary' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'users'
	},
	'student' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'personalInformation'
	}
});

module.exports = mongoose.model('reporting', reportingSchema);
