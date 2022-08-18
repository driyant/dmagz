const { Profile, User } = require("../models");

class Profiles {
  static index(req, res) {
    // console.log(req.session.userId);
    User.findOne({
      where : {
        id : 1
      }
    })
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch(err => {
      res.send(err);
    })
  }
}
module.exports = Profiles;