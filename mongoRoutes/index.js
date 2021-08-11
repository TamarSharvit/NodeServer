const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoController = require('../mongoControllers/mongoController')
// var MongoClient = require('mongodb').MongoClient;
// var urlToCreate = "mongodb://srv1:27017/<SiurMochot>DB";
// var url = "mongodb://srv1:27017/";



router.get("/createDB", mongoController.createDB);

router.get("/createCollection", mongoController.createUsersCollection);
// router.get("/createUserColection", createUsersCollection);













module.exports = router;
