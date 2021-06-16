const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
router.get("/login/:userName/:password",usersController.login);

router.post("/signup", usersController.post);

module.exports = router;