const { User } = require("../models");
const encrypt = require("../helpers/encrypt"); 
const bcrypt = require('bcrypt');

class Login {
  static index(req, res) {
    res.render("login");
  }
  static loginProcess(req, res) {
    console.log(req.body);
    const { username, password} = req.body;
    User.findOne({
      where : {
        username : username
      }
    })
    .then((user) => {
      const isLoginSuccess = bcrypt.compareSync(password, user.password); // true
      if (isLoginSuccess) {
        res.redirect("/dashboard")
      }
      else {
        throw Error("Wrong password!");
      }
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
  }
}

module.exports = Login;