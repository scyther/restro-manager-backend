const express = require("express");
const { createRestaurant } = require("../controllers/Restraunt");
const router = express.Router();

router.post("/restraunt/create", createRestaurant);

module.exports = router;
