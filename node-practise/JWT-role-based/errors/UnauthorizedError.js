const CustomAPIError = require("./CustomAPIError");
const { StatusCodes } = require("http-status-codes");

class UnauthorizedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = UnauthorizedError;
