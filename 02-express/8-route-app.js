const express = require("express");
const app = express();

// routes
const people = require("./routes/people");
const login = require("./routes/login");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));

app.use("/test", people);
app.use("/", login);

app.listen(5000, () => {
  console.log("server is listening at 5000...");
});
