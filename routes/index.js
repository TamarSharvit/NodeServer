const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

var MongoClient = require('mongodb').MongoClient;
var urlToCreate = "mongodb://srv1:27017/<project>DB";
var url = "mongodb://srv1:27017/";

const TOKEN_SECRET =
  "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

const generateAccessToken = (username) => {
  return jwt.sign({ username }, TOKEN_SECRET);
};

router.get("/createDB", createDB);
 
router.get("/createUserColection", createUsersCollection);
  



  






 

module.exports = router;
