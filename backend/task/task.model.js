const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  Employee: String,
  MCP: String,
  Subject: String,
  Location: String,
  StartTime: Date,
  EndTime: Date,
  IsAllDay: Boolean,
  OwnerId: Number,
  Description: String,
  Id: Number,
});

const Task = mongoose.model("task", taskSchema);
module.exports = Task;
