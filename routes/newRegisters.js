const express = require("express");
const router = express.Router();
const newRegister = require("../controllers/newRegisterController")

router.post("/data", newRegister.addRegisterToData);
module.exports = router