const express = require("express");
const router = express.Router();
const courseDetails = require("../controllers/courseDetailsController")

router.post("/addCourseDetails", courseDetails.addCourseDetails );
module.exports = router