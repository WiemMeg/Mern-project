const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const productModel = require("./ProductModel");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required!!"],
    unique: [true, "Email exist!!"],
    validate: function (value) {
      return validator.isEmail(value);
    },
  },
  Grouplevel: {
    type: String,
    required: [true, "Product level is required!!"],
  },
  discipline: {
    type: String,
    required: [true, "Product discipline is required!!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!!"],
    minLength: [8, "The password must contain at least 8 characters"],
    //select: false, //Show password or not in response,
  },
  session: {
    type: mongoose.Schema.Types.ObjectId,
    ref: productModel,
  },
  picture: {
    type: String,
  },
  Name: {
    type: String,
  },
});

//Password hashing before save
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 8);

  next();
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
