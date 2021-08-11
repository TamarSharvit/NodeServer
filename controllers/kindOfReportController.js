var KindofreportModel = require('../models/kindOfReportModel.js');

/**
 * kindOfReportController.js
 *
 * @description :: Server-side logic for managing kindOfReports.
 */
module.exports = {

    /**
     * kindOfReportController.list()
     */
    list: function (req, res) {
        KindofreportModel.find(function (err, kindOfReports) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting kindOfReport.',
                    error: err
                });
            }

            return res.json(kindOfReports);
        });
    },

    /**
     * kindOfReportController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        KindofreportModel.findOne({_id: id}, function (err, kindOfReport) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting kindOfReport.',
                    error: err
                });
            }

            if (!kindOfReport) {
                return res.status(404).json({
                    message: 'No such kindOfReport'
                });
            }

            return res.json(kindOfReport);
        });
    },

    /**
     * kindOfReportController.create()
     */
    create: function (req, res) {
        var kindOfReport = new KindofreportModel({
			reportName : req.body.reportName,
			code : req.body.code
        });

        kindOfReport.save(function (err, kindOfReport) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating kindOfReport',
                    error: err
                });
            }

            return res.status(201).json(kindOfReport);
        });
    },

    /**
     * kindOfReportController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        KindofreportModel.findOne({_id: id}, function (err, kindOfReport) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting kindOfReport',
                    error: err
                });
            }

            if (!kindOfReport) {
                return res.status(404).json({
                    message: 'No such kindOfReport'
                });
            }

            kindOfReport.reportName = req.body.reportName ? req.body.reportName : kindOfReport.reportName;
			kindOfReport.code = req.body.code ? req.body.code : kindOfReport.code;
			
            kindOfReport.save(function (err, kindOfReport) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating kindOfReport.',
                        error: err
                    });
                }

                return res.json(kindOfReport);
            });
        });
    },

    /**
     * kindOfReportController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        KindofreportModel.findByIdAndRemove(id, function (err, kindOfReport) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the kindOfReport.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
