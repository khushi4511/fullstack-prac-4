const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// GET products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// POST product
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  const saved = await product.save();
  res.json(saved);
});

module.exports = router;