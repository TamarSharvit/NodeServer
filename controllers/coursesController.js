var CoursesModel = require('../models/coursesModel.js');

/**
 * coursesController.js
 *
 * @description :: Server-side logic for managing coursess.
 */
module.exports = {

    /**
     * coursesController.list()
     */
    list: function (req, res) {
        CoursesModel.find(function (err, coursess) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting courses.',
                    error: err
                });
            }

            return res.json(coursess);
        });
    },

    /**
     * coursesController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        CoursesModel.findOne({_id: id}, function (err, courses) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting courses.',
                    error: err
                });
            }

            if (!courses) {
                return res.status(404).json({
                    message: 'No such courses'
                });
            }

            return res.json(courses);
        });
    },

    /**
     * coursesController.create()
     */
    create: function (req, res) {
        var courses = new CoursesModel({
			name : req.body.name,
			price : req.body.price
        });

        courses.save(function (err, courses) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating courses',
                    error: err
                });
            }

            return res.status(201).json(courses);
        });
    },

    /**
     * coursesController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        CoursesModel.findOne({_id: id}, function (err, courses) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting courses',
                    error: err
                });
            }

            if (!courses) {
                return res.status(404).json({
                    message: 'No such courses'
                });
            }

            courses.name = req.body.name ? req.body.name : courses.name;
			courses.price = req.body.price ? req.body.price : courses.price;
			
            courses.save(function (err, courses) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating courses.',
                        error: err
                    });
                }

                return res.json(courses);
            });
        });
    },

    /**
     * coursesController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        CoursesModel.findByIdAndRemove(id, function (err, courses) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the courses.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
