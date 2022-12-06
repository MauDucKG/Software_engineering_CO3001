const userModel = require("./user.model");

class userController {
  async register (req, res) {
    let user = new userModel ({
      username: req.body.username,
      password: req.body.password,
      accountName: req.body.accountName
    })
    user.save()
    .then(user => {
      res.json({
        message: "Registration successful!",
        user: user
      })
    })
    .catch(error => {
      res.json({
        message: "An error occurred!"
      })
    })
  }

  async login (req, res) {
    var username = req.body.username
    var password = req.body.password
    userModel.findOne({username,password})
    .then(user => {
      if (user) {
        res.json({
          message: "Login successful!",
          user: user.accountName
        }) 
      } else {
        res.json({
          message: "No user found!"
        })
      }
    })
  }
}

module.exports = new userController();
