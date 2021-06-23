const express = require("express");
const router = express.Router();
const newRegister = require("../controllers/newRegisterController")

router.post("/addRegisterToData", newRegister.addRegisterToData);
module.exports = router