const { StatusCodes } = require("http-status-codes");

const errorHandelerMiddleware = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || `something went wrong...`,
  };
  res.status(customError.statusCode).json({ msg: customError.message });
};

module.exports = errorHandelerMiddleware;
