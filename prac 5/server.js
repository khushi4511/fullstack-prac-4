const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

// connect database
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

// API routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);

// error middleware
app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});