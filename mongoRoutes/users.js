const express = require("express");
const router = express.Router();
const usersController = require("../mongoControllers/usersController");
router.get("/login/:email/:password",usersController.login);

router.post("/signup", usersController.post);

module.exports = router;