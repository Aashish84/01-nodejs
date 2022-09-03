const { StatusCodes } = require("http-status-codes");

class CustomAPIError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.IM_A_TEAPOT;
  }
}

module.exports = CustomAPIError;
