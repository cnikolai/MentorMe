const db = require("../models");

// Defining methods for the interestController
// UNDER CONSTRUCTION
module.exports = {
  findById: function (req, res) {
    db.Interest
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // If an Interest was created successfully, find one User with an `_id` equal to `req.params.id`. Update the User to be associated with the new Interest
  // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
  // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
  create: function (req, res) {
    db.Interest
      .create(req.body)
      .then(dbModel => db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { interest: dbModel._id } }, { new: true }))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Interest
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Interest
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
