// pacakges
const express = require("express");
const app = express();
require("dotenv").config();

// custom modules
const connectDB = require("./db/connect");

// routes
const tasks = require("./routes/tasks");

// to make sure we get req.body as json or at all
app.use(express.json());

app.use("/api/v1/tasks", tasks);

const port = 3000;

//server fails if it cannot connect to database

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is listening at port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// alternative way

// app.listen(port, () => {
//   connectDB("mongodb://localhost:27017/lib")
//     .then(() => {
//       console.log("connected!!!");
//     })
//     .catch();
//   console.log(`server is listening at port ${port}...`);
// });
