const { UnauthorizedError, CustomAPIError } = require("../errors");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  const { authorization: authHeader } = req.headers;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthorizedError(" invalid token ");
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.find({ _id: decoded.userID }).select(
      "-password -email"
    );
    if (!user) {
      throw new UnauthorizedError("Invalid user even with token");
    }
    req.user = user[0];
    next();
  } catch (error) {
    throw new CustomAPIError(error);
  }
};

module.exports = auth;
