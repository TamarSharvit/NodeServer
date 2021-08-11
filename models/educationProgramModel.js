var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var educationProgramSchema = new Schema({
	'status' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'status'
	},
	'courseName' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'courses'
	},
	'branch' : String,
	'yearOfLearning' : String,
	'model' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'models'
	},
	'price' : Number,
	'discount' : String,
	'priceAfterDiscount' : Number,
	'paidInSystem' : Number,
	'contract' : Boolean,
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

module.exports = mongoose.model('educationProgram', educationProgramSchema);
