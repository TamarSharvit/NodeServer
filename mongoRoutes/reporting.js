const express = require("express");
const router = express.Router();
const reporting = require("../mongoControllers/reportingController")

router.post("/addReporting", reporting.addReporting );
module.exports = router