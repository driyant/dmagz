const { Profile, User } = require("../models");

class Profiles {
  static index(req, res) {
    // console.log(req.session.userId);
    User.findByPk(1, {
      include: [Profile]
    })
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch(err => {
        console.log(err)
        res.send(err);
      })
  }
}
module.exports = Profiles;