const express = require("express");

const app = express();

const { initialize } = require("./db/connect");

// router
const tasks = require("./routes/tasks");

app.get("/", (req, res) => {
  res.json("hello");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(port, () => {
  initialize();
  console.log(`server is listening at port ${port}...`);
});
