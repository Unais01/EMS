require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { employeeRoute } = require("./routes");
const connectDB = require("./config/dbConnection");
const app = express();
const PORT = process.env.PORT || 8000;

//connect to MongoDB
connectDB();

// Middlewares

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Enable CORS

//use employee route
app.use("/api/employees", employeeRoute);

mongoose.connection.on("error", (err) => {
  console.error("Failed to connect to MongoDB:", err);
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () =>
    console.log(`Server is listening on http://localhost:${PORT}`)
  );
});
