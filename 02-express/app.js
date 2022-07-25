const express = require("express");
const app = express();

const { people } = require("./data");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  }
  res.send("form is empty");
});

app.listen(5000, () => {
  console.log("server is listening at 5000...");
});
