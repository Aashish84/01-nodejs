const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("no authHeader");
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById({ _id: decoded.userID }).select(
      "-password"
    );
    if (!user) {
      throw new UnauthenticatedError("invalid user");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new UnauthenticatedError("invalid token");
  }
};

module.exports = authMiddleware;
