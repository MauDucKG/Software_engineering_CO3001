const loginModel = require("./login.model");

class LoginController {
  getAllUser(request, respond) {
    loginModel.find((error, tasks) => {
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

  async newUser(req, res) {
    try {
      const newUser = new loginModel(req.body);
      await newUser.save();
      res.send({ success: true, task: newUser });
    } catch (err) {
      console.log(err);
    }
  }

}

module.exports = new LoginController();