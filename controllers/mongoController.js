const express = require("express");
const MongoClient = require('mongodb').MongoClient;
var urlToCreate = "mongodb://localhost/SiurMochot";
var url = "mongodb://localhost:27017/";
class Mongo {
  createDB = (req, res) => {
    MongoClient.connect(urlToCreate, function (err, db) {
      console.log("err", err)
      if (err) {
        console.error(err)
      } else {
        console.log("Database created!");
        db.close();
      }
      res.send();
    });
  }
  // "mongodb://srv1:27017/SIURMOCHOT"
  createUsersCollection = (res, req) => {
    try {
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("SiurMochot");
        dbo.createCollection("users", function (err, res) {
          if (err) throw err;
          console.log("Collection created!");
          db.close();
          res.send('db created')
        });
      });
    }
    catch (error) {
      res.status(500).send(error)
    }
  }


}
module.exports = new Mongo();