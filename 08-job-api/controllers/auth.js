const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  // generation hash password
  // const { name, email, password } = req.body;

  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);

  // // const x = await bcrypt.compare(password, hashedPassword);
  // // console.log(x);

  // const tmpUser = { name, email, password: hashedPassword };

  // const user = await User.create({ ...tmpUser });
  //above functionality is acomplished by mongoose middleware in model

  const user = await User.create({ ...req.body });
  // const token = jwt.sign({ userID: user._id, name: user.name }, "jwtSecret", {
  //   expiresIn: "30d",
  // });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.getName() }, token });
};
const login = (req, res) => {
  res.send("login user");
};

module.exports = { register, login };
