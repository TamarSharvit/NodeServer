var express = require('express');

class newInterest {

  addNewInterestToData = (res, req) => {
    const { priceDiscount, discount, price, modol, course, status} = req.body;
    var url = "mongodb://localhost:27017/";
    try {
      MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("SiurMochot");
        var myobj = { priceDiscount, discount, price, modol, course, status };
        dbo.collection("areaOfInterest").insertOne(myobj, function (err, respon) {
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

module.exports = new newInterest();