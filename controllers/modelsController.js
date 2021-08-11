var ModelsModel = require('../models/modelsModel.js');

/**
 * modelsController.js
 *
 * @description :: Server-side logic for managing modelss.
 */
module.exports = {

    /**
     * modelsController.list()
     */
    list: function (req, res) {
        ModelsModel.find(function (err, modelss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting models.',
                    error: err
                });
            }

            return res.json(modelss);
        });
    },

    /**
     * modelsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        ModelsModel.findOne({_id: id}, function (err, models) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting models.',
                    error: err
                });
            }

            if (!models) {
                return res.status(404).json({
                    message: 'No such models'
                });
            }

            return res.json(models);
        });
    },

    /**
     * modelsController.create()
     */
    create: function (req, res) {
        var models = new ModelsModel({
			yearOfLearning : req.body.yearOfLearning,
			branch : req.body.branch,
			morning/evening : req.body.morning/evening
        });

        models.save(function (err, models) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating models',
                    error: err
                });
            }

            return res.status(201).json(models);
        });
    },

    /**
     * modelsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ModelsModel.findOne({_id: id}, function (err, models) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting models',
                    error: err
                });
            }

            if (!models) {
                return res.status(404).json({
                    message: 'No such models'
                });
            }

            models.yearOfLearning = req.body.yearOfLearning ? req.body.yearOfLearning : models.yearOfLearning;
			models.branch = req.body.branch ? req.body.branch : models.branch;
			models.morning/evening = req.body.morning/evening ? req.body.morning/evening : models.morning/evening;
			
            models.save(function (err, models) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating models.',
                        error: err
                    });
                }

                return res.json(models);
            });
        });
    },

    /**
     * modelsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ModelsModel.findByIdAndRemove(id, function (err, models) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the models.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
