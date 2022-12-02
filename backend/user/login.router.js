const mongoose = require("mongoose");
const  webFramework = require("express");
const router = webFramework.Router();

const LoginController = require("./login.controller");

router.get("/", LoginController.getAllUser);
router.post("/", LoginController.newUser);

module.exports = router;