const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/signup.controller");

router.post("/", signUpController.signUpUser);

module.exports = router;
