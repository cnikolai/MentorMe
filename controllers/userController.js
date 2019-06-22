const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .populate("interest")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(411).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      //.populate("interest")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  register: function (req, res) {
    var user = new db.User(req.body);
    user.setPassword(req.body.password);
    const { username, password } = req.body
    //add validation
    db.User.findOne({ username: username }, (err, user2) => {
      if (err) {
          console.log('error: ', err)
      } else if (user2) {
          res.json({
              error: `Sorry, already a user with the username: ${username}`
          })
      }
      else {
        db.User
        .create(user)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(433).json(err));
      }
  })
  },
  create: function (req, res) {
    var user = new db.User(req.body);
    db.User
      .create(user)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(444).json(err));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(455).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(466).json(err));
  }
};