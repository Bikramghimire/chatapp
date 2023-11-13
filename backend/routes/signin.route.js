const express = require("express");
const router = express.Router();
const signInController = require("../controllers/signin.controller.js");

router.post("/", signInController.signInUser);

module.exports = router;
