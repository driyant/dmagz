const { Publisher } = require("../models");

class Publishers {
  static index(req, res) {
    Publisher.findAll({
    })
      .then((publishers) => {
        // res.send(publishers)
        res.render("publisher", { publishers });
      })
      .catch(err => {
        res.send(err);
      })
  }
  static add(req, res) {
    res.render("publisherAdd")
  }
  static addProcess(req, res) {
    console.log(req.body);
    const { nameOfPublisher, address, phoneNumber } = req.body;
    Publisher.create({
      nameOfPublisher,
      address,
      phoneNumber
    })
      .then(() => {
        res.redirect("/publisher");
      })
      .catch(err => {
        res.send(err);
      })
  }
  static edit(req, res) {
    console.log(req.params);
    const { id } = req.params
    Publisher.findOne({
      where: {
        id: Number(id)
      }
    })
      .then((publisher) => {
        console.log(publisher)
        // res.send(publisher);
        res.render("publisherEdit", { publisher });
      })
      .catch(err => {
        res.send(err);
      })
  }
  static editProcess(req, res) {
    const { id } = req.params;
    const { nameOfPublisher, address, phoneNumber } = req.body;
    Publisher.update({ nameOfPublisher, address, phoneNumber }, {
      where: {
        id: Number(id)
      }
    })
      .then(() => {
        res.redirect("/publisher")
      })
      .catch(err => {
        res.send(err);
      })
  }
  static delete(req, res) {
    const { id } = req.params;
    Publisher.destroy({
      where: {
        id: Number(id)
      }
    })
      .then(() => {
        res.redirect("/publisher");
      })
      .catch(err => {
        res.send(err);
      })
  }
}

module.exports = Publishers;