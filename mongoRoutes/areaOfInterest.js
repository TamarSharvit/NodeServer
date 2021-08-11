const express = require("express");
const router = express.Router();
const areaOfInterest = require('../mongoControllers/areaOfInterestController')

router.post("/addAreaOfInterest", areaOfInterest.addAreaOfInterest);
module.exports = router