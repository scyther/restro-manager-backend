const category = require("../models/category");

exports.createCategory = (req, res) => {
  category.create(req.body, function (error, category) {
    if (error) {
      return res.status(400).json({
        cError: "category not created",
        error,
      });
    }
    return res.json(category);
  });
};
exports.getAllCategories = (req, res) => {
  category.find().exec((error, categories) => {
    if (error) {
      return res.json({ error: "Not able to get Categories" });
    }
    res.json(categories);
  });
};
