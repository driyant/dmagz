class Dashboard {
  static index(req, res) {
    const { userId, username, userRole } = req.session;
    console.log(userId, username, userRole);
    console.log(req.sesssion);
    res.render("dashboard", {userRole});
  }
}

module.exports = Dashboard;