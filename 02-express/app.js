const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

app.listen(5000, () => {
  console.log("server is listening at 5000...");
});
