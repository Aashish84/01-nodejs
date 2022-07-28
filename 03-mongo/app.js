const express = require("express");
const { products } = require("./data");
const books = require("./findallBooks");

const app = express();

app.get("/", (req, res) => {
  res.json(products);
});

app.get("/books", (req, res) => {
  books(res);
});

app.listen(5000, () => {
  console.log("server is listening at port 5000...");
});
