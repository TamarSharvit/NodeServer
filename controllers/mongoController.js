const express = require("express");
const router = express.Router();

const createDB=( res, req)=>{
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

const createUsersCollection=(res, req)=>{
    try {
        MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          var dbo = db.db("projectDB");
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
module.exports=router;