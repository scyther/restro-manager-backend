const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
var schema = mongoose.Schema;

var dishSchema = schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    unique: true,
  },
  category: {
    type: ObjectId,
    ref: "Category",
    required: true,
  },
});

module.exports = mongoose.model("Dish", dishSchema);
