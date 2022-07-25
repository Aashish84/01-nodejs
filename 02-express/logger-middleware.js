const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "asis") {
    req.user = { name: "asis", id: 1 };
    next();
  } else {
    res.status(401).send("unauthorized");
  }
};

const apiLogger = (req, res, next) => {
  console.log("hello this is api middleware");
  next();
};

const anotherOneForApi = (req, res, next) => {
  console.log("another one");
  next();
};

module.exports = { authorize, apiLogger, anotherOneForApi };
