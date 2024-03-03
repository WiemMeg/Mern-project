const mongoose = require("mongoose");
const user = require("../../models/UserModel");
const jwt = require("jsonwebtoken");
exports.addUser = async (req, res) => {
  try {
    // create a new user

    const newUser = new user(req.body);
    
    console.log(newUser);
    const existUser = await user.findOne({ email: req.body.email });
    console.log(existUser);
    if (existUser) {
      return res.status(400).json({ message: "user exist" });
    }
    const url = `${req.protocol}://${req.get("host")}/${req.file.path}`;
  
    newUser.picture = url;
      await newUser.save();
        const payload = { _id: newUser._id };
        const token = jwt.sign(payload, process.env.SECRET_KEY);
      res.send({ user: newUser, token });
    
  } 
  catch (error) {
    res.send(`Error in adding User : ${error}`);
  }
};
