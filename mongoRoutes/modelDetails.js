const express = require("express");
const router = express.Router();
const modelDetails = require("../mongoControllers/modelDetailsController")

router.post("/addModelDetails", modelDetails.addModelDetails);
module.exports = router