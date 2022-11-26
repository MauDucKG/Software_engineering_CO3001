const taskModel = require("./task.model");

class TaskController {
  getAllTask(request, respond) {
    taskModel.find((error, tasks) => {
      if (error) {
        console.log(error);
      }

      respond.status(200).json({
        success: true,
        message: "Done!",
        tasks: tasks,
      });
    });
  }

  async addTask(req, res) {
    try {
      const newTask = new taskModel(req.body);
      await newTask.save();
      res.send({ success: true, task: newTask });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new TaskController();
