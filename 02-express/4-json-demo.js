const express = require("express");
const { people } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.json(people);
});

app.listen(5000, () => {
  console.log("server is listening at 5000...");
});
