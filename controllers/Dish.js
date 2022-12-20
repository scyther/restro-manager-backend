const dish = require("../models/dish");

exports.createDish = (req, res) => {
  dish.create(req.body, function (error, dish) {
    if (error) {
      return res.status(400).json({
        cError: "dish not created",
        error,
      });
    }
    return res.json(dish);
  });
};
