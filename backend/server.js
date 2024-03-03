const express = require("express");
const app = express();
require("dotenv").config();
const connectDb = require("./config/connect/connectdata");
const bcrypt = require("bcryptjs");
const userRoot = require("./roots/userRoots");
const productRoot = require("./roots/productRoots");
var cors = require("cors");
// Middleware
app.use(express.json());
const port = process.env.PORT || 5000;
 
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(cors());
// Connect to database
connectDb();
app.use("/user", userRoot);
app.use("/product", productRoot);

app.listen(port, () => {
console.log(`Server started on ${port}`);
});


