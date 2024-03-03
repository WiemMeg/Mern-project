const express = require("express");
const root = express.Router();
const registerController = require("../controllers/UserControllers/registerController");
const loginController = require("../controllers/UserControllers/loginController");
const currentUser = require("../controllers/UserControllers/currentUser");
const isAuth = require("../middleware/isAuth");
const upload = require("../utils/multer");

root.post( "/register",upload("user").single("file"), registerController.addUser);
root.post("/login", loginController.login);
root.get("/current", isAuth(), currentUser.getUser);

module.exports = root;
