const express = require("express");
const router = express.Router();
const modelDetails = require("../controllers/modelDetailsController")

router.post("/addModelDetails", modelDetails.addModelDetails);
module.exports = router