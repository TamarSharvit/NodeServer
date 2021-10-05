var EducationprogramModel = require('../models/educationProgramModel.js');

/**
 * educationProgramController.js
 *
 * @description :: Server-side logic for managing educationPrograms.
 */
module.exports = {

    /**
     * educationProgramController.list()
     */
    list: function (req, res) {
        EducationprogramModel.find(function (err, educationPrograms) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting educationProgram.',
                    error: err
                });
            }

            return res.json(educationPrograms);
        });
    },

    /**
     * educationProgramController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        EducationprogramModel.findOne({_id: id}, function (err, educationProgram) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting educationProgram.',
                    error: err
                });
            }

            if (!educationProgram) {
                return res.status(404).json({
                    message: 'No such educationProgram'
                });
            }

            return res.json(educationProgram);
        });
    },


    showSecretary: function (req, res) {
        var secretaryId = req.params.secretary;

        EducationprogramModel.find({secretary: secretaryId}, function (err, educationProgram) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting educationProgram.',
                    error: err
                });
            }

            if (!educationProgram) {
                return res.status(404).json({
                    message: 'No such educationProgram'
                });
            }

            return res.json({educationProgram, status:200});
        });
    },

    /**
     * educationProgramController.create()
     */
    create: function (req, res) {
        var educationProgram = new EducationprogramModel({
			status : req.body.status,
			courseName : req.body.courseName,
			branch : req.body.branch,
			yearOfLearning : req.body.yearOfLearning,
			price : req.body.price,
			discount : req.body.discount,
			priceAfterDiscount : req.body.priceAfterDiscount,
			paidInSystem : req.body.paidInSystem,
			contract : req.body.contract,
			dateOfEnter : req.body.dateOfEnter,
			secretary : req.body.secretary,
			student : req.body.student
        });

        educationProgram.save(function (err, educationProgram) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating educationProgram',
                    error: err
                });
            }

            return res.status(201).json(educationProgram);
        });
    },

    /**
     * educationProgramController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        EducationprogramModel.findOne({_id: id}, function (err, educationProgram) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting educationProgram',
                    error: err
                });
            }

            if (!educationProgram) {
                return res.status(404).json({
                    message: 'No such educationProgram'
                });
            }

            educationProgram.status = req.body.status ? req.body.status : educationProgram.status;
			educationProgram.courseName = req.body.courseName ? req.body.courseName : educationProgram.courseName;
			educationProgram.branch = req.body.branch ? req.body.branch : educationProgram.branch;
			educationProgram.yearOfLearning = req.body.yearOfLearning ? req.body.yearOfLearning : educationProgram.yearOfLearning;
			educationProgram.price = req.body.price ? req.body.price : educationProgram.price;
			educationProgram.discount = req.body.discount ? req.body.discount : educationProgram.discount;
			educationProgram.priceAfterDiscount = req.body.priceAfterDiscount ? req.body.priceAfterDiscount : educationProgram.priceAfterDiscount;
			educationProgram.paidInSystem = req.body.paidInSystem ? req.body.paidInSystem : educationProgram.paidInSystem;
			educationProgram.contract = req.body.contract ? req.body.contract : educationProgram.contract;
			educationProgram.dateOfEnter = req.body.dateOfEnter ? req.body.dateOfEnter : educationProgram.dateOfEnter;
			educationProgram.secretary = req.body.secretary ? req.body.secretary : educationProgram.secretary;
			educationProgram.student = req.body.student ? req.body.student : educationProgram.student;
			
            educationProgram.save(function (err, educationProgram) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating educationProgram.',
                        error: err
                    });
                }

                return res.json(educationProgram);
            });
        });
    },

    /**
     * educationProgramController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        EducationprogramModel.findByIdAndRemove(id, function (err, educationProgram) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the educationProgram.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
