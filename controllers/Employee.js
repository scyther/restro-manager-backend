const Employee = require("../models/employee");

exports.createEmployee = (req, res) => {
  Employee.create(req.body, function (error, employee) {
    if (error) {
      return res.status(400).json({
        cError: "Employee not created",
        error,
      });
    }
    return res.json(employee);
  });
};

exports.getAllEmployees = (req, res) => {
  Employee.find()
    .limit(8)
    .exec((error, employees) => {
      if (error) {
        return res.status(400).json({ error: "No employees" });
      }
      res.json(employees);
    });
};
