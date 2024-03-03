const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const productSchema = new mongoose.Schema({
  discipline: {
    type: String,
    required: [true, "Product discipline is required!!"],
  },
  price: {
    type: Number,
    required: [true, "Product Price is required!!"],
  },
  Grouplevel: {
    type: String,
    required: [true, "Product level is required!!"],
  },
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
