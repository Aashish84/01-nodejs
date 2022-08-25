const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const tasks = require("./routes/tasks");

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

app.get("/", (req, res) => {
  let user = {
    name: "asis",
    age: 20,
    job: "web developer",
  };
  res.json(user);
});

const port = 5000;
const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`server is listening at port ${5000}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
