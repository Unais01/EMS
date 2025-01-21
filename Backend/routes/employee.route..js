const express = require("express");
const router = express.Router();
const {
  getEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee.controller");

router.route("/").get(getEmployees).post(createEmployee);

router
  .route("/:id")
  .get(getEmployeeById)
  .patch(updateEmployee)
  .delete(deleteEmployee);

module.exports = router;
