const mongoose = require("mongoose");
const  webFramework = require("express");
const router = webFramework.Router();

const TaskController = require("./task.controller");

router.get("/", TaskController.getAllTask);
router.post("/", TaskController.addTask);

module.exports = router;
