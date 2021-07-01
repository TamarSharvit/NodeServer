var express = require('express');
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const jwt = require("jsonwebtoken");

const TOKEN_SECRET =
  "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

class courseDetails {

  addCourseDetails = (req, res) => {
    console.log("req.body", req.body);
    try {
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("SiurMochot");
        dbo.collection("courses").insertOne(req.body, function (err, respon) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
          // const token = generateAccessToken(myobj);
          // console.log("token", token);
          // return respon.send();
        });
        return res.send();
      });
    } catch (error) {
      throw error

    }
  }
}

module.exports = new courseDetails();