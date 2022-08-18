const { User } = require("../models");
const encrypt = require("../helpers/encrypt");

class Register {
  static index(req, res) {
    res.render("register");
  }
  static addProcess(req, res) {
    const { username, password, role, email } = req.body;
    console.log(req.body);
    User.create({
      username ,
      password,
      email,
      role
    })
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      // console.log(err);
      res.send(err);
    });
  }
}

module.exports = Register;