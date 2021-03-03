const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.User.create(req.body)
      .then((userInfo) => console.log(userInfo))
      .then((userInfo) => res.json(userInfo))
      .catch((err) => res.status(422).json(err));
  },
};
