var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var kindOfReportSchema = new Schema({
	'reportName' : String,
	'code' : Number
});

module.exports = mongoose.model('kindOfReport', kindOfReportSchema);
