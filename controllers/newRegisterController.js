var express = require('express');

class newRegister {

  addRegisterToData = (res, req) => {
    const { id, fName, lName, email, phone, sex, leadSource, additionalPhone, foreignBirthDate, hebrowBirthDate, note } = req.body;

    try {
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("projectDB");
        var myobj = { id, fName, lName, email, phone, sex, leadSource, additionalPhone, foreignBirthDate, hebrowBirthDate, note };
        dbo.collection("registers").insertOne(myobj, function (err, respon) {
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
}

module.exports = new newRegister();