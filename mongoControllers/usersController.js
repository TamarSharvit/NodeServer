var express = require('express');
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const jwt = require("jsonwebtoken");
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });srv1:27017

const TOKEN_SECRET =
  "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

const generateAccessToken = (email, password) => {
  return jwt.sign({ email: email, password: password }, TOKEN_SECRET);
};
class usersController {
  login = (req, res) => {
    console.log("login!!")
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    const { email, password } = req.params;
    //Check the pwd in the server
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      console.log("connect");
      var dbo = db.db("SiurMochot");
      // var query = { user };
      // dbo.collection("users").find({ email}).toArray(function (err, result) {
      console.log("email", email);
      dbo.collection("users").findOne({ email }, (err, result) => {
        console.log("result", result);
        if (result && result.password === password) {
          const token = generateAccessToken(email, password);
          console.log("token", token);
          return res.json({ token, status: 200 }).send();
        } else {
          return res.json({ status: 401 }).send();
        }
      }
      )


      db.close();
      // if (!result || result.length === 0) {
      //   return res.status(404).send();
      // }

      // if (result[0].password = password) {
      //   console.log("resolt[0]" + result[0]);
      //   const token = generateAccessToken(email, password);
      //   console.log("token", token);
      //   return res.json({ token }).send();
      // } else {
      //   return res.status(401).send();
      // }
    }
    );

  }


  post = (req, res) => {
    const { id, fName, lName, email, password } = req.body;
    //    //Validations.
    //    //Check if user exists
    var url = "mongodb://localhost:27017/";
    try {
      MongoClient.connect(url, function (err, db) {
        try {
          if (err) throw err;
          var dbo = db.db("SiurMochot");
          var myobj = { id, fName, lName, email, password };
          dbo.collection("users").insertOne(myobj, function (err, respon) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
            // const token = generateAccessToken(myobj);
            // console.log("token", token);
            // return respon.send();
          });
          return res.send();
        } catch (error) {
          throw error
        }
      });
    } catch (error) {
      throw error

    }
  }
}
module.exports = new usersController();






// var MongoClient = require('mongodb').MongoClient;
// const jwt = require("jsonwebtoken");
// var url = "mongodb://localhost:27017/mySchoolDB";

// class Login {
//   TOKEN_SECRET = "F9EACB0E0AB8102E999DF5E3808B215C028448E868333041026C481960EFC126";

//   generateAccessToken = (username) => {
//     return jwt.sign({ username }, TOKEN_SECRET);
//   };

//   login = (req, res) => {
//     try {
//       res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
//       const { user, password } = req.query;
//       if (user == '1' && password == '1')
//         return res.json({ kind: 'admin' });
//       MongoClient.connect(url, async function (err, db) {
//         if (err)
//           return res.status(500).send(err);
//         var dbo = db.db("mySchoolDB");
//         var query = { email: user, password };
//         let result
//         result = await dbo.collection("student").findOne(query)
//           if (result) {
//             return res.json({ kind: 'student', result });
//           }

//         result = await dbo.collection("teacher").findOne(query)
//         if (result) {
//           return res.json({ kind: 'teacher', result });
//         }
//         db.close();
//       });
//   } catch(error) {
//     throw error
//   }
// }
// }