require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const { employeeRoute } = require("./routes");
const connectDB = require("./config/dbConnection");
const app = express();
const PORT = process.env.PORT || 8080;

//connect to MongoDB
connectDB();

// Middlewares

app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Enable CORS

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "..", "Frontend/dist")));

//use employee route
app.use("/api/employees", employeeRoute);

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "Frontend/dist", "index.html"));
});

mongoose.connection.on("error", (err) => {
  console.error("Failed to connect to MongoDB:", err);
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () =>
    console.log(`Server is listening on http://localhost:${PORT}`)
  );
});
