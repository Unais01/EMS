const Employee = require("../models/Employee");
const mongoose = require("mongoose");
const getEmployees = async (req, res) => {
  try {
    const result = await Employee.find();
    res.status(200).json({ message: "Success", employees: result });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const createEmployee = async (req, res) => {
  const { name, organization, email, role } = req.body;

  if (!name || !organization || !email || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newEmployee = { name, organization, email, role };
    const result = await Employee.create(newEmployee);
    res
      .status(201)
      .json({ message: "Employee created successfully", employee: result });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const getEmployeeById = async (req, res) => {
  const { id: employeeId } = req.params;

  // Check if the provided id is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(employeeId)) {
    return res.status(400).json({ message: "Invalid Employee ID format" });
  }

  try {
    const result = await Employee.findById(employeeId);
    if (!result) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Success", employee: result });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

const updateEmployee = async (req, res) => {
  const { id: employeeId } = req.params;

  // Validate ObjectId format
  if (!mongoose.Types.ObjectId.isValid(employeeId)) {
    return res.status(400).json({ message: "Invalid Employee ID format" });
  }

  const { name, organization, role } = req.body;

  // Validate required fields
  if (!name || !organization || !role) {
    return res
      .status(400)
      .json({ message: "All fields (name, organization, role) are required" });
  }

  try {
    const updatedEmployeeInfo = { name, organization, role };

    // Find and update the employee
    const result = await Employee.findByIdAndUpdate(
      employeeId,
      updatedEmployeeInfo,
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee updated successfully",
      employee: result,
    });
  } catch (err) {
    console.error("Error updating employee: ", err.message);
    res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};

const deleteEmployee = async (req, res) => {
  const { id: employeeId } = req.params;

  // Validate ObjectId format
  if (!mongoose.Types.ObjectId.isValid(employeeId)) {
    return res.status(400).json({ message: "Invalid Employee ID format" });
  }

  try {
    // Find and delete the employee
    const employee = await Employee.findByIdAndDelete(employeeId);

    // If employee is not found
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Return success message
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Error deleting employee:", error.message);
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  getEmployees,
  createEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
