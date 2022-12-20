const Restraunt = require("../models/restraunt");

exports.createRestaurant = (req, res) => {
    Restraunt.create(req.body, function (error, restaurant) {
      if (error) {
        return res.status(400).json({
          cError: "Restaurant not created",
          error,
        });
      }
      return res.json(restaurant);
    });
  };