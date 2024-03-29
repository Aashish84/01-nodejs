const { CustomError } = require("../error/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "something went wrong..." });
};

module.exports = errorHandlerMiddleware;
