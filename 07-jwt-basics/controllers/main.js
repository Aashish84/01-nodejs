// check username and password
// if exist provide jwt token
// send back to front end

//setup authorization so only the request with jwt can access the dashboard
require("dotenv").config();
const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError("please provide valid credentials", 400);
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: `user created`, token });
};

const dashboard = (req, res) => {
  const rand_num = Math.floor(Math.random() * 100);
  res.status(200).send({
    msg: `hello ${req.user}`,
    secret: `your secret number is ${rand_num} `,
  });
};

module.exports = { dashboard, login };
