const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthorizedError } = require("../errors");

const login = async (req, res) => {
  const { email, password } = req.body;
  if ((!email, !password)) {
    throw new BadRequestError("no email or password found");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthorizedError("no user found of given email");
  }

  const isMatch = await user.comparePWD(password);
  if (!isMatch) {
    throw new UnauthorizedError("password not matched");
  }

  let token = user.createJWT();
  res.status(StatusCodes.OK).json({ token });
};

const register = async (req, res) => {
  const user = await User.create(req.body);
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: user, token: token });
};

module.exports = { login, register };
