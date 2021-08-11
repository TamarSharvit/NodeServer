var ReportingModel = require('../models/reportingModel.js');

/**
 * reportingController.js
 *
 * @description :: Server-side logic for managing reportings.
 */
module.exports = {

    /**
     * reportingController.list()
     */
    list: function (req, res) {
        ReportingModel.find(function (err, reportings) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reporting.',
                    error: err
                });
            }

            return res.json(reportings);
        });
    },

    /**
     * reportingController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ReportingModel.findOne({_id: id}, function (err, reporting) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reporting.',
                    error: err
                });
            }

            if (!reporting) {
                return res.status(404).json({
                    message: 'No such reporting'
                });
            }

            return res.json(reporting);
        });
    },

    /**
     * reportingController.create()
     */
    create: function (req, res) {
        var reporting = new ReportingModel({
			reportDetails : req.body.reportDetails,
			kindOfReport : req.body.kindOfReport,
			reportStatus : req.body.reportStatus,
			dateToTreatment : req.body.dateToTreatment,
			dateOfEnter : req.body.dateOfEnter,
			secretary : req.body.secretary,
			student : req.body.student
        });

        reporting.save(function (err, reporting) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating reporting',
                    error: err
                });
            }

            return res.status(201).json(reporting);
        });
    },

    /**
     * reportingController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ReportingModel.findOne({_id: id}, function (err, reporting) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting reporting',
                    error: err
                });
            }

            if (!reporting) {
                return res.status(404).json({
                    message: 'No such reporting'
                });
            }

            reporting.reportDetails = req.body.reportDetails ? req.body.reportDetails : reporting.reportDetails;
			reporting.kindOfReport = req.body.kindOfReport ? req.body.kindOfReport : reporting.kindOfReport;
			reporting.reportStatus = req.body.reportStatus ? req.body.reportStatus : reporting.reportStatus;
			reporting.dateToTreatment = req.body.dateToTreatment ? req.body.dateToTreatment : reporting.dateToTreatment;
			reporting.dateOfEnter = req.body.dateOfEnter ? req.body.dateOfEnter : reporting.dateOfEnter;
			reporting.secretary = req.body.secretary ? req.body.secretary : reporting.secretary;
			reporting.student = req.body.student ? req.body.student : reporting.student;
			
            reporting.save(function (err, reporting) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating reporting.',
                        error: err
                    });
                }

                return res.json(reporting);
            });
        });
    },

    /**
     * reportingController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ReportingModel.findByIdAndRemove(id, function (err, reporting) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the reporting.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
