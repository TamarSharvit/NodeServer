const express = require("express");
const router = express.Router();
const areaOfInterest = require('../controllers/areaOfInterestController')

router.post("/addAreaOfInterest", areaOfInterest.addAreaOfInterest);
module.exports = router