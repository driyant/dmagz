const { User } = require("../models");
const encrypt = require("../helpers/encrypt"); 
const bcrypt = require('bcrypt');

class Login {
  static index(req, res) {
    const { error } = req.query;
    res.render("login", { error });
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
      if (user) {
        const isValidated = bcrypt.compareSync(password, user.password); // true
        if (isValidated) {
          req.session.userId = user.id;
          req.session.username = user.username;
          req.session.userRole = user.role;
          return res.redirect("/dashboard");
        }
        else {
          const errors = "Invalid username or password!";
          return res.redirect(`/login?error=${errors}`);
        }
      }
      else {
        const errors = "No username found 404!";
        return res.redirect(`/login?error=${errors}`);
      }
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
  }

  static logoutSession(req ,res) {
    req.session.destroy((err) => {
      if (err) {
        res.send(err)
      }
      else {
        res.redirect("/");
      }
    })
  }
}

module.exports = Login;