var UsersModel = require('../models/usersModel.js');

/**
 * usersController.js
 *
 * @description :: Server-side logic for managing userss.
 */
module.exports = {

    /**
     * usersController.list()
     */
    list: function (req, res) {
        UsersModel.find(function (err, userss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting users.',
                    error: err
                });
            }

            return res.json(userss);
        });
    },

    /**
     * usersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        UsersModel.findOne({_id: id}, function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting users.',
                    error: err
                });
            }

            if (!users) {
                return res.status(404).json({
                    message: 'No such users'
                });
            }

            return res.json(users);
        });
    },

    /**
     * usersController.create()
     */
    create: function (req, res) {
        var users = new UsersModel({
			id : req.body.id,
			firstName : req.body.firstName,
			lastName : req.body.lastName,
			email : req.body.email,
			password : req.body.password,
			phone : req.body.phone,
			addres : req.body.addres,
			employee/manager : req.body.employee/manager
        });

        users.save(function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating users',
                    error: err
                });
            }

            return res.status(201).json(users);
        });
    },

    /**
     * usersController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        UsersModel.findOne({_id: id}, function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting users',
                    error: err
                });
            }

            if (!users) {
                return res.status(404).json({
                    message: 'No such users'
                });
            }

            users.id = req.body.id ? req.body.id : users.id;
			users.firstName = req.body.firstName ? req.body.firstName : users.firstName;
			users.lastName = req.body.lastName ? req.body.lastName : users.lastName;
			users.email = req.body.email ? req.body.email : users.email;
			users.password = req.body.password ? req.body.password : users.password;
			users.phone = req.body.phone ? req.body.phone : users.phone;
			users.addres = req.body.addres ? req.body.addres : users.addres;
			users.employee/manager = req.body.employee/manager ? req.body.employee/manager : users.employee/manager;
			
            users.save(function (err, users) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating users.',
                        error: err
                    });
                }

                return res.json(users);
            });
        });
    },

    /**
     * usersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        UsersModel.findByIdAndRemove(id, function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the users.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
