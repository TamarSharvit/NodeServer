var LeadsourceModel = require('../models/leadSourceModel.js');

/**
 * leadSourceController.js
 *
 * @description :: Server-side logic for managing leadSources.
 */
module.exports = {

    /**
     * leadSourceController.list()
     */
    list: function (req, res) {
        LeadsourceModel.find(function (err, leadSources) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting leadSource.',
                    error: err
                });
            }

            return res.json(leadSources);
        });
    },

    /**
     * leadSourceController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        LeadsourceModel.findOne({_id: id}, function (err, leadSource) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting leadSource.',
                    error: err
                });
            }

            if (!leadSource) {
                return res.status(404).json({
                    message: 'No such leadSource'
                });
            }

            return res.json(leadSource);
        });
    },

    /**
     * leadSourceController.create()
     */
    create: function (req, res) {
        var leadSource = new LeadsourceModel({
			leadName : req.body.leadName,
			code : req.body.code
        });

        leadSource.save(function (err, leadSource) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating leadSource',
                    error: err
                });
            }

            return res.status(201).json(leadSource);
        });
    },

    /**
     * leadSourceController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        LeadsourceModel.findOne({_id: id}, function (err, leadSource) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting leadSource',
                    error: err
                });
            }

            if (!leadSource) {
                return res.status(404).json({
                    message: 'No such leadSource'
                });
            }

            leadSource.leadName = req.body.leadName ? req.body.leadName : leadSource.leadName;
			leadSource.code = req.body.code ? req.body.code : leadSource.code;
			
            leadSource.save(function (err, leadSource) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating leadSource.',
                        error: err
                    });
                }

                return res.json(leadSource);
            });
        });
    },

    /**
     * leadSourceController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        LeadsourceModel.findByIdAndRemove(id, function (err, leadSource) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the leadSource.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
