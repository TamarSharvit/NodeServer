const express = require("express");
const router = express.Router();
const newInterestController = require("../controllers/newInterestController")

router.post("/addInterestToData", newInterestController.addNewInterestToData);
module.exports = router