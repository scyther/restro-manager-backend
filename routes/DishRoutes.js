const express = require("express");
const router = express.Router();
const { createDish } = require("../controllers/Dish");

router.post("/dish/create", createDish);

module.exports = router;
