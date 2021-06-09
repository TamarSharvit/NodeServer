var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
const login=(res, req)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const { userName, password } = req.params;
  //Check the pwd in the server
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("projectDB");
    var query = { user };
    dbo.collection("users").find(query).toArray(function (err, result) {
      if (err) throw err;
      if (!result || result.length === 0) {
        return res.status(401).send();
      }
      db.close();
      if (result[0].password = password) {
        const token = generateAccessToken(user);
        console.log("token", token);
        return res.json({ token }).send();
      } else {
        return res.status(401).send();
      }
    });
  });
}


const post=(res, req)=>{
    const { id, fName, lName, email, password } = req.body; //Adress, phone ....
    //    //Validations.
    //    //Check if user exists
    try {
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("projectDB");
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
      });
    } catch (error) {
      res.status(500).send(error)
    
    }
}

module.exports = router;
