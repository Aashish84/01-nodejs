const express = require("express");
const app = express();

const {
  authorize,
  apiLogger,
  anotherOneForApi,
} = require("./logger-middleware");

// add middleware to all url
app.use(authorize);

// add middleware to all url starting from api
//for multiple middleware - array is used
app.use("/api", [apiLogger, anotherOneForApi]);

app.get("/", (req, res) => {
  res.send(`<h1>hello ${req.user.name}</h1>`);
});

app.get("/about", (req, res) => {
  res.send("<h1>about</h1>");
});
app.get("/api/product", (req, res) => {
  res.send("<h1>Product</h1>");
});
app.get("/api/item", (req, res) => {
  res.send("<h1>Item</h1>");
});

app.listen(5000, () => {
  console.log("server is listening at 5000...");
});
