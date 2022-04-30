var PersonalinformationModel = require('../models/personalInformationModel.js');

/**
 * personalInformationController.js
 *
 * @description :: Server-side logic for managing personalInformations.
 */
module.exports = {

    /**
     * personalInformationController.list()
     */
    list: function (req, res) {
        PersonalinformationModel.find(function (err, personalInformations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting personalInformation.',
                    error: err
                });
            }
           console.log(personalInformations[0])
            return res.json(personalInformations);
        });
    },

    /**
     * personalInformationController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        PersonalinformationModel.findOne({_id: id}, function (err, personalInformation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting personalInformation.',
                    error: err
                });
            }

            if (!personalInformation) {
                return res.status(404).json({
                    message: 'No such personalInformation'
                });
            }

            return res.json(personalInformation);
        });
    },


    showSecretary: function (req, res) {
        var secretaryId = req.params.secretary;

        PersonalinformationModel.find({secretary: secretaryId}, function (err, personalInformation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting educationProgram.',
                    error: err
                });
            }

            if (!personalInformation) {
                return res.status(404).json({
                    message: 'No such educationProgram'
                });
            }

            return res.json({personalInformation, status:200});
        });
    },
    /**
     * personalInformationController.create()
     */
    create: function (req, res) {
        var personalInformation = new PersonalinformationModel({
			lastName : req.body.lastName,
			firstName : req.body.firstName,
			id : req.body.id,
			sex : req.body.sex,
			hebrowDateOfBirth : req.body.hebrowDateOfBirth,
			foreignDateOfBirth : req.body.foreignDateOfBirth,
			phone : req.body.phone,
			anotherPhone : req.body.anotherPhone,
			email : req.body.email,
			address : req.body.address,
			city : req.body.city,
			leadSource : req.body.leadSource,
			note : req.body.note,
			dateOfEntry : req.body.dateOfEntry,
			secretary : req.body.secretary
        });

        personalInformation.save(function (err, personalInformation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating personalInformation',
                    error: err
                });
            }

            return res.status(201).json(personalInformation);
        });
    },

    /**
     * personalInformationController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        PersonalinformationModel.findOne({_id: id}, function (err, personalInformation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting personalInformation',
                    error: err
                });
            }

            if (!personalInformation) {
                return res.status(404).json({
                    message: 'No such personalInformation'
                });
            }

            personalInformation.lastName = req.body.lastName ? req.body.lastName : personalInformation.lastName;
			personalInformation.firstName = req.body.firstName ? req.body.firstName : personalInformation.firstName;
			personalInformation.id = req.body.id ? req.body.id : personalInformation.id;
			personalInformation.sex = req.body.sex ? req.body.sex : personalInformation.sex;
			personalInformation.hebrowDateOfBirth = req.body.hebrowDateOfBirth ? req.body.hebrowDateOfBirth : personalInformation.hebrowDateOfBirth;
			personalInformation.foreignDateOfBirth = req.body.foreignDateOfBirth ? req.body.foreignDateOfBirth : personalInformation.foreignDateOfBirth;
			personalInformation.phone = req.body.phone ? req.body.phone : personalInformation.phone;
			personalInformation.anotherPhone = req.body.anotherPhone ? req.body.anotherPhone : personalInformation.anotherPhone;
			personalInformation.email = req.body.email ? req.body.email : personalInformation.email;
			personalInformation.address = req.body.address ? req.body.address : personalInformation.address;
			personalInformation.city = req.body.city ? req.body.city : personalInformation.city;
			personalInformation.leadSource = req.body.leadSource ? req.body.leadSource : personalInformation.leadSource;
			personalInformation.note = req.body.note ? req.body.note : personalInformation.note;
			personalInformation.dateOfEntry = req.body.dateOfEntry ? req.body.dateOfEntry : personalInformation.dateOfEntry;
			personalInformation.secretary = req.body.secretary ? req.body.secretary : personalInformation.secretary;
			
            personalInformation.save(function (err, personalInformation) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating personalInformation.',
                        error: err
                    });
                }

                return res.json(personalInformation);
            });
        });
    },

    /**
     * personalInformationController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        PersonalinformationModel.findByIdAndRemove(id, function (err, personalInformation) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the personalInformation.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
