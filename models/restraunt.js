const mongoose = require("mongoose");
const { Schema } = mongoose;

const restrauntSchema = new Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Restraunt = mongoose.model("Restraunt", restrauntSchema);

module.exports = Restraunt;
