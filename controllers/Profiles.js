const { Profile, User } = require("../models");

class Profiles {
  static index(req, res) {
    // console.log(req.session.userId);
    User.findByPk(1, {
      include: [Profile]
    })
      .then((profile) => {
        console.log(profile.Profile.accountNumber);
        // res.send(result);
        const blurred = profile.Profile.accountNumber.split("")
        blurred[0] = "x"
        blurred[1] = "x"
        blurred[2] = "x"
        console.log(blurred.join(""));
        res.render("profile", {profile})
      })
      .catch(err => {
        console.log(err)
        res.send(err);
      })
  }
}
module.exports = Profiles;