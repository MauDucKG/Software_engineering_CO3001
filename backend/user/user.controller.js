const userModel = require("./user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class userController {
  async register (req, res) {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
      if (err) {
        res.json({
          error: err
        })
      }
    })
    let user = new userModel ({
      username: req.body.username,
      password: hashedPass,
      accountName: req.body.accountName
    })
    user.save()
    .then(user => {
      res.json({
        message: "Registration successful!"
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
    userModel.findOne({ username})
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err
            })
          }
          if (result) {
            let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
            res.json({
              message: "Login successful!",
              token
            })
          } else {
            res.json({
              message: "Password does not match!"
            })
          }
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
