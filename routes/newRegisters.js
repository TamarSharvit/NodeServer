const express = require("express");
const router = express.Router();
const newRegisterController = require("../controllers/newRegisterController")

router.post("/addRegisterToData", newRegisterController.addRegisterToData);
module.exports = router