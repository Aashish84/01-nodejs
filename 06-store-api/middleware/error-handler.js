const errorHandelerMiddleware = async (err, req, res, next) => {
  res.status(404).json({ err: "something went wrong.." });
};

module.exports = errorHandelerMiddleware;
