const express = require("express");
const app = express();
// middleware example

const logger = (req, res, next) => {
  const name = "hello from middleware";
  const url = req.url;
  console.log(name, "url : ", url);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("<h1>hello</h1>");
});

app.get("/about", logger, (req, res) => {
  res.send("<h1>about</h1>");
});

app.listen(5000, () => {
  console.log("server is listening at 5000...");
});
