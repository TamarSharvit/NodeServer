
const express = require("express");
const router = express.Router();
const editStatus = require("../controllers/editStatusController")

router.post("/addEditStatus", editStatus.addEditStatus);
module.exports = router