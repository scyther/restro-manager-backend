const express = require("express");
const router = express.Router();
const { createEmployee ,getAllEmployees} = require("../controllers/Employee");


router.post("/employee/create", createEmployee);
router.get("/employees",getAllEmployees)

module.exports = router;
