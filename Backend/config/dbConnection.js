const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1); // Exit the process with failure code
  }
};

module.exports = connectDB;
