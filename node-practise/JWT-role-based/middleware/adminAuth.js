const { NotFoundError } = require("../errors");

const adminAuth = (req, res, next) => {
  const { role } = req.user;
  if (role != "admin") {
    throw new NotFoundError("request not found");
  }
  next();
};

module.exports = adminAuth;
