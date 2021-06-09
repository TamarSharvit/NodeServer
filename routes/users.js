const express = require("express");
const router = express.Router();

router.get("/login/:userName/:password", login);

router.post("/signup", post);