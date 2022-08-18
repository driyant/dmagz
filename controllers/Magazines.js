const { Magazine, Publisher } = require("../models");
const { Op } = require("sequelize");

class Magazines {
  static index(req, res) {
    console.log(req.query)
    const userRole = req.session.userRole;
    let key = req.query.keywords
    let option = {
      include: Publisher,
    }
    // console.log(key)
    if (key) {
      option.where = {
        title: {
          [Op.iLike]: `%${key}%`
        }
      }
    }
    // console.log(key)
    Magazine.findAll(option)
      .then((magazines) => {
        // console.log(magazines);
        res.render("magazine", { magazines, userRole });
      })
      .catch(err => {
        console.log(err)
        res.send(err);
      })
  }
  static add(req, res) {
    Publisher.findAll({})
      .then((publishers) => {
        res.render("magazineAdd", { publishers });
      })
      .catch(err => {
        res.send(err);
      })
  }
  static addProcess(req, res) {
    // console.log(req.body);
    const { title, totalPage, price, stock, PublisherId } = req.body;
    Magazine.create({
      title, totalPage, price, stock, PublisherId
    })
      .then(() => {
        res.redirect("/magazine");
      })
      .catch(err => {
        res.send(err);
      })
  }
  static edit(req, res) {
    const { id } = req.params;
    Publisher.findAll({
    })
      .then((publishers) => {
        return publishers;
      })
      .then((publishers) => {
        Magazine.findOne({
          include: Publisher,
          where: {
            id: Number(id)
          }
        })
          .then(magazine => {
            res.render("magazineEdit", { publishers, magazine });
          })
      })
      .catch(err => {
        res.send(err);
      })
  }
  static editProcess(req, res) {
    const { title, totalPage, price, stock, PublisherId } = req.body;
    const { id } = req.params;
    Magazine.update({
      title, totalPage, price, stock, PublisherId
    }, {
      where: {
        id: Number(id)
      }
    })
      .then(() => {
        res.redirect("/magazine");
      })
      .catch(err => {
        res.send(err);
      })
  }
  static delete(req, res) {
    const { id } = req.params;
    Magazine.destroy({
      where: {
        id: id
      }
    })
      .then(() => {
        res.redirect("/magazine");
      })
      .catch(err => {
        res.send(err);
      })
  }
}

module.exports = Magazines